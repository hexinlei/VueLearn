import axios from 'axios'
import store from '../store/'
import router from '../router/index1.js'
import { USER_SIGNOUT } from '../store/user'

let Base64 = require('js-base64').Base64

let client = 'ant:ranger'

let authBase64 = Base64.encode(client)
//  axios 配置
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded'
// axios.defaults.headers.common['Authorization'] = 'Basic ' + authBase64
// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8099/'

export function getPageInfo () {
  return axios({
    method: 'get',
    url: 'ajax/user/getPageInfo'
  })
}
export function userLogin (userInfo) {
  return axios({
    method: 'post',
    params: {
      username: userInfo.username,
      password: userInfo.password,
      grant_type: 'password'
    },
    url: '/oauth/token'
  })
}

export function getCSFRToken () {
  return axios.get()
}

axios.interceptors.request.use(function (config) {
  var url = config.url
  if (url.indexOf('/oauth/token') > 0) {
    config.headers.common['Authorization'] = 'Basic ' + authBase64
  } else {
    var token = sessionStorage.getItem('access_token')
    config.headers.common['Authorization'] = 'Bearer ' + token
  }
  return config
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(USER_SIGNOUT)
          router.replace({
            path: '/login',
            query: { redirect: '/login' }
          })
          break
        case 400:
          store.commit(USER_SIGNOUT)
          router.replace({
            path: '/login',
            query: { redirect: '/login' }
          })
          break
      }
    }
    return error.response
  }
)

