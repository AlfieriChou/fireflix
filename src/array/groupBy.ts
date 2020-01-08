interface GroupObj {
  [s: string]: Object[]
}

const groupBy = (list: Object[], key: string) => list.reduce((result: GroupObj, item: Object) => {
  const ret: GroupObj = result;
  (ret[item[key]] = ret[item[key]] || []).push(item);
  return ret;
}, {});

export default groupBy;
