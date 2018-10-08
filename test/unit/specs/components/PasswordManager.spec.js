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

  it('can encrypt the data', () => {
    const wrapper = mount(PasswordManager, { stubs: {
      'ExisingPasswords': true
    }})

    const plainText = wrapper.find('#plainText')
    const secret = wrapper.find('#secret')
    const encryptButton = wrapper.find('.btn-success')

    plainText.setValue('Hello')
    secret.setValue('World')
    encryptButton.trigger('click')

    expect(wrapper.vm.$data.result).to.equal('ed03dd86e7')
    expect(wrapper.vm.$data.encrypted).to.equal(true)
  })

  it('can decrypt the data', () => {
    const wrapper = mount(PasswordManager, { stubs: {
      'ExisingPasswords': true
    }})

    const plainText = wrapper.find('#plainText')
    const secret = wrapper.find('#secret')
    const decryptButton = wrapper.find('.btn-primary')

    plainText.setValue('ed03dd86e7')
    secret.setValue('World')
    decryptButton.trigger('click')

    expect(wrapper.vm.$data.result).to.equal('Hello')
    expect(wrapper.vm.$data.encrypted).to.equal(false)
  })

  it('should reset the fields', () => {
    const wrapper = mount(PasswordManager, { stubs: {
      'ExisingPasswords': true
    }})

    const plainText = wrapper.find('#plainText')
    const secret = wrapper.find('#secret')
    const resetButton = wrapper.find('.btn-danger')

    plainText.setValue('ed03dd86e7')
    secret.setValue('World')
    resetButton.trigger('click')

    expect(wrapper.vm.$data.result).to.equal('')
    expect(wrapper.vm.$data.plain).to.equal('')
    expect(wrapper.vm.$data.secret).to.equal('')
  })
})
