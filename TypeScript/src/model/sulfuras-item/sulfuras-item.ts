'use strict';

import {SULFURAS_QUALITY} from "../../constant/item-constants";

/**
 * @class SulfurasItem
 * @extends Item
 */
class SulfurasItem extends Item {
  /**
   * SulfurasItem constructor
   */
  constructor() {
    super('Sulfuras', SULFURAS_QUALITY, null);
  }
}
