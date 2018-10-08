<template>
  <div>
    <b-modal id="save" ref="saveModal" title="Save Password" ok-only @ok="handleOk" ok-title="Save">
      <b-form novalidate>
        <b-form-group>
          <b-form-input id="url"
            type="text"
            v-model="url"
            placeholder="siteurl"
            required/>
        </b-form-group>
        <b-form-group>
          <b-form-input id="name"
            type="text"
            v-model="name"
            placeholder="name"/>
        </b-form-group>
        <b-form-group label="Encrypted Password:">
          <b-alert variant="secondary" show> {{result}}</b-alert>
        </b-form-group>                
      </b-form>
    </b-modal>
    <b-btn v-b-modal.save size="sm" variant="success">Save</b-btn>
  </div>
</template>
<script>
  import {FileUtils} from '../utils/file-utils'
  export default {
    name: 'SaveModal',
    props: {
      result: String,
      afterSave: Function
    },
    data () {
      return {
        url: '',
        name: ''
      }
    },
    methods: {
      handleOk (evt) {
        evt.preventDefault()
        const password = {
          url: this.url,
          name: this.name,
          value: this.result
        }
        const fileUtils = new FileUtils()
        fileUtils.write(password)
        this.$refs.saveModal.hide()
      }
    }
  }
</script>