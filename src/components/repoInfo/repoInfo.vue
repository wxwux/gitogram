<template>
  <div class="c-repo-info">
    <div class="text">
      <h2 class="title">{{title}}</h2>
      <p>
        {{description}}
      </p>
    </div>
    <div class="stat" v-if="statIsShown">
      <stats :stars="stars" :forks="forks"/>
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
      required: true
    },
    description: {
      type: String
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
  },
  computed: {
    statIsShown() {
      return this.stars > 0 || this.forks > 0;
    }
  }
};
</script>

<style lang="scss" scoped src="./repoInfo.scss"></style>
