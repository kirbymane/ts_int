'use strict';

import {ITEM_MAXIMUM_QUALITY, ITEM_MINIMUM_QUALITY} from "../constant/item-constants";

/**
 * @param {Item}   item
 * @param {number} amount
 */
export function increaseQuality(item: Item, amount: number) {
  item.quality += amount;
  if (item.quality > ITEM_MAXIMUM_QUALITY) {
    item.quality = ITEM_MAXIMUM_QUALITY;
  }
}

/**
 * @param {Item}   item
 * @param {number} amount
 */
export function decreaseQuality(item: Item, amount: number) {
  item.quality -= amount;
  if (item.quality < ITEM_MINIMUM_QUALITY) {
    item.quality = ITEM_MINIMUM_QUALITY;
  }
}

/**
 * @param {Item}   item
 * @param {number} amount
 */
export function decreaseSellIn(item: Item, amount: number) {
  if (item.sellIn) {
    item.sellIn -= amount;
  }
}
