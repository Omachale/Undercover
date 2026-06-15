import { useState } from 'react';
import type { GameConfig } from '../types';

interface SetupScreenProps {
  initialConfig: GameConfig;
  onStart: (config: GameConfig) => void;
}

export default function SetupScreen({ initialConfig, onStart }: SetupScreenProps) {
  const [numPlayers, setNumPlayers] = useState(initialConfig.numPlayers);
  const [numSpies, setNumSpies] = useState(initialConfig.numSpies);
  const [error, setError] = useState<string | null>(null);

  function handleStart() {
    if (!Number.isInteger(numPlayers) || numPlayers < 3) {
      setError('Need at least 3 players');
      return;
    }
    if (!Number.isInteger(numSpies) || numSpies < 1) {
      setError('Need at least 1 spy');
      return;
    }
    if (numSpies >= numPlayers) {
      setError('Number of spies must be less than number of players');
      return;
    }
    setError(null);
    onStart({ numPlayers, numSpies });
  }

  return (
    <div className="screen setup-screen">
      <h1>Spy</h1>
      <label className="field">
        <span>Number of players</span>
        <input
          type="number"
          inputMode="numeric"
          min={3}
          value={numPlayers}
          onChange={(e) => setNumPlayers(Number(e.target.value))}
        />
      </label>
      <label className="field">
        <span>Number of spies</span>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          value={numSpies}
          onChange={(e) => setNumSpies(Number(e.target.value))}
        />
      </label>
      {error && <p className="error">{error}</p>}
      <button className="btn-primary" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
