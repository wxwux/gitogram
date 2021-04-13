<template>
  <header class="header">
    <a href="#" class="logo">GitStagram</a>
    <div class="icons">
      <icon />
    </div>
  </header>
</template>

<script>

import { icon } from "../../icons";

export default {
  name: "Header",
  components: {
    icon,
  },
};
</script>
