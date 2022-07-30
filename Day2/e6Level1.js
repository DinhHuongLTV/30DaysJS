// Cut (slice) out the first word of the string using substr() or substring() method
const sliceFirstWord = (str) => {
  return str.substr(0, str.indexOf(" "));
};

console.log(sliceFirstWord("test out this function"));
