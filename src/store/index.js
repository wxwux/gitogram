import { createStore } from "vuex";
import {
  auth, user, starred, trendings, repos
} from "./modules";

export default createStore({
  modules: {
    auth,
    user,
    trendings,
    starred,
    repos
  },
});
