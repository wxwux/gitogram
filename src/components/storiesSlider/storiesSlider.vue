<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li
          class="stories-item"
          v-for="(trending, ndx) in trendings"
          :key="trending.id"
          ref="item"
        >
          <story-post-item
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :btnsShown="activeBtns"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
            @onFollowTheRepo="starRepo"
          />
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { storyPostItem } from "../storyPostItem";

export default {
  components: { storyPostItem },
  props: {
    initialSlide: {
      type: Number,
    },
  },
  data() {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true,
    };
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
    }),
    activeBtns() {
      if (this.btnsShown === false) return [];
      if (this.slideNdx === 0) return ["next"];
      if (this.slideNdx === this.trendings.length - 1) return ["prev"];
      return ["next", "prev"];
    },
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchReadme: "trendings/fetchReadme",
      starRepo: "trendings/starRepo",
    }),
    async fetchReadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.slideNdx];
      await this.fetchReadme({ id, owner: owner.login, repo: name });
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      };
    },
    moveSlider(slideNdx) {
      const { slider, item } = this.$refs;
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue("width"),
        10
      );

      this.slideNdx = slideNdx;
      this.sliderPosition = -(slideWidth * slideNdx);

      slider.style.transform = `translateX(${this.sliderPosition}px)`;
    },
    async loadReadme() {
      this.loading = true;
      this.btnsShown = false;
      try {
        await this.fetchReadmeForActiveSlide();
      } catch (e) {
        console.log(e);
        throw e;
      } finally {
        this.loading = false;
        this.btnsShown = true;
      }
    },
    async handleSlide(slideNdx) {
      this.moveSlider(slideNdx);
      await this.loadReadme();
    },
  },
  async mounted() {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      );
      await this.handleSlide(ndx);
    }

    await this.fetchTrendings();
    await this.loadReadme();
  },
};
</script>

<style lang="scss" scoped src="./storiesSlider.scss"></style>
