<template>
  <article class="context">
    <img v-if="icon" :src="require(`@/assets/images/${icon}`)"
          data-aos="fade-down"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="2000"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
    
     />

    <h2
      v-if="title"
      data-aos="slide-down"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
      data-aos-delay="1000"
      data-aos-once="true"
      data-aos-easing="ease-in"
    >
      {{ title }}
    </h2>

    <div class="divider" v-if="divider !== undefined">
      <hr v-if="divider == 0" />
      <img v-else :src="require(`@/assets/images/wave-divider.png`)" alt="" />
    </div>

    <p
      v-if="subtitle"
      data-aos="fade"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
      data-aos-delay="1000"
      data-aos-once="true"
      data-aos-easing="ease-out-quart"
    >
      {{ subtitle }}
    </p>

    <div class="formContact" v-if="form">
      <form-component />
    </div>

    <div class="callToAction" v-if="buttons">
      <a v-for="(button, index) in buttons" :key="index" href="button.link">
        <img v-if="button.isIcon" :src="require(`@/assets/images/${button.text}`)" alt="" />
        <button v-else>{{ button.text }}</button>
      </a>
    </div>
  </article>
</template>

<script>
import formComponent from "./formComponent.vue";
export default {
  components: { formComponent },
  name: "contextComponent",
  props: {
    icon: String,
    title: String,
    divider: {
      type: Number,
    },
    subtitle: String,
    buttons: Array,
    form: {
      type: Boolean,
      default: false,
    },
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
    margin: 2rem 0;
    hr {
      max-width: 250px;
      margin: 0 auto;
      border-top: 2px solid;
      border-radius: 10px;
    }
  }
  h2 {
    margin: 1.2rem;
  }
  .callToAction {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;

    button {
      text-transform: uppercase;
      padding: 0.5rem 2rem;
      background-color: transparent;
      border: 3px solid $button-border-color;
      color: $button-text-color;
      &:hover {
        background-color: $button-border-color;
        color: $black-color
      }
    }
  }
}
</style>
