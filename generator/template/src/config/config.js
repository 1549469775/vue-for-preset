export default {
  timeout: 5000,
  loginPath: '/login',
  BASEURL: process.env.NODE_ENV == 'production' ? "http://gank.io/api" : "http://gank.io/api"
}