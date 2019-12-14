import symmetricDifference from '../../src/array/symmetricDifference';

describe('test symmetricDifference', () => {
  it('test number array', done => {
    const ret = symmetricDifference([1, 2, 3], [1, 2, 4]);
    expect(ret).toEqual([3, 4]);
    done();
  });
});
