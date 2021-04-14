<template>
  <div class="c-feed">
    <div class="header">
      <user
        :src="userpic"
        :username="username"
      />
    </div>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, facere, nulla? Asperiores
        dignissimos inventore labore nulla odit. Assumenda blanditiis cumque cupiditate distinctio
        earum fugiat itaque labore maiores molestiae, nesciunt, quo.
      </p>
    </div>
    <div class="stat">
      <stats />
    </div>
    <ul class="comments">
      <li class="comments-item" v-for="comment in comments" :key="comment.id">
        <comment
          :username="comment.username"
          :text="comment.comment"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { user } from "../user";
import { stats } from "../stats";
import { comment } from "../comment";

export default {
  name: "Feed",
  components: {
    avatar, user, stats, comment
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
    comments: {
      type: Array,
      default: () => []
    }
  }
};

</script>

<style lang="scss" scoped src="./feed.scss"></style>
