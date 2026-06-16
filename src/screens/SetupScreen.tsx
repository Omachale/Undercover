import { useEffect, useRef, useState } from 'react';
import type { EslMode, GameConfig } from '../types';

const eslCycle: EslMode[] = ['No', 'A1', 'A2', 'B1', 'B2', 'C1'];
import coverImage from '../Assets/Images/Blue Cover.webp';
import playersImage from '../Assets/Images/Players.png';
import optionsImage from '../Assets/Images/Options.png';

interface SetupScreenProps {
  initialConfig: GameConfig;
  onStart: (config: GameConfig) => void;
}

export default function SetupScreen({ initialConfig, onStart }: SetupScreenProps) {
  const [numPlayers, setNumPlayers] = useState(initialConfig.numPlayers);
  const [numSpies, setNumSpies] = useState(initialConfig.numSpies);
  const [eslMode, setEslMode] = useState<EslMode>('No');
  const [error, setError] = useState<string | null>(null);
  const [optionsExpanded, setOptionsExpanded] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const noteRef = useRef<HTMLDivElement>(null);
  const minPlayers = 4 + numSpies * 2;

  useEffect(() => {
    let done = false;
    const reveal = () => {
      if (!done) {
        done = true;
        setFontsReady(true);
      }
    };
    void document.fonts.load('1rem "Gloria Hallelujah"').then(reveal);
    const timer = setTimeout(reveal, 2000); // fallback if loading stalls
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setNumPlayers((prev) => Math.max(prev, 4 + numSpies * 2));
  }, [numSpies]);

  useEffect(() => {
    if (!optionsExpanded) return;
    function handleDocClick(e: MouseEvent) {
      if (noteRef.current && !noteRef.current.contains(e.target as Node)) {
        setOptionsExpanded(false);
      }
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, [optionsExpanded]);

  function handleNoteClick() {
    if (!optionsExpanded) setOptionsExpanded(true);
  }

  function handleOptionsHeaderClick(e: React.MouseEvent) {
    if (!optionsExpanded) return;
    e.stopPropagation();
    setOptionsExpanded(false);
  }

  function handleSpyClick(e: React.MouseEvent) {
    if (!optionsExpanded) return;
    e.stopPropagation();
    cycleSpies();
  }

  function handleEslClick(e: React.MouseEvent) {
    if (!optionsExpanded) return;
    e.stopPropagation();
    cycleEsl();
  }

  function handleStart() {
    if (!Number.isInteger(numPlayers) || numPlayers < minPlayers) {
      setError(`Need at least ${minPlayers} players`);
      return;
    }
    setError(null);
    onStart({ numPlayers, numSpies, eslMode });
  }

  function decrement() {
    setNumPlayers((prev) => Math.max(minPlayers, prev - 1));
  }

  function increment() {
    setNumPlayers((prev) => prev + 1);
  }

  function cycleSpies() {
    setNumSpies((prev) => (prev >= 3 ? 1 : prev + 1));
  }

  function cycleEsl() {
    setEslMode((prev) => eslCycle[(eslCycle.indexOf(prev) + 1) % eslCycle.length]);
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
          <div className="setup-players-controls" style={{ visibility: fontsReady ? 'visible' : 'hidden' }}>
            <button
              type="button"
              className="setup-players-arrow setup-players-arrow-left"
              onClick={decrement}
              aria-label="Decrease players"
            />
            <input
              type="number"
              inputMode="numeric"
              min={minPlayers}
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
        <div
          ref={noteRef}
          className={`setup-options-note${optionsExpanded ? ' expanded' : ''}${fontsReady ? ' fonts-ready' : ''}`}
          onClick={handleNoteClick}
        >
          <img src={optionsImage} alt="" className="setup-options-img" />
          <div className="setup-options-header" onClick={handleOptionsHeaderClick} />
          <span className="setup-options-label setup-options-spy" onClick={handleSpyClick}>
            {numSpies === 1 ? 'Spy' : 'Spies'}
          </span>
          <span className="setup-option-value setup-option-value-spy" onClick={handleSpyClick}>
            {numSpies}
          </span>
          <span className="setup-options-label setup-options-esl" onClick={handleEslClick}>ESL Mode</span>
          <span className="setup-option-value setup-option-value-esl" onClick={handleEslClick}>
            {eslMode}
          </span>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <button className="btn-primary" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
