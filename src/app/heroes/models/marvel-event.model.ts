import { Item } from './item.model';

export interface MarvelEvent {
  available: number;
  collectionURI: string;
  items: Item[];
}
