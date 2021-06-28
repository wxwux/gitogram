<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="{ id, owner, name } in trendings" :key="id">
            <story-user-item
              :src="owner.avatar_url"
              :username="name"
              @storyPress="$router.push({ name: 'stories', params: { initialSlideId: id } })"
            />
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="x-container">
    <div class="content-wrapper">
      <ul class="feeds">
        <li
          class="feeds-item"
          v-for="{
            id,
            name,
            owner,
            description,
            stargazers_count,
            forks,
            issues,
            created_at,
          } in starred"
          :key="id"
        >
          <feed
            :userpic="owner.avatar_url"
            :username="owner.login"
            :issues="issues?.data"
            :date="new Date(created_at)"
            :loading="issues?.loading"
            @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
          >
            <template #info>
              <repo-info
                :description="description"
                :title="name"
                :stars="stargazers_count"
                :forks="forks"
              />
            </template>
          </feed>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { header } from "../../components/header";
import { topLine } from "../../components/topLine";
import { storyUserItem } from "../../components/storyUserItem";
import { feed } from "../../components/feed";
import { repoInfo } from "../../components/repoInfo";

export default {
  name: "Feeds",
  components: {
    repoInfo,
    storyUserItem,
    xHeader: header,
    topLine,
    feed,
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchStarred: "starred/fetchStarred",
      fetchIssues: "starred/fetchIssuesForRepo",
    }),
    loadIssues({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo });
    },
  },
  mounted() {
    this.fetchTrendings();
    this.fetchStarred({ limit: 10 });
  },
};
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
