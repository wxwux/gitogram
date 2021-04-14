<template>
  <button :class="['c-button', themeClass, sizeClass]">
    <slot></slot>
  </button>
</template>

<script>
import { sizes, themes } from "./enums";

export default {
  name: "Button",
  props: {
    size: {
      type: String,
      default: sizes.small
    },
    theme: {
      type: String,
      default: themes.white
    }
  },
  data() {
    return {
      themeClass: `theme-${this.theme}`,
      sizeClass: `size-${this.size}`
    };
  }
};
</script>

<style lang="scss" scoped src="./button.scss"></style>
