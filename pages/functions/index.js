export const convertSpaces = (text) => {
  return text.replace(/\s/g, "%20");
};

export const convertLineBreaks = (text) => {
  return text.replace(/(?:\r\n|\r|\n)/g, "%E2%9A%A1%EF%B8%8F%0D%0A%0A");
};
