<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <logo white />
        <icon name="close" class="close-btn" />
      </div>
    </header>
    <div class="content">
      <stories-slider />
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
