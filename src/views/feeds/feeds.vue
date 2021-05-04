<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="{id, owner, name} in trendings" :key="id">
            <story-user-item
              :src="owner.avatar_url"
              :username="name"
              @storyPress="$router.push({name: 'stories'})"
            />
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="x-container">
    <ul class="feeds">
      <li class="feeds-item"
          v-for="{
              id, name, owner, description, stargazers_count, forks, issues, created_at
          } in starred"
          :key="id"
      >
        <feed
          :userpic="owner.avatar_url"
          :username="owner.login"
          :title="name"
          :description="description"
          :stars="stargazers_count"
          :forks="forks"
          :issues="issues"
          :date="new Date(created_at)"
          @openIssues="fetchIssues({id, owner: owner.login, repo: name})"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { header } from "../../components/header";
import { topLine } from "../../components/topLine";
import { storyUserItem } from "../../components/storyUserItem";
import { feed } from "../../components/feed";

export default {
  name: "Feeds",
  components: {
    storyUserItem,
    xHeader: header,
    topLine,
    feed
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchStarred: "starred/fetchStarred",
      fetchIssues: "starred/fetchIssuesForRepo"
    }),
    goTo(routeName) {
      // console.log(this.);
      // router.push({name: 'stories'})
    }
  },
  mounted() {
    this.fetchTrendings();
    this.fetchStarred({ limit: 10 });
  }
};

</script>

<style lang="scss" src="./feeds.scss" scoped></style>
