import camelizeKeys from '../../src/lodash/camelizeKeys';

interface ICamelObject {
  [s: string]: any
}

// eslint-disable-next-line no-undef
describe('test camelizeKeys!!！', () => {
  // eslint-disable-next-line no-undef
  it('object!!', done => {
    const testObj: ICamelObject = {
      hello_world: 'test',
    };
    const camelizeObj = camelizeKeys(testObj);
    // eslint-disable-next-line no-undef
    expect(camelizeObj).toMatchObject({
      helloWorld: 'test',
    });
    done();
  });

  // eslint-disable-next-line no-undef
  it('array!!', done => {
    const testObj: ICamelObject[] = [
      {
        hello_world: 'test',
      },
    ];
    const camelizeObj = camelizeKeys(testObj);
    // eslint-disable-next-line no-undef
    expect(camelizeObj).toMatchObject([
      {
        helloWorld: 'test',
      },
    ]);
    done();
  });
});
