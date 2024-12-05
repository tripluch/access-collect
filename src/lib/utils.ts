export const replaceEmptyValueByNull = async (formData: FormData) => {
  const inputData = Object.fromEntries(formData);

  let newData: any = {};
  Object.keys(inputData).forEach((key) => {
    if (inputData[key] === "") {
      newData[key] = null;
    } else {
      newData[key] = inputData[key];
    }
  });
  return newData;
};
