/**
 * 1. Write a method to reverse a string;
 * 2. The method should return the string 'This is not a string!' if trying to pass a number
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * @param {string} str
 * @return {string} reversed string
 * @example
 * console.log(reverseString('hello)) // 'olleh'
 * console.log(reverseString(123)) // 'This is not a string!'
 */
function reverseString(str) {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  }
  return "This is not a string!";
}

//console.log(reverseString("Hello there"));

/**
 * Calculate a century by given year if a number is passed
 * @param {number} year
 * @return {num} century
 * @example
 * console.log(centuryFromYear(1705)) // 18
 * console.log(centuryFromYear(1900)) // 19
 * console.log(centuryFromYear(1601)) // 17
 * hint: please choose and appropriate method from the Math object
 */
function centuryFromYear(year) {
  if (typeof year === "number") {
    return Math.ceil(year / 100);
  } else {
    return "Not a number";
  }
}
//console.log(centuryFromYear(1900))

/**
 * Calculate how many times the 'char' appears in the provided 'string'
 * @param {string} str
 * @param {string} char
 * @return {num} number of occurences
 * @example
 * console.log(strCount('Hello', 'o')) // 1
 * console.log(strCount('Hello', 'l')) // 2
 * console.log(strCount('', 'z')) // 0
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */
function strCount(str, char) {
  const re = new RegExp(char, "gi");
  const arr = str.match(re);
  if (arr === null) {
    return 0;
  }
  return arr.length;
}
//console.log(strCount('oooooooOOl', 'o'))
/**
 * Write a method to reduce the length of the string or truncate if it is longer
 * than the given maximum length and add "..." to the end.
 * Keep it as is if it is not that long.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 * @return {string} truncated or the initial string
 * @example
 * console.log(truncateString('This is a long string', 6)) // 'This i...'
 * console.log(truncateString('This', 6)) // 'This'
 */
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
// console.log(truncateString('This is a long string', 6))
// console.log(truncateString('This', 6))

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */
function replace10(text) {
  return text.replace(/10/g, "ten");
}
//console.log(replace10("231054"))

/**
 * replace value in the square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */

function replaceConfidential2(text) {
  let textArr = text.split(" ");
  const regexpModifications = /\[.*?\]/g;
  const arr = text.match(regexpModifications);
  arr.forEach((el) => {
    textArr.splice(textArr.indexOf(el), 1, "[CONFIDENTIAL]");
  });
  return textArr.join(" ");
}
//console.log(replaceConfidential2("lorem [ipsum] si dolor [hello]"));

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential,
};
