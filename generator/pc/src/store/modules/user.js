import request from '@http/index.js'
import router from '@router';
export default {
  namespaced: true,
  state: {
    userinfo: {},
    token: ""
  },
  getters: {

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
      return new Promise((resolve) => {
        commit("setToken", "")
        router.push('/')
        resolve()
      })
    }
  },
}