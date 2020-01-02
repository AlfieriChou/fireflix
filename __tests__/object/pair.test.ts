import { objectToPairs, objectFromPairs } from '../../src/object/pair';

describe('Pair', () => {
  it('test object to pair', done => {
    const testObject = { a: 1, b: 2 };
    const ret = objectToPairs(testObject);
    expect(ret).toEqual([['a', 1], ['b', 2]]);
    done();
  });

  it('test object from pair', done => {
    const testArr = [['a', 1], ['b', 2]];
    const ret = objectFromPairs(testArr);
    expect(ret).toEqual({ a: 1, b: 2 });
    done();
  });
});
