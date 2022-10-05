<template>
  <article>
  <h2>{{title}}</h2>
  <p>{{subtitle}}</p>
  </article>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        divider: {
            type: Number,
            validator(value) {
                return value === 2 || value===1 //1 separator line, 2 separator icon 
            },   
        },
        subtitle:String,
        callToAction: Object

    }

}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

article {
    text-align: center;
    margin: 0 auto;
    max-width: 600px;
}
</style>