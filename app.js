const { v4: uuidv4 } = require('uuid');
const {api} = require("./src/api/MainApi.js");
const { SANDBOX_TOKEN  } = process.env;
global.EventSource = require('eventsource');
let myMoney = 0;

const getMoney = () => {
  api.getWithdrawLimits().then(res => {
    myMoney = res.money[0].units;
  }).catch(res => console.log(res))
}
//сделать генерацию UIID

const buyShare = () => {
  let a = uuidv4();
  api.buyLimit("TCS00A107UL4",2,2930,a).catch(console.error)
}

/*
api.stream().then((response) => {
  const reader = response.body.getReader();
  // read() returns a promise that resolves when a value has been received
  reader.read().then(function pump({ done, value }) {
    if (done) {
      // Do something with last chunk of data then exit reader
      return;
    }
    // Otherwise do something here to process current chunk
    console.log(reader)
    // Read some more, and call this function again
    return reader.read().then(pump);
  });
}).catch(console.error)
*/

const evtSource = new EventSource("https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream",
  {
    "accounts": [
      "9dc15944-11d5-4a1f-a64c-5d89f6fbdb33",
    ]
  });

evtSource.onerror = function (event) {
  console.log(event)
};
const sellShare = () => {

}
/*


// получить портфель
const protfolio = await account.getPortfolio();
console.log(protfolio)
*/