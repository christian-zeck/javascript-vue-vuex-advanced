import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 15
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementCount({ commit }) {
      commit('increment')
    }
  }
})
