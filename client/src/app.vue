<style>
  html, body {
    background-color: #f5f8fa;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 590px;
  }

  .lf-title {
    margin-bottom: 30px;
    text-align: center;
  }
</style>

<template>
  <div class="wrapper">
    <h1 class="lf-title">Twitter live feed</h1>

    <lf-search-form :loading="loading" @submit="onSubmit"></lf-search-form>
    <lf-tweets-pending :tweets="pendingTweets" @show="onShowPending"></lf-tweets-pending>
    <lf-tweets-list :tweets="tweets"></lf-tweets-list>
  </div>
</template>

<script>
  import Vue from 'vue';

  import LfSearchForm from './components/lf-search-form';
  import LfTweetsList from './components/lf-tweets-list';
  import LfTweetsPending from './components/lf-tweets-pending';

  import TweetsAPI from './api/tweets';

  const { set } = Vue;

  export default {
    name: 'app',

    data() {
      return {
        tweets: [],
        pendingTweets: [],
        loading: false,
      };
    },

    methods: {
      onShowPending() {
        const tweets = [
          ...this.pendingTweets,
          ...this.tweets,
        ];

        set(this, 'tweets', tweets);
        set(this, 'pendingTweets', []);
      },

      onSubmit(hashtag) {
        set(this, 'loading', true);
        set(this, 'pendingTweets', []);
        set(this, 'tweets', []);

        TweetsAPI.latest(hashtag).then((tweets) => {
          set(this, 'loading', false);
          set(this, 'tweets', tweets);
        });

        TweetsAPI.subscribe(hashtag, (tweet) => {
          const pendingTweets = [
            tweet,
            ...this.pendingTweets,
          ];

          set(this, 'pendingTweets', pendingTweets);
        });
      },
    },

    components: {
      LfSearchForm,
      LfTweetsList,
      LfTweetsPending,
    },
  };
</script>
