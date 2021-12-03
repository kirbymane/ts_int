'use strict';

/**
 * @class SulfurasItem
 * @extends Item
 */
class SulfurasItem extends Item {
  /**
   * @param {number} quality
   * @param {number} sellIn
   */
  constructor(quality: number, sellIn: number) {
    super('Sulfuras', quality, sellIn);
  }
}
