import "normalize.css"
import Vue from 'vue';
import App from './App.vue';
// 路由分离
import router from '@router';
// vuex分离
import store from '@store'

if (process.env.NODE_ENV==='development') {
  import './mock/index.js';
}
// 网络请求分离
import request from '@http/index.js'
Vue.prototype.$request = request;

// 分离混入
import '@mixins/index.js'
import '@directive/index.js'
import '@filter/index.js'
import '@components/global/index.js'
import '@components/plugins/index.js'
  <%_ if (options['ui-framework'] === 'element-ui') { _%>
    import '@vendor/element';
  <%_ } else if (options['ui-framework'] === 'iview') { _%>
    import '@vendor/iview';
  <%_ } else if (options['ui-framework'] === 'ant') { _%>
    import '@vendor/ant';
  <%_ } else if (options['ui-framework'] === 'hui') { _%>
    import '@vendor/hui';
  <%_ }  _%>

// 是否开发生产环境提示
Vue.config.productionTip = process.env.NODE_ENV === 'production';

// 用于全局事件发送与接收
Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  created() {},
  // use Runtime-only
  // https://vuejs.org/v2/guide/installation.html
  render: (h) => h(App)
});