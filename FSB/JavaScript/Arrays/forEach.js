"use strict";



let text = "";

const fruits = ["apple", "cherry", "mango"];

const myFunction = (item, index) => {
    text += index + " : " + item + "\n";
}

fruits.forEach(myFunction);

console.log(text);

// remember if you type here in the place of item an index keyword and in the place of index an item keyword then you will get confusing output...type the function as it is given on the above.

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.



// Syntax :

// array.forEach(function(currentValue, index, arr), thisValue)

// function() : Required. A function to run for each array element.

// currentValue/item : Required. The value of the current element.

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
    console.log("ex 5 : ", element.split("").reverse().join(""));
}

books.forEach(flipTitles);

// books is an array of book titles. It is simpler to use the forEach than the for-of loop to run through an array such as books (books dot forEach ). We also created an anonymous function, which is also known as a callback as it is invoked for every element in the books array. The function provides direct access to the element and the index number so we can display the flipped title of each book. To flip each book title we split the title by whitespace, reversed it, and joined.

// And you can also create the callback function separately like a regular function and simply refer to it within the forEach. This can make your code more readable



// ex 6 : display csv data in a tubular format.

const user = `id,first_name,last_name,email,gender
1, Brigg, Kauscher, bkauscher@nsw.gov.au, Male
2, Saudra, Madner, smadnerl@mac.com, Female
3, Willy, Birchwood, wbirchwood2@typepad.com, Female
4, Jaime, Abethell, jabethell3@amazonaws.com, Male
5, Kristofer, Gunton, kgunton4@globo.com, Male`;

const csvToArray = (csv) => {
    let output = [];

    // we use here for each loop
    csv.split('\n').forEach((row) => output.push(row.split(" : ")));

    // we use here "for of loop"
    // for(const row of csv.split("\n")) {
    //     output.push(row.split(" ::: "));
    // }

    return output;
}

console.log("ex 6 : ", csvToArray(user));

const convertToObj = (array) => {

    // we instantiate an array to produce the output
    let outputObj = [];
    arr.forEach((item, index) => {

        // we use "for each" method to loop the input array and we shall access both the element/item and index like so. The reason we need index is because we can skip the entry at index zero because it contain the column names and not the actual data.
        
        // These column name is translated to property names in just a moment. The actual data is from index 1 onwards.

        // So as long as index is not zero the value of the "elem" or element parameter will be an array.

        // Therefore, we'll now iterate through this nested array which contain actual data which is include in the array. This is where we will contruct an object for every nested array. So, I'll instantiate an object like so. Then we'll loop through the nested array using another "for each" mehtod and in the callback we can programatically set the property name first by using the bracket notation as you can see.
        if ( index !== 0) {

            let obj = {};
            elem.forEach((elem, index) => {
                obj[array[]]
            })
        }
        output.push(obj);
    });
    return output;
};

let csvToObj = convertToObj(csvToArray(users));
console.table(csvToObj);





// ex 7 :

const users = `id,first_name,last_name,email,gender

1, Brigg, Kauscher, bkauscher@nsw.gov.au, Male

2, Saudra, Madner, smadnerl@mac.com, Female

3, Willy, Birchwood, wbirchwood2@typepad.com, Female

4, Jaime, Abethell, jabethell3@amazonaws.com, Male

5, Kristofer, Gunton, kgunton4@globo.com, Male`;


const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

// We need to first break apart the string by line and then break each line by a comma to get access to individual elements.

// Start by breaking apart the weapons string by line using the String.split() method, with the newline character as the delimiter.

// The breakByLine constant will now be an array with each item representing each row from the dataset. Next, let’s iterate through this array and for every item using the split method with the comma as the delimiter. Finally, we’ll render a string using the console.log method to output this data.

// NOTE: Please ensure you implement the console.log statement exactly as shown in the code below.

const displayUsersAndWeapons = function(string) {
    const breakByLine = string.split(" \n ");

    for (const weaponItems of breakByLine) {
        let elements = weaponItems.split(" : ");
        console.log(`${elements[0], elements[1], elements[2]}`);
    }

    for (const item of breakByLine) {
        let elements = item;
        // console.log(`${elements.split(" , ")}`);
        console.log(`${elements.split(" : ")}`);
    }

};

console.log(displayUsersAndWeapons(users, "showing or not"));

console.log(displayUsersAndWeapons(weapons));

// That’s it. We’ve just parsed comma-separated data into arrays for consumption.





const isPalindrome = word => {
    let wordArray = [];
    let reverseWord = [];

    for(const w of word) {
        wordArray.push(w);
        reverseWord.push(w);
    }

    return wordArray.toString() === reverseWord.reverse().toString();
}

console.log(isPalindrome("Hello") ? "Palindrome" : "Not Palindrome");


