<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      getUser: "user/getUser"
    })
  },
  created() {
    if (this.$route.name !== "auth") {
      this.getUser();
    }
  }
};

</script>

<style lang="scss" src="./app.scss"></style>
