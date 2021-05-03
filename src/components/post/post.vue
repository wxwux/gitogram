<template>
  <div class="c-post">
    <h3 class="title">{{title}}</h3>
    <div class="description">
      <p>{{description}}</p>
    </div>
    <div class="stats" v-if="showStats">
      <stats
        :forks="forks"
        :stars="stars"
      />
    </div>
  </div>
</template>

<script>
import { stats } from "../stats";

export default {
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      requried: true
    },
    description: {
      type: String,
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  },
  computed: {
    showStats() {
      return this.forks > 0 || this.stars > 0;
    }
  }
};

</script>

<style lang="scss" scoped src="./post.scss"></style>
