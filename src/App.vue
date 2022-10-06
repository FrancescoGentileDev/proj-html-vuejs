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
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
</style>
<style lang="scss">
@import "/node_modules/bootstrap/scss/bootstrap.scss";
@import "@/variables.scss";
#app {

  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
