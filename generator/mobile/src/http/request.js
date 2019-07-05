import axios from 'axios';
import store from "@store"
import config from '@config'
import qs from 'qs'
import {
  Toast
} from 'vant'
Toast.allowMultiple();

export function request(type = 'GET', url, data = {}) {
  const toast = Toast.loading({
    duration: config.timeout, //持续展示 toast 
    forbidClick: true, //禁用背景点击
    loadingType: 'spinner'
  });
  var __data = {}
  if (type.toUpperCase() == 'GET') {
    __data.params = data
  }
  if (type.toUpperCase() == 'POST') {
    __data.body = data
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: type,
      ...__data,
      responseType: 'json'
    }).then((res) => {
      toast.clear()
      if (res.data.code == 200) {
        resolve(res.data)
      } else {
        if (res.data.code == -1) {
          Toast(res.data.msg)
          store.dispatch('user/logut')
        } else {
          Toast(res.data.msg)
        }
        reject(res)
      }
    }).catch((err) => {
      console.log(err);
      toast.clear()
      Toast(err.message)
      reject(err)
    });
  })
}

export function request_(type = 'GET', url, data = {}) {
  var __data = {}
  if (type.toUpperCase() == 'GET') {
    __data.params = data
  }
  if (type.toUpperCase() == 'POST') {
    __data.data = qs.stringify(data)
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: type,
      ...__data,
      responseType: 'json'
    }).then((res) => {
      if (res.data.code == 200) {
        resolve(res.data)
      } else {
        if (res.data.code == -1) {
          store.dispatch('user/logut')
        }
        reject(res)
      }
    }).catch((err) => {
      console.log(err);
      Toast(err.message)
      reject(err)
    });
  })
}