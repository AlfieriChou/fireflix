import { snakeCase } from 'lodash';

const snakeKeys = (
  obj: Record<string, any> | Record<string, any>[],
): Record<string, any> | Record<string, any>[] => {
  if (Array.isArray(obj)) {
    return obj.map((v) => snakeKeys(v));
  }
  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [snakeCase(key)]: snakeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

export default snakeKeys;
