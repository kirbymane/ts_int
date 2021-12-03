import {Item} from "../../src/model/item";
import {increaseQuality} from "../../src/util/quality-util";

describe('Quality Util', () => {
  it('should increase quality', () => {
    let itemFixture = new Item('Test', 5, 5);
    let expected = itemFixture.quality + 1;
    increaseQuality(itemFixture, 1);
    expect(itemFixture.quality).toBe(expected);
  });
});
