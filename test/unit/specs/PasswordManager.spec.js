import Vue from 'vue'
import PasswordManager from '@/components/PasswordManager'
import BootstrapVue from 'bootstrap-vue'
import { mount } from '@vue/test-utils'

describe('PasswordManager.vue', () => {
  before(() => {
    Vue.use(BootstrapVue)
  })

  it('should render the form details', () => {
    const wrapper = mount(PasswordManager, { stubs: {
      'ExisingPasswords': true
    }})

    expect(wrapper.contains('form')).to.equal(true)
    expect(wrapper.findAll('button').length).to.equal(3)
    expect(wrapper.findAll('input').length).to.equal(2)
  })
})
