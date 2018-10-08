import {EncryptDecrypt} from '@/utils/encrypt-decrypt'

describe('Encrypt, Decrypt', () => {
  const text = 'hello'
  const secret = 'world'
  const encrypted = 'e499acbd6a'
  const encryptDecrypt = new EncryptDecrypt()
  it('should encrypt the data', () => {
    const e = encryptDecrypt.encrypt(text, secret)
    expect(e).to.equal(encrypted)
  })
  it('should decrypt the data', () => {
    const e = encryptDecrypt.decrypt(encrypted, secret)
    expect(e).to.equal(text)
  })
})
