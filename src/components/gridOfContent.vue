<template>
  <div>
  <div class="gridContent" v-if="type === 0">
  <context-component  v-for="(item, index) in grid" :key="index" v-bind="item"/> 
  </div>

  </div>
</template>

<script>
import contextComponent from './contextComponent.vue'


export default {
  components: { contextComponent },
    props: {
        grid: Array,
        type: Number, //0 GRID OF ICON, 1 GRID OF PERSON
        gridColumn: Number
    }

}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.gridContent {
    display: flex;
}


</style>