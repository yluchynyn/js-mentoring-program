const {
  getDogs,
  getCats,
  getBirds,
  firstPromise,
  secondPromise,
} = require("./utils/utilPromises");

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
  return new Promise((resolve) => resolve("Resolved!"));
}

// promiseResolve().then((res) => {
//   console.log(res);
//   return promiseResolve();
// });

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
  return new Promise((resolve, reject) => reject("Rejected!"));
}

// promiseReject()
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err))
// ;

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

function fullPromise(param) {
  return new Promise((resolve, reject) => {
    if (param === true) {
      resolve("Resolved!");
    } else {
      reject("Rejected!");
    }
  });
}
// fullPromise(false)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise()
 * from the './utils/utilPromises' file)
 * and store the result to the
 * variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function
 */

let chainingResult = "";

async function promisesChaining() {
  return firstPromise().then((data) => {
    return secondPromise((chainingResult = data)).then((data) => {
      return (chainingResult += " " + data);
    });
  });
}

// (async () => {
// 	console.log(await promisesChaining());
//   })();

/**
 * Task-5: Implement a function getAnimals() that will return the result of
 * 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * getAnimals() -> ["dogs", "cats", "birds"]
 * @returns {Promise<"["dogs", "cats", "birds"]">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

async function getAnimals() {
  return await Promise.all([getDogs(), getCats(), getBirds()]);
}
//getAnimals();

module.exports = {
  promiseResolve,
  promiseReject,
  fullPromise,
  getAnimals,
  promisesChaining,
};
