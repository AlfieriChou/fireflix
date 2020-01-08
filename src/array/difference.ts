export const symmetricDifference = <T>(a: Array<T>, b: Array<T>): Array<T> => {
  const sA = new Set(a);
  const sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

export const uniqueSymmetricDifference = <T>(a: Array<T>, b: Array<T>): Array<T> => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))]),
];
