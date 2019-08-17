import { camelizeKeys, ICamelObject } from '../../src/lodash/camelizeKeys'

describe('test camelizeKeys!!！', () => {
  it('object!!', (done) => {
    const testObj: ICamelObject = {
      hello_world: 'test'
    }
    const camelizeObj = camelizeKeys(testObj)
    expect(camelizeObj).toMatchObject({
      helloWorld: 'test'
    })
    done()
  })

  it('array!!', (done) => {
    const testObj: ICamelObject[] = [{
      hello_world: 'test'
    }]
    const camelizeObj = camelizeKeys(testObj)
    expect(camelizeObj).toMatchObject([{
      helloWorld: 'test'
    }])
    done()
  })
})
