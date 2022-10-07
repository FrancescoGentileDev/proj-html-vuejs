<template>
  <div class="background" :class="{ image: getBackgroundImage == 1 }" :style="getStyle">
    <section :class="{ container: getContainer }">
     <div class="context" v-if="top!== undefined">
      <context-component  v-bind="top" />
     </div>
      <div class="grid" v-if="grids!==undefined">
            <grid-of-content
        
        v-for="(grid, index) in grids"
        @removeContainer="removeContainer"
        :key="index"
        :grid="grid.elements"
        :type="grid.type"
        :gridColumn="gridColumn"
      /> 
      </div>

    </section>
  </div>
</template>

<script>
import contextComponent from "./contextComponent.vue";
import gridOfContent from '@/components/gridOfContent'
export default {
  name: "sectionComponent",
  components: { contextComponent, gridOfContent },
  data() {
    return {
      container: this.noContainer,
    };
  },
  computed: {
    getBackgroundImage() {
      if(this.background){
      let background = this.background;
      if (!background) {
        return -1;
      } 
      else if (background.isImage) {
        return 1;
      }
      return 0
      }
      return -1
    },
    getStyle() {
        if(this.background){
      let background = this.getBackgroundImage;
      if (background===-1) {
        return {backgroundColor: "inherit"};
      }
      if(background===1) {
        let bg = {backgroundImage: `url(${require("@/assets/images/"+this.background.text)})`};
        if(this.jumbo) bg.height = "70vh"

        return bg

      }

      return {backgroundColor: "#"+this.background.text};
      }
      return false
    },
    getContainer() {
      return !this.container
    }
  },
  methods: {
    removeContainer() {
      this.container = !this.container;
    }
  },
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
    header: {
      type: Boolean,
      default: false,
    },
    top: Object,
    grids: Array,
    jumbo: Boolean,
    background: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.background {
  &.image {
    background-size: cover;
    background-position-y: 50%;
    background-attachment: fixed;
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
  padding: 4rem 0;
}
</style>
