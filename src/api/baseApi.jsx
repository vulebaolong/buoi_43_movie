import axios from "axios";

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
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
