import { Item } from '../model/item';
import { AgedBrieItem } from '../model/aged-brie-item/aged-brie-item';
import { BackstagePassesItem } from '../model/backstage-passes-item/backstage-passes-item';
import { ConjuredItem } from '../model/conjured-item/conjured-item';
import { SulfurasItem } from '../model/sulfuras-item/sulfuras-item';

export const itemFixtures = [
  new Item('+5 Dexterity Vest', 10, 20),
  new AgedBrieItem(2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new SulfurasItem(0),
  new SulfurasItem(-1),
  new BackstagePassesItem(15, 20),
  new BackstagePassesItem(10, 49),
  new BackstagePassesItem(5, 49),
  new ConjuredItem(3, 6),
];
