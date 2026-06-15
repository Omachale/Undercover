import { useState } from 'react';
import './App.css';
import SetupScreen from './screens/SetupScreen';
import FlipScreen from './screens/FlipScreen';
import EndScreen from './screens/EndScreen';
import PrototypeScreen from './screens/PrototypeScreen';
import { createRound } from './game/gameLogic';
import type { GameConfig, RoundData } from './types';

type Screen = 'setup' | 'flip' | 'end' | 'prototype';

const DEFAULT_CONFIG: GameConfig = { numPlayers: 3, numSpies: 1 };

const RECENT_LOCATIONS_LIMIT = 2;

function App() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [config, setConfig] = useState<GameConfig>(DEFAULT_CONFIG);
  const [roundData, setRoundData] = useState<RoundData | null>(null);
  const [recentLocations, setRecentLocations] = useState<string[]>([]);

  function handleStart(newConfig: GameConfig) {
    const round = createRound(newConfig, recentLocations);
    setConfig(newConfig);
    setRoundData(round);
    setRecentLocations((prev) => [...prev, round.location].slice(-RECENT_LOCATIONS_LIMIT));
    setScreen('flip');
  }

  function handleAllPlayersDone() {
    setScreen('end');
  }

  function handleNewRound() {
    setScreen('setup');
  }

  function handlePrototype() {
    setScreen('prototype');
  }

  function handleBackFromPrototype() {
    setScreen('setup');
  }

  return (
    <div className="app">
      {screen === 'setup' && (
        <>
          <SetupScreen initialConfig={config} onStart={handleStart} />
          <button
            onClick={handlePrototype}
            style={{
              position: 'fixed',
              bottom: '12px',
              right: '12px',
              padding: '8px 12px',
              fontSize: '0.8rem',
              background: 'var(--fg-dim)',
              color: 'var(--bg)',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Prototype
          </button>
        </>
      )}
      {screen === 'flip' && roundData && (
        <FlipScreen
          roundData={roundData}
          numPlayers={config.numPlayers}
          onAllPlayersDone={handleAllPlayersDone}
        />
      )}
      {screen === 'end' && <EndScreen onNewRound={handleNewRound} />}
      {screen === 'prototype' && <PrototypeScreen onBack={handleBackFromPrototype} />}
    </div>
  );
}

export default App;
