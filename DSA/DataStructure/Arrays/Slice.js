// The slice method is used to copy of the segment or the whole array.

const prod3 = prod1.slice(2, 4);

const prod4 = prod1.slice(3);

const prod5 = prod1.slice(-3, -1);

const prod6 = prod1.slice(-4);

// The negative index means we’ll count the index from the end of the array. A negative index can be thought of as an
// offset from the end of the array, list, or string. For example, in an array with five elements, you can access the
// last element with an index of -1 (like arr[-1]), the second-to-last element with an index of -2, and so on.

console.log("Product List 3:", prod3);
console.log("Product List 4:", prod4);
console.log("Product List 5:", prod5);
console.log("Product List 6:", prod6);