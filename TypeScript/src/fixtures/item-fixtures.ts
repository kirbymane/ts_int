import {Item} from "../model/item";
import {AgedBrieItem} from "../model/aged-brie-item/aged-brie-item";
import {BackstagePassesItem} from "../model/backstage-passes-item/backstage-passes-item";
import {ConjuredItem} from "../model/conjured-item/conjured-item";
import {SulfurasItem} from "../model/sulfuras-item/sulfuras-item";

export let itemFixtures = [
  new Item('Default', 50, 5),
  new AgedBrieItem(20, 5),
  new BackstagePassesItem(20, 5),
  new ConjuredItem(20, 5),
  new SulfurasItem(),
];
