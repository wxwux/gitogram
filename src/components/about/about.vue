<template>
  <div class="c-user">
    <div class="avatar">
      <avatar
        src="https://picsum.photos/200/200"
        username="New User"
      />
    </div>
    <div class="info">
      <div class="header">
        <div class="username">Jacob West</div>
        <x-button>Edit Profile</x-button>
      </div>
      <div class="data">
        <div class="data-item">Digital goodies designer.</div>
        <div class="data-item">Everything is designed.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { button } from "../button";

export default {
  name: "About",
  components: {
    avatar,
    xButton: button
  }
};

</script>

<style lang="scss" scoped src="./about.scss"></style>
