interface Obj {
  [s: string]: any
}

interface GroupObj {
  [s: string]: Obj[]
}

export const groupBy = (list: Obj[], key: string) => {
  return list.reduce((result: GroupObj, item: Obj) => {
    ;(result[item[key]] = result[item[key]] || []).push(item)
    return result
  }, {})
}
