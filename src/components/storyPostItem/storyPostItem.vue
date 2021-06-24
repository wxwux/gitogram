<template>
  <div :class="['c-story-post-item', {active: active}]">
    <div class="stories-container">
      <div class="header">
        <div class="progress">
          <x-progress :segments="1" />
        </div>
        <div class="user">
          <user
            :username="username"
            :src="userAvatar"
          />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div v-if="content?.length" class="content-text" v-html="content"></div>
          <placeholder v-else :paragraphs="2"/>
        </div>
      </div>
      <div class="button">
        <x-button size="big" :theme="buttonTheme" @click="$emit('followTheRepo')">
          {{following ? 'Unfollow': 'Follow'}}
        </x-button>
      </div>
    </div>
    <template v-if="active">
      <button v-if="buttonsShown.includes('next')" class="btn btn-next" @click="$emit('next')">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button v-if="buttonsShown.includes('prev')" class="btn btn-prev" @click="$emit('prev')">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
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
    userAvatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    content: {
      type: String,
    },
    following: {
      type: Boolean
    },
    buttonsShown: {
      type: Array,
      default: () => ["next", "prev"],
      validator(value) {
        return value.every((item) => item === "next" || item === "prev");
      }
    }
  },
  computed: {
    buttonTheme() {
      return this.following === true ? "white" : "green";
    }
  }
};

</script>

<style lang="scss" scoped src="./storyPostItem.scss"></style>
