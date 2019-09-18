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

// eslint-disable-next-line no-undef
describe('test orderBy!!', () => {
  // eslint-disable-next-line no-undef
  it('asc!', done => {
    const result = orderBy(peoples, 'age');
    // eslint-disable-next-line no-undef
    expect(result).toEqual(ascAgePeoples);
    done();
  });
  // eslint-disable-next-line no-undef
  it('desc!', done => {
    const result = orderBy(peoples, '-age');
    // eslint-disable-next-line no-undef
    expect(result).toEqual(descAgePeoples);
    done();
  });
});
