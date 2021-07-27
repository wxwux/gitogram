<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <story-post-item />
    </div>
  </div>
</template>

<script>
import { storyPostItem } from "../storyPostItem";

export default {
  components: { storyPostItem },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
      };
    },
  }
};
</script>

<style lang="scss" scoped src="./storiesSlider.scss"></style>
