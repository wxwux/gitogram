<template>
  <div class="c-friend">
    <user
      src="https://picsum.photos/300/300"
      username="User Friend"
      size="big"
    />
    <x-button
      theme="green"
      size="big"
    >Watch</x-button>
  </div>
</template>

<script>
import { user } from "../user";
import { button } from "../button";

export default {
  name: "Friend",
  components: {
    user,
    xButton: button
  }
};

</script>

<style lang="scss" scoped src="./friend.scss"></style>
