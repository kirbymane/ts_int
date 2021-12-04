import axios, { AxiosPromise } from 'axios';
import * as fs from 'fs';
import { Shop } from './model/shop';
import { itemFixtures } from './fixtures/item-fixtures';

const shop = new Shop(itemFixtures);
const args = process.argv.slice(2, 4);
const loopCount = Number(args[0]);
const requestCount = Number(args[1]);
const successAnswer = 'yes';

require('dotenv').config();

const performRequestsAndLoop = async (loopCount: number, requestCount: number) => {
  for (let i = 0; i < loopCount; i++) {
    const requests: AxiosPromise[] = [];
    const successRequests: AxiosPromise[] = [];

    if (process.env.API_URL) {
      for (let j = 0; j < requestCount; j++) {
        requests.push(axios.get(process.env.API_URL));
      }
    }

    await axios.all(requests)
      .then((res) => {
        res.forEach((value) => {
          if (value.data?.answer === successAnswer) {
            successRequests.push(value.data);
          }
        });
      })
      .catch((err) => {
        console.log('Requests error: ', err.message);
      });
    if (process.env.LOG_PATH && process.env.LOG_FILE) {
      if (!fs.existsSync(process.env.LOG_PATH)) {
        await fs.mkdirSync(process.env.LOG_PATH);
      }
      await fs.promises.writeFile(
        `${process.env.LOG_PATH}/${process.env.LOG_FILE}`,
        `${successRequests.length} successful responses received at ${new Date().toLocaleString()}\n`,
        { flag: 'a' },
      );
    }

    if (successRequests.length) {
      await performRequestsAndLoop(1, successRequests.length);
    }

    shop.updateSellIn();
  }
};

performRequestsAndLoop(loopCount, requestCount);
