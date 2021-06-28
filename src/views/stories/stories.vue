<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push({name: 'feeds'})">
          <logo white />
        </button>
        <button class="close-btn" @click="$router.push({name: 'feeds'})">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider
        :initialSlideId="Number($route.params.initialSlideId)"
      />
    </div>
  </div>
</template>

<script>
import { logo } from "../../components/logo";
import { icon } from "../../icons";
import { storiesSlider } from "../../components/storiesSlider";

export default {
  name: "Stories",
  components: { logo, icon, storiesSlider }
};

</script>

<style lang="scss" scoped src="./stories.scss"></style>
