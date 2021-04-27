import * as api from "../../api/rest/trendings";

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings;
    }
  },
  actions: {
    async fetchTrendings({ commit }) {
      try {
        const { data } = await api.getTrendings();
        commit("SET_TRENDINGS", data.items);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }
};
