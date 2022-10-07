<template>
  <footer>
    <div v-for="(col, index) in footer" :key="index">
      <div class="title" v-if="col.title">{{ col.title }}</div>
      <div class="divider" v-if="col.divider"></div>
      <div class="contact" v-if="col.contact">
        <div class="info" v-for="(info, key, index) in col.contact" :key="index">
          <font-awesome-icon
            class="brandcolor"
            icon="fa-solid fa-location-dot"
            v-if="key === 'position'"
          />
          <font-awesome-icon class="brandcolor" icon="fa-solid fa-phone" v-if="key === 'phone'" />
          {{ info }}
        </div>
      </div>
      <div class="others" v-if="col.others">
        <ul>
          <li v-for="(item, index) in col.others" :key="index">
          <font-awesome-icon  class="brandcolor" icon="fa-solid fa-circle-chevron-right" />
          {{ item }}</li>
        </ul>
      </div>
      <div class="logo" v-if="col.logo">
        <img :src="require(`@/assets/images/${col.logo}`)" alt="" />
      </div>
      <div class="text" v-if="col.text">{{ col.text }}</div>
      <div class="subtitle" v-if="col.subtitle">{{ col.subtitle }}</div>
      <social-component v-if="col.social" :social="col.social" />
      <div class="buttons" v-if="col.buttons">
        <button v-for="(button, index) in col.buttons" :key="index">{{button}}</button>
      </div>
    </div>
  </footer>
</template>

<script>
import socialComponent from "./socialComponent.vue";
export default {
  components: { socialComponent },
  props: {
    footer: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
ul {
    list-style: none;
    padding: 0;
}

.brandcolor {
  color: $brand-color;
}

button {
    color: $context-subtile-color;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid  $context-subtile-color;
    width: 100%;
    padding: 0.5rem 1rem
}

footer {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  max-width: 1500px;
  div {
    max-width: 500px;
  }
  .divider {
    max-width: 60px;
    height: 3px;
    margin: 1rem 0;
    background-color: $brand-color;
  }
  .text {
    margin: 1rem 0;
  }
  .subtitle {
    border-top: 1px solid grey;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .title {
    text-transform: uppercase;
  }
}
</style>
