<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>
        <about />
      </template>
    </top-line>
  </div>
  <div class="x-container">
    <div class="friends-container">
      <ul class="friends">
        <li class="friends-item" v-for="n in 10" :key="n">
          <friend />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { topLine } from "../../components/topLine";
import { header } from "../../components/header";
import { about } from "../../components/about";
import { friend } from "../../components/friend";

export default {
  name: "Friends",
  components: {
    topLine,
    xHeader: header,
    about,
    friend
  }
};

</script>

<style src="./friends.scss" lang="scss" scoped></style>
