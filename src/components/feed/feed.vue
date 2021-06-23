<template>
  <div class="c-feed">
    <div class="header">
      <user
        :src="userpic"
        :username="username"
      />
    </div>
    <div class="content">
      <div class="text">
        <h2 class="title">{{title}}</h2>
        <p>
          {{description}}
        </p>
      </div>
      <div class="stat">
        <stats :stars="stars" :forks="forks"/>
      </div>
    </div>
    <div class="toggler">
      <toggler @toggle="handleToggle"/>
    </div>
    <ul
      class="comments"
      v-if="issues?.length && listShown"
    >
      <li class="comments-item" v-for="issue in issues" :key="issue.id">
        <comment
          :username="issue.user.login"
          :text="issue.title"
        />
      </li>
    </ul>
    <div class="date">
      {{humanReadableDate}}
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { user } from "../user";
import { stats } from "../stats";
import { comment } from "../comment";
import { button } from "../button";
import { toggler } from "../toggler";

export default {
  name: "Feed",
  components: {
    avatar,
    user,
    stats,
    comment,
    toggler,
    xButton: button
  },
  data() {
    return {
      listShown: false
    };
  },
  props: {
    userpic: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    issues: {
      type: Array,
      default: () => []
    },
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    humanReadableDate() {
      const date = new Date(this.date);
      return date.toLocaleString("en-EN", { month: "short", day: "numeric" });
    }
  },
  methods: {
    handleToggle(isOpened) {
      this.listShown = isOpened;

      if (isOpened && this.issues.length === 0) {
        this.$emit("loadContent");
      }
    }
  }
};

</script>

<style lang="scss" scoped src="./feed.scss"></style>
