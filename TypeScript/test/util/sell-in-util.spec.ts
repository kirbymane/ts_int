import {decreaseSellIn} from "../../src/util/sell-in-util";
import {Item} from "../../src/model/item";

describe('Sell In Util', () => {
  it('should decrease sellIn by one', () => {
    let itemFixture = new Item('Test', 5, 5);
    let expected = itemFixture.sellIn - 1;
    decreaseSellIn(itemFixture, 1);
    expect(itemFixture.sellIn).toBe(expected);
  });
});
