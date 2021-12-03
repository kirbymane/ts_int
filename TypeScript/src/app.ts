import {Shop} from "./model/shop";
import {itemFixtures} from "./fixtures/item-fixtures";
import axios from "axios";
import * as fs from "fs";

const shop = new Shop(itemFixtures);
const args = process.argv.slice(2, 4);
const loopCount = Number(args[0]);
const requestCount = Number(args[1]);

performRequestsAndLoop(loopCount, requestCount);

async function performRequestsAndLoop(loopCount: number, requestCount: number) {
  for (let i = 0; i < loopCount; i++) {
    let requests: any [] = [];
    let successRequests: any[] = [];

    for (let j = 0; j < requestCount; j++) {
      requests.push(axios.get('https://yesno.wtf/api'));
    }

    await axios.all(requests)
      .then(res => {
        for (let x = 0; x < requestCount; x++) {
          if (res[x].data.answer === 'yes') {
            successRequests.push(res[x].data);
          }
        }
      })
      .catch(err => {
        console.log('Requests error: ', err.message);
      });
    if (!fs.existsSync('./src/log')){
      await fs.mkdirSync('./src/log');
    }
    await fs.promises.writeFile(
      "./src/log/log.txt",
      `${successRequests.length} successful responses received at ${new Date().toLocaleString()}\n`,
      {flag: 'a'}
    );

    if (successRequests.length) {
      await performRequestsAndLoop(1, successRequests.length);
    }

    shop.updateSellIn();
  }
}

// let days = 20;
// for (let i = 0; i < days; i++) {
//   console.log("-------- day " + i + " --------");
//   console.log("name, sellIn, quality");
//   shop.items.forEach(element => {
//     console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
//   });
//   console.log();
//   shop.updateSellIn();
// }
