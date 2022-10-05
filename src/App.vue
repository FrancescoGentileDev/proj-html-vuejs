<template>
  <div id="app">
    <landing-route />
  </div>
</template>

<script>
import LandingRoute from './landingRoute.vue'


export default {
  name: 'App',
  components: {
    LandingRoute
  }
}
</script>

<style lang="scss">
@import "/node_modules/bootstrap/scss/bootstrap.scss";
@import "@/variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
