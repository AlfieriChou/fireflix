const permutation = <T>(items: Array<Array<T>>, prepend: Array<T> = []): Array<Array<T>> => {
  if (!items || items.length === 0) return [prepend];

  const ret: Array<Array<T>> = items[0].reduce((result: Array<Array<T>>, value) => result.concat(
    permutation(items.slice(1), [...prepend, value]),
  ), []);

  return ret;
};

export default permutation;
