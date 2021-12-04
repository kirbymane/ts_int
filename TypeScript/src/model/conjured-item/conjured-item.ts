import { Item } from '../item';

/**
 * @class ConjuredItem
 * @extends Item
 */
export class ConjuredItem extends Item {
  /**
   * @param {number} sellIn
   * @param {number} quality
   */
  constructor(sellIn: number, quality: number) {
    super('Conjured', sellIn, quality);
  }
}
