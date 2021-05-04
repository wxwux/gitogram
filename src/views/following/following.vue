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
          :following="subscription.following"
          @button-pressed="changeSubscription(subscription.id)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { subscription } from "../../components/subscription";

export default {
  components: {
    subscription
  },
  computed: {
    ...mapState({
      subscriptions: (state) => state.starred.data
    }),
    ...mapGetters({
      getStarredRepo: "starred/getStarredRepo"
    })
  },
  methods: {
    ...mapActions({
      fetchSubscription: "starred/fetchStarred",
      starRepo: "starred/starRepo",
      unStarRepo: "starred/unStarRepo"
    }),
    changeSubscription(id) {
      const { following } = this.getStarredRepo(id);

      if (following) {
        this.unStarRepo(id);
      } else {
        this.starRepo(id);
      }
    }
  },
  created() {
    this.fetchSubscription();
  }
};
</script>

<style lang="scss" scoped src="./following.scss"></style>
