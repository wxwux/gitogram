<template>
  <div class="c-repos">
    <div class="loader" v-if="loading">
      <spinner />
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <template v-else>
      <div class="header">
        <page-header :title="pageTitle" :qty="publicRepos.length" />
      </div>
      <ul class="posts">
        <li class="post-item" v-for="repo in publicRepos" :key="repo.id">
          <repo-info
            :title="repo.name"
            :description="repo.description"
            :forks="repo.forks"
            :stars="repo.stargazers_count"
          />
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { post } from "../../components/post";
import { repoInfo } from "../../components/repoInfo";
import { pageHeader } from "../../components/pageHeader";
import { spinner } from "../../components/spinner";

export default {
  name: "User",
  components: {
    repoInfo,
    post,
    pageHeader,
    spinner
  },
  props: {
    pageTitle: String,
  },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos.data,
    }),
    publicRepos() {
      return this.repos
        .filter((repo) => repo.private === false)
        .sort((a, b) => {
          const comparator = (item) => item.stargazers_count + item.forks;
          return comparator(b) - comparator(a);
        });
    },
  },
  methods: {
    ...mapActions({
      fetchRepos: "repos/fetchRepos",
    }),
  },
  async created() {
    this.loading = true;
    try {
      await this.fetchRepos();
    } catch (e) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" src="./repos.scss" scoped></style>
