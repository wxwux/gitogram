<template>
  <div class="c-progress">
    <div class="progress-item" v-for="segment in segments" :key="segment"></div>
  </div>
</template>

<script>
export default {
  props: {
    segments: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped src="./progress.scss"></style>
