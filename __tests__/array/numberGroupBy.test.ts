import numberGroupBy from '../../src/array/numberGroupBy';

const noGroupArr: Object[] = [
  { name: 'dog', category: 'animal' },
  { name: 'osmanthus', category: 'plant' },
  { name: 'cat', category: 'animal' },
];

const groupResult: Object[][] = [
  [
    { name: 'dog', category: 'animal' },
    { name: 'osmanthus', category: 'plant' },
  ],
  [
    { name: 'cat', category: 'animal' },
  ],
];

describe('test numberGroupBy!!', () => {
  it('groupBy!', done => {
    const result = numberGroupBy(noGroupArr, 2);
    expect(result).toMatchObject(groupResult);
    done();
  });
});
