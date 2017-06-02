import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录

export default {
  state: {
    token: sessionStorage.getItem('access_token')
  },
  mutations: {
    [USER_SIGNIN] (state, token) {
      console.log(token.access_token)
      sessionStorage.setItem('access_token', token.access_token)
    },
    [USER_SIGNOUT] (state) {
      sessionStorage.removeItem('access_token')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USER_SIGNIN] ({ commit }, response) {
      commit(USER_SIGNIN, response.data)
    },
    [USER_SIGNOUT] ({ commit }) {
      commit(USER_SIGNOUT)
    }
  }
}
