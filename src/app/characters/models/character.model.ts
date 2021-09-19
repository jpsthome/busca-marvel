import { Collection } from './collection.model';
import { MarvelUrl } from './marvel-url.model';
import { Thumbnail } from './thumbnail.model';

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  events: Collection;
  series: Collection;
  urls: MarvelUrl[];
}
