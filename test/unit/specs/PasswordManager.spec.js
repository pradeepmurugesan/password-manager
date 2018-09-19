import Vue from 'vue'
import PasswordManager from '@/components/PasswordManager'
import BootstrapVue from 'bootstrap-vue'

describe('PasswordManager.vue', () => {
  it('should render correct contents', () => {
    Vue.use(BootstrapVue)
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(PasswordManager)
    }).$mount()
    expect(vm.$el.querySelector('.header').textContent).to.contain('Password Manager')
  })
})
