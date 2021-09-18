import { MarvelUrl } from './marvel-url.model';
import { MarvelEvent } from './marvel-event.model';
import { Series } from './series.model';
import { Thumbnail } from './thumbnail.model';

export interface Hero {
  id: number;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  events: MarvelEvent[];
  series: Series[];
  urls: MarvelUrl[];
}
