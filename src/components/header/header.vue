<template>
  <header class="c-header">
    <logo @click="$router.push({name: 'feeds'})" />
    <div class="buttons">
      <button class="btn-item" @click="$router.push({name: 'feeds'})">
        <icon name="home" />
      </button>
      <div class="btn-item">
        <button class="avatar" @click="$router.push({name: 'user'})">
          <avatar
            src="https://picsum.photos/200/200"
            username="John Doe"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>

import { icon } from "../../icons";
import { logo } from "../logo";
import { avatar } from "../avatar";
import Button from "../button/button";

export default {
  name: "Header",
  components: {
    Button,
    icon,
    logo,
    avatar
  },
};
</script>

<style lang="scss" scoped src="./header.scss"></style>
