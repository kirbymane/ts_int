'use strict';

import {decreaseQuality, increaseQuality} from "../../util/quality-util";

export function decreaseSellIn(item: AgedBrieItem, amount: number = 1) {
  decreaseQuality(item, amount);
  updateQuality(item, amount);
}

function updateQuality(item: AgedBrieItem, amount: number = 1) {
  increaseQuality(item, amount);
}
