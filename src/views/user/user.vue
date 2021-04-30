<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>
        <about
          v-if="user.login"
          :username="user.name"
          :login="user.login"
          :user-avatar="user.avatar_url"
          :followers="user.followers"
          :following="following"
        />
      </template>
    </top-line>
  </div>
  <div class="x-container">
    <ul class="posts">
      <li class="post-item"
          v-for="repo in repos"
          :key="repo.id"
      >
        <post />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
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
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data,
      repos: (state) => state.repos.data
    }),
    ...mapGetters({
      following: "starred/following"
    })
  },
  methods: {
    ...mapActions({
      getUser: "user/getUser",
      fetchStarred: "starred/fetchStarred",
      fetchRepos: "repos/fetchRepos"
    })
  },
  created() {
    this.getUser();
    this.fetchStarred();
    this.fetchRepos();
  }
};

</script>

<style src="./user.scss" lang="scss" scoped></style>
