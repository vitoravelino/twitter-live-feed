<style lang="scss">
  .lf-tweet {
    background-color: #fff;
    border-bottom: 1px solid #e1e8ed;
    padding: 9px 12px;

    &__avatar {
      border-radius: 5px;
      height: 48px;
      margin-top: 3px;
      width: 48px;
    }

    &__fullname {
      font-size: 14px;
    }

    &__username {
      color: #8899a6;
      font-size: 13px;
    }
  }
</style>

<template>
  <li class="lf-tweet">
    <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object lf-tweet__avatar" :src="profileAvatar">
        </a>
      </div>
      <div class="media-body">
        <strong class="media-heading lf-tweet__fullname">{{ tweet.user.name }}</strong>
        <span class="lf-tweet__username">
          @{{ tweet.user.screen_name }}
        </span>
        <p v-html="parsedTweet"></p>
      </div>
    </div>
  </li>
</template>

<script>
  import twitter from 'twitter-text';

  export default {
    props: ['tweet'],

    computed: {
      parsedTweet() {
        return twitter.autoLink(this.tweet.text);
      },

      profileAvatar() {
        return this.tweet.user.profile_image_url.replace('normal', 'bigger');
      },
    },
  };
</script>
