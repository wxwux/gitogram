<template>
  <div class="c-feed">
    <div class="header">
      <user :src="userpic" :username="username" />
    </div>
    <div class="content">
      <slot name="info" />
    </div>
    <div class="toggler">
      <toggler @toggle="handleToggle" />
    </div>
    <div class="content-loader" v-if="loading">
      <content-loader />
    </div>
    <div class="comments-container" v-if="issues?.length && listShown">
      <ul class="comments">
        <li class="comments-item" v-for="issue in issues" :key="issue.id">
          <comment :username="issue.user.login" :text="issue.title" />
        </li>
      </ul>
    </div>
    <div class="date">
      {{ humanReadableDate }}
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { user } from "../user";
import { comment } from "../comment";
import { button } from "../button";
import { toggler } from "../toggler";
import { contentLoader } from "../contentLoader";

export default {
  name: "Feed",
  components: {
    avatar,
    user,
    comment,
    toggler,
    xButton: button,
    contentLoader
  },
  data() {
    return {
      listShown: false,
    };
  },
  props: {
    loading: {
      type: Boolean,
    },
    userpic: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    issues: {
      type: Array,
      default: () => [],
    },
    date: {
      type: Date,
      required: true,
    },
  },
  computed: {
    humanReadableDate() {
      const date = new Date(this.date);
      return date.toLocaleString("en-EN", { month: "short", day: "numeric" });
    },
  },
  methods: {
    handleToggle(isOpened) {
      this.listShown = isOpened;

      if (isOpened && this.issues.length === 0) {
        this.$emit("loadContent");
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./feed.scss"></style>
