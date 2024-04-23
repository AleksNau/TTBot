
const {api} = require("./src/api/MainApi.js");
const { SANDBOX_TOKEN  } = process.env;
let myMoney = 0;

const getMoney = () => {
  api.getWithdrawLimits().then(res => {
    myMoney = res.money[0].units;
  }).catch(res => console.log(res))
}

const buyShare = () => {

}

const sellShare = () => {

}
/*


// получить портфель
const protfolio = await account.getPortfolio();
console.log(protfolio)
*/