import {AgedBrieItem} from "../../../src/model/aged-brie-item/aged-brie-item";
import {updateSellIn} from "../../../src/service/aged-brie-service/aged-brie-service";

describe('Aged Brie Service', () => {
  it('should increase quality when sellIn decreases', () => {
    let agedBrieItem = new AgedBrieItem(10, 5);
    let expectedQuality = agedBrieItem.quality + 1;
    let expectedSellIn = agedBrieItem.sellIn - 1;

    updateSellIn(agedBrieItem);
    expect(agedBrieItem.sellIn).toBe(expectedSellIn);
    expect(agedBrieItem.quality).toBe(expectedQuality);
  });
});
