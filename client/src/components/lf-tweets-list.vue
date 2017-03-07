<style>
  .lf-tweets-list {
    list-style: none;
    padding: 0;
    border-top: 1px solid #e1e8ed;
    border-right: 1px solid #e1e8ed;
    border-left: 1px solid #e1e8ed;
  }
</style>

<template>
  <ul class="lf-tweets-list">
    <lf-tweet :tweet="tweet" v-for="tweet in tweets" :key="tweet.id"></lf-tweet>
  </ul>
</template>

<script>
  import LfTweet from './lf-tweet';

  export default {
    props: ['tweets'],

    components: {
      LfTweet,
    },
  };
</script>
