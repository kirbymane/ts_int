'use strict';

/**
 * @class AgedBrieItem
 * @extends Item
 */
class AgedBrieItem extends Item {
  /**
   * @param {number} quality
   * @param {number} sellIn
   */
  constructor(quality: number, sellIn: number) {
    super('Aged Brie', quality, sellIn);
  }
}