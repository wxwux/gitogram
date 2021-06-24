<template>
  <button
    :class="['button', {'active': isOpened}]"
    @click="toggle"
  >
    <span class="text">{{isOpened ? "Hide" : "View"}} {{entityName}}</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from "../../icons";

export default {
  components: {
    icon
  },
  props: {
    entityName: {
      type: String,
      default: "issues"
    }
  },
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      this.$emit("toggle", this.isOpened);
    }
  }
};
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
