export const symmetricDifference = <T>(a: Array<T>, b: Array<T>): Array<T> => {
  const setA = new Set(a);
  const setB = new Set(b);
  const aExistB = a.filter((x) => !setB.has(x));
  const bExistA = b.filter((x) => !setA.has(x));
  return [aExistB, bExistA].flat();
};

export const uniqueSymmetricDifference = <T>(
  a: Array<T>,
  b: Array<T>
): Array<T> => {
  const aExistB = a.filter((v) => !b.includes(v));
  const bExistA = b.filter((v) => !a.includes(v));
  return Array.from(new Set(aExistB.concat(bExistA)));
};
