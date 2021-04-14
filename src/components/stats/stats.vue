<template>
  <div class="c-stats">
    <div class="stats-item">
      <div class="title">
        <icon name="star"/>
        <div class="title-text">Stars</div>
      </div>
      <div class="counter">100</div>
    </div>
  </div>
</template>

<script>
import { icon } from "../../icons";

export default {
  name: "Stats",
  components: { icon },
};

</script>

<style lang="scss" scoped src="./stats.scss"></style>
