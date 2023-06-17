"use strict";



// ex 1 :

const numbers = [1, 2, 3, 4, 5];

// Using the traditional "for loop" to loop through the array would be like this:

for (let i = 0; i<=numbers.length - 1; i++) {
    console.log("by using for loop : ", numbers[i]);
}

// What makes the for each method different?

// The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".

// The forEach method passes a callback function for each element of an array together with the following parameters:

    // Current Value (required) - The value of the current array element
    // Index (optional) - The current element's index number
    // Array (optional) - The array object to which the current element belongs

// Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function):

numbers.forEach(function() {
    // code
});

// The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:

numbers.forEach(function(number) {
    console.log("by using forEach :", number);
});

// Optional Parameters
// Index :
// Alright now let's continue with the optional parameters. The first one is the "index" parameter, which represents the index number of each element.

// Basically, we can see the index number of an element if we include it as a second parameter:

numbers.forEach((number, index) => {
    console.log("Index : " + index + " Value : " + number);
});

// Array
// The array parameter is the array itself. It is also optional and can be used if necessary in various operations. Otherwise, if we call it, it will just get printed as many times as the number of elements of the array:

numbers.forEach((number, index, array) => {
    console.log("by using array para : ", array);
})



// ex 2: display csv data in tubular format.

const user = `id,first_name,last_name,email,gender
1, Brigg, Kauscher, bkauscher@nsw.gov.au, Male
2, Saudra, Madner, smadnerl@mac.com, Female
3, Willy, Birchwood, wbirchwood2@typepad.com, Female
4, Jaime, Abethell, jabethell3@amazonaws.com, Male
5, Kristofer, Gunton, kgunton4@globo.com, Male`;

const csvToArray = (csv) => {
    let output = [];

    csv.split("\n").forEach((row) => output.push(row.split(",")));

    return output;
}

console.log(csvToArray(user));


const convertToObj = (arr) => {
    let output = [];

    arr.forEach((element, index) => {
        // skip index
        if(index !== 0) {
            let obj = {};

            element.forEach((secondForEachElem, secondForEachIndex) => {
                obj[[arr[0][secondForEachIndex]]] = secondForEachElem;
            });

            output.push(obj);
        }
    });

    return output;
}

let csvToObj = convertToObj(csvToArray(user));

console.log(csvToObj);



// ex 3: compute taxes

const prices = [100, 200, 300, 400, 500];

// here we can use contructor function

const Tax = function(tax) {
    this.tax = tax;

    this.withTax = function(array) {
        let output = [];

        array.forEach(function(element) {
            let withTax = (this.tax / 100) * element + element;
            output.push(this.withTax);
        }, this);

        return output;
    }
}

const gst5 = new Tax(5);

console.log(gst5.withTax(prices));


// There are a number of ways to iterate through arrays in JavaScript. The Array prototype offers built-in methods that can help you iterate through and process data stored in an array.

// One such method is the Array.forEach() method which allows us to iterate through our array. At every iteration, the forEach() method executes a callback function providing access to the current element and the index number which can then be used within the callback function.

// In this ex. you'll notice an array of objects representing books. Right below the books is a console.log statement that outputs ‘My Favourite Books’. Your job is to implement the forEach() method to iterate through the books array and produce the following output on the terminal:

// My Favourite Books
// 1. Freakonomics
// 2. The Design of Everyday Things
// 3. Shantaram
// 4. Contact

// To achieve this, we’ll implement the forEach() method as shown below and at every iteration use a console.log to render the name of a book title using the index (index + 1) as the item number. 
// books.forEach((elem, index) => console.log(`${index + 1}. ${elem.title}`));
// That’s it! You’ve just used learnt to use the Array.forEach() method!

const books = [
    {
      id: 1,
      title: 'Freakonomics',
    },
    {
      id: 2,
      title: 'The Design of Everyday Things',
    },
    {
      id: 3,
      title: 'Shantaram',
    },
    {
      id: 4,
      title: 'Contact',
    },
  ];
  
  console.log('My Favourite Books');

  books.forEach((elem, index) => {
    console.log(`${index + 1}. ${elem.title}`)
  })

// Array.forEach() is used to traverse the elements of array and hence it is an iteration method

// Array.forEach() returns an error if no callback function or something other than callback function is supplied to it as argument.

// Array.forEach() is an array iteration methods which traverse all elements of array. In this case, while traversing each element, it is pushing the square of the element to array squaredNumbers.



// ex 4 :

let text = "";

const fruits = ["apple", "cherry", "mango"];

const myFuntijon = (item, index) => {
    text += index + " : " + item + "\n";
}

fruits.forEach(myFuntijon);

console.log(text);

// remember if you type here in the place of item an index keyword and in the place of index an item keyword then you will get confusing output...type the function as it is given on the above.

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.



// // Syntax :

// // array.forEach(function(currentValue, index, arr), thisValue)

// // function() : Required. A function to run for each array element.

// // currentValue/item : Required. The value of the current element.

// // index : Optional. The index of the current element.

// // arr : Optional. The array of the current element.

// thisValue : Optional. Default "undefined". A value passed to the function as its this value.





// more examples :

// ex 1 : compute the sum

let sum = 0;

const num = [2, 3, 4, 5];

const myNumbers = (item) => {
    sum += item;
}

num.forEach(myNumbers);

console.log(sum);



// // ex 3 : multiply each element with 10

const mulNumbers = [200, 300, 400, 500];

const multNumbers = (item, index, array) => {
    array[index] = item * 10;
}

mulNumbers.forEach(multNumbers);

console.log(mulNumbers);



// // ex 4 : multiply each element

let multiplyFromHere = 1;

const multiplyNumbers = [4, 6, 7, 9, 18];

const multpEachNum = (item, index, array) => {
    multiplyFromHere *= item;
}

multiplyNumbers.forEach(multpEachNum);

console.log(multiplyFromHere);



// // ex 5 : Display the flipped titles of a list of books

// const books = [
//     "The Lord Of Rings",
//     "Deception",
//     "Digital Fortress",
//     "Freakonomics"
// ];

// const flipTitles = function (element, index) {
//     console.log("ex 5 : ", element.split("").reverse().join(""));
// }

// books.forEach(flipTitles);

// // books is an array of book titles. It is simpler to use the forEach than the for-of loop to run through an array such as books (books dot forEach ). We also created an anonymous function, which is also known as a callback as it is invoked for every element in the books array. The function provides direct access to the element and the index number so we can display the flipped title of each book. To flip each book title we split the title by whitespace, reversed it, and joined.

// // And you can also create the callback function separately like a regular function and simply refer to it within the forEach. This can make your code more readable



// // ex 6 : display csv data in a tubular format.

// const user = `id,first_name,last_name,email,gender
// 1, Brigg, Kauscher, bkauscher@nsw.gov.au, Male
// 2, Saudra, Madner, smadnerl@mac.com, Female
// 3, Willy, Birchwood, wbirchwood2@typepad.com, Female
// 4, Jaime, Abethell, jabethell3@amazonaws.com, Male
// 5, Kristofer, Gunton, kgunton4@globo.com, Male`;

// const csvToArray = (csv) => {
//     let output = [];

//     // we use here for each loop
//     csv.split('\n').forEach((row) => output.push(row.split(" : ")));

//     // we use here "for of loop"
//     // for(const row of csv.split("\n")) {
//     //     output.push(row.split(" ::: "));
//     // }

//     return output;
// }

// console.log("ex 6 : ", csvToArray(user));

// const convertToObj = (array) => {

//     // we instantiate an array to produce the output
//     let outputObj = [];
//     array.forEach((item, index) => {

//         // we use "for each" method to loop the input array and we shall access both the element/item and index like so. The reason we need index is because we can skip the entry at index zero because it contain the column names and not the actual data.
        
//         // These column name is translated to property names in just a moment. The actual data is from index 1 onwards.

//         // So as long as index is not zero the value of the "elem" or element parameter will be an array.

//         // Therefore, we'll now iterate through this nested array which contain actual data which is include in the array. This is where we will contruct an object for every nested array. So, I'll instantiate an object like so. Then we'll loop through the nested array using another "for each" mehtod and in the callback we can programatically set the property name first by using the bracket notation as you can see.
//         if ( index !== 0) {

//             let obj = {};
//             elem.forEach((elem, index) => {
//                 // obj[array[ ]]
//             })
//         }
//         outputObj.push(obj);
//     });
//     return output;
// };

// let csvToObj = convertToObj(csvToArray(user));
// console.table(csvToObj);





// // ex 7 :

// const users = `id,first_name,last_name,email,gender

// 1, Brigg, Kauscher, bkauscher@nsw.gov.au, Male

// 2, Saudra, Madner, smadnerl@mac.com, Female

// 3, Willy, Birchwood, wbirchwood2@typepad.com, Female

// 4, Jaime, Abethell, jabethell3@amazonaws.com, Male

// 5, Kristofer, Gunton, kgunton4@globo.com, Male`;


// const weapons = `1,Red Orbs,240
// 2,Green Orbs,194
// 3,Yellow Orbs,154
// 4,Kill Machine,80`;

// // We need to first break apart the string by line and then break each line by a comma to get access to individual elements.

// // Start by breaking apart the weapons string by line using the String.split() method, with the newline character as the delimiter.

// // The breakByLine constant will now be an array with each item representing each row from the dataset. Next, let’s iterate through this array and for every item using the split method with the comma as the delimiter. Finally, we’ll render a string using the console.log method to output this data.

// // NOTE: Please ensure you implement the console.log statement exactly as shown in the code below.

// const displayUsersAndWeapons = function(string) {
//     const breakByLine = string.split(" \n ");

//     for (const weaponItems of breakByLine) {
//         let elements = weaponItems.split(" : ");
//         console.log(`${elements[0], elements[1], elements[2]}`);
//     }

//     for (const item of breakByLine) {
//         let elements = item;
//         console.log(`${elements.split(" , ")}`);
//         console.log(`${elements.split(" : ")}`);
//     }

// };

// console.log(displayUsersAndWeapons(users, "showing or not"));

// console.log(displayUsersAndWeapons(weapons));

// // That’s it. We’ve just parsed comma-separated data into arrays for consumption.





// const isPalindrome = word => {
//     let wordArray = [];
//     let reverseWord = [];

//     for(const w of word) {
//         wordArray.push(w);
//         reverseWord.push(w);
//     }

//     return wordArray.toString() === reverseWord.reverse().toString();
// }

// console.log(isPalindrome("Hello") ? "Palindrome" : "Not Palindrome");


