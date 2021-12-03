import {Item} from "../item";

/**
 * @class ConjuredItem
 * @extends Item
 */
export class ConjuredItem extends Item {
  /**
   * @param {number} quality
   * @param {number} sellIn
   */
  constructor(quality: number, sellIn: number) {
    super('Conjured', quality, sellIn);
  }
}
