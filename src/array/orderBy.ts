interface Obj {
  [s: string]: any
}

const dynamicSort = (prop: string): ((a: Obj, b: Obj) => number) => {
  let order: number = 1;
  let property: string;
  if (prop.startsWith('-')) {
    order = -1;
    property = prop.substring(1);
  } else {
    property = prop;
  }
  return (a, b) => {
    let ret: number
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

const orderBy = (objs: Obj[], property: string): Obj[] => objs.sort(dynamicSort(property));

export default orderBy;
