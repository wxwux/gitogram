<template>
 <div class="c-story-user-item">
   <button class="avatar" @click="$emit('storyPress')">
     <avatar
       :src="src"
       :username="username"
     />
   </button>
   <div class="username">{{username}}</div>
 </div>
</template>

<script>
import { avatar } from "../avatar";

export default {
  components: {
    avatar
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    }
  }
};

</script>

<style lang="scss" scoped src="./storyUserItem.scss"></style>
