<template>
  <div class="root">
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
</template>

<script>
export default {
  props: {
    social: Object,
  },
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  gap: 1rem;
  margin-top: 2rem; 
}
.social-link {
  font-size: 2rem;
  .facebook a {
    color: #4267b2;
  }
  .instagram a {
    color: #c13584;
  }
  .twitter a {
    color: #1da1f2;
  }
}
</style>
