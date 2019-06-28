import axios from 'axios';
import './interceptors'
import Vue from 'vue';
import Urls from './urls'
import config from '../config/config.js'

axios.defaults.timeout = config.timeout;
axios.defaults.baseURL = config.BASEURL;


// 允许携带Cooikes
// axios.defaults.withCredentials = true  
Object.keys(Urls).forEach(v => {
  Vue.prototype.$request[v] = Urls[v]
})