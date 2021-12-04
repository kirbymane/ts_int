import { Item } from '../item';

/**
 * @class AgedBrieItem
 * @extends Item
 */
export class AgedBrieItem extends Item {
  /**
   * @param {number} sellIn
   * @param {number} quality
   */
  constructor(sellIn: number, quality: number) {
    super('Aged Brie', sellIn, quality);
  }
}
