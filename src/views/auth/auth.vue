<template>
  <div class="c-auth">
    <div class="auth-content">
      <div class="logo">
        <logo />
      </div>
      <div class="enter">
        <x-button theme="green" size="big" @click="redirectToGhAuth">
          <span class="button-content">
            <span class="button-text"> Войти с помощью GitHub </span>
            <icon name="github" />
          </span>
        </x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { logo } from "../../components/logo";
import { button } from "../../components/button";
import { icon } from "../../icons";
import env from "../../../env";

export default {
  components: {
    logo,
    xButton: button,
    icon,
  },
  methods: {
    ...mapActions({
      redirectToGhAuth: "auth/getAuthCode",
      authUserByCode: "auth/authUserByCode",
    }),
  },
  async mounted() {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      const token = await this.authUserByCode(code);
      localStorage.setItem("token", token);
      this.$router.replace({ name: "feeds", query: { search: "" } });
      window.location = env.redirect_url;
    }
  },
};
</script>

<style lang="scss" src="./auth.scss" scoped></style>
