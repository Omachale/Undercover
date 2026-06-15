import { useState } from 'react';
import FlipCard from '../components/FlipCard';
import type { RoundData } from '../types';

interface FlipScreenProps {
  roundData: RoundData;
  numPlayers: number;
  onAllPlayersDone: () => void;
}

export default function FlipScreen({ roundData, numPlayers, onAllPlayersDone }: FlipScreenProps) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const isSpy = roundData.spyIndices.includes(currentPlayerIndex);
  const backContent = isSpy ? 'SPY' : roundData.location;

  function handleTap() {
    if (isAnimating) return;
    setIsAnimating(true);
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
      <p className="player-label">
        Player {currentPlayerIndex + 1} of {numPlayers}
      </p>
      <FlipCard
        isFlipped={isFlipped}
        front="Reveal"
        back={backContent}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
