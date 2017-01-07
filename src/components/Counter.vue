<template lang="html">
  <div class="">
    <p>This is Counter component</p>
    <div>
      <h2>Count: {{ count }}</h2>
      <p><button @click="count +=1">increment</button></p>
      <button type="button" @click="goHome">Go Home</button>
    </div>
  </div>
</template>

<script>
export default {
  //如同Vue Component的data方法部分, 需要回傳一個物件
  data() {
    return { count: 0 };
  },
  methods: {
    goHome() {
      // 直接用方法觸發, 修改router轉移到別的地方
      this.$router.push('/');
    }
  }
}
</script>

<style lang="css">
</style>
