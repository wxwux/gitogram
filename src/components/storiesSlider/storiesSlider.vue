<template>
  <div class="c-stories-slider">
    <div class="x-container">
      <div class="stories-container">
        <pre>{{initialSlideId}}</pre>
        <ul
          class="stories"
          ref="slider"
        >
          <li
            class="stories-item"
            ref="item"
            v-for="({
              id, owner, readme, following
            }, ndx) in trendings"
            :key="id"
          >
            <story-post-item
              :user-avatar="owner.avatar_url"
              :username="owner.login"
              :content="readme"
              :active="ndx === index"
              :following="following"
              :loading="ndx === index && loading"
              :buttons-shown="activeBtns"
              @next="handleSlide(index + 1)"
              @prev="handleSlide(index - 1)"
              @followTheRepo="starRepo(id)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { storyPostItem } from "../storyPostItem";

export default {
  components: { storyPostItem },
  props: {
    initialSlideId: {
      type: String,
    }
  },
  data() {
    return {
      index: 0,
      sliderPosition: 0,
      btnsShown: true,
      loading: false
    };
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns() {
      if (this.btnsShown === false) return [];
      if (this.index === 0) return ["next"];
      if (this.index === this.trendings.length - 1) return ["prev"];
      return ["next", "prev"];
    },
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchReadme: "trendings/fetchReadmeForRepo",
      starRepo: "starred/starRepo"
    }),
    async fetchReadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.index];
      await this.fetchReadme({ id, owner: owner.login, repo: name });
    },
    moveSlide(slideNum) {
      const { slider, item } = this.$refs;
      const slideWidth = parseInt(getComputedStyle(item).getPropertyValue("width"), 10);

      this.index = slideNum;
      this.sliderPosition = -(slideWidth * slideNum);

      slider.style.transform = `translateX(${this.sliderPosition}px)`;
    },
    async loadReadme() {
      this.btnsShown = false;
      this.loading = true;
      try {
        await this.fetchReadmeForActiveSlide();
      } catch (e) {
        console.log(e);
      } finally {
        this.btnsShown = true;
        this.loading = false;
      }
    },
    async handleSlide(slideNum) {
      this.moveSlide(slideNum);
      await this.loadReadme();
    }
  },
  async mounted() {
    if (this.initialSlideId) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlideId);
      await this.handleSlide(ndx);
    }

    await this.fetchTrendings();
    await this.loadReadme();
  },
};

</script>

<style lang="scss" scoped src="./storiesSlider.scss"></style>
