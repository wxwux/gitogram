<template>
  <header class="c-header">
    <logo @click="$router.push({ name: 'feeds' })" />
    <div class="buttons" v-if="hasUser">
      <button class="btn-item" @click="$router.push({ name: 'feeds' })">
        <icon name="home" />
      </button>
      <div class="btn-item">
        <button class="avatar" @click="$router.push({ name: 'user' })">
          <avatar :src="user.avatar_url" :username="user.login" />
        </button>
      </div>
      <div class="btn-item">
        <button @click="logout">logout</button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import { icon } from "../../icons";
import { logo } from "../logo";
import { avatar } from "../avatar";

export default {
  name: "Header",
  components: {
    icon,
    logo,
    avatar,
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
    ...mapGetters({
      hasUser: "user/hasUser",
    }),
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
      getUser: "user/getUser",
    }),
    logout() {
      localStorage.removeItem("token");
      this.$router.replace({ name: "auth" });
      window.location.reload();
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped src="./header.scss"></style>
