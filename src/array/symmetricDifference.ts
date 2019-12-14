const symmetricDifference = <T>(a: Array<T>, b: Array<T>) => {
  const sA = new Set(a);
  const sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

export default symmetricDifference;
