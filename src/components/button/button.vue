<template>
  <button
    :class="[
      'c-button', `theme-${theme}`,
      {[`size-${size}`]: size.length && rubberish === false},
      {'hover-text': withHoverText}, {rubberish: rubberish}
    ]"
    :data-hover-text="hoverText"
  >
    <span class="btn-text">
      <slot></slot>
    </span>
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
    },
    hoverText: {
      type: String
    },
    rubberish: {
      type: Boolean
    }
  },
  computed: {
    withHoverText() {
      return this.hoverText?.length;
    }
  }
};
</script>

<style lang="scss" scoped src="./button.scss"></style>
