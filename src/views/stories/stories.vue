<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <logo white />
        <icon name="close" class="close-btn" />
      </div>
    </header>
    <div class="content">
      <div class="x-container">
        <ul class="stories">
          <li class="stories-item" v-for="n in 3" :key="n">
            <story-post-item />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { logo } from "../../components/logo";
import { icon } from "../../icons";
import { storyPostItem } from "../../components/storyPostItem";

export default {
  name: "Stories",
  components: { logo, icon, storyPostItem }
};

</script>

<style lang="scss" scoped src="./stories.scss"></style>
