<template>
  <div class="c-story-post-item">
    <div class="progress">
      <x-progress :segments="5" />
    </div>
    <div class="content">
      <div class="header">
        <user
          username="John Doe"
          src="https://picsum.photos/200/200"
        />
      </div>
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at, beatae deserunt distinctio dolore facilis ipsum magni nam nemo neque nobis numquam quae quia, quidem quod rem, tenetur totam voluptatem!
        </p>
      </div>
      <div class="button">
        <x-button size="big" theme="green">watch</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from "../user";
import { button } from "../button";
import { progress } from "../progress";

export default {
  name: "UserStoryItem",
  components: { user, xButton: button, xProgress: progress }
};

</script>

<style lang="scss" scoped src="./storyPostItem.scss"></style>
