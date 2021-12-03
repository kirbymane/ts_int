import {Item} from "../item";

/**
 * @class BackstagePassesItem
 * @extends Item
 */
export class BackstagePassesItem extends Item {
  /**
   * @param {number} sellIn
   * @param {number} quality
   */
  constructor(sellIn: number, quality: number) {
    super('Backstage Passes', sellIn, quality);
  }
}
