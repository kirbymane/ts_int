import {AgedBrieItem} from "../../model/aged-brie-item/aged-brie-item";
import {decreaseSellIn} from "../../util/sell-in-util";
import {increaseQuality} from "../../util/quality-util";

/**
 * @param {AgedBrieItem} item
 * @param {number}       amount
 */
export function updateSellIn(item: AgedBrieItem, amount: number = 1): void {
  decreaseSellIn(item, amount);
  updateQuality(item, amount);
}

/**
 * @param {AgedBrieItem} item
 * @param {number}       amount
 */
function updateQuality(item: AgedBrieItem, amount: number = 1): void {
  increaseQuality(item, amount);
}
