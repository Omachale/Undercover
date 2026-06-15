export interface GameConfig {
  numPlayers: number;
  numSpies: number;
}

export interface RoundData {
  location: string;
  spyIndices: number[];
}
