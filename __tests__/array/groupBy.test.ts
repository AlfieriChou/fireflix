import { groupBy } from '../../src/array/groupBy'

interface NoGroupObj {
  name: string
  category: string
}

interface GroupObj {
  [s: string]: NoGroupObj[]
}

const noGroupArr: NoGroupObj[] = [
  { name: 'dog', category: 'animal' },
  { name: 'osmanthus', category: 'plant' },
  { name: 'cat', category: 'animal' }
]

const groupResult: GroupObj = {
  animal: [
    { name: 'dog', category: 'animal' },
    { name: 'cat', category: 'animal' }
  ],
  plant: [{ name: 'osmanthus', category: 'plant' }]
}

describe('test groupBy!!', () => {
  it('groupBy!', done => {
    const result = groupBy(noGroupArr, 'category')
    expect(result).toMatchObject(groupResult)
    done()
  })
})
