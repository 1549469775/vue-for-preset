import axios from 'axios';

export function request(type = 'GET', url, data = {}) {
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