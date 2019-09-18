import camelizeKeys from '../../src/lodash/camelizeKeys';

interface ICamelObject {
  [s: string]: any
}

describe('test camelizeKeys!!！', () => {
  it('object!!', done => {
    const testObj: ICamelObject = {
      hello_world: 'test',
    };
    const camelizeObj = camelizeKeys(testObj);
    expect(camelizeObj).toMatchObject({
      helloWorld: 'test',
    });
    done();
  });

  it('array!!', done => {
    const testObj: ICamelObject[] = [
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
