<template>
  <article>
    <div class="img-container">
      <img :src="require(`@/assets/images/${icon}`)" alt="" />
    </div>
    <div class="details">
      <div class="name">
        {{ title }}
      </div>
      <div class="role">
        {{ subtitle }}
      </div>
      <div class="bio">
        {{ paragraph }}
      </div>
      <div class="social">
        <social-component :social="social"/>
      </div>
    </div>
  </article>
</template>

<script>
import socialComponent from './socialComponent.vue';
export default {
  components: { socialComponent },
  props: {
    icon: String,
    title: String,
    subtitle: String,
    paragraph: String,
    social: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

article {
  background-color: $white-color;
  .img-container {
    img {
      width: 100%;
    }
  }

  .details {
    padding: 1.8rem;
    .name {
      text-transform: uppercase;
      margin: 0.5rem 0;
      font-weight: 600;
    }
    .role {
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .bio {
      color: $card-bio-text-color;
    }
  }
}
</style>
