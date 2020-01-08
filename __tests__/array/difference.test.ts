import { symmetricDifference, uniqueSymmetricDifference } from '../../src/array/difference';

describe('test difference', () => {
  it('symmetricDifference', done => {
    const ret = symmetricDifference([1, 2, 3], [1, 2, 4]);
    expect(ret).toEqual([3, 4]);
    done();
  });

  it('uniqueSymmetricDifference', done => {
    const ret = uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]);
    expect(ret).toEqual([2, 3]);
    done();
  });
});
