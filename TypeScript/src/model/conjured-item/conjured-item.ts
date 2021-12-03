'use strict';

/**
 * @class ConjuredItem
 * @extends Item
 */
class ConjuredItem extends Item {
  /**
   * @param {number} quality
   * @param {number} sellIn
   */
  constructor(quality: number, sellIn: number) {
    super('Conjured', quality, sellIn);
  }
}
