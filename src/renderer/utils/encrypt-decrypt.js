import {createCipher, createDecipher} from 'crypto'

export class EncryptDecrypt {
  encrypt (text, secret) {
    const cipher = createCipher('aes-256-ctr', secret)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
  }

  deCrypt (text, secret) {
    const decipher = createDecipher('aes-256-ctr', secret)
    let deCrypted = decipher.update(text, 'hex', 'utf8')
    return deCrypted
  }
}
