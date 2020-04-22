import dig from '../../src/object/dig';

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
}

describe('Dig', () => {
  it('test get value', done => {
    const ret = dig(data, 'level3');
    expect(ret).toEqual('some data');
    done();
  });

  it('test get undefined', done => {
    const ret = dig(data, 'level4')
    expect(ret).toEqual(undefined);
    done();
  });
});
