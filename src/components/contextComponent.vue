<template>
  <div>

  </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        separator: {
            type: Number,
            validator(value) {
                return value === 2 || value===1 //1 separator line, 2 separator icon 
            }
        },
        callToActionIcon: Boolean,
        callToAction: String

    }

}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
</style>