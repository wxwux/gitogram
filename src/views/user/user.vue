<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>
        <div class="user">
          <div class="avatar">
            <avatar
              src="https://picsum.photos/200/200"
              username="New User"
            />
          </div>
          <div class="info">
            <div class="header">
              <div class="username">Jacob West</div>
              <x-button>Edit Profile</x-button>
            </div>
            <div class="data">
              <div class="data-item">Digital goodies designer.</div>
              <div class="data-item">Everything is designed.</div>
            </div>
          </div>
        </div>
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

export default {
  name: "User",
  components: {
    xHeader: header,
    xButton: button,
    topLine,
    avatar,
    post
  }
};

</script>

<style src="./user.scss" lang="scss" scoped></style>
