<template>
  <div class="c-story-post-item" :class="{active: active}">
    <div class="stories-container">
      <div class="header">
        <div class="progress"> </div>
        <div class="user">
        </div>
      </div>
      <div class="content">
      </div>
      <div class="button">
      </div>
    </div>
    <template>
    </template>
  </div>
</template>

<script>
import { user } from "../user";
import { button } from "../button";
import { progress } from "../progress";
import { icon } from "../../icons";
import { placeholder } from "../placeholder";
import { spinner } from "../spinner";

export default {
  name: "StoryUserItem",
  components: {
    user,
    xButton: button,
    xProgress: progress,
    icon,
    placeholder,
    spinner
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    buttonsShown: {
      type: Array,
      default: () => ["next", "prev"],
      validator(value) {
        return value.every((item) => item === "next" || item === "prev");
      }
    }
  }
};

</script>

<style lang="scss" scoped src="./storyPostItem.scss"></style>
