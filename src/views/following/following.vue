<template>
  <div class="x-container">
    <ul class="subscriptions">
      <li
        v-for="subscription in subscriptions"
        :key="subscription.id"
        class="subscription-item"
      >
        <subscription
          :username="subscription.full_name"
          :avatar="subscription.owner.avatar_url"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { subscription } from "../../components/subscription";

export default {
  components: {
    subscription
  },
  methods: {
    ...mapActions({
      fetchSubscription: "starred/fetchStarred"
    })
  },
  computed: {
    ...mapState({
      subscriptions: (state) => state.starred.data
    })
  },
  created() {
    this.fetchSubscription();
  }
};
</script>

<style lang="scss" scoped src="./following.scss"></style>
