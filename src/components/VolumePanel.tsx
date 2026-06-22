import { useState } from 'react';
import './VolumePanel.css';
import musicIconImg from '../Assets/Images/Music Icon.png';

type Phase = 'closed' | 'opening' | 'open' | 'closing';

interface Props {
  musicVolume: number;
  soundVolume: number;
  onMusicChange: (v: number) => void;
  onSoundChange: (v: number) => void;
}

function MusicRowIcon({ muted }: { muted: boolean }) {
  return (
    <span className="vol-row-icon">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </svg>
      {muted && (
        <svg className="vol-cross-line" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="2" y1="22" x2="22" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

function SoundRowIcon({ muted }: { muted: boolean }) {
  return (
    <span className="vol-row-icon">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 9v6h4l5 5V4L7 9H3z" />
        {!muted && (
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        )}
      </svg>
      {muted && (
        <svg className="vol-cross-line" viewBox="0 0 24 24" aria-hidden="true">
          <line x1="2" y1="22" x2="22" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

export default function VolumePanel({ musicVolume, soundVolume, onMusicChange, onSoundChange }: Props) {
  const [phase, setPhase] = useState<Phase>('closed');

  function handleOpen() {
    if (phase !== 'closed') return;
    setPhase('opening');
    setTimeout(() => setPhase('open'), 200);
  }

  function handleClose() {
    if (phase !== 'open') return;
    setPhase('closing');
    setTimeout(() => setPhase('closed'), 100);
  }

  const isLarge = phase !== 'closed';
  const contentVisible = phase === 'open';

  return (
    <>
      {isLarge && <div className="vol-backdrop" onClick={handleClose} />}
      <div
        className={`vol-box${isLarge ? ' vol-box--open' : ' vol-box--closed'}`}
        onClick={!isLarge ? handleOpen : undefined}
      >
        {/* Music icon — always in top-right corner; tapping closes when open */}
        <img
          src={musicIconImg}
          alt=""
          className="vol-icon-img"
          onClick={isLarge ? handleClose : undefined}
          style={{
            pointerEvents: isLarge ? 'auto' : 'none',
            cursor: isLarge ? 'pointer' : 'default',
          }}
        />

        {/* Sliders — visible only when fully open */}
        <div
          className="vol-content"
          style={{
            opacity: contentVisible ? 1 : 0,
            pointerEvents: contentVisible ? 'auto' : 'none',
          }}
        >
          <div className="vol-row">
            <MusicRowIcon muted={musicVolume === 0} />
            <span className="vol-label">Music</span>
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(musicVolume * 100)}
              onChange={(e) => onMusicChange(Number(e.target.value) / 100)}
              className="vol-slider"
            />
            <span className="vol-pct">{Math.round(musicVolume * 100)}%</span>
          </div>
          <div className="vol-row">
            <SoundRowIcon muted={soundVolume === 0} />
            <span className="vol-label">Sounds</span>
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(soundVolume * 100)}
              onChange={(e) => onSoundChange(Number(e.target.value) / 100)}
              className="vol-slider"
            />
            <span className="vol-pct">{Math.round(soundVolume * 100)}%</span>
          </div>
        </div>
      </div>
    </>
  );
}
