'use strict';

/**
 * @class BackstagePassesItem
 * @extends Item
 */
class BackstagePassesItem extends Item {
  /**
   * @param {number} quality
   * @param {number} sellIn
   */
  constructor(quality: number, sellIn: number) {
    super('Backstage Passes', quality, sellIn);
  }
}
