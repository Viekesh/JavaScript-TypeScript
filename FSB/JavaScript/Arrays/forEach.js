"use strict";



let text = "";

const fruits = ["apple", "cherry", "mango"];

const myFunction = (item, index) => {
    text += index + " : " + item + "\n";
}

fruits.forEach(myFunction);

console.log(text);

// remember if you type here in the place of item an index keyword and in the place of index an item keyword then you will get confusing output type the function as it is given on the above.

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.



// Syntax :

// array.forEach(function(currentValue, index, arr), thisValue)

// function() : Required. A function to run for each array element.

// currentValue : Required. The value of the current element.

// index : Optional. The index of the current element.

// arr : Optional. The array of the current element.

// thisValue : Optional. Default "undefined". A value passed to the function as its this value.





// more examples :

// ex 1 : compute the sum

let sum = 0;

const numbers = [2, 3, 4, 5];

const myNumbers = (item) => {
    sum += item;
}

numbers.forEach(myNumbers);

console.log(sum);



// ex 3 : multiply each element with 10

const multNum = [2, 3, 4, 5];

const multNumbers = (item, index, array) => {
    array[index] = item * 10;
}

multNum.forEach(multNumbers);

console.log(multNum);



// ex 4 : multiply each element

let multp = 1;

const multiply = [3, 4, 5, 6];

const multiplyNum = (item, index, array) => {
    multp *= item;
}

multiply.forEach(multiplyNum);

console.log(multp);



// ex 5 : Display the flipped titles of a list of books

const books = [
    "The Lord Of Rings",
    "Deception",
    "Digital Fortress",
    "Freakonomics"
];

const flipTitles = function (element, index) {
    console.log(element.split("").reverse().join(""));
}

books.forEach(flipTitles);

// books is an array of book titles. It is simpler to use the forEach than the for-of loop to run through an array such as books (books dot forEach ). We also created an anonymous function, which is also known as a callback as it is invoked for every element in the books array. The function provides direct access to the element and the index number so we can display the flipped title of each book. To flip each book title we split the title by whitespace, reversed it, and joined.

// And you can also create the callback function separately like a regular function and simply refer to it within the forEach. This can make your code more readable



// ex 6 : display csv data in a tubular format.

const users = 'id,first_name,last_name,email,gender' 

1, Brigg, Kauscher, bkauscher@nsw.gov.au, Male

2, Saudra, Madner, smadnerl@mac.com, Female

3, Willy, Birchwood, wbirchwood2@typepad.com, Female

4, Jaime, Abethell, jabethell3@amazonaws.com, Male

5, Kristofer, Gunton, kgunton4@globo.com, Male’;



const csvToArray = (csv) => {

    let output = [];

    csv.split('\n').forEach((row) => output.push(row.split(',')));

    return output;

}

const convertToObj = (arr) => {

    let output = [];

    arr.forEach((elem, index) => {

        // Skip index 0 if ( index !== 0) { 

        let obj { };

        elem.forEach((elem, index) => {

            obj[arr[0][index]] = elem;

        });

        output.push(obj);

    });

    return output;

};

let csvToObj = convertToObj(csvToArray(users));

console.table(csvToObj);


