import snakeKeys from '../../src/lodash/snakelizeKeys';

describe('test snakelizeKeys!!！', () => {
  it('object!!', done => {
    const testObj: Object = {
      helloWorld: 'test',
    };
    const camelizeObj = snakeKeys(testObj);
    expect(camelizeObj).toMatchObject({
      hello_world: 'test',
    });
    done();
  });

  it('array!!', done => {
    const testObj: Object[] = [
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
