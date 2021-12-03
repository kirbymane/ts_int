'use strict';

import {decreaseQuality} from "../../util/quality-util";

export function decreaseSellIn(item: AgedBrieItem, amount: number = 1) {
  decreaseQuality(item, amount);
  updateQuality(item, amount);
}

function updateQuality(item: AgedBrieItem, amount: number = 1) {
  decreaseQuality(item, amount * 2);
}
