import snakeKeys from '../../src/lodash/snakelizeKeys';

interface ISnakeObject {
  [s: string]: any
}

// eslint-disable-next-line no-undef
describe('test snakelizeKeys!!！', () => {
  // eslint-disable-next-line no-undef
  it('object!!', done => {
    const testObj: ISnakeObject = {
      helloWorld: 'test',
    };
    const camelizeObj = snakeKeys(testObj);
    // eslint-disable-next-line no-undef
    expect(camelizeObj).toMatchObject({
      hello_world: 'test',
    });
    done();
  });

  // eslint-disable-next-line no-undef
  it('array!!', done => {
    const testObj: ISnakeObject[] = [
      {
        helloWorld: 'test',
      },
    ];
    const camelizeObj = snakeKeys(testObj);
    // eslint-disable-next-line no-undef
    expect(camelizeObj).toMatchObject([
      {
        hello_world: 'test',
      },
    ]);
    done();
  });
});
