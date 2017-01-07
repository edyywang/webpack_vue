<template>
  <div id="app">
    <!-- router-link to a link or data bind for render other component -->
    <router-link to="/">Home</router-link>
    <!-- could send parameter in route -->
    <!-- 能傳入一個動態的參數當作URL的parameter -->
    <!-- <router-link to="/message/:messageId">Message</router-link> -->
    <router-link to="/message/10">Message10</router-link>
    <router-link to="/message/20">Message20</router-link>
    <!-- 能傳入一個動態的參數當作URL的parameter -->
    <router-link to="/counter">Counter</router-link>
    <!-- <router-link :to="some-data-bind">vue router to Home</router-link> -->
    <hr>
    <!-- 方法一: 在router view中render Component -->
    <h3>Vue Router components</h3>
    <div>
      <!-- 頁面的骨架, 讓Vue Router改變裡面頁籤內容 -->
      <!-- router-view is a reserved component for VueRouter to render component -->
      <router-view></router-view>
      <!-- to show the component inside this slot -->
    </div>
    <hr>
    <!-- 方法二: 引用custom component -->
    <h3>import Vue components</h3>
    <div>
      <message>Hello There</message>
      <message>Hello There Again</message>
      <counter></counter>
    </div>
  </div>
</template>

<script>
// 需要import後註冊
import Message from './components/Message.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'app',
  components: { Message, Counter }, // 需要註冊components
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
