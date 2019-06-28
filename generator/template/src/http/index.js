import axios from 'axios';
import './interceptors'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://192.168.1.118:8087/qianjiaxi/api';
// 允许携带Cooikes
// axios.defaults.withCredentials = true  
import {
  request
} from "./request"

export default {
  request,
}