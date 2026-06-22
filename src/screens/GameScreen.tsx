import { useCallback, useEffect, useRef, useState } from 'react';
import './GameScreen.css';
import VolumePanel from '../components/VolumePanel';
import gameOn1 from '../Assets/Images/Game On 1.png';
import gameOn2 from '../Assets/Images/Game On 2.png';
import gameOn3 from '../Assets/Images/Game On 3.png';
import track1 from '../Assets/Audio/Track (1).mp3';
import track2 from '../Assets/Audio/Track (2).mp3';
import track3 from '../Assets/Audio/Track (3).mp3';
import track4 from '../Assets/Audio/Track (4).mp3';

const MUSIC_TRACKS = [track1, track2, track3, track4];
const GAME_IMAGES = [gameOn1, gameOn2, gameOn3];

const DISPLAY_W = 260;
const DISPLAY_H = 395;
const BORDER = 4;
const CARD_W = DISPLAY_W + BORDER * 2;
const CARD_H = DISPLAY_H + BORDER * 2;
const BOUNCE_SPEED = 0.5;
const IMAGE_DURATION_MS = 40_000;
const TRANSITION_MS = 600;
const CONTROLS_H = 100;
const FADE_S = 5;

const WIPE_COLORS = [
  'hsl(270, 70%, 22%)',
  'hsl(220, 70%, 20%)',
  'hsl(140, 65%, 17%)',
];

function shuffleTracks(n: number, avoidFirst?: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (avoidFirst !== undefined && arr[0] === avoidFirst && arr.length > 1) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
  return arr;
}

type EndPanelPhase = 'closed' | 'start' | 'expanding' | 'open' | 'closing';

interface GameScreenProps {
  onNewRound: () => void;
  onNextRound: () => void;
  musicVolume: number;
  soundVolume: number;
  onMusicVolumeChange: (v: number) => void;
  onSoundVolumeChange: (v: number) => void;
}

export default function GameScreen({ onNewRound, onNextRound, musicVolume, soundVolume, onMusicVolumeChange, onSoundVolumeChange }: GameScreenProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const [phase, setPhase] = useState<'show' | 'out' | 'in'>('show');
  const [overlayColor, setOverlayColor] = useState(WIPE_COLORS[0]);
  const [musicReady] = useState(true);
  const [trackTrigger, setTrackTrigger] = useState(0);
  const [loopEnabled, setLoopEnabled] = useState(false);
  const [endPanelPhase, setEndPanelPhase] = useState<EndPanelPhase>('closed');
  const [endPanelRect, setEndPanelRect] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const endBtnWrapRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 80, y: 60 });
  const velRef = useRef({ vx: BOUNCE_SPEED, vy: BOUNCE_SPEED * 0.72 });
  const rafRef = useRef<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<number[]>(shuffleTracks(MUSIC_TRACKS.length));
  const queuePosRef = useRef(0);
  const loopEnabledRef = useRef(false);
  const musicVolumeRef = useRef(musicVolume);
  const soundVolumeRef = useRef(soundVolume);
  const fadeFactorRef = useRef(0);

  const advanceTrack = useCallback(() => {
    queuePosRef.current += 1;
    if (queuePosRef.current >= queueRef.current.length) {
      const lastPlayed = queueRef.current[queueRef.current.length - 1];
      queueRef.current = shuffleTracks(MUSIC_TRACKS.length, lastPlayed);
      queuePosRef.current = 0;
    }
    setTrackTrigger((t) => t + 1);
  }, []);

  // Bouncing animation — writes directly to DOM to avoid re-renders per frame
  useEffect(() => {
    function tick() {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;
      if (container && wrapper) {
        const maxX = container.clientWidth - CARD_W;
        const maxY = container.clientHeight - CARD_H - CONTROLS_H;
        posRef.current.x += velRef.current.vx;
        posRef.current.y += velRef.current.vy;
        if (posRef.current.x <= 0 || posRef.current.x >= maxX) {
          velRef.current.vx *= -1;
          posRef.current.x = Math.max(0, Math.min(maxX, posRef.current.x));
        }
        if (posRef.current.y <= 0 || posRef.current.y >= maxY) {
          velRef.current.vy *= -1;
          posRef.current.y = Math.max(0, Math.min(maxY, posRef.current.y));
        }
        wrapper.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Image cycling with colour dissolve
  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayColor(WIPE_COLORS[imgIndex % WIPE_COLORS.length]);
      setPhase('out');
      setTimeout(() => {
        setImgIndex((i) => (i + 1) % GAME_IMAGES.length);
        setPhase('in');
        setTimeout(() => setPhase('show'), TRANSITION_MS);
      }, TRANSITION_MS);
    }, IMAGE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [imgIndex]);

  // Sync volume refs when props change; update live audio if playing
  useEffect(() => {
    musicVolumeRef.current = musicVolume;
    if (audioRef.current) {
      audioRef.current.volume = fadeFactorRef.current * musicVolume;
    }
  }, [musicVolume]);

  useEffect(() => {
    soundVolumeRef.current = soundVolume;
  }, [soundVolume]);

  // Music with 5s fade in and 5s fade out; waits for intro sound to finish
  useEffect(() => {
    if (!musicReady) return;

    fadeFactorRef.current = 0;
    const src = MUSIC_TRACKS[queueRef.current[queuePosRef.current]];
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.volume = 0;

    let fadeInInterval: ReturnType<typeof setInterval> | null = null;
    let fadeOutInterval: ReturnType<typeof setInterval> | null = null;
    let fadingOut = false;

    void audio.play().then(() => {
      const fadeStart = Date.now();
      fadeInInterval = setInterval(() => {
        const factor = Math.min((Date.now() - fadeStart) / (FADE_S * 1000), 1);
        fadeFactorRef.current = factor;
        audio.volume = factor * musicVolumeRef.current;
        if (factor >= 1 && fadeInInterval) {
          clearInterval(fadeInInterval);
          fadeInInterval = null;
        }
      }, 50);
    }).catch(() => {});

    function handleTimeUpdate() {
      if (fadingOut) return;
      if (
        !isNaN(audio.duration) &&
        isFinite(audio.duration) &&
        audio.currentTime >= audio.duration - FADE_S
      ) {
        fadingOut = true;
        if (fadeInInterval) { clearInterval(fadeInInterval); fadeInInterval = null; }
        const startFactor = fadeFactorRef.current;
        const fadeStart = Date.now();
        fadeOutInterval = setInterval(() => {
          const progress = (Date.now() - fadeStart) / (FADE_S * 1000);
          const factor = Math.max(startFactor * (1 - progress), 0);
          fadeFactorRef.current = factor;
          audio.volume = factor * musicVolumeRef.current;
          if (progress >= 1 && fadeOutInterval) {
            clearInterval(fadeOutInterval);
            fadeOutInterval = null;
            if (loopEnabledRef.current) {
              setTrackTrigger((t) => t + 1);
            } else {
              advanceTrack();
            }
          }
        }, 50);
      }
    }

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (fadeInInterval) clearInterval(fadeInInterval);
      if (fadeOutInterval) clearInterval(fadeOutInterval);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.pause();
      audio.src = '';
    };
  }, [trackTrigger, advanceTrack, musicReady]);

  function handleNextTrack() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    advanceTrack();
  }

  function handleToggleLoop() {
    const next = !loopEnabled;
    setLoopEnabled(next);
    loopEnabledRef.current = next;
  }

  function handleEndGameClick() {
    const rect = endBtnWrapRef.current?.getBoundingClientRect();
    if (!rect || endPanelPhase !== 'closed') return;
    setEndPanelRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    setEndPanelPhase('start');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setEndPanelPhase('expanding');
      setTimeout(() => setEndPanelPhase('open'), 300);
    }));
  }

  function handleEndPanelClose() {
    setEndPanelPhase('closing');
    setTimeout(() => setEndPanelPhase('closed'), 300);
  }

  const expandedWidth = endPanelRect.width * 1.5;
  const expandedHeight = endPanelRect.height * 2.5;
  const expandedLeft = endPanelRect.left + endPanelRect.width / 2 - expandedWidth / 2;
  const expandedTop = endPanelRect.top + endPanelRect.height - expandedHeight;
  const isAtStartSize = endPanelPhase === 'start' || endPanelPhase === 'closing';
  const endPanelStyle: React.CSSProperties = {
    position: 'fixed',
    top: isAtStartSize ? endPanelRect.top : expandedTop,
    left: isAtStartSize ? endPanelRect.left : expandedLeft,
    width: isAtStartSize ? endPanelRect.width : expandedWidth,
    height: isAtStartSize ? endPanelRect.height : expandedHeight,
  };

  return (
    <div className="game-screen" ref={containerRef}>
      <VolumePanel
        musicVolume={musicVolume}
        soundVolume={soundVolume}
        onMusicChange={onMusicVolumeChange}
        onSoundChange={onSoundVolumeChange}
      />

      <div className="game-card-wrapper" ref={wrapperRef}>
        <img
          src={GAME_IMAGES[imgIndex]}
          alt=""
          className="game-card-img"
          style={{ opacity: phase === 'out' ? 0 : 1 }}
        />
        <div
          className="game-card-overlay"
          style={{
            background: overlayColor,
            opacity: phase === 'show' ? 0 : 1,
          }}
        />
      </div>

      <div className="game-controls">
        <div
          ref={endBtnWrapRef}
          className="btn-wrap btn-wrap--end"
          style={{ visibility: endPanelPhase !== 'closed' ? 'hidden' : 'visible' }}
        >
          <button type="button" className="game-btn" onClick={handleEndGameClick}>End Game</button>
        </div>
        <div className="game-controls-row">
          <div className="btn-wrap btn-wrap--next">
            <button type="button" className="game-btn" onClick={handleNextTrack} disabled={!musicReady}>▶▶</button>
          </div>
          <div className={`btn-wrap btn-wrap--loop${loopEnabled ? ' loop-on' : ''}`}>
            <button type="button" className="game-btn" onClick={handleToggleLoop} disabled={!musicReady}>
              <span className="loop-btn-content">
                <span>↻</span>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="loop-note-icon">
                  <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {endPanelPhase !== 'closed' && (
        <>
          <div className="end-panel-backdrop" onClick={handleEndPanelClose} />
          <div className="btn-wrap btn-wrap--end end-panel" style={endPanelStyle}>
            <div
              className="end-panel-options"
              style={{ opacity: endPanelPhase === 'open' ? 1 : 0 }}
            >
              <button
                className="game-btn"
                onClick={() => { handleEndPanelClose(); onNextRound(); }}
              >Next round</button>
              <button
                className="game-btn"
                onClick={() => { handleEndPanelClose(); onNewRound(); }}
              >Menu</button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
