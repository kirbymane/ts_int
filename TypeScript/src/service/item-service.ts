import {Item} from "../model/item";
import {decreaseSellIn} from "../util/sell-in-util";
import {increaseQuality} from "../util/quality-util";

/**
 * @param {Item}   item
 * @param {number} amount
 */
export function updateSellIn(item: Item, amount: number = 1) {
  decreaseSellIn(item, amount);
  updateQuality(item, amount);
}

/**
 * @param {Item}   item
 * @param {number} amount
 */
function updateQuality(item: Item, amount: number = 1) {
  increaseQuality(item, amount);
}
