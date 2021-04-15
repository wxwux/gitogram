<template>
  <div class="c-auth">
    <div class="auth-content">
      <div class="logo">
        <logo />
      </div>
      <div class="enter">
        <x-button theme="green" size="big">
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
import { logo } from "../../components/logo";
import { button } from "../../components/button";
import { icon } from "../../icons";

export default {
  components: {
    logo,
    xButton: button,
    icon
  }
};

</script>

<style lang="scss" src="./auth.scss" scoped></style>
