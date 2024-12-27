export const getObjectId = (obj) => {
  const objectIdPattern = /^[a-f\d]{24}$/i;
  return Object.keys(obj).find((key) => objectIdPattern.test(key));
};
