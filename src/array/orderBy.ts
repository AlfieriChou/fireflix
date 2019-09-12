interface Obj {
  [s: string]: any
}

const dynamicSort = (property: string): ((a: Obj, b: Obj) => number) => {
  let order: number = 1
  if (property.startsWith('-')) {
    order = -1
    property = property.substring(1)
  }
  return (a, b) => {
    let ret
    if (a[property] < b[property]) {
      ret = -1
    } else if (a[property] > b[property]) {
      ret = 1
    } else {
      ret = 0
    }
    return ret * order
  }
}

export const orderBy = (objs: Obj[], property: string): Obj[] => {
  return objs.sort(dynamicSort(property))
}
