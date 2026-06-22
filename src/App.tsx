import { useState } from 'react';
import './App.css';
import SetupScreen from './screens/SetupScreen';
import FlipScreen from './screens/FlipScreen';
import FindTheSpyScreen from './screens/FindTheSpyScreen';
import GameScreen from './screens/GameScreen';
import RulesScreen from './screens/RulesScreen';
import { createRound } from './game/gameLogic';
import type { GameConfig, RoundData } from './types';

type Screen = 'setup' | 'flip' | 'findthespy' | 'game';

const DEFAULT_CONFIG: GameConfig = { numPlayers: 6, numSpies: 1, eslMode: 'No' };

const RECENT_LOCATIONS_LIMIT = 2;

function App() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [config, setConfig] = useState<GameConfig>(DEFAULT_CONFIG);
  const [roundData, setRoundData] = useState<RoundData | null>(null);
  const [recentLocations, setRecentLocations] = useState<string[]>([]);
  const [musicVolume, setMusicVolume] = useState(0.7);
  const [soundVolume, setSoundVolume] = useState(0.7);
  const [showRules, setShowRules] = useState(false);

  function handleStart(newConfig: GameConfig) {
    const round = createRound(newConfig, recentLocations);
    setConfig(newConfig);
    setRoundData(round);
    setRecentLocations((prev) => [...prev, round.location.en].slice(-RECENT_LOCATIONS_LIMIT));
    setScreen('flip');
  }

  function handleAllPlayersDone() {
    setScreen('findthespy');
  }

  function handleFindTheSpyDone() {
    setScreen('game');
  }

  function handleNewRound() {
    setScreen('setup');
  }

  function handleNextRound() {
    const round = createRound(config, recentLocations);
    setRoundData(round);
    setRecentLocations((prev) => [...prev, round.location.en].slice(-RECENT_LOCATIONS_LIMIT));
    setScreen('flip');
  }

  return (
    <div className="app">
      {screen === 'setup' && (
        <SetupScreen
          initialConfig={config}
          onStart={handleStart}
          musicVolume={musicVolume}
          soundVolume={soundVolume}
          onMusicVolumeChange={setMusicVolume}
          onSoundVolumeChange={setSoundVolume}
          onOpenRules={() => setShowRules(true)}
        />
      )}
      {screen === 'flip' && roundData && (
        <FlipScreen
          roundData={roundData}
          numPlayers={config.numPlayers}
          eslMode={config.eslMode}
          onAllPlayersDone={handleAllPlayersDone}
          soundVolume={soundVolume}
        />
      )}
      {screen === 'findthespy' && (
        <FindTheSpyScreen
          soundVolume={soundVolume}
          onDone={handleFindTheSpyDone}
        />
      )}
      {screen === 'game' && (
        <GameScreen
          onNewRound={handleNewRound}
          onNextRound={handleNextRound}
          musicVolume={musicVolume}
          soundVolume={soundVolume}
          onMusicVolumeChange={setMusicVolume}
          onSoundVolumeChange={setSoundVolume}
        />
      )}
      {showRules && <RulesScreen onClose={() => setShowRules(false)} />}
    </div>
  );
}

export default App;
