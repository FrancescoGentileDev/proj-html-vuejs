<template>
  <section>
    <context-component v-bind="top"/>
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
        top: Object,
        grids: Array,

    }

}
</script>

<style lang="scss" scoped>
    section {
        border: 1px solid red;
        width: 100vw; 
    }
</style>