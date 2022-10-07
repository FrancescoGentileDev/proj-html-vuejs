<template>
  <div>
    <nav class="addBackground" ref="nav">
      <img class="logo" :src="require(`@/assets/images/${logo}`)" alt="" />
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <a v-if="!route.button" :href="route.link">{{ route.text }}</a>
          <button v-else>
            <a :href="route.link"> {{ route.text }}</a>
          </button>
        </li>
      </ul>
    </nav>

    <header class="jumbo" :style="getBackground">
      <div class="container">
        <h1>
          {{ getTitle.normal }} <span class="color">{{ getTitle.colored }}</span>
        </h1>
        <p>{{ subtitle }}</p>
        <button v-for="(button, index) in buttons" :key="index">
          <a :href="button.link">{{ button.text }}</a>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "home",
      lastScroll: 0,
    };
  },
  props: {
    logo: String,
    routes: Array,

    background: String,
    title: String,
    subtitle: String,
    buttons: Array,
  },
  created() {
    window.addEventListener("scroll", () => {
      let nav = this.$refs.nav;
      let scroll = window.scrollY;
      if (scroll >= 840) {
        nav.style.top = "-110px";
        if (this.lastScroll > scroll) nav.style.top = "0px";
        else nav.style.top = "-110px";
      } else {
        nav.style.top = "0px";
      }

      this.lastScroll = window.scrollY;
    });
  },
  computed: {
    getTitle() {
      let separate = this.title.split("/");
      return { normal: separate[0], colored: separate[1] };
    },
    getBackground() {
      let back = this.background;

      back = { backgroundImage: `url(${require("@/assets/images/" + back)})` };

      return back;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

button {
  align-self: flex-start;
  background-color: $header-button-color;
  font-weight: 200;
  border: none;
  padding: 1rem 3rem;
  a {
    color: $white-color;
    text-decoration: none;
  }
}
nav {
  padding: 1rem 3rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  transition: top 0.4s linear;
  &.addBackground {
    background-color: rgba($context-subtile-color, 0.2);
  }
  li {
    list-style: none;
    display: inline;
    margin: 2rem;
    a {
      text-decoration: none;
      color: $white-color;
    }
  }
}
.jumbo {
  height: 90vh;
}

.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  color: $white-color;
  h1 {
    font-size: 5rem;

    .color {
      color: $brand-color;
    }
  }
  p {
    max-width: 700px;
    font-size: 1.5rem;
  }
}
</style>
