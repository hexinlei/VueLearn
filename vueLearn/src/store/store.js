import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const loginModule = {
  state: {
    counts: 100
  },
  actions: {
  },
  mutations: {
  },
  getters: {
    'GET_COUNTS': function (state) {
      return state.count
    }
  },
  modules: {
  }
}

export default new Vuex.Store({
  name: 'store',
  modules: {
    login: loginModule
  },
  state: {
    count: 100
  },
  actions: {
  },
  mutations: {
  },
  getters: {
    'GET_COUNT': function (state) {
      return state.count
    }
  }
})
