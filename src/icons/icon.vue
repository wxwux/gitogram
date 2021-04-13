<template>
  <div class="wrapper">
    <component :is="name" />
  </div>
</template>

<script>
import { home } from "./icons";

export default {
  name: "Icon",
  components: {
    home,
  },
  data() {
    return {
      name: "home",
    };
  },
};
</script>
