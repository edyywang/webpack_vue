import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// import Custom Component for vue-router
import Home   from './components/Home.vue'
import Message from './components/Message.vue'
import Counter from './components/Counter.vue'
import AjaxApi from './components/AjaxApi.vue'

// 404 not found component
var NotFoundComponent = Vue.extend({
   // You can use also use template path (Thanks to @jcerdan)
   // path : '/path/to/component.html'
   template: '<h1>404 Not Found</h1>'
})

// vue-router
Vue.use(VueRouter)
const routes = [
  // 千萬不可將Home設定為App component避免迴圈
  { path: '/', component: Home },
  { path: '/message/:messageId', component:  Message },
  { path: '/counter', component:  Counter },
  { path: '/ajax_api', component:  AjaxApi },
  // 若找不到 path 能顯示一個404 component 或是 做個redirect
  // { path: '*', component: NotFoundComponent } // 顯示404 Not Found
  { path: '*', redirect: '/'} // 萬一不認得的一律導向Home
]
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  root: '/'
})

new Vue({
  el: '#app',
  router: router, // for vue-router
  render: h => h(App)
})
