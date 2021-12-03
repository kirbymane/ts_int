import {BackstagePassesItem} from "../../../src/model/backstage-passes-item/backstage-passes-item";
import {updateSellIn} from "../../../src/service/backstage-passes-service/backstage-passes-service";

describe('Backstage Passes Service', () => {
  it('should double quality when sellIn is less than 10', () => {
    let backstagePassesItem = new BackstagePassesItem(10, 5);
    let expectedQuality = backstagePassesItem.quality + 2;
    let expectedSellIn = backstagePassesItem.sellIn - 1;

    updateSellIn(backstagePassesItem);
    expect(backstagePassesItem.sellIn).toBe(expectedSellIn);
    expect(backstagePassesItem.quality).toBe(expectedQuality);
  });

  it('should triple quality when sellIn is less than 5', () => {
    let backstagePassesItem = new BackstagePassesItem(5, 5);
    let expectedQuality = backstagePassesItem.quality + 3;
    let expectedSellIn = backstagePassesItem.sellIn - 1;

    updateSellIn(backstagePassesItem);
    expect(backstagePassesItem.sellIn).toBe(expectedSellIn);
    expect(backstagePassesItem.quality).toBe(expectedQuality);
  });
});
