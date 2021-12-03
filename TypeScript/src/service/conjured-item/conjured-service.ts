'use strict';

import {decreaseQuality} from "../../util/quality-util";

/**
 * @param {ConjuredItem} item
 * @param {number}       amount
 */
export function decreaseSellIn(item: ConjuredItem, amount: number = 1) {
  decreaseQuality(item, amount);
  updateQuality(item, amount);
}

/**
 * @param {ConjuredItem} item
 * @param {number}       amount
 */
function updateQuality(item: ConjuredItem, amount: number = 1) {
  decreaseQuality(item, amount * 2);
}
