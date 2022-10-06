<template>
  <div>
    <div class="gridContent" v-if="type === 0">
      <context-component
        class="grid context"
        v-for="(item, index) in grid"
        :key="index"
        v-bind="item"
      />
    </div>
    <div class="gridContent" v-else-if="type === 1">
      <person-card-component
        class="grid person"
        v-for="(item, index) in grid"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
import contextComponent from "./contextComponent.vue";
import PersonCardComponent from "./personCardComponent.vue";

export default {
  components: { contextComponent, PersonCardComponent },
  props: {
    grid: Array,
    type: Number, //0 GRID OF ICON, 1 GRID OF PERSON
    gridColumn: Number,
  },
  mounted() {
    console.log("mount");
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.gridContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .grid {
    width: calc(100% / v-bind(gridColumn));

    &.context {
      :deep(h2) {
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      :deep(p) {
        color: $context-subtile-color;
        
      }
    }
    &.person {
      @at-root {
        .gridContent {
            $gap : 2rem;
          gap: $gap;
          .grid {
            width: calc(100% / v-bind(gridColumn) - $gap);
          }
        }
      }
    }
  }
}
</style>
