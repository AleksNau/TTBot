

import tink from 'tinkoff-invest-api';

import api from "./src/api/api.js";



const { TinkoffAccount, RealAccount, SandboxAccount }= tink;
// получить список счетов


const { accounts } = await api.users.getAccounts({});

/*
// создать экземпляр счета: боевого или в песочнице
const account = new SandboxAccount(api, '<sandbox-account-id>');

// получить портфель
const protfolio = await account.getPortfolio();
console.log(protfolio)
*/