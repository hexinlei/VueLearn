// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Components from './components/'
import store from './store/'
// import routerConfig from './router/index.js'
import router from './router/index1.js'

//  初始化 elementUI 组件
Object.keys(ElementUI).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toLowerCase())
  Vue.component(`el-${name}`, ElementUI[key])
})

Object.keys(Components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`a${name}`, Components[key])
})

// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes: routerConfig
// })

// router.beforeEach(({meta, path}, from, next) => {
//   console.log(next)
//   // var { auth = true } = meta;
//   // var isLogin = Boolean(store.state.login.token) //true用户已登录， false用户未登录

//   // if (auth && !isLogin && path !== '/login') {
//   //   return next({ path: '/login' })
//   // }
//   // if(isLogin && (path == '/login' || path == '/reg')){
//   //  return next({ path: '/person' })
//   //  }
//   next()
// })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
