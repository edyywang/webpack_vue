<template lang="html">
  <div class="">
    <p>Ajax Api</p>
    <div>
      <button v-on:click="getJoke">get a joke</button>
      <span>{{ joke }}</span>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      joke: ''
    }
  },
  methods: {
    getJoke: _.debounce(function () {
          var _this = this
          _this.joke = 'waiting for Chuck Norris...'
          // Ajax to get API response
          axios.get('https://api.chucknorris.io/jokes/random')
            .then(function (response) {
              _this.joke = response.data.value
            })
            .catch(function (error) {
              _this.joke = 'Error! Could not reach the API. ' + error
            })
    }, 100)
  },
  mounted(){
    this.getJoke();
  }
}
</script>

<style lang="css">
</style>
