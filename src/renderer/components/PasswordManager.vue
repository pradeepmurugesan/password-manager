<template>
  <div>  
    <b-form>
        <b-form-input id="plainText"
                        type="text"
                        v-model="plain"
                        placeholder="Text"/>

        <b-form-input type="password" id="secret" class="secret"
                        v-model="secret"
                        placeholder="Secret"/>


    <div class="mt-3">
        <b-button variant="success" @click="encrypt()">
            Encrypt
        </b-button>

        <b-button variant="primary" @click="decrypt()">
            Decrypt
        </b-button>

        <b-button variant="danger" @click="reset()">
            Reset
        </b-button>
    </div>

    </b-form>
    <div v-if="result" class="mt-3 result">
        <b-row>
            <b-col cols="9">
                {{ result }}
            </b-col>
            <b-col cols="2">
            <span v-if="encrypted">
                <SaveModal :result="result" />
            </span>
            </b-col>
            <b-col cols="1"></b-col>
        
        </b-row>
    </div>
    <ExisingPasswords/>
  </div>
</template>
<script>
    import {EncryptDecrypt} from '../utils/encrypt-decrypt'
    import SaveModal from './SaveModal.vue'
    import ExisingPasswords from './ExistingPasswords.vue'

    export default {

      data () {
        return {visible: false, text: '', plain: '', secret: '', result: '', encrypted: false}
      },
      components: {
        SaveModal,
        ExisingPasswords
      },
      methods: {
        decrypt: function decrypt () {
          this.encrypted = false
          const e = new EncryptDecrypt()
          this.result = e.decrypt(this.plain, this.secret)
        },
        encrypt: function encrypt () {
          this.encrypted = true
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