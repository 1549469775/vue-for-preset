import axios from 'axios';
import './interceptors'
import request from './generator.js'
import config from '@config'

axios.defaults.timeout = config.timeout;
// axios.defaults.baseURL = config.BASEURL;
// 允许携带Cooikes
// axios.defaults.withCredentials = true  
export default request;