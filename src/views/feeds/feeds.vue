<template>
  <top-line>
    <template #headline>
      <x-header></x-header>
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="user in users" :key="user.name">
          <story-user-item
            :src="user.avatar"
            :username="user.name"
          />
        </li>
      </ul>
    </template>
  </top-line>
  <div class="x-container">

  </div>
</template>

<script>
import { header } from "../../components/header";
import { topLine } from "../../components/topLine";
import { storyUserItem } from "../../components/storyUserItem";

const users = Array.from({ length: 8 }, () => ({
  avatar: "https://picsum.photos/200/200",
  name: "John Doe"
}));

export default {
  name: "Feed",
  data() {
    return {
      users
    };
  },
  components: {
    storyUserItem,
    xHeader: header,
    topLine,
  },
};

</script>

<style lang="scss" src="./feeds.scss" scoped></style>
