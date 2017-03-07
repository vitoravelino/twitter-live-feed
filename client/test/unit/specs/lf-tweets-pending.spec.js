import Vue from 'vue';

import LfTweetsPending from '@/components/lf-tweets-pending';

function getRendered(propsData) {
  const Ctor = Vue.extend(LfTweetsPending);
  return new Ctor({ propsData }).$mount();
}

describe('lf-tweets-pending.vue', () => {
  it('should hide itself if no tweets', () => {
    const vm = getRendered({
      tweets: [],
    });
    expect(vm.$el.textContent).to.equal('');
  });

  it('should render with text in singular', () => {
    const vm = getRendered({
      tweets: [{}],
    });
    expect(vm.$el.textContent.trim()).to.equal('View 1 new Tweet');
  });

  it('should render with text in plural', () => {
    const vm = getRendered({
      tweets: [{}, {}],
    });
    expect(vm.$el.textContent.trim()).to.equal('View 2 new Tweets');
  });
});
