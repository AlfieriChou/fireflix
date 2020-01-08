import camelizeKeys from '../../src/lodash/camelizeKeys';

describe('test camelizeKeys!!！', () => {
  it('object!!', done => {
    const testObj: Object = {
      hello_world: 'test',
    };
    const camelizeObj = camelizeKeys(testObj);
    expect(camelizeObj).toMatchObject({
      helloWorld: 'test',
    });
    done();
  });

  it('array!!', done => {
    const testObj: Object[] = [
      {
        hello_world: 'test',
      },
    ];
    const camelizeObj = camelizeKeys(testObj);
    expect(camelizeObj).toMatchObject([
      {
        helloWorld: 'test',
      },
    ]);
    done();
  });
});
