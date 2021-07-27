<template>
  <div class="c-progress" :class="{ active }">
    <div class="indicator" ref="indicator"></div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  methods: {
    emitFinishEvent() {
      this.$emit("onFinish");
    },
  },
  mounted() {
    this.$refs.indicator.addEventListener("transitionend", this.emitFinishEvent);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener("transitionend", this.emitFinishEvent);
  }
};
</script>

<style lang="scss" scoped src="./progress.scss"></style>
