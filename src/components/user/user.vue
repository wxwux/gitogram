<template>
  <div
    :class="['c-user', sizeClass]"
  >
    <div class="avatar">
      <avatar
        :src="src"
        :username="username"
      />
    </div>
    <div class="data">
      <div class="username">{{username}}</div>
      <div class="type" v-if="type.length">{{type.toLowerCase()}}</div>
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { sizes } from "./enums";

export default {
  name: "User",
  components: {
    avatar
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: sizes.small,
      validator(value) {
        return Object.keys(sizes).map((key) => sizes[key]).includes(value);
      }
    }
  },
  data() {
    return {
      sizeClass: `size-${this.size}`
    };
  }
};
</script>

<style lang="scss" scoped src="./user.scss"></style>
