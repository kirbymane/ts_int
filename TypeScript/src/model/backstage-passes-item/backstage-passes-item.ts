import {Item} from "../item";

/**
 * @class BackstagePassesItem
 * @extends Item
 */
export class BackstagePassesItem extends Item {
  /**
   * @param {number} quality
   * @param {number} sellIn
   */
  constructor(quality: number, sellIn: number) {
    super('Backstage Passes', quality, sellIn);
  }
}
