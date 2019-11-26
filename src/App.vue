<template>
  <div id="app">
    <Npm/>
  </div>
</template>

<script>
import Npm from './components/Npm.vue'

export default {
  name: 'app',

  components: {
    Npm
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
