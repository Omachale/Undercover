import { useState } from 'react';
import './App.css';
import SetupScreen from './screens/SetupScreen';
import FlipScreen from './screens/FlipScreen';
import EndScreen from './screens/EndScreen';
import { createRound } from './game/gameLogic';
import type { GameConfig, RoundData } from './types';

type Screen = 'setup' | 'flip' | 'end';

const DEFAULT_CONFIG: GameConfig = { numPlayers: 6, numSpies: 1, eslMode: 'No' };

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
    setRecentLocations((prev) => [...prev, round.location.en].slice(-RECENT_LOCATIONS_LIMIT));
    setScreen('flip');
  }

  function handleAllPlayersDone() {
    setScreen('end');
  }

  function handleNewRound() {
    setScreen('setup');
  }

  return (
    <div className="app">
      {screen === 'setup' && <SetupScreen initialConfig={config} onStart={handleStart} />}
      {screen === 'flip' && roundData && (
        <FlipScreen
          roundData={roundData}
          numPlayers={config.numPlayers}
          eslMode={config.eslMode}
          onAllPlayersDone={handleAllPlayersDone}
        />
      )}
      {screen === 'end' && <EndScreen onNewRound={handleNewRound} />}
    </div>
  );
}

export default App;
