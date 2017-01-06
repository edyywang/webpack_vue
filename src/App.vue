<template>
  <div id="app">
    <message>Hello There</message>
    <message>Hello There Again</message>
    <counter></counter>
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
