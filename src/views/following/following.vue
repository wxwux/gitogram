<template>
  <div class="x-container">
    <ul class="followers">
      <li
        v-for="followerItem in followers"
        :key="followerItem.id"
        class="followee"
      >
        <follower
          :username="followerItem.full_name"
          :avatar="followerItem.owner.avatar_url"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { follower } from "../../components/follower";

export default {
  components: {
    follower
  },
  methods: {
    ...mapActions({
      fetchFollowers: "starred/fetchStarred"
    })
  },
  computed: {
    ...mapState({
      followers: (state) => state.starred.data
    })
  },
  created() {
    this.fetchFollowers();
  }
};
</script>

<style lang="scss" scoped src="./following.scss"></style>
