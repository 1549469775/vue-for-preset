import axios from 'axios';
import store from '../store/index'
import {
  Toast
} from 'vant'
Toast.allowMultiple();

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://192.168.1.118:8087/qianjiaxi/api';
// 允许携带Cooikes
// axios.defaults.withCredentials = true  

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

function $axios(type = 'GET', url, data = {}) {
  const toast = Toast.loading({
    duration: 5000, //持续展示 toast 
    forbidClick: true, //禁用背景点击
    loadingType: 'spinner'
  });
  var __data = {}
  if (type.toUpperCase() == 'GET') {
    __data.params = data
  }
  if (type.toUpperCase() == 'POST') {
    __data.params = data
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: type,
      ...__data,
      responseType: 'json'
    }).then((res) => {
      toast.clear()
      if (res.data.code == 0) {
        resolve(res)
      } else {
        Toast(res.data.msg)
        reject(res)
      }
    }).catch((err) => {
      toast.clear()
      Toast(err.message)
      reject(err)
    });
  })
}

function $axios_client(type = 'GET', url, data = {}) {
  var __data = {}
  if (type.toUpperCase() == 'GET') {
    __data.params = data
  }
  if (type.toUpperCase() == 'POST') {
    __data.params = data
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: type,
      ...__data,
      responseType: 'json'
    }).then((res) => {
      if (res.codeno == 0) {
        resolve(res)
      } else {
        reject(res)
      }
    }).catch((err) => {
      reject(err)
    });
  })
}


export var request = $axios;
export var request_ = $axios_client;