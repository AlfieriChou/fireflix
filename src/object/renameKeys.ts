const renameKeys = (keysMap: Object, obj: Object): Object => Object.keys(obj).reduce(
  (acc, key) => ({
    ...acc,
    ...{ [keysMap[key] || key]: obj[key] },
  }),
  {},
);

export default renameKeys;
