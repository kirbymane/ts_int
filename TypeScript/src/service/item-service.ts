'use strict';

import {decreaseQuality, increaseQuality} from "../util/quality-util";

/**
 * @param {Item}   item
 * @param {number} amount
 */
export function decreaseSellIn(item: Item, amount: number = 1) {
  decreaseQuality(item, amount);
  updateQuality(item, amount);
}

/**
 * @param {Item}   item
 * @param {number} amount
 */
function updateQuality(item: Item, amount: number = 1) {
  increaseQuality(item, amount);
}
