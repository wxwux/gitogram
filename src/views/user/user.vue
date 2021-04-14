<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>

      </template>
    </top-line>
  </div>
</template>

<script>
import { header } from "../../components/header";
import { topLine } from "../../components/topLine";

export default {
  name: "User",
  components: {
    xHeader: header,
    topLine
  }
};

</script>
