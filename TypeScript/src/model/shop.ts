import * as itemService from '../service/item-service';
import * as sulfurasService from '../service/sulfuras-service/sulfuras-service';
import * as conjuredService from '../service/conjured-service/conjured-service';
import * as backstagePassesService from '../service/backstage-passes-service/backstage-passes-service';
import * as agedBrieService from '../service/aged-brie-service/aged-brie-service';
import { Item } from './item';
import { AgedBrieItem } from './aged-brie-item/aged-brie-item';
import { BackstagePassesItem } from './backstage-passes-item/backstage-passes-item';
import { ConjuredItem } from './conjured-item/conjured-item';
import { SulfurasItem } from './sulfuras-item/sulfuras-item';

/**
 * @class Shop
 */
export class Shop {
  /**
   * @type Array<Item>
   */
  items: Array<Item>;

  /**
   * @param {Array<Item>}items
   */
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * @param {number} daysPassedMount
   * @return {Array<Item>}
   */
  updateSellIn(daysPassedMount: number = 1): Array<Item> {
    this.items.forEach((item) => {
      switch (item.constructor.name) {
        case AgedBrieItem.name:
          agedBrieService.updateSellIn(item, daysPassedMount);
          break;
        case BackstagePassesItem.name:
          backstagePassesService.updateSellIn(item, daysPassedMount);
          break;
        case ConjuredItem.name:
          conjuredService.updateSellIn(item, daysPassedMount);
          break;
        case SulfurasItem.name:
          sulfurasService.updateSellIn(item, daysPassedMount);
          break;
        default:
          itemService.updateSellIn(item, daysPassedMount);
      }
    });

    return this.items;
  }
}
