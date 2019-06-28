export default {
  timeout: 5000,
  BASEURL: process.env.NODE_ENV == 'production' ? "http://192.168.1.118:8087/qianjiaxi/api" : "http://192.168.1.118:8087/qianjiaxi/api"
}