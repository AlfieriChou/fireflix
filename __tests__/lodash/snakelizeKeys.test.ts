import snakeKeys from '../../src/lodash/snakelizeKeys';

interface ISnakeObject {
  [s: string]: any
}

describe('test snakelizeKeys!!！', () => {
  it('object!!', done => {
    const testObj: ISnakeObject = {
      helloWorld: 'test',
    };
    const camelizeObj = snakeKeys(testObj);
    expect(camelizeObj).toMatchObject({
      hello_world: 'test',
    });
    done();
  });

  it('array!!', done => {
    const testObj: ISnakeObject[] = [
      {
        helloWorld: 'test',
      },
    ];
    const camelizeObj = snakeKeys(testObj);
    expect(camelizeObj).toMatchObject([
      {
        hello_world: 'test',
      },
    ]);
    done();
  });
});
