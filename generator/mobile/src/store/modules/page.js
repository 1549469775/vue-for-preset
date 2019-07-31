export default {
  namespaced: true,
  state: {
    // https://github.com/stackfing/vuexlearn
    <%_ if (options['translate'] === 'yes') { _%>
      states: '',
   <%_ }_%>
    cachePage: [],
  },
  mutations: {
    <%_ if (options['translate'] === 'yes') { _%>
      setTransition(state, states) {
        state.states = states
      },
   <%_ }_%>
   
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