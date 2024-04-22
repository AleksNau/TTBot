
const {api} = require("./src/api/MainApi.js");
const { SANDBOX_TOKEN  } = process.env;

api.getWithdrawLimits().then(res => console.log(res)).catch(res => console.log(res))


/*


// получить портфель
const protfolio = await account.getPortfolio();
console.log(protfolio)
*/