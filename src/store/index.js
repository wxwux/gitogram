import { createStore } from "vuex";
import {
  auth, user, starred, trendings, repos
} from "./modules";

export default createStore({
  getters: {
    getUnstarredOnly(state) {
      return state.trendings.data.filter((trendingRepo) => !state.starred.data.some((starredRepo) => trendingRepo.id === starredRepo.id));
    },
  },
  modules: {
    auth,
    user,
    trendings,
    starred,
    repos,
  },
});
