console.log(process.env.NODE_ENV);
console.log(process.env.BASE_URL);
console.log(process.env.VUE_APP_BASEURL);
console.log(process.env.VUE_APP_TIMEOUT);
console.log(process.env.VUE_APP_LOGINPATH);
export default {
  // 网络请求超时时间
  timeout: process.env.VUE_APP_TIMEOUT,
  // Token失效之后跳转过去的页面
  loginPath: process.env.VUE_APP_LOGINPATH,
  // 网络请求基础地址
  BASEURL: process.env.VUE_APP_BASEURL,
}