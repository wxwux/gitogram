<template>
  <div class="c-feed">
    <div class="header">
      <user
        :src="userpic"
        :username="username"
      />
    </div>
    <div class="content">
      <div class="text">
        <h2>{{title}}</h2>
        <p>
          {{description}}
        </p>
      </div>
      <div class="stat">
        <stats :stars="stars" :forks="forks"/>
      </div>
    </div>
    <toggler text="Open"></toggler>
<!--    <x-button @click="$emit('openIssues')">Открыть Issues</x-button>-->
    <ul class="comments" v-if="issues?.length">
      <li class="comments-item" v-for="issue in issues" :key="issue.id">
        <comment
          :username="issue.user.login"
          :text="issue.title"
        />
      </li>
    </ul>
    <div class="date">
      {{humanReadableDate}}
    </div>
  </div>
</template>

<script>
import { avatar } from "../avatar";
import { user } from "../user";
import { stats } from "../stats";
import { comment } from "../comment";
import { button } from "../button";
import { toggler } from "../toggler";

export default {
  name: "Feed",
  components: {
    avatar,
    user,
    stats,
    comment,
    toggler,
    xButton: button
  },
  props: {
    userpic: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    issues: {
      type: Array,
      default: () => []
    },
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    humanReadableDate() {
      // let month =
      const getMonthName = (monthNum) => {
        let monthName = "";
        switch (monthNum) {
          case 1: monthName = "January"; break;
          case 2: monthName = "February"; break;
          case 3: monthName = "March"; break;
          case 4: monthName = "April"; break;
          case 5: monthName = "May"; break;
          case 6: monthName = "June"; break;
          case 7: monthName = "July"; break;
          case 8: monthName = "August"; break;
          case 9: monthName = "September"; break;
          case 10: monthName = "October"; break;
          case 11: monthName = "November"; break;
          case 12: monthName = "December"; break;
          default: monthName = "January";
        }

        return monthName;
      };
      return `${getMonthName(this.date.getMonth() + 1)} ${this.date.getDay()}`;
    }
  }
};

</script>

<style lang="scss" scoped src="./feed.scss"></style>
