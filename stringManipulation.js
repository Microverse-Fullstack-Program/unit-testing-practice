const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  throw new Error("string length should be 1-10 char");
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

export { stringLength, reverseString, capitalize };
