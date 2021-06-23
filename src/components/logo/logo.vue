<template>
  <div
    :class="['c-logo', {'white': white}]"
  >
    <gitogram-logo :color="iconColor"></gitogram-logo>
  </div>
</template>

<script>
import gitogramLogo from "./gitogram";

export default {
  name: "Logo",
  components: {
    gitogramLogo
  },
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconColor() {
      if (this.white) return "#fff";
      return "#000";
    }
  }
};
</script>

<style lang="scss" scoped src="./logo.scss"></style>
