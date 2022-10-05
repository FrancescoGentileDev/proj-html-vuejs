<template>
  <section>
    <context-component v-bind="top"/>
    <grid-of-content v-for="(grid, index) in grids" :key="index" :grid="grid.elements" :type="grid.type" :gridColumn="gridColumn" />
  </section>
</template>

<script>
import contextComponent from './contextComponent.vue'
import GridOfContent from './gridOfContent.vue'
export default {
  components: { contextComponent, GridOfContent },
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

</style>