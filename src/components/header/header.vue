<template>
  <header class="c-header">
    <logo />
    <div class="buttons">
      <div class="btn-item">
        <icon name="home" />
      </div>
      <div class="btn-item">
        <div class="avatar">
          <avatar
            src="https://picsum.photos/200/200"
            username="John Doe"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import { icon } from "../../icons";
import { logo } from "../logo";
import { avatar } from "../avatar";

export default {
  name: "Header",
  components: {
    icon, logo, avatar
  },
};
</script>

<style lang="scss" scoped src="./header.scss"></style>
