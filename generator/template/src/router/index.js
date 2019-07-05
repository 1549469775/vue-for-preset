import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: "hash",
  routes: []
})


router.beforeResolve((to, from, next) => {
  if (!store.getters.token && !to.fullPath.includes('login') && !to.fullPath.includes('register')) {
    console.log("请先登录")
    config.loginPath && (router.push(config.loginPath))
    return
  } else {
    next()
  }
})

export default router;