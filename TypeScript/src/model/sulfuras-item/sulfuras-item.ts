import {Item} from "../item";

const SULFURAS_QUALITY = 80;

/**
 * @class SulfurasItem
 * @extends Item
 */
export class SulfurasItem extends Item {
  /**
   * SulfurasItem constructor
   */
  constructor() {
    super('Sulfuras', SULFURAS_QUALITY, null);
  }
}
