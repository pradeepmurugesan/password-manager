import {FileUtils} from '@/utils/file-utils'

describe('FileUtils', () => {
  const fileUtils = new FileUtils()
  it('should be able to write and read from file', () => {
    const data = {'hello': 'world'}
    const anotherData = {'someother': 'data'}
    fileUtils.write(data)
    fileUtils.write(anotherData)
    const fileContents = fileUtils.readAsArray()
    expect(fileContents).to.deep.equal([data, anotherData])
  })
})
