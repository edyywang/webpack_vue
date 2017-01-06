<template lang="html">
  <div>
    <h2>Count: {{ count }}</h2>
    <p><button @click="count +=1">increment</button></p>
  </div>
</template>

<script>
export default {
  //如同Vue Component的data方法部分, 需要回傳一個物件
  data() {
    return { count: 0 };
  }
}
</script>

<style lang="css">
</style>
