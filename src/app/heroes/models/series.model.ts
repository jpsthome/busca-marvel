import { Item } from './item.model';

export interface Series {
  available: number;
  collectionUri: string;
  items: Item[];
}
