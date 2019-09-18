interface Obj {
  [s: string]: any
}

interface GroupObj {
  [s: string]: Obj[]
}

const groupBy = (list: Obj[], key: string) => list.reduce((result: GroupObj, item: Obj) => {
  (result[item[key]] = result[item[key]] || []).push(item);
  return result;
}, {});

export default groupBy;
