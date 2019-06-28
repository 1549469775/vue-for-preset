import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import router from '../router/index';
import request from '../http/request'
import config from '../config/config.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: {},
    token: ""
  },

  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userinfo) {
      state.userinfo = userinfo
    },
  },

  actions: {
    updateUser({
      commit
    }) {
      return new Promise((resolve, reject) => {
        request.getUser().then((res) => {
          commit("setUserInfo", res.data)
          resolve(res)
        }).catch((err) => {
          reject(err)
        });
      })
    },
    setUserInfo({
      commit
    }, userinfo) {
      commit("setUserInfo", userinfo)
    },
    setToken({
      commit
    }, token) {
      commit("setToken", token)
    },
    logout({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit("setToken", "")
        config.loginPath && (router.push(config.loginPath))
        resolve()
      })
    }
  },
  getters: {
    // loading: state => state.loading,
    // userinfo: state => state.userinfo,
    token: state => state.token,
    userinfo: state => state.userinfo,
  },
  plugins: [createPersistedState()]
})