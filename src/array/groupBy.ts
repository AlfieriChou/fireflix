interface Obj {
  [s: string]: any
}

interface GroupObj {
  [s: string]: Obj[]
}

const groupBy = (list: Obj[], key: string) => list.reduce((result: GroupObj, item: Obj) => {
  const ret: GroupObj = result;
  (ret[item[key]] = ret[item[key]] || []).push(item);
  return ret;
}, {});

export default groupBy;
