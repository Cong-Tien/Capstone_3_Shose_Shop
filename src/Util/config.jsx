import axios from "axios";
import { history } from "..";

export const TOKEN_CYBERSOFT ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMyIsIkhldEhhblN0cmluZyI6IjA4LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MDkxMjAwMDAwMCIsIm5iZiI6MTY1Mjg5MzIwMCwiZXhwIjoxNjgxMDU5NjAwfQ.YWfEjzumDyUA3XRRvMIkDiD1cOGgRKyAAeOTP3qTT2c";
export const USER_LOGIN = "userLogin";
export const ACESS_TOKEN = "accessToken";

export const settings = {
    setStorageJson: (name, data) => {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },
    setStorage: (name, data) => {
        localStorage.setItem(name, data)
    },
    getStorageJson: (name) => {
        if (localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data
        }
        return; //undefined
    },
    getStore: (name) => {
        if (localStorage.getItem(name)) {
            const data = localStorage.getItem(name);
            return data
        }
        return; //undefined
    },
    setCookieJson: (name, value, days) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        value = JSON.stringify(value);
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookieJson: (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length, c.length));
        }
        return null;
    },
    setCookie: (name, value, days) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie: (name) => {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

export const http = axios.create({
    baseURL:'https://shop.cyberlearn.vn',
    timeout:30000
})

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: 'Bearer ' +settings.getStore(ACESS_TOKEN)
    }
    return config;
},err => {
    console.log(err);
    return Promise.reject(err);
})

http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if(error.response?.status === 401){
        history.push('/login')
    }
    if(error.response?.status === 400 || error.response?.status === 404){
        history.push('/home')
    }
    return Promise.reject(error)
})