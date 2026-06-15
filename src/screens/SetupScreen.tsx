import { useState } from 'react';
import type { GameConfig } from '../types';
import coverImage from '../Assets/Images/Blue Cover.webp';
import playersImage from '../Assets/Images/Players.png';

interface SetupScreenProps {
  initialConfig: GameConfig;
  onStart: (config: GameConfig) => void;
}

export default function SetupScreen({ initialConfig, onStart }: SetupScreenProps) {
  const [numPlayers, setNumPlayers] = useState(initialConfig.numPlayers);
  const [error, setError] = useState<string | null>(null);

  function handleStart() {
    if (!Number.isInteger(numPlayers) || numPlayers < 3) {
      setError('Need at least 3 players');
      return;
    }
    setError(null);
    onStart({ numPlayers, numSpies: 1 });
  }

  function decrement() {
    setNumPlayers((prev) => Math.max(3, prev - 1));
  }

  function increment() {
    setNumPlayers((prev) => prev + 1);
  }

  return (
    <div className="screen setup-screen">
      <div className="btn-primary" aria-hidden="true" style={{ visibility: 'hidden' }}>
        Start
      </div>
      <div className="setup-cover">
        <img src={coverImage} alt="" className="setup-cover-img" />
        <div className="setup-players-note">
          <img src={playersImage} alt="" className="setup-players-img" />
          <div className="setup-players-controls">
            <button
              type="button"
              className="setup-players-arrow setup-players-arrow-left"
              onClick={decrement}
              aria-label="Decrease players"
            />
            <input
              type="number"
              inputMode="numeric"
              min={3}
              value={numPlayers}
              onChange={(e) => setNumPlayers(Number(e.target.value))}
              className="setup-players-input"
            />
            <button
              type="button"
              className="setup-players-arrow setup-players-arrow-right"
              onClick={increment}
              aria-label="Increase players"
            />
          </div>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <button className="btn-primary" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
