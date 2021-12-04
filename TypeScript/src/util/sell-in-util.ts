import { Item } from '../model/item';

/**
 * @param {Item}   item
 * @param {number} amount
 * @return {boolean}
 */
export function decreaseSellIn(item: Item, amount: number): boolean {
  let res = false;

  if (item.sellIn) {
    item.sellIn -= amount;
    res = true;
  }
  return res;
}
