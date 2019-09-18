import { snakeCase } from 'lodash';

interface ISnakeObject {
  [s: string]: any
}

const snakeKeys = (
  obj: ISnakeObject | ISnakeObject[],
): ISnakeObject | ISnakeObject[] => {
  if (Array.isArray(obj)) {
    return obj.map(v => snakeKeys(v));
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
