<template>
  <div>
  <section-component v-for="(section, index) in sections" :key="index" :gridColumn="index === 0|| index === 6? 4: 3"  v-bind="section"/>
  
  </div>
</template>

<script>
import sections from "@/data"

export default {
  name: "landingRoute",

  data() {
    return {
      sections
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
</style>