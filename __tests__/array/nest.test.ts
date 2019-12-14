import nest from '../../src/array/nest';

describe('test nest!!', () => {
  it('nest', done => {
    const datas = [
      { id: 1, parentId: null },
      { id: 2, parentId: 1 },
      { id: 3, parentId: 1 },
      { id: 4, parentId: 2 },
      { id: 5, parentId: 4 },
    ];
    const ret = nest(datas);
    expect(ret).toEqual([
      {
        id: 1,
        parentId: null,
        children: [
          {
            id: 2,
            parentId: 1,
            children: [
              {
                id: 4,
                parentId: 2,
                children: [
                  {
                    id: 5,
                    parentId: 4,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            parentId: 1,
            children: [],
          },
        ],
      },
    ]);
    done();
  });
});
