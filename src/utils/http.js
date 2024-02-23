import axios from "axios";

// 创建一个axios实例
const httpInstance = axios.create({
    // 设置请求的baseURL
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    // 设置请求的headers
    headers: {
        "Content-Type": "application/json"
    },
    // 设置请求的超时时间
    timeout: 5000,
});

// 配置请求拦截器
httpInstance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 配置响应拦截器
httpInstance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);
export default httpInstance;