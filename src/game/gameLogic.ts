import { LOCATIONS } from '../data/locations';
import type { GameConfig, RoundData } from '../types';

export function pickLocation(recentLocations: string[]): string {
  const available = LOCATIONS.filter((location) => !recentLocations.includes(location));
  const pool = available.length > 0 ? available : LOCATIONS;
  return pool[Math.floor(Math.random() * pool.length)];
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
    location: pickLocation(recentLocations),
    spyIndices: assignSpies(config.numPlayers, config.numSpies),
  };
}
