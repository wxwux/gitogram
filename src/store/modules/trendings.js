import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings;
    },
    SET_README: (state, payload) => {
      state.data = state.data.map((repo) => {
        const editedRepo = repo;
        if (payload.id === editedRepo.id) {
          editedRepo.readme = payload.content;
        }
        return repo;
      });
    }
  },
  actions: {
    async fetchTrendings({ state, commit }) {
      if (state.data.length > 0) return;

      try {
        const { data } = await api.trendings.getTrendings();
        commit("SET_TRENDINGS", data.items);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchReadmeForRepo({ state, commit }, { id, owner, repo }) {
      const curRepo = state.data.find((trendingRepo) => trendingRepo.id === id);
      if (curRepo.readme !== undefined) return;
      try {
        const { data } = await api.readme.getReadme({ owner, repo });
        commit("SET_README", { id, content: data });
      } catch (e) {
        console.log(e);
        throw (e);
      }
    }
  }
};
