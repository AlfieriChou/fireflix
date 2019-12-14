import stringPermutations from '../../src/combination/stringPermutation';

describe('test string permutation', () => {
  it('permutation length === 1', done => {
    const ret = stringPermutations('a');
    expect(ret).toEqual(['a']);
    done();
  });
  it('permutation length === 2', done => {
    const ret = stringPermutations('ab');
    expect(ret).toEqual(['ab', 'ba']);
    done();
  });
  it('permutation length > 2', done => {
    const ret = stringPermutations('abc');
    expect(ret).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    done();
  });
});
