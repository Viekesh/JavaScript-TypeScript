// In many cases, you may want to make a copy of an array you are using in your application. There are many ways to
//€AZ achieve this in JavaScript. The code below shows all the main ways used to clone arrays in JavaScript.

const prod1 = ["Nokia", "Samsung", "Apple", "MotoG", "Google Nexus"];

const prod2 = [...prod1];

console.log("Product List 2:", prod2);



// concat() method is used to copy the one array element to another array.

const prod3 = prod1.concat(prod1);

console.log("Product List 3:", prod3);



// The from() method will clone an array.

const prod4 = Array.from(prod1);

console.log("Product List 4:", prod4);

// Each of these choices will yield the same results, with minor differences in the efficiency of the operation.






// Resizing an array:

// In addition to copying array, you may need to an extend or resize an array. This can be done by simply modify the
// length of the array.

const books = ["Basic Electrical Circuits", "IIOT 4.0", "Power System Operation And Control", "Electric Drive", "HVDC Transmission And Facts", "The Joy Of Computing With Python"];

console.log("Books Length:", books.length);

console.log(books);



// There is a specific value used to change the size of JavaScript array: length

books.length = 3;

console.log("Books length :", books.length);

console.log("Books :", books);



// When you reduce the size of the array, JavaScript cuts off all the values after the length. In this example the
// only value left in the array is the four. You can also extend the length of the array. We can also extend the
// length of the array by making the length larger than the originally declared amount.

books.length = 7;

console.log("Increased length :", books);






//