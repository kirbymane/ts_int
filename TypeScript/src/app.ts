import {Shop} from "./model/shop";
import {itemFixtures} from "./fixtures/item-fixtures";

const shop = new Shop(itemFixtures);
shop.updateSellIn(1);

shop.items.forEach((item) => {
  console.log(`NAME: ${item.name} QUALITY: ${item.quality} SELLIN: ${item.sellIn}`);
});
