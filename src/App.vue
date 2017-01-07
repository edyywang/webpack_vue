<template>
  <div id="app">
    <!-- 這是實際上的首頁內容, 套版的內容, 所以需要小心共用的header與footer是否必要 -->
    <!-- 在這邊設置共用且必要的header footer nav 這一頁面不該放任和內容-->
    <h2>header: from App vue</h2>
    <!-- router-link to a link or data bind for render other component -->
    <router-link to="/">Home</router-link>
    <!-- could send parameter in route -->
    <!-- 能傳入一個動態的參數當作URL的parameter -->
    <!-- 重要範例 -->
    <!-- <router-link to="/message/:messageId">Message</router-link> -->
    <!-- 重要範例 -->
    <router-link to="/message/10">Message10</router-link>
    <router-link to="/message/20">Message20</router-link>
    <!-- 能傳入一個動態的參數當作URL的parameter -->
    <router-link to="/counter">Counter</router-link>
    <router-link to="/ajax_api">Ajax Api</router-link>
    <!-- <router-link :to="some-data-bind">vue router to Home</router-link> -->
    <hr>
    <!-- 方法一: 在router view中render Component -->
    <h3>body: Vue Router components</h3>
    <div>
      <!-- 頁面的骨架, 讓Vue Router改變裡面頁籤內容 -->
      <!-- router-view is a reserved component for VueRouter to render component -->
      <router-view></router-view>
      <!-- to show the component inside this slot -->
    </div>
    <hr>
    <h2>footer: import Vue components</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
