import { Item } from './item.model';

export interface Collection {
  available: number;
  collectionURI: string;
  items: Item[];
}
