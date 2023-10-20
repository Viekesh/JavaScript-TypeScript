const dataSource = 'Apples,Mangoes,Kiwi,Strawberries,Pineapple,Oranges,Raspberries';

// Convert String to Array
const strToArray = (str, cb) =>
  setTimeout(function () {
    if (typeof str !== 'string') return cb('Invalid data presented. Only strings can be processed', null);

    cb(null, str.split(','));
  }, 0);

// Transform each string and prefix the words 'I love '
const loveFruits = (arr, cb) =>
  setTimeout(function () {
    if (!Array.isArray(arr)) return cb('Invalid data presented. Only arrays can be transformed', null);

    cb(
      null,
      arr.map((e) => `I love ${e}`)
    );
  }, 0);

// Print the array on the console
const echoArray = (arr) => arr.forEach((e, i) => console.log(`${i + 1}. ${e}`));

// Execution using callbacks
// strToArray(dataSource, (error, res) => {
//   if (error) return Error(error);

//   loveFruits(res, (error, res) => {
//     if (error) return Error(error);

//     echoArray(res);
//   });
// });

const Promisify =
  (fn) =>
  (...args) => {
    return new Promise((resolve, reject) => {
      fn.call(this, ...args, (error, result) => {
        if (error) return reject(error);

        resolve(result);
      });
    });
  };

// strToArrayPromise
const strToArrayPromise = Promisify(strToArray);
// loveFruitsPromise
const loveFruitsPromise = Promisify(loveFruits);

// Execution using Promises
strToArrayPromise(dataSource)
  .then(loveFruitsPromise)
  .then(echoArray)
  .catch((error) => console.log(error));
