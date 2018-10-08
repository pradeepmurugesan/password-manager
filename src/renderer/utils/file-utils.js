import fs from 'fs'
import os from 'os'
import electron from 'electron'
import path from 'path'

export class FileUtils {
  write (data) {
    try {
      const line = JSON.stringify(data) + os.EOL
      fs.appendFileSync(this.getFilePath(), line, 'UTF-8')
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  read () {
    try {
      const contents = fs.readFileSync(this.getFilePath(), 'utf8')
      console.log(contents)
      return contents
    } catch (e) {
      console.error(e)
    }
  }

  readAsArray () {
    try {
      const contents = fs.readFileSync(this.getFilePath(), 'utf8')
      console.log(contents)
      return contents.split(os.EOL).filter(password => password !== '').map(password => JSON.parse(password))
    } catch (e) {
      console.error(e)
    }
  }

  getFilePath () {
    const BASE_PATH = (electron.app || electron.remote.app).getPath('userData')
    console.log(BASE_PATH)
    return BASE_PATH + path.sep + 'passwords.txt'
  }
}
