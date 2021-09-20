import { Character } from './character.model';
import { MarvelEvent } from './marvel-event.model';
import { Thumbnail } from './thumbnail.model';

export interface Series {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  startYear: number;
  endYear: number;
  rating: string;
  thumbnail: Thumbnail;
  events: MarvelEvent[];
  characters: Character[];
}
