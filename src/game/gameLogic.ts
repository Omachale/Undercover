import { getLocationPool } from '../data/locations';
import type { GameConfig, Location, RoundData } from '../types';

export function pickLocation(recentLocations: string[], eslMode: GameConfig['eslMode']): Location {
  const pool = getLocationPool(eslMode);
  const available = pool.filter((location) => !recentLocations.includes(location.en));
  const candidates = available.length > 0 ? available : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function assignSpies(numPlayers: number, numSpies: number): number[] {
  const indices = Array.from({ length: numPlayers }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, numSpies);
}

export function createRound(config: GameConfig, recentLocations: string[]): RoundData {
  return {
    location: pickLocation(recentLocations, config.eslMode),
    spyIndices: assignSpies(config.numPlayers, config.numSpies),
  };
}
