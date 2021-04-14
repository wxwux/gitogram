<template>
  <div class="c-user">
    <div class="avatar">
      <avatar
        :src="src"
        :username="username"
      />
    </div>
    <div class="username">{{username}}</div>
  </div>
</template>

<script>
import { avatar } from "../avatar";

const sizes = {
  SMALL: "small",
  MEDIUM: "medium"
};

export default {
  name: "User",
  components: {
    avatar
  },
  props: {
    src: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    view: {
      type: String,
      default: sizes.SMALL,
      validator(value) {
        return Object.keys(sizes).map((key) => sizes[key]).includes(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped src="./user.scss"></style>
