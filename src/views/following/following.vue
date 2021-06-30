<template>
  <div class="c-following">
    <div class="loader" v-if="loading">
      <spinner />
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <template v-else>
      <div class="header">
        <page-header
          :title="pageTitle"
          :qty="subscriptions.length"
        />
      </div>
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
            :type="subscription.owner.type"
            @button-pressed="changeSubscription(subscription.id)"
          />
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { subscription } from "../../components/subscription";
import { pageHeader } from "../../components/pageHeader";
import { spinner } from "../../components/spinner";

export default {
  components: {
    subscription,
    pageHeader,
    spinner
  },
  props: {
    pageTitle: String
  },
  data() {
    return {
      loading: false,
      error: null
    };
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
  async created() {
    this.loading = true;
    try {
      await this.fetchSubscription();
    } catch (e) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped src="./following.scss"></style>
