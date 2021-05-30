export const convertSpaces = (text) => {
  return text.replace(/\s/g, "%20");
};

export const convertLineBreaks = (text) => {
  return text.replace(/(?:\r\n|\r|\n)/g, "%0A");
};

export const convertHash = (text) => {
  return text.replace(/[#_]/g, "%23");
};
