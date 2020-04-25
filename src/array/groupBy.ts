interface GroupObj {
  [s: string]: Record<string, any>[];
}

const groupBy = (list: Record<string, any>[], key: string) => list.reduce((result: GroupObj, item: Record<string, any>) => {
  const ret: GroupObj = result;
  (ret[item[key]] = ret[item[key]] || []).push(item);
  return ret;
}, {});

export default groupBy;
