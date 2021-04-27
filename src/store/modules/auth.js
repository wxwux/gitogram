import * as api from "../../api";

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode() {
      api.auth.sendUserToAuthPage();
    },

    async authUserByCode(store, code) {
      const { data } = await api.auth.getAccessTokenByPersonalCode(code);
      return new URLSearchParams(data).get("access_token");
    }
  }
};
