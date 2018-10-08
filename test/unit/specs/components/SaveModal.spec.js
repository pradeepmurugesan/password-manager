import Vue from 'vue'
import SaveModal from '@/components/SaveModal'
import BootstrapVue from 'bootstrap-vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('SaveModal.vue', () => {
  before(() => {
    Vue.use(BootstrapVue)
  })

  it('should render the form details', () => {
    const handleOkSpy = sinon.spy()
    const wrapper = mount(SaveModal, {methods: {handleOk: handleOkSpy}})

    const footer = wrapper.find('footer')
    expect(footer.findAll('button').length).to.equal(1)
    expect(wrapper.findAll('input').length).to.equal(2)
  })
})
