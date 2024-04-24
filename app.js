
const {api} = require("./src/api/MainApi.js");
const { SANDBOX_TOKEN  } = process.env;
let myMoney = 0;

const getMoney = () => {
  api.getWithdrawLimits().then(res => {
    myMoney = res.money[0].units;
  }).catch(res => console.log(res))
}
//сделать генерацию UIID
const buyShare = () => {
api.buyLimit("TCS00A107UL4",2,3000,"3474e404-95c1-4ba1-baf1-e6054733acff").catch(console.error)
}

const sellShare = () => {

}
/*


// получить портфель
const protfolio = await account.getPortfolio();
console.log(protfolio)
*/