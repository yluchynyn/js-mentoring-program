/**
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
  //const arr = chars.split(" ");
  return chars.map((object) => object.name);
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
  getCharactersNames(chars).forEach((each) => {
    console.log(each);
  });
}

/**
 * return an array of non-human (species !== 'human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
  return chars.filter((element) => element.species !== "Human");
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
  return chars.find((element) => element.name === "Jerry Smith");
}

/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
  return chars.every((element) => element.species === "Human");
}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
  return chars.some((element) => element.type === "Fish-Person");
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
  //PLACE YOUR CODE HERE
  let min = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      min = arr[i];
    }
  }
  return arr.indexOf(min);
}
console.log(minItem([2, 5, 6, 3, 1, 8]));

module.exports = {
  getCharactersNames,
  printCharacterNames,
  getNonHumanCharacters,
  getJerryInfo,
  isAllHuman,
  isAnyFishPerson,
  minItem,
};
