<template>
  <form role="form" @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-xs-12">
        <div class="form-group">
          <label class="sr-only" for="hashtag">Hashtag</label>

          <div class="input-group">
            <div class="input-group-addon">#</div>
            <input type="text" class="form-control" id="hashtag" placeholder="suse" v-model="hashtag">
            <div class="input-group-btn">
              <button type="submit" class="btn btn-primary">
                <span v-if="!loading">Search</span>
                <i class="fa fa-spinner fa-spin" aria-hidden="true" v-if="loading"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
  export default {
    props: ['loading'],

    data() {
      return {
        hashtag: '',
      };
    },

    methods: {
      onSubmit() {
        if (!this.hashtag || this.loading) {
          return;
        }

        this.$emit('submit', this.hashtag);
      },
    },
  };
</script>
