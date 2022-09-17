export const objectToPairs = (
  obj: Record<string, any>
): Array<Array<string | number>> => Object.keys(obj).map((k) => [k, obj[k]]);

export const objectFromPairs = (
  arr: Array<Array<string | number>>
): Record<string, any> =>
  arr.reduce((a, [key, val]) => {
    // eslint-disable-next-line no-param-reassign
    a[key] = val;
    return a;
  }, {});
