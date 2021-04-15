<template>
  <div class="c-logo">
    <img v-if="white" src="./gitogram_white.svg" alt="gitogram logo">
    <img v-else src="./gitogram.svg" alt="gitogram logo">
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped src="./logo.scss"></style>
