'use strict';

import {BP_DOUBLE_RATE_DATE, BP_TRIPLE_RATE_DATE, ITEM_MAXIMUM_QUALITY} from "../../constant/item-constants";
import {decreaseQuality, increaseQuality} from "../../util/quality-util";

export function decreaseSellIn(item: AgedBrieItem, amount: number = 1, isConcert: boolean = false): void {
  if (isConcert) {
    item.sellIn = 0;
    item.quality = 0;
    return
  }
  decreaseQuality(item, amount);
  updateQuality(item, amount);
}

function updateQuality(item: AgedBrieItem, amount: number = 1): void {
  if (item.quality < ITEM_MAXIMUM_QUALITY && item.sellIn) {
    let multiplier = 1;

    switch (true) {
      case BP_TRIPLE_RATE_DATE >= item.sellIn:
        multiplier = 3;
        break;
      case BP_DOUBLE_RATE_DATE >= item.sellIn:
        multiplier = 2;
        break;
    }

    increaseQuality(item, amount * multiplier);
  }
}
