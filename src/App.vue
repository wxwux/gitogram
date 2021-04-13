<template>
  <x-header></x-header>
</template>

<script>
import { header } from "./components/header";

export default {
  name: "App",
  components: {
    xHeader: header,
  },
};

</script>

<style lang="scss" src="./app.scss"></style>
