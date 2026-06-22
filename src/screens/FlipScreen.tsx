import { useEffect, useRef, useState } from 'react';
import FlipCardImage from '../components/FlipCardImage';
import { LANGUAGES } from '../data/locations';
import type { EslMode, RoundData } from '../types';
import coverImage from '../Assets/Images/Blue Cover.webp';
import paperImage from '../Assets/Images/Blue Paper.webp';
import open1Sound from '../Assets/Audio/Open1.mp3';
import open2Sound from '../Assets/Audio/Open2.mp3';
import open3Sound from '../Assets/Audio/Open3.mp3';
import flipBackSound from '../Assets/Audio/Flip Back.mp3';

interface FlipScreenProps {
  roundData: RoundData;
  numPlayers: number;
  eslMode: EslMode;
  onAllPlayersDone: () => void;
  soundVolume: number;
}

function getAudioForPlayer(playerIndex: number, totalPlayers: number): string {
  const baseSize = Math.floor(totalPlayers / 3);
  const remainder = totalPlayers % 3;
  const group1Size = baseSize + (remainder > 0 ? 1 : 0);
  const group2Size = baseSize + (remainder > 1 ? 1 : 0);

  if (playerIndex < group1Size) return open1Sound;
  if (playerIndex < group1Size + group2Size) return open2Sound;
  return open3Sound;
}

export default function FlipScreen({ roundData, numPlayers, eslMode, onAllPlayersDone, soundVolume }: FlipScreenProps) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const revealAudioRef = useRef<HTMLAudioElement | null>(null);
  const flipBackAudioRef = useRef<HTMLAudioElement>(new Audio(flipBackSound));

  useEffect(() => {
    const audioSrc = getAudioForPlayer(currentPlayerIndex, numPlayers);
    if (!revealAudioRef.current) {
      revealAudioRef.current = new Audio(audioSrc);
    } else {
      revealAudioRef.current.src = audioSrc;
    }
  }, [currentPlayerIndex, numPlayers]);

  const isSpy = roundData.spyIndices.includes(currentPlayerIndex);
  const backContent = isSpy ? 'SPY' : roundData.location.en;
  const showMagnifier = eslMode !== 'No' && !isSpy;

  function handleTap() {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!isFlipped) {
      const audio = revealAudioRef.current!;
      audio.volume = soundVolume;
      audio.currentTime = 0;
      void audio.play();
    } else {
      const isLastPlayer = currentPlayerIndex + 1 >= numPlayers;
      if (!isLastPlayer) {
        const fb = flipBackAudioRef.current;
        fb.volume = soundVolume;
        fb.currentTime = 0;
        void fb.play();
      }
    }
    setIsFlipped((prev) => !prev);
  }

  function handleTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.propertyName !== 'transform') return;
    setIsAnimating(false);

    if (isFlipped) return;

    const nextIndex = currentPlayerIndex + 1;
    if (nextIndex >= numPlayers) {
      onAllPlayersDone();
    } else {
      setCurrentPlayerIndex(nextIndex);
    }
  }

  return (
    <div className="screen flip-screen" onClick={handleTap}>
      <FlipCardImage
        isFlipped={isFlipped}
        frontImage={coverImage}
        backImage={paperImage}
        backText={backContent}
        translations={showMagnifier ? roundData.location.translations : null}
        languages={LANGUAGES}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
