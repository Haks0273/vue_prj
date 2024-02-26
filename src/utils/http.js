import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from '@/stores/user'
import { useRouter } from "vue-router";



// 创建一个axios实例
const httpInstance = axios.create({
  // 设置请求的baseURL
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  // 设置请求的headers
  headers: {
    "Content-Type": "application/json",
  },
  // 设置请求的超时时间
  timeout: 5000,
});

// 配置请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    // console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 配置响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const userStore = useUserStore()
    const router = useRouter();

    ElMessage({
      type: "warning",
      message: error.response.data.message,
    });
    if(error.response.status === 401){
      
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(error);
  }
);
export default httpInstance;
