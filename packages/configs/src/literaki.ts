import { BONUS_CHARACTER, BONUS_WORD } from '@scrabble-solver/constants';
import { Config, Locale } from '@scrabble-solver/types';

const BONUSES = [
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 0, y: 0 },
  { multiplier: 3, type: BONUS_WORD, x: 2, y: 0 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 5, y: 0 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 7, y: 0 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 9, y: 0 },
  { multiplier: 3, type: BONUS_WORD, x: 12, y: 0 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 14, y: 0 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 4, y: 1 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 6, y: 1 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 8, y: 1 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 10, y: 1 },
  { multiplier: 3, type: BONUS_WORD, x: 0, y: 2 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 3, y: 2 },
  { multiplier: 2, type: BONUS_WORD, x: 5, y: 2 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 7, y: 2 },
  { multiplier: 2, type: BONUS_WORD, x: 9, y: 2 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 11, y: 2 },
  { multiplier: 3, type: BONUS_WORD, x: 14, y: 2 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 2, y: 3 },
  { multiplier: 2, type: BONUS_WORD, x: 4, y: 3 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 6, y: 3 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 8, y: 3 },
  { multiplier: 2, type: BONUS_WORD, x: 10, y: 3 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 12, y: 3 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 1, y: 4 },
  { multiplier: 2, type: BONUS_WORD, x: 3, y: 4 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 5, y: 4 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 9, y: 4 },
  { multiplier: 2, type: BONUS_WORD, x: 11, y: 4 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 13, y: 4 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 0, y: 5 },
  { multiplier: 2, type: BONUS_WORD, x: 2, y: 5 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 4, y: 5 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 7, y: 5 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 10, y: 5 },
  { multiplier: 2, type: BONUS_WORD, x: 12, y: 5 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 14, y: 5 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 1, y: 6 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 3, y: 6 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 6, y: 6 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 8, y: 6 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 11, y: 6 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 13, y: 6 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 0, y: 7 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 2, y: 7 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 5, y: 7 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 7, y: 7 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 9, y: 7 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 12, y: 7 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 14, y: 7 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 1, y: 8 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 3, y: 8 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 6, y: 8 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 8, y: 8 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 11, y: 8 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 13, y: 8 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 0, y: 9 },
  { multiplier: 2, type: BONUS_WORD, x: 2, y: 9 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 4, y: 9 },
  { multiplier: 3, score: 3, type: BONUS_CHARACTER, x: 7, y: 9 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 10, y: 9 },
  { multiplier: 2, type: BONUS_WORD, x: 12, y: 9 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 14, y: 9 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 1, y: 10 },
  { multiplier: 2, type: BONUS_WORD, x: 3, y: 10 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 5, y: 10 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 9, y: 10 },
  { multiplier: 2, type: BONUS_WORD, x: 11, y: 10 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 13, y: 10 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 2, y: 11 },
  { multiplier: 2, type: BONUS_WORD, x: 4, y: 11 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 6, y: 11 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 8, y: 11 },
  { multiplier: 2, type: BONUS_WORD, x: 10, y: 11 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 12, y: 11 },
  { multiplier: 3, type: BONUS_WORD, x: 0, y: 12 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 3, y: 12 },
  { multiplier: 2, type: BONUS_WORD, x: 5, y: 12 },
  { multiplier: 3, score: 1, type: BONUS_CHARACTER, x: 7, y: 12 },
  { multiplier: 2, type: BONUS_WORD, x: 9, y: 12 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 11, y: 12 },
  { multiplier: 3, type: BONUS_WORD, x: 14, y: 12 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 4, y: 13 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 6, y: 13 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 8, y: 13 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 10, y: 13 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 0, y: 14 },
  { multiplier: 3, type: BONUS_WORD, x: 2, y: 14 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 5, y: 14 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 7, y: 14 },
  { multiplier: 3, score: 2, type: BONUS_CHARACTER, x: 9, y: 14 },
  { multiplier: 3, type: BONUS_WORD, x: 12, y: 14 },
  { multiplier: 3, score: 5, type: BONUS_CHARACTER, x: 14, y: 14 },
];

const BASE = {
  allTilesBonusScore: 50,
  blankScore: 0,
  boardHeight: 15,
  boardWidth: 15,
  bonuses: BONUSES,
  id: 'literaki',
  maximumNumberOfCharacters: 7,
  name: 'Literaki',
  numberOfBlanks: 2,
};

const TILES_EN = [
  { character: 'a', count: 9, score: 1 },
  { character: 'b', count: 2, score: 3 },
  { character: 'c', count: 2, score: 3 },
  { character: 'd', count: 4, score: 2 },
  { character: 'e', count: 12, score: 1 },
  { character: 'f', count: 2, score: 4 },
  { character: 'g', count: 3, score: 2 },
  { character: 'h', count: 2, score: 4 },
  { character: 'i', count: 9, score: 1 },
  { character: 'j', count: 1, score: 8 },
  { character: 'k', count: 1, score: 5 },
  { character: 'l', count: 4, score: 1 },
  { character: 'm', count: 2, score: 3 },
  { character: 'n', count: 6, score: 1 },
  { character: 'o', count: 8, score: 1 },
  { character: 'p', count: 2, score: 3 },
  { character: 'q', count: 1, score: 10 },
  { character: 'r', count: 6, score: 1 },
  { character: 's', count: 4, score: 1 },
  { character: 't', count: 6, score: 1 },
  { character: 'u', count: 4, score: 1 },
  { character: 'v', count: 2, score: 4 },
  { character: 'w', count: 2, score: 4 },
  { character: 'x', count: 1, score: 8 },
  { character: 'y', count: 2, score: 4 },
  { character: 'z', count: 1, score: 10 },
];

const TILES_FR = [
  { character: 'a', count: 9, score: 1 },
  { character: 'b', count: 2, score: 3 },
  { character: 'c', count: 2, score: 3 },
  { character: 'd', count: 3, score: 2 },
  { character: 'e', count: 15, score: 1 },
  { character: 'f', count: 2, score: 1 },
  { character: 'g', count: 2, score: 2 },
  { character: 'h', count: 2, score: 4 },
  { character: 'i', count: 8, score: 1 },
  { character: 'j', count: 1, score: 8 },
  { character: 'k', count: 1, score: 10 },
  { character: 'l', count: 5, score: 1 },
  { character: 'm', count: 3, score: 2 },
  { character: 'n', count: 6, score: 1 },
  { character: 'o', count: 6, score: 1 },
  { character: 'p', count: 2, score: 3 },
  { character: 'q', count: 1, score: 8 },
  { character: 'r', count: 6, score: 1 },
  { character: 's', count: 6, score: 1 },
  { character: 't', count: 6, score: 1 },
  { character: 'u', count: 6, score: 1 },
  { character: 'v', count: 2, score: 4 },
  { character: 'w', count: 1, score: 10 },
  { character: 'x', count: 1, score: 10 },
  { character: 'y', count: 1, score: 10 },
  { character: 'z', count: 1, score: 10 },
];

const TILES_PL = [
  { character: 'a', count: 9, score: 1 },
  { character: 'ą', count: 1, score: 5 },
  { character: 'b', count: 2, score: 3 },
  { character: 'c', count: 3, score: 2 },
  { character: 'ć', count: 1, score: 5 },
  { character: 'd', count: 3, score: 2 },
  { character: 'e', count: 7, score: 1 },
  { character: 'ę', count: 1, score: 5 },
  { character: 'f', count: 1, score: 5 },
  { character: 'g', count: 2, score: 3 },
  { character: 'h', count: 2, score: 3 },
  { character: 'i', count: 8, score: 1 },
  { character: 'j', count: 2, score: 3 },
  { character: 'k', count: 3, score: 2 },
  { character: 'l', count: 3, score: 2 },
  { character: 'ł', count: 2, score: 3 },
  { character: 'm', count: 3, score: 2 },
  { character: 'n', count: 5, score: 1 },
  { character: 'ń', count: 1, score: 5 },
  { character: 'o', count: 6, score: 1 },
  { character: 'ó', count: 1, score: 5 },
  { character: 'p', count: 3, score: 2 },
  { character: 'r', count: 4, score: 1 },
  { character: 's', count: 4, score: 1 },
  { character: 'ś', count: 1, score: 5 },
  { character: 't', count: 3, score: 2 },
  { character: 'u', count: 2, score: 3 },
  { character: 'w', count: 4, score: 1 },
  { character: 'y', count: 4, score: 2 },
  { character: 'z', count: 5, score: 1 },
  { character: 'ź', count: 1, score: 5 },
  { character: 'ż', count: 1, score: 5 },
];

const CONFIG_EN = Config.fromJson({ ...BASE, tiles: TILES_EN });

const CONFIG_FR = Config.fromJson({ ...BASE, tiles: TILES_FR });

const CONFIG_PL = Config.fromJson({ ...BASE, tiles: TILES_PL });

const LITERAKI = {
  id: BASE.id,
  name: BASE.name,
  [Locale.enGb]: CONFIG_EN,
  [Locale.enUs]: CONFIG_EN,
  [Locale.frFr]: CONFIG_FR,
  [Locale.plPl]: CONFIG_PL,
};

export default LITERAKI;
