const isJson = (data: string): boolean => {
  let ret: any;
  try {
    ret = JSON.parse(data);
  } catch (e) {
    return false;
  }
  if (typeof ret === 'object' && ret !== null) {
    return true;
  }

  return false;
};

export default isJson;
