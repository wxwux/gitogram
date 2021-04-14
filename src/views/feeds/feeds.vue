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
    <ul class="feeds">
      <li class="feeds-item" v-for="feedItem in feeds" :key="feedItem.id">
        <feed
          :userpic="feedItem.user.avatar"
          :username="feedItem.user.name"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { header } from "../../components/header";
import { topLine } from "../../components/topLine";
import { storyUserItem } from "../../components/storyUserItem";
import { feed } from "../../components/feed";

const users = Array.from({ length: 8 }, () => ({
  avatar: "https://picsum.photos/200/200",
  name: "John Doe"
}));

const feeds = Array.from({ length: 8 }, () => ({
  id: Math.random() * 1000,
  user: {
    avatar: "https://picsum.photos/200/200",
    name: "John Doe"
  }
}));

export default {
  name: "Feeds",
  data() {
    return {
      users,
      feeds
    };
  },
  components: {
    storyUserItem,
    xHeader: header,
    topLine,
    feed
  }
};

</script>

<style lang="scss" src="./feeds.scss" scoped></style>
