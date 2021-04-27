import * as api from "../../api";

export default {
  namespaced: true,
  actions: {
    getUser() {
      api.user.getUser();
    }
  }
};
