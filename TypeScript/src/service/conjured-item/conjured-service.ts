import {decreaseSellIn} from "../../util/sell-in-util";
import {decreaseQuality} from "../../util/quality-util";
import {ConjuredItem} from "../../model/conjured-item/conjured-item";

/**
 * @param {ConjuredItem} item
 * @param {number}       amount
 */
export function updateSellIn(item: ConjuredItem, amount: number = 1) {
  decreaseSellIn(item, amount);
  updateQuality(item, amount);
}

/**
 * @param {ConjuredItem} item
 * @param {number}       amount
 */
function updateQuality(item: ConjuredItem, amount: number = 1) {
  decreaseQuality(item, amount * 2);
}
