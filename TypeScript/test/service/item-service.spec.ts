import {Item} from "../../src/model/item";
import {updateSellIn} from "../../src/service/item-service";

describe('Item Service', () => {
  it('should lower quality and sellIn by one', () => {
    let item = new Item('Test', 5, 5);
    let expectedQuality = item.quality - 1;
    let expectedSellIn = item.sellIn - 1;

    updateSellIn(item);
    expect(item.sellIn).toBe(expectedSellIn);
    expect(item.quality).toBe(expectedQuality);
  });
});
