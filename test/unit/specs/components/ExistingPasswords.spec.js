import Vue from 'vue'
import ExistingPasswords from '@/components/ExistingPasswords'
import BootstrapVue from 'bootstrap-vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('ExistingPasswords.vue', () => {
  before(() => {
    Vue.use(BootstrapVue)
  })

  it('should call the loadData', () => {
    const loadData = sinon.spy()
    mount(ExistingPasswords, {methods: {loadData}})
    expect(loadData.called).to.equal(true)
    expect(loadData.callCount).to.equal(1)
  })
  it('should render the table with provided data', () => {
    const mockData = [{'url': 'mysite.com', 'name': 'mysite', 'value': 'c61cb93d20efe582'},
      {'url': 'http://SomeSite.com', 'name': 'some site', 'value': '6a79ea2999138373'}]
    const loadData = sinon.stub()
    loadData.returns(mockData)

    const wrapper = mount(ExistingPasswords, {methods: {loadData}})

    expect(loadData.called).to.equal(true)
    expect(loadData.callCount).to.equal(1)
    const tabbleBody = wrapper.find('tbody')
    expect(tabbleBody.findAll('tr').length).to.equal(2)
  })
})
