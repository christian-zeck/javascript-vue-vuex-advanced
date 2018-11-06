import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 15,
    todos: [
      { id: 1, text: 'Task 1', done: true },
      { id: 2, text: 'Task 2', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
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
