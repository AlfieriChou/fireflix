const dynamicSort = (
  prop: string
): ((a: Record<string, any>, b: Record<string, any>) => number) => {
  let order = 1;
  let property: string;
  if (prop.startsWith("-")) {
    order = -1;
    property = prop.substring(1);
  } else {
    property = prop;
  }
  return (a, b) => {
    let ret: number;
    if (a[property] < b[property]) {
      ret = -1;
    } else if (a[property] > b[property]) {
      ret = 1;
    } else {
      ret = 0;
    }
    return ret * order;
  };
};

const orderBy = (
  objs: Record<string, any>[],
  property: string
): Record<string, any>[] => objs.sort(dynamicSort(property));

export default orderBy;
