<template>
  <div class="mt-3">
        <b-table striped hover :items="passwords"></b-table>
    </div>
</template>
<script>
import {FileUtils} from '../utils/file-utils'

export default {
  name: 'ExistingPasswords',
  data () {
    const passwords = this.loadData()
    return {passwords}
  },
  methods: {
    loadData: function loadData () {
      const fileUtil = new FileUtils()
      const p = fileUtil.readAsArray()
      console.log(p)
      return p || []
    }
  }
}
</script>
