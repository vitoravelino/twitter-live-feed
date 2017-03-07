/* eslint-disable no-unused-expressions */

import Vue from 'vue';
import sinon from 'sinon';

import LfSearchForm from '@/components/lf-search-form';

const { set } = Vue;

function getRendered(propsData) {
  const Ctor = Vue.extend(LfSearchForm);
  return new Ctor({ propsData }).$mount();
}

describe('lf-search-form.vue', () => {
  it('should not emit submit if hashtag is empty', () => {
    const vm = getRendered({
      loading: false,
    });
    const cb = sinon.spy();

    vm.$on('submit', cb);
    vm.onSubmit();
    expect(cb).to.not.have.been.called;
  });

  it('should emit submit if hashtag not empty', () => {
    const vm = getRendered({
      loading: false,
    });
    const cb = sinon.spy();
    set(vm, 'hashtag', 'xpto');

    vm.$on('submit', cb);
    vm.onSubmit();
    expect(cb).to.have.been.called;
  });

  it('should not emit submit if loading', () => {
    const vm = getRendered({
      loading: true,
    });
    const cb = sinon.spy();
    set(vm, 'hashtag', 'xpto');

    vm.$on('submit', cb);
    vm.onSubmit();
    expect(cb).to.not.have.been.called;
  });

  it('should show .fa-spin if loading', () => {
    const vm = getRendered({
      loading: true,
    });
    const $spin = vm.$el.querySelector('.fa-spin');
    const $button = vm.$el.querySelector('button[type="submit"]');

    expect($button.textContent.trim()).to.equal('');
    expect($spin).to.not.be.null;
  });

  it('should show "Search" unless loading', () => {
    const vm = getRendered({
      loading: false,
    });
    const $spin = vm.$el.querySelector('.fa-spin');
    const $button = vm.$el.querySelector('button[type="submit"]');

    expect($spin).to.be.null;
    expect($button.textContent.trim()).to.equal('Search');
  });
});
