<template>
  <b-row> 
    <b-container class="bv-example-row header">
        <b-row>
            <b-col></b-col>
            <b-col cols="10">
                <h3>Password Manager</h3>
                <hr class="my-4">
                  <div id="app">
                    <router-view></router-view>
                  </div>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
  </b-row>
</template>

<script>
  export default {
    name: 'vue-demo'
  }
</script>

<style>
  /* CSS */
</style>
