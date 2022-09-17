const deepMapKeys = <T>(
  data: Record<string, any> | Array<T>,
  fn: (key: string) => string
): Record<string, any> | Array<T> => {
  if (Array.isArray(data)) {
    return data.map((val) => deepMapKeys(val, fn));
  }
  if (typeof data === "object") {
    return Object.keys(data).reduce((acc, current) => {
      const value = data[current];
      const key = fn(current);
      if (value !== null && typeof value === "object") {
        return {
          ...acc,
          [key]: deepMapKeys(value, fn),
        };
      }
      return {
        ...acc,
        [key]: value,
      };
    }, {});
  }
  return data;
};

export default deepMapKeys;
