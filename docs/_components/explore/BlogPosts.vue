<!--
  This component displays Medium blog posts.
  It loads the titles from blog-posts.json which 
  must be updated on a regular basis.

  @params
    show: byCategories or byDates
-->

<template>
  <div>
    <div
      style="
        border-color: lightgrey;
        padding: 11px 7px 5px 15px;
        margin-top: -16px;
      "
    >
      <br />
      <!-- By Group -->
      <div
        v-show="show === 'byCategories'"
        v-for="(item, index) in medium"
        :key="index"
      >
        <div class="medium-heading">{{ item.tag }}</div>
        <div
          class="medium-link"
          v-for="(post, index) in item.posts"
          :key="index"
        >
          <a :href="post.url" target="api3_docs">{{ post.title }}</a>
          - <span class="date">{{ post.date }}</span>
        </div>
      </div>

      <!-- By Date -->
      <div>
        <div
          v-show="show === 'byDates'"
          class="medium-link"
          v-for="(post, i) in mediumByDate"
          :key="'A' + i"
        >
          <a :href="post.url" target="api3_docs">{{ post.title }}</a>
          - <span class="date">{{ post.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { medium } from './blog-posts.json';

export default {
  name: 'BlogPosts',
  props: ['show'], // byCategories or byDates
  data: () => ({
    medium: medium,
    mediumByDate: [],
  }),
  mounted() {
    console.log('---- MOUNTED BlogPosts -----' + this.show + '----------');
    this.arr = medium;
    this.arr.forEach((group) => {
      group.posts.forEach((post) => {
        this.mediumByDate.push(post);
      });
    });
    this.mediumByDate.sort(this.sortByDate);
  },
  methods: {
    sortByDate(a, b) {
      if (a.dt > b.dt) {
        return -1;
      }
      if (a.dt < b.dt) {
        return 1;
      }
      return 0;
    },
  },
};
</script>

<style>
.date {
  color: gray;
  font-size: x-small;
  font-weight: bold;
}
.medium-heading {
  color: gray;
  font-size: large;
  font-weight: bold;
  margin-bottom: 15px;
}
.medium-link {
  padding-left: 20px;
  padding-bottom: 10px;
}
</style>
