<template>
  <div class="c-avatar">
    <img
      :src="src"
      :alt="`${username}'s profile picture`"
      class="avatar-pic"
    >
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped src="./avatar.scss"></style>
