<template>
  <div>
  <header-section v-bind="header" :logo="nav.logo" :routes="nav.routes"/>
  <section-component v-for="(section, index) in sections" :key="index" v-bind="section"/>
  <footer-section :footer="footer"/>
  </div>
</template>

<script>
import {sections, header, nav, footer} from "@/data"
import headerSection from './components/headerSection.vue'
import FooterSection from './components/footerSection.vue'

export default {
  components: { headerSection, FooterSection },
  name: "landingRoute",

  data() {
    return {
      sections,
      header,
      nav,
      footer
    }
  },

}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
</style>