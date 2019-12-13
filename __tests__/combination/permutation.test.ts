import permutation from '../../src/combination/permutation';

describe('test permutation', () => {
  it('permutation', done => {
    const testArray: Array<Array<Object>> = [
      [{ a: '1' }, { a: '2' }, { a: '3' }],
      [{ b: '4' }, { b: '5' }],
      [{ c: '6' }, { c: '7' }],
    ];
    const ret = permutation(testArray, []);
    expect(ret).toEqual([
      [{ a: '1' }, { b: '4' }, { c: '6' }],
      [{ a: '1' }, { b: '4' }, { c: '7' }],
      [{ a: '1' }, { b: '5' }, { c: '6' }],
      [{ a: '1' }, { b: '5' }, { c: '7' }],
      [{ a: '2' }, { b: '4' }, { c: '6' }],
      [{ a: '2' }, { b: '4' }, { c: '7' }],
      [{ a: '2' }, { b: '5' }, { c: '6' }],
      [{ a: '2' }, { b: '5' }, { c: '7' }],
      [{ a: '3' }, { b: '4' }, { c: '6' }],
      [{ a: '3' }, { b: '4' }, { c: '7' }],
      [{ a: '3' }, { b: '5' }, { c: '6' }],
      [{ a: '3' }, { b: '5' }, { c: '7' }],
    ]);
    done();
  });
});
