<template>
  <div class="background" :class="{ image: getBackgroundImage == 1 }" :style="getStyle">
    <section :class="{ container: !noContainer }">
      <context-component v-bind="top" />
      <grid-of-content
        v-for="(grid, index) in grids"
        :key="index"
        :grid="grid.elements"
        :type="grid.type"
        :gridColumn="gridColumn"
      />
    </section>
  </div>
</template>

<script>
import contextComponent from "./contextComponent.vue";
import GridOfContent from "./gridOfContent.vue";
export default {
  data() {
    return {};
  },
  computed: {
    getBackgroundImage() {
      let background = this.top.background;
      if (!background) {
        return -1;
      } 
      else if (background.isImage) {
        return 1;
      }
      return 0;
    },
    getStyle() {
      let background = this.getBackgroundImage;
      if (background===-1) {
        return {backgroundColor: "inherit"};
      }
      if(background===1) {
        return {backgroundImage: `url(${require("@/assets/images/"+this.top.background.text)})`};
      }

      return {backgroundColor: "#"+this.top.background.text};
    },
  },
  components: { contextComponent, GridOfContent },
  props: {
    gridColumn: {
      type: Number,
      default: 3,
    },
    halfSection: {
      type: Boolean,
      default: false,
    },
    noContainer: {
      type: Boolean,
      default: false,
    },
    top: Object,
    grids: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
.background {
  &.image {
    background-size: cover;
    height: 50vh;
    background-position-y: 50%;
    section {
      color: $white-color;
      display: flex;
      height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  }
}

.container {
  max-width: 1300px;
}
</style>
