const deepMapKeys = <T>(
  obj: Object | Array<T>, fn: Function,
  // eslint-disable-next-line no-nested-ternary
): Object | Array<T> => (Array.isArray(obj)
    ? obj.map(val => deepMapKeys(val, fn))
    : typeof obj === 'object'
      ? Object.keys(obj).reduce((acc, current) => {
        const val = obj[current];
        acc[fn(current)] = val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : (acc[fn(current)] = val);
        return acc;
      }, {})
      : obj);

export default deepMapKeys;
