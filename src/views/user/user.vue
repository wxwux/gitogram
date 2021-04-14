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
    <ul class="posts">
      <li class="post-item" v-for="n in 12" :key="n">
        <post />
      </li>
    </ul>
  </div>
</template>

<script>
import { header } from "../../components/header";
import { topLine } from "../../components/topLine";
import { avatar } from "../../components/avatar";
import { button } from "../../components/button";
import { post } from "../../components/post";
import { about } from "../../components/about";

export default {
  name: "User",
  components: {
    xHeader: header,
    xButton: button,
    topLine,
    avatar,
    post,
    about
  }
};

</script>

<style src="./user.scss" lang="scss" scoped></style>
