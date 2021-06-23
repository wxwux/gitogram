<template>
  <div class="c-stats">
    <div class="stats-item">
      <div class="title">
        <icon name="star"/>
        <div class="title-text">Star</div>
      </div>
      <div class="counter">{{stars}}</div>
    </div>
    <div class="stats-item">
      <div class="title">
        <icon name="star"/>
        <div class="title-text">Forks</div>
      </div>
      <div class="counter">{{forks}}</div>
    </div>
  </div>
</template>

<script>
import { icon } from "../../icons";

export default {
  name: "Stats",
  components: { icon },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
};

</script>

<style lang="scss" scoped src="./stats.scss"></style>
