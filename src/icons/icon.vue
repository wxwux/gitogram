<template>
  <component :is="name" />
</template>

<script>
import { home } from "./icons";
import * as icons from "./icons";

export default {
  name: "Icon",
  components: {
    home,
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
