import { Character } from './character.model';
import { Series } from './series.model';
import { Thumbnail } from './thumbnail.model';
export interface MarvelEvent {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  start: Date;
  end: Date;
  thumbnail: Thumbnail;
  series: Series[];
  characters: Character[];
}
