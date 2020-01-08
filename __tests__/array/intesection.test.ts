import { intersection, intersectionBy, intersectionWith } from '../../src/array/intersection';

describe('test intersection', () => {
  it('intersection', done => {
    const ret = intersection([1, 2, 3], [4, 3, 2]);
    expect(ret).toEqual([2, 3]);
    done();
  });

  it('intersectionBy', done => {
    const ret = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    expect(ret).toEqual([2.1]);
    done();
  });

  it('intersectionWith', done => {
    const ret = intersectionWith(
      [1, 1.2, 1.5, 3, 0],
      [1.9, 3, 0, 3.9],
      (a, b) => Math.round(a) === Math.round(b),
    );
    expect(ret).toEqual([1.5, 3, 0]);
    done();
  });
});
