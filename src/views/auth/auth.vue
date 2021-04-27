<template>
  <div class="c-auth">
    <div class="auth-content">
      <div class="logo">
        <logo />
      </div>
      <div class="enter">
        <x-button
          theme="green"
          size="big"
          @click="getToken"
        >
          <span class="button-content">
            <span class="button-text">
              Войти с помощью GitHub
            </span>
            <icon name="github"/>
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

export default {
  components: {
    logo,
    xButton: button,
    icon
  },
  methods: {
    ...mapActions({
      getToken: "auth/getAuthCode",
      getAccessToken: "auth/authUserByCode"
    })
  },
  async mounted() {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      const token = await this.getAccessToken(code);
      localStorage.setItem("token", token);
      this.$router.replace({ to: "feeds" });
      window.location = "/";
    }
  }
};

</script>

<style lang="scss" src="./auth.scss" scoped></style>
