import {Item} from "../model/item";

/**
 * @param {Item}   item
 * @param {number} amount
 * @return {boolean}
 */
export function decreaseSellIn(item: Item, amount: number): boolean {
  let res = false;

  if (item.sellIn) {
    item.sellIn -= amount;
    res = true
    if (0 > item.sellIn) {
      item.sellIn = 0;
    }
  }
  return res;
}
