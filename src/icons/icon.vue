<template>
  <component :is="name" />
</template>

<script>
import { home, star } from "./icons";
import * as icons from "./icons";

export default {
  name: "Icon",
  components: {
    home, star
  },
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(icons).includes(value);
      }
    }
  },
};
</script>
