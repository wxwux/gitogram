import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_STARRED: (state, starred) => {
      state.data = starred;
    },
    SET_ISSUES_TO_REPO: (state, { id, issues }) => {
      state.data = state.data.map((repo) => {
        const editedRepo = repo;
        if (repo.id === id) {
          editedRepo.issues = issues;
        }
        return editedRepo;
      });
    }
  },
  getters: {
    following: (state) => state.data.length
  },
  actions: {
    async fetchStarred({ commit }, payload) {
      console.log("starred");
      try {
        const { data } = await api.starred.getStarredRepos({ limit: payload?.limit });

        commit("SET_STARRED", data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchIssuesForRepo({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.getIssues({ owner, repo });

        console.log(id, data);

        commit("SET_ISSUES_TO_REPO", { id, issues: data });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  }
};
