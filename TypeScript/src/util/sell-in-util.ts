import {Item} from "../model/item";

/**
 * @param {Item}   item
 * @param {number} amount
 */
export function decreaseSellIn(item: Item, amount: number) {
  if (item.sellIn) {
    item.sellIn -= amount;
  }
}
