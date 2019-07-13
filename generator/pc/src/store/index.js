import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user.js'
import page from './modules/page.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    page
  },
  getters: {
    token: state => state.user.token,
    userinfo: state => state.user.userinfo,
    cachePage: state => state.page.cachePage,
  },
  plugins: [createPersistedState({
    paths: ['user']
  })]
})