<template>
  <div class="c-stories-slider">
    <div class="x-container">
      <div class="stories-container">
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
              :buttons-shown="activeBtns"
              @next="moveSlide('next')"
              @prev="moveSlide('prev')"
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
  data() {
    return {
      index: 0,
      sliderPosition: 0
    };
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    }),
    activeBtns() {
      if (this.index === 0) return ["next"];
      if (this.index === this.trendings.length - 1) return ["prev"];
      return ["next", "prev"];
    },
    activeSlideData() {
      const { id, owner, name } = this.trendings[this.index];
      return { id, owner: owner.login, repo: name };
    },
  },
  methods: {
    ...mapActions({
      fetchTrendings: "trendings/fetchTrendings",
      fetchReadme: "trendings/fetchReadmeForRepo",
      starRepo: "starred/starRepo"
    }),
    moveSlide(direction) {
      const { slider, item } = this.$refs;
      const slideWidth = parseInt(getComputedStyle(item).getPropertyValue("width"), 10);

      switch (direction) {
        case "next":
          this.index += 1;
          this.sliderPosition -= slideWidth;
          break;
        case "prev":
          this.index -= 1;
          this.sliderPosition += slideWidth;
          break;
        default: this.index += 1;
      }

      slider.style.transform = `translateX(${this.sliderPosition}px)`;

      const { id, owner, repo } = this.activeSlideData;
      this.fetchReadme({ id, owner, repo });
    }
  },
  async mounted() {
    await this.fetchTrendings();
    const { id, owner, repo } = this.activeSlideData;
    await this.fetchReadme({ id, owner, repo });
  },
};

</script>

<style lang="scss" scoped src="./storiesSlider.scss"></style>
