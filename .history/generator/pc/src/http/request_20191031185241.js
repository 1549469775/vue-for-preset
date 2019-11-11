import axios from 'axios';
import store from "@store"
import qs from 'qs'
import config from '@config'

export function request_(type = 'GET', url, data = {}) {
  var __data = {}
  if (type.toUpperCase() == 'GET') {
    __data.params = data
  }
  if (type.toUpperCase() == 'POST') {
    __data.data = qs.stringify(data)
  }
  return new Promise((resolve, reject) => {
    var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~])+$/;
    var realUrl = url;
    if (!reg.test(url)) {
      realUrl = config.BASEURL + url;
    }
    axios({
      url: realUrl,
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
      reject(err)
    });
  })
}