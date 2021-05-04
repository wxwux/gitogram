<template>
  <div class="c-subscription">
    <div class="user">
      <user :username="username" :src="avatar"  size="medium"/>
    </div>
    <div class="button">
      <x-button
        size="big"
        theme="green"
        hoverText="Unfollow"
        rubberish
      >
        Following
      </x-button>
    </div>
  </div>
</template>

<script>
import { user } from "../user";
import { button } from "../button";

export default {
  components: { user, xButton: button },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
};

</script>

<style lang="scss" scoped src="./subscription.scss"></style>
