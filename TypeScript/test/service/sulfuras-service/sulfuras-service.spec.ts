import {SulfurasItem} from "../../../src/model/sulfuras-item/sulfuras-item";
import {updateSellIn} from "../../../src/service/sulfuras-service/sulfuras-service";

describe('Sulfuras Service', () => {
  it('should stay intact', () => {
    let sulfurasItem = new SulfurasItem(5);
    let expectedQuality = sulfurasItem.quality;
    let expectedSellIn = sulfurasItem.sellIn;

    updateSellIn(sulfurasItem, 5);
    expect(sulfurasItem.sellIn).toBe(expectedSellIn);
    expect(sulfurasItem.quality).toBe(expectedQuality);
  });
});
