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
        <div class="social-link" v-for="(link, key, index) in social" :key="index">
        
          <div class="facebook" v-if="key === 'facebook'">

            <a :href="link"><font-awesome-icon icon="fa-brands fa-facebook" /></a>

          </div>

          <div class="instagram" v-if="key === 'instagram'">
            <a :href="link"><font-awesome-icon icon="fa-brands fa-square-instagram" /></a>
          </div>
          <div class="twitter" v-if="key === 'twitter'">
            <a :href="link"><font-awesome-icon icon="fa-brands fa-square-twitter" /></a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
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

    .social {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;

      .social-link {
        font-size: 2rem;
        .facebook a{
          color: #4267b2;
        }
        .instagram a{
          color: #c13584;
        }
        .twitter a{
          color: #1da1f2;
        }
      }
    }
  }
}
</style>
