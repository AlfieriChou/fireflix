import deepMapKeys from '../../src/object/deepMapKeys';

describe('deepMapKeys', () => {
  it('object', done => {
    const obj = {
      foo: '1',
      nested: {
        child: {
          a: 1,
        },
      },
    };
    const upperKeysObj = deepMapKeys(obj, (key: string) => key.toUpperCase());
    expect(upperKeysObj).toEqual({ FOO: '1', NESTED: { CHILD: { A: 1 } } });
    done();
  });

  it('array', done => {
    const arr = [
      {
        abc: ['hello'],
      },
    ];
    const upperKeysArr = deepMapKeys(arr, (key: string) => key.toUpperCase());
    expect(upperKeysArr).toEqual([{ ABC: ['hello'] }]);
    done();
  });
});
