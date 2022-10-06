<template>
  <article class="context">
    <img v-if="icon" :src="require(`@/assets/images/${icon}`)" />
    <h2>{{ title }}</h2>

    <div class="divider" v-if="divider !== undefined">
      <hr v-if="divider == 0" />
    </div>

    <p>{{ subtitle }}</p>
  </article>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    divider: {
      type: Number,
    },
    subtitle: String,
    callToAction: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.context {
  text-align: center;
  margin: 0 auto;
  max-width: 600px;

  .divider {
    hr {
      max-width: 250px;
      margin: 0 auto;
      border-top: 2px solid;
      border-radius: 10px;
    }
    margin: 2rem 0;
  }
  h2 {
    margin: 1.2rem
    
  }
}
</style>
