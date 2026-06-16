export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type EslMode = 'No' | Level;

export type Lang = 'zh' | 'ko' | 'ja' | 'es' | 'vi' | 'th' | 'pt' | 'fr';

export interface Location {
  en: string;
  level: Level;
  translations: Record<Lang, string>;
}

export interface GameConfig {
  numPlayers: number;
  numSpies: number;
  eslMode: EslMode;
}

export interface RoundData {
  location: Location;
  spyIndices: number[];
}
