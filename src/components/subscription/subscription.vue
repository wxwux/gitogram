<template>
  <div class="c-subscription">
    <div class="user">
      <user :type="type" :username="username" :src="avatar"  size="medium"/>
    </div>
    <div class="button">
      <x-button
        :theme="following ? 'green' : 'white'"
        :hoverText="following ? 'Unfollow' : 'Follow'"
        rubberish
        @click="$emit('buttonPressed')"
      >
        {{following ? "Following" : "Unfollowed"}}
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
    type: {
      type: String,
      default: ""
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    following: {
      type: Boolean
    }
  }
};

</script>

<style lang="scss" scoped src="./subscription.scss"></style>
