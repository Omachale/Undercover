import { useRef, useState } from 'react';
import FlipCardImage from '../components/FlipCardImage';
import { LANGUAGES } from '../data/locations';
import type { EslMode, RoundData } from '../types';
import coverImage from '../Assets/Images/Blue Cover.webp';
import paperImage from '../Assets/Images/Blue Paper.webp';
import revealSound from '../Assets/Audio/Reveal.mp4';

interface FlipScreenProps {
  roundData: RoundData;
  numPlayers: number;
  eslMode: EslMode;
  onAllPlayersDone: () => void;
}

export default function FlipScreen({ roundData, numPlayers, eslMode, onAllPlayersDone }: FlipScreenProps) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const revealAudioRef = useRef<HTMLAudioElement | null>(null);
  if (!revealAudioRef.current) {
    revealAudioRef.current = new Audio(revealSound);
  }

  const isSpy = roundData.spyIndices.includes(currentPlayerIndex);
  const backContent = isSpy ? 'SPY' : roundData.location.en;
  const showMagnifier = eslMode !== 'No' && !isSpy;

  function handleTap() {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!isFlipped) {
      const audio = revealAudioRef.current!;
      audio.currentTime = 0;
      void audio.play();
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
      <div className="btn-primary" aria-hidden="true" style={{ visibility: 'hidden' }}>
        Start
      </div>
      <FlipCardImage
        isFlipped={isFlipped}
        frontImage={coverImage}
        backImage={paperImage}
        backText={backContent}
        translations={showMagnifier ? roundData.location.translations : null}
        languages={LANGUAGES}
        onTransitionEnd={handleTransitionEnd}
      />
      <div className="btn-primary" aria-hidden="true" style={{ visibility: 'hidden' }}>
        Start
      </div>
    </div>
  );
}
