<style lang="scss">
  .lf-tweets-pending {
    background-color: #f5f8fa;
    border-top: 1px solid #e1e8ed;
    border-left: 1px solid #e1e8ed;
    border-right: 1px solid #e1e8ed;
    color: #0084B4;
    cursor: pointer;
    padding: 10px 0;
    text-align: center;

    &:hover {
      background-color: #e1e8ed;
    }
  }
</style>

<template>
  <div class="lf-tweets-pending" v-if="tweets.length" @click="$emit('show')">
    View {{tweets.length}} new {{tweetText}}
  </div>
</template>

<script>
  export default {
    props: ['tweets'],

    computed: {
      tweetText() {
        return this.tweets.length > 1 ? 'Tweets' : 'Tweet';
      },
    },
  };
</script>
