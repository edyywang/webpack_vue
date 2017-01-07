import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// import Custom Component for vue-router
import Message from './components/Message.vue'
import Counter from './components/Counter.vue'
import AjaxApi from './components/AjaxApi.vue'

// vue-router
Vue.use(VueRouter)
const routes = [
  //{ path: '/', component:  App }, // 可以設定default path, 但可能會自己render自己造成頁面迴圈
  { path: '/message/:messageId', component:  Message },
  { path: '/counter', component:  Counter },
  { path: '/ajax_api', component:  AjaxApi }
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router, // for vue-router
  render: h => h(App)
})
