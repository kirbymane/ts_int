import {Shop} from "./model/shop";
import {itemFixtures} from "./fixtures/item-fixtures";

const shop = new Shop(itemFixtures);

let days = 20;
for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  shop.items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  });
  console.log();
  shop.updateSellIn();
}
