import axios from 'axios';
import store from '../store/index'
axios.interceptors.request.use(config => {
  if (!config.headers['Content-Type']) {
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }
  if (store.getters.token) {
    config.headers = {
      'Authorization': store.getters.token
    }
  }
  return config;
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(res => {
  //对错误代码做处理
  return res;
}, error => {
  return Promise.reject(error);
});