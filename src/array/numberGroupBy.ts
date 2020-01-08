const numberGroupBy = <T>(array: T[], subGroupLength: number): T[][] => {
  let index: number = 0;
  const newArray: T[][] = [];
  while (index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength));
  }
  return newArray;
};

export default numberGroupBy;
