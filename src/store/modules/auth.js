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

      // console.log("data", data);
      return data.token;
      // return new URLSearchParams(data).get("access_token");
    },
  }
};
