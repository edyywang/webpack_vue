<template lang="html">
  <div class="">
    <p>This is Message component, message id is {{ messageId }}</p>
    <div class="box">
      <p><slot></slot></p>
      <button type="button" @click="goHome">Go Home</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messageId: this.$route.params.messageId
    }
  },
  watch: {
    // 因為$route實例前面有個 $ 符號所以要包起來
    // 監聽 '$route' 的改變, 假如是同個component之間互換, 監聽to與from內的變換更新資料
    // 但也能保持某部分資料, 造成多個同質物件分享資料的效果
    // 檢視route的to與from 標準格式就是如此寫 先to後from 然後可取得它的params
    '$route' (to, from) {
      this.messageId = to.params.messageId;
    }
  },
  created() {
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
  .box { background: #e3e3e3; padding: 10px; border: 1px solid #c5c5c5; margin-bottom: 1em; }
</style>
