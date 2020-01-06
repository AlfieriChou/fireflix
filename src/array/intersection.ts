export const intersection = <T>(
  a: Array<T>,
  b: Array<T>,
): Array<T> => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

export const intersectionBy = <T>(
  a: Array<T>,
  b: Array<T>,
  fn: (a: T) => T,
): Array<T> => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

export const intersectionWith = <T>(
  a: Array<T>,
  b: Array<T>,
  comp: (a: T, b: T) => boolean,
): Array<T> => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
