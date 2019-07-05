import Vue from 'vue';
import store from '@store'
import router from '@router';
// 这种方式依赖路由的动态加载
Vue.mixin({
  methods: {
    __push(path) {
      store.commit("page/setTransition", "turn-on");
      router.push(path)
    },
    __replace(path) {
      store.commit("page/setTransition", "turn-on");
      router.replace(path)
    },
    __back() {
      store.commit("page/setTransition", "turn-off");
      router.go(-1)
    }
  },
})
//  监听安卓浏览器上的返回键，但是hbuilder无法监听，需另外设置
Vue.nextTick(() => {
  window.addEventListener("popstate", () => {
    store.commit("page/setTransition", "turn-off");
  }, false)
  window.onerror = function (message, url, line, column, error) {
    console.log(message, url, line, column, error)
  };
})