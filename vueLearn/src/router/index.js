import App from '../App'
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/homePage',
        component: require('../pages/homePage'),
        meta: { auth: false },
        children: [
          {
            path: '/orderList',
            component: require('../pages/orderList'),
            meta: { auth: false }
          }
        ]
      },
      {
        path: '/login',
        component: resolve => require(['../pages/login'], resolve),
        meta: { auth: false }
      }
      // {
      //   path: '*', // 其他页面，强制跳转到登录页面
      //   redirect: '/login'
      // }
    ]
  }
]
