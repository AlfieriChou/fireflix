import { snakeKeys, ISnakeObject } from '../../src/lodash/snakelizeKeys'

describe('test snakelizeKeys!!！', () => {
  it('object!!', done => {
    const testObj: ISnakeObject = {
      helloWorld: 'test'
    }
    const camelizeObj = snakeKeys(testObj)
    expect(camelizeObj).toMatchObject({
      hello_world: 'test'
    })
    done()
  })

  it('array!!', done => {
    const testObj: ISnakeObject[] = [
      {
        helloWorld: 'test'
      }
    ]
    const camelizeObj = snakeKeys(testObj)
    expect(camelizeObj).toMatchObject([
      {
        hello_world: 'test'
      }
    ])
    done()
  })
})
