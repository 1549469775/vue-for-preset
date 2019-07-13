export default {
  namespaced: true,
  state: {
    // https://github.com/stackfing/vuexlearn
    states: '',
    cachePage: [],
  },
  mutations: {
    setTransition(state, states) {
      state.states = states
    },
    ADD_CACHE_PAGE(state, view) {
      if (!state.cachePage.includes(view)) {
        state.cachePage.push(view)
      }
    }
  },
  actions: {
    ADD_CACHE({
      commit
    }, view) {
      commit('ADD_CACHE_PAGE', view)
    }
  }
}