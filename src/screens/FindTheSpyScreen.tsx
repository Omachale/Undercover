import { useEffect, useRef, useState } from 'react';
import './FindTheSpyScreen.css';
import startGameSound from '../Assets/Audio/Start Game.mp4';

interface Props {
  musicVolume: number;
  onDone: () => void;
}

const WORDS = ['Find', 'the', 'spy'];
const LETTER_MS = 200;
const PAUSE_MS = 1000;
const SCREEN_DURATION_MS = 7500;
const FADE_OUT_MS = 500;

export default function FindTheSpyScreen({ musicVolume, onDone }: Props) {
  const [revealCount, setRevealCount] = useState(0);
  const [fading, setFading] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  // Schedule letter reveals
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 0;
    let globalIdx = 0;
    WORDS.forEach((word, wordIdx) => {
      for (let i = 0; i < word.length; i++) {
        const idx = globalIdx++;
        timers.push(setTimeout(() => setRevealCount(idx + 1), t));
        t += LETTER_MS;
      }
      if (wordIdx < WORDS.length - 1) t += PAUSE_MS;
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  // Play Start Game audio
  useEffect(() => {
    const audio = new Audio(startGameSound);
    audio.volume = musicVolume * 0.7;
    void audio.play().catch(() => {});
    return () => { audio.pause(); audio.src = ''; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fixed duration: fade out after SCREEN_DURATION_MS then call onDone
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), SCREEN_DURATION_MS - FADE_OUT_MS);
    const doneTimer = setTimeout(() => onDoneRef.current(), SCREEN_DURATION_MS);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  let globalIdx = 0;

  return (
    <div className={`fts-screen${fading ? ' fts-fading' : ''}`}>
      {WORDS.map((word, wordIdx) => (
        <span key={wordIdx} className={`fts-word fts-word--${wordIdx}`}>
          {[...word].map((char) => {
            const idx = globalIdx++;
            return (
              <span
                key={idx}
                className={`fts-letter${revealCount > idx ? ' fts-letter--visible' : ''}`}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
