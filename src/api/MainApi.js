import {BASE_URL} from '../utils/constants';

class mainApi {
    constructor(url) {
        this._url = url;
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }
//регистрация
    registration(token) {
        return fetch(`${this._url}/OpenSandboxAccount`, {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({}),
        }).then(this._checkResponse);
    }


    signin(data) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: data.email, password: data.password}),
        }).then(this._checkResponse);
    }

//не уверен что нужно
    getContent(token) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }).then(this._checkResponse);
    }

    getProfileInfo(token) {
        return fetch(this._url + "/users/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }

    //функция обновления данных профиля
    setProfileInfo(profile, token) {
        return fetch(this._url + "/users/me", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: profile.name,
                email: profile.email,
            }),
        }).then(this._checkResponse);
    }

    deleteCard(id, token) {
        return fetch(this._url + `/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }

    addMovie = (data) => {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: BASE_URL + data.image.url,
                trailerLink: data.trailerLink,
                thumbnail: BASE_URL + data.image.formats.thumbnail.url,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            }),
        }).then(this._checkResponse);


    };

    getCards() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
            },
        }).then(this._checkResponse);
    }


}

const apiMain = new mainApi("https://sandbox-invest-public-api.tinkoff.ru/rest/tinkoff.public.invest.api.contract.v1.SandboxService/");
export default apiMain;
