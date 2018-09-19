<template>
<b-row> 
    <b-container class="bv-example-row header">
        <b-row>
            <b-col></b-col>
            <b-col cols="10">
                <h3>Password Manager</h3>
                <hr class="my-4">

                <b-form>
                    <b-form-input id="plainText"
                                    type="text"
                                    v-model="plain"
                                    placeholder="Text"/>

                    <b-form-input type="password" id="secret" class="secret"
                                    v-model="secret"
                                    placeholder="Secret"/>

                    <pre class="mt-3">{{ encrypted }}</pre>

                    <b-button variant="success" @click="encrypt()">
                        Encrypt
                    </b-button>

                    <b-button variant="primary" @click="decrypt()">
                        Decrypt
                    </b-button>

                    <b-button variant="danger" @click="reset()">
                        Reset
                    </b-button>

                </b-form>
                <div v-if="result" class="mt-3 result">
                    <b-row>
                        <b-col cols="9">
                            {{ result }}
                        </b-col>
                        <b-col cols="2">
                            <span>
                        <b-button size="sm" variant="success">Save</b-button>
                    </span>
                        </b-col>
                        <b-col cols="1"></b-col>
                    
                    </b-row>
                </div>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</b-row>
</template>
<script>
    import {EncryptDecrypt} from '../utils/encrypt-decrypt'

    export default {

      data () {
        return {visible: false, title: 'Check me', text: '', plain: '', secret: '', result: '', encrypted: ''}
      },
      methods: {
        decrypt: function decrypt () {
          const e = new EncryptDecrypt()
          this.result = e.deCrypt(this.plain, this.secret)
        },
        encrypt: function encrypt () {
          const e = new EncryptDecrypt()
          this.result = e.encrypt(this.plain, this.secret)
        },
        reset: function reset () {
          this.result = ''
          this.plain = ''
          this.secret = ''
        }
      }
    }
</script>

<style src="./style.css"></style>