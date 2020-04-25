const renameKeys = (keysMap: Record<string, any>, obj: Record<string, any>): Record<string, any> => Object.keys(obj).reduce(
  (acc, key) => ({
    ...acc,
    ...{ [keysMap[key] || key]: obj[key] },
  }),
  {},
);

export default renameKeys;
