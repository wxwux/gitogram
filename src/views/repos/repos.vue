<template>
  <div class="x-container">
    <ul class="posts" v-if="repos.length">
      <li class="post-item"
          v-for="repo in publicRepos"
          :key="repo.id"
      >
        <post
          :title="repo.name"
          :description="repo.description"
          :forks="repo.forks"
          :stars="repo.stargazers_count"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { post } from "../../components/post";

export default {
  name: "User",
  components: {
    post,
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos.data
    }),
    publicRepos() {
      return this.repos.filter((repo) => repo.private === false);
    }
  },
  methods: {
    ...mapActions({
      fetchRepos: "repos/fetchRepos"
    })
  },
  created() {
    this.fetchRepos();
  }
};

</script>

<style lang="scss" src="./repos.scss" scoped></style>
