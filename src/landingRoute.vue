<template>
  <div>
  <section-component :gridColumn="4" :separator="1" :halfSection="true"  v-bind="sections[0]"/>
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