import {ConjuredItem} from "../../../src/model/conjured-item/conjured-item";
import {updateSellIn} from "../../../src/service/conjured-service/conjured-service";

describe('Conjured Service', () => {
  it('should degrade twice as faster', () => {
    let conjuredItem = new ConjuredItem(5, 5);
    let expectedQuality = conjuredItem.quality - 2;
    let expectedSellIn = conjuredItem.sellIn - 1;

    updateSellIn(conjuredItem);
    expect(conjuredItem.sellIn).toBe(expectedSellIn);
    expect(conjuredItem.quality).toBe(expectedQuality);
  });
});
