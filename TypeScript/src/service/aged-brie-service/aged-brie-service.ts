'use strict';

import {decreaseQuality, increaseQuality} from "../../util/quality-util";

/**
 * @param {AgedBrieItem} item
 * @param {number}       amount
 */
export function decreaseSellIn(item: AgedBrieItem, amount: number = 1): void {
  decreaseQuality(item, amount);
  updateQuality(item, amount);
}

/**
 * @param {AgedBrieItem} item
 * @param {number}       amount
 */
function updateQuality(item: AgedBrieItem, amount: number = 1): void {
  increaseQuality(item, amount);
}
