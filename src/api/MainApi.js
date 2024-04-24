require('dotenv').config();
const { SANDBOX_TOKEN,ACCOUNT_NUMBER  } = process.env;

class mainApi {
    constructor(url) {
        this._url = url;
        this._sandboxService = "tinkoff.public.invest.api.contract.v1.SandboxService";
        this._userService = "tinkoff.public.invest.api.contract.v1.UsersService"
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }
//регистрация счета
    registration() {
        return fetch(`${this._url}/${this._sandboxService}/OpenSandboxAccount`, {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${SANDBOX_TOKEN}`,
            },
            body: JSON.stringify({}),
        }).then(this._checkResponse);
    }
//получение всех счетов
  getAccounts() {
    return fetch(`https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANDBOX_TOKEN}`,
      },
      body: JSON.stringify({}),
    }).then(this._checkResponse);
  }

  //получение операций по счету
  getAccountOperations() {
    return fetch(`https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperations`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANDBOX_TOKEN}`,
      },
      body: JSON.stringify({
        "accountId": ACCOUNT_NUMBER,
        "from": "2024-04-21T07:28:00.917Z",
        "to": "2024-04-22T07:28:00.917Z",
        "state": "OPERATION_STATE_UNSPECIFIED",
        "figi": "string"
      }),
    }).then(this._checkResponse);
  }

  //получение активных заявок
  getActiveOrders() {
    return fetch(`https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrders`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANDBOX_TOKEN}`,
      },
      body: JSON.stringify({
        "accountId": ACCOUNT_NUMBER
      }),
    }).then(this._checkResponse);
  }

  //получение активных заявок
  getWithdrawLimits() {
    return fetch(`https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxWithdrawLimits`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANDBOX_TOKEN}`,
      },
      body: JSON.stringify({
        "accountId": ACCOUNT_NUMBER
      }),
    }).then(this._checkResponse);
  }

  buyLimit() {
    return fetch(`https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.OrdersService/PostOrder`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${SANDBOX_TOKEN}`,
      },
      body: JSON.stringify({
        "figi": "TCS00A107UL4",
        "quantity": "2",
        "price": {
          "nano": 6,
          "units": "3100"
        },
        "direction": "1",
        "accountId": "9dc15944-11d5-4a1f-a64c-5d89f6fbdb33",
        "orderType": "1",
        "orderId": "3474e404-95c1-4ba1-baf1-e6054733acff",
        "instrumentId": "TCS00A107UL4"
      }),
    }).then(this._checkResponse);
  }

}

const api = new mainApi("https://sandbox-invest-public-api.tinkoff.ru/rest/");

module.exports = {
  api
};