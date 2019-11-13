const numberGroupBy = (array: any[], subGroupLength: number) => {
  let index: number = 0;
  const newArray: any[] = [];
  while (index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength));
  }
  return newArray;
};

export default numberGroupBy;
