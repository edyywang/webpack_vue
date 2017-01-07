<template lang="html">
  <div>
    <h3>Home component for homepage</h3>
    <!-- 方法二: 引用custom component -->
    <message>Hello There</message>
    <message>Hello There Again</message>
    <counter></counter>
  </div>
</template>

<script>
// 需要import後註冊
import Message from './Message.vue';
import Counter from './Counter.vue';

export default {
  components: { Message, Counter }, // 需要註冊components
}
</script>

<style lang="css">
</style>
