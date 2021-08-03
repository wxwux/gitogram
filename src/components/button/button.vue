<template>
  <button
    class="c-button size-big theme-green"
    :class="[ {loading}, {disabled} ]"
  >
    <span class="preloader" v-if="loading">
      <spinner />
    </span>
    <span class="btn-text" v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { spinner } from "../spinner";

export default {
  name: "Button",
  components: { spinner },
  props: {
    size: {
      type: String,
      default: "big"
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean
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
    },
    btnTheme() {
      if (this.loading) return "grey";
      return "green";
    }
  }
};
</script>

<style lang="scss" scoped src="./button.scss"></style>
