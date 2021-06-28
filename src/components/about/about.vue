<template>
  <div class="c-user">
    <div class="avatar">
      <avatar
        :src="userAvatar"
        :username="login"
      />
    </div>
    <div class="info">
      <div class="header">
        <div class="username">{{login}}</div>
        <ul class="stats">
          <li class="stats-item">
            <span class="stats-int">{{followers}}</span>
            <span class="stats-title">followers</span>
          </li>
          <li class="stats-item">
            <router-link :to="{name: 'following'}" class="watchers">
              <span class="stats-int">{{following}}</span>
              <span class="stats-title">following</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="data">
        <p>
          {{username}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { button } from "../button";

export default {
  name: "About",
  components: {
    avatar,
    xButton: button
  },
  props: {
    login: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
    },
    userAvatar: {
      type: String,
      required: true
    },
    following: {
      type: Number,
      required: true
    },
    followers: {
      type: Number,
      required: true
    }
  }
};

</script>

<style lang="scss" scoped src="./about.scss"></style>
