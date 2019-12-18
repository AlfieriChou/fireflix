import renameKeys from '../../src/object/renameKeys';

describe('test renameKeys', () => {
  it('test renameKeys by object', done => {
    const obj: Object = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
    const ret = renameKeys({ name: 'firstName', job: 'passion' }, obj);
    expect(ret).toEqual({ firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 });
    done();
  });
});
