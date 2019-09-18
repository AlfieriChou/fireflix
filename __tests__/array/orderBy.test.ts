import orderBy from '../../src/array/orderBy';

interface IPeople {
  name: string
  age: number
}

const peoples: IPeople[] = [
  { name: 'Edward', age: 21 },
  { name: 'Sharpe', age: 37 },
  { name: 'And', age: 45 },
  { name: 'The', age: 12 },
  { name: 'Magnetic', age: 13 },
  { name: 'Zeros', age: 37 },
];

const ascAgePeoples: IPeople[] = [
  { name: 'The', age: 12 },
  { name: 'Magnetic', age: 13 },
  { name: 'Edward', age: 21 },
  { name: 'Sharpe', age: 37 },
  { name: 'Zeros', age: 37 },
  { name: 'And', age: 45 },
];

const descAgePeoples: IPeople[] = [
  { name: 'And', age: 45 },
  { name: 'Sharpe', age: 37 },
  { name: 'Zeros', age: 37 },
  { name: 'Edward', age: 21 },
  { name: 'Magnetic', age: 13 },
  { name: 'The', age: 12 },
];

describe('test orderBy!!', () => {
  it('asc!', done => {
    const result = orderBy(peoples, 'age');
    expect(result).toEqual(ascAgePeoples);
    done();
  });
  it('desc!', done => {
    const result = orderBy(peoples, '-age');
    expect(result).toEqual(descAgePeoples);
    done();
  });
});
