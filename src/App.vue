<template>
  <top-line>
    <template #headline>
      <x-header></x-header>
    </template>
    <template>

    </template>
  </top-line>
</template>

<script>
import { header } from "./components/header";
import { topLine } from "./components/topLine";

export default {
  name: "App",
  components: {
    xHeader: header,
    topLine,
  },
};

</script>

<style lang="scss" src="./app.scss"></style>
