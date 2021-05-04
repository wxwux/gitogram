<template>
  <div class="x-container">
    <ul class="posts">
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
      return this.repos
        .filter((repo) => repo.private === false)
        .sort((a, b) => {
          const comparator = (item) => item.stargazers_count + item.forks;
          return comparator(b) - comparator(a);
        });
    }
  },
  methods: {
    ...mapActions({
      fetchRepos: "repos/fetchRepos"
    })
  },
  created() {
    console.log("text");
    this.fetchRepos();
  },
  watch: {
    $route() {
      console.log("asda");
    }
  }
};

</script>

<style lang="scss" src="./repos.scss" scoped></style>
