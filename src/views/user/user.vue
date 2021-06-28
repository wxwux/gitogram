<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <x-header></x-header>
      </template>
    </top-line>
  </div>
  <div class="x-container container">
    <div class="wrapper">
      <div class="user">
        <div class="title">My profile</div>
        <about
          v-if="user.login"
          :username="user.name"
          :login="user.login"
          :user-avatar="user.avatar_url"
          :followers="user.followers"
          :following="followingQty"
        />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { header } from "../../components/header";
import { topLine } from "../../components/topLine";
import { avatar } from "../../components/avatar";
import { button } from "../../components/button";
import { about } from "../../components/about";

export default {
  name: "User",
  components: {
    xHeader: header,
    xButton: button,
    topLine,
    avatar,
    about
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data,
    }),
    ...mapGetters({
      followingQty: "starred/getFollowingQty"
    }),
  },
  methods: {
    ...mapActions({
      fetchStarred: "starred/fetchStarred",
    })
  },
  created() {
    this.fetchStarred();
  }
};

</script>

<style src="./user.scss" lang="scss" scoped></style>
