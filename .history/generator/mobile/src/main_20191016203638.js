  <%_ if (options['application'] === 'mobile') { _%>
      import 'lib-flexible'; 
  <%_ } _%>
  <%_ if (options['mobile-ui'] === 'vant') { _%>
    import '@vendor/vant';//该库已经设置为动态加载了
  <%_ } _%>
  
    import "normalize.css"
  import Vue from 'vue';
  import App from './App.vue';
  // 路由分离
  import router from '@router';
  // vuex分离
  import store from '@store'

  if (process.env.NODE_ENV==='development') {
    require('./mock/index.js')
  }

  // 网络请求分离
  import request from '@http/index.js'
  Vue.prototype.$request = request;
  // 分离混入
  import '@mixins/index.js'
  import '@directive/index.js'
  import '@filter/index.js'
  import '@components/global/index.js'
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