const stringPermutations = (str: string): Array<string> => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc: Array<string>, letter, i) => acc.concat(
        stringPermutations(str.slice(0, i) + str.slice(i + 1)).map((val) => letter + val),
      ),
      [],
    );
};

export default stringPermutations;
