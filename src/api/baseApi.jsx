import axios from "axios";
import { store } from "./../redux/store";
import { hideLoading, showLoading } from "../redux/slices/spinnerSlice";

// Thiết lập URL cơ sở
axios.defaults.baseURL = "https://movienew.cybersoft.edu.vn/api";

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Kết hợp URL cơ sở và phần đường dẫn cụ thể
        config.url = `${axios.defaults.baseURL}${config.url}`;
        config.headers.TokenCybersoft =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I";
        console.log(config);

        // LOADING
        store.dispatch(showLoading());
        return config;
    },
    function (error) {
        store.dispatch(hideLoading());

        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        store.dispatch(hideLoading());
        return response;
    },
    function (error) {
        store.dispatch(hideLoading());

        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
