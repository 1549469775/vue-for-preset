<%_ if (options.application === 'mobile') { _%>
  import 'lib-flexible';
  <%_ } _%>
  import Vue from 'vue';
  import App from './App.vue';
  import router from './router';
  import store from '../store'
  <%_ if (options['mobile-ui'] === 'vant') { _%>
  import './vendor/vant';
  <%_ } _%>
  <%_ if (options['ui-framework'] === 'element-ui') { _%>
  import './vendor/element';
  <%_ } else if (options['ui-framework'] === 'iview') { _%>
  import './vendor/iview';
  <%_ } else if (options['ui-framework'] === 'ant') { _%>
  import './vendor/ant';
  <%_ } _%>
  
  /* eslint-disable */
  Vue.config.productionTip = process.env.NODE_ENV === 'production';
  
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
	store,
    // use Runtime-only
    // https://vuejs.org/v2/guide/installation.html
    render: (h) => h(App)
  });