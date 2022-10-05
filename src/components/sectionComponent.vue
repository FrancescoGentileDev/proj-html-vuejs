<template>
  <section>

  </section>
</template>

<script>
import contextComponent from './contextComponent.vue'
export default {
  components: { contextComponent },
    props: {
        gridColumn: {
            type: Number,
            default: 3
        },
        halfSection: {
            type: Boolean,
            default: false,
        },
        title: String,
        subtitle: String,
        grids: Array,
        separator: Number

    }

}
</script>

<style lang="scss" scoped>
    section {
        border: 1px solid red;
        width: 100vw; 
    }
</style>