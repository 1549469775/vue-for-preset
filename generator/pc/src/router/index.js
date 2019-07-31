import Vue from 'vue'
import Router from 'vue-router'
import store from "@store"
Vue.use(Router)
import route from "./route.js";
const router = new Router(route)

// 生成需要缓存的视图模板，用作keep-alive缓存，之前的没啥用
router.options.routes.forEach(route => {
  if (route.meta.cache) {
    store.dispatch('page/ADD_CACHE', route.name)
  }
});

// 路由切换之前的判断，可用作登录的判断
router.beforeResolve((to, from, next) => {
  if (!store.getters.token && to.meta.auth) {
    console.log("请先登录")
    next('/')
    return
  } else {
    next()
  }
})

export default router;