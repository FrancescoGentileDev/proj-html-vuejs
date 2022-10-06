<template>
  <div>
  <section-component v-for="(section, index) in sections" :key="index" :gridColumn="index === 0? 4: 3"  v-bind="section"/>
  
  </div>
</template>

<script>
import sectionComponent from './components/sectionComponent.vue'
import sections from "@/data"

export default {
  components: { sectionComponent },

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