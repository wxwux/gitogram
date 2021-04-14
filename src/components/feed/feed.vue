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
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { user } from "../user";
import { stats } from "../stats";

export default {
  name: "Feed",
  components: {
    avatar, user, stats
  },
  props: {
    userpic: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
};

</script>

<style lang="scss" scoped src="./feed.scss"></style>
