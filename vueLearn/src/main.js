// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Components from './components/'

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]

//  初始化 elementUI 组件
Object.keys(ElementUI).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toLowerCase())
  Vue.component(`el-${name}`, ElementUI[key])
})

Object.keys(Components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`a${name}`, Components[key])
})

Vue.use(VueRouter)

// const router = new VueRouter({
//   Routers // （缩写）相当于 routes: routes
// })

const router = new VueRouter(require('./router/index'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
