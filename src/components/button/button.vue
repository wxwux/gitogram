<template>
  <button :class="['c-button', `theme-${theme}`, `size-${size}`]">
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
      default: "white"
    }
  },
};
</script>

<style lang="scss" scoped src="./button.scss"></style>
