const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
module.exports = {
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/orderList', component: require('../pages/orderList') }

  ]
}
