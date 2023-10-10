"use strict";





// Ex1 :

const userGroup = ["u1", "u2", "u3", "u4"];
console.log("Ex1 :", userGroup);
const reverseUserGrop = userGroup.reverse();
console.log("Ex1 :", reverseUserGrop);
console.log("\n");






// Ex2 :

// Here we have an array of objects with sensor data from internet of things devices. It stores the records of minimum 
// temperature and maximum temperature and if you observe the dates, you can see this data is captured at every 
// alternate day and is simply appended to this array.

// The for-of loop is used to output this data in a nicely formatted way. Now let's say we want to present this data 
// with the most recent sensor reading on top. Since the data is sequentially stored, the task is as simple as 
// reversing the elements of the array and when you run your code, you can see our most recent entry is on top.

// The reverse method on the Array prototype which is available to all arrays such as the sensorData array here 
// reverses the data in place.

const sensorData = [

    {
        id: 1,
        date: '20-DEC-2021',
        maxTemp: 34,
        minTemp: 25,
    },
    {
        id: 2,
        date: '22-DEC-2021',
        maxTemp: 31,
        minTemp: 19,
    },
    {
        id: 3,
        date: '24-DEC-2021',
        maxTemp: 32,
        minTemp: 19.5,
    },
    {
        id: 4,
        date: '26-DEC-2021',
        maxTemp: 32,
        minTemp: 19.5,
    },

];

for(const data of sensorData) {
    console.log("Ex2 :", `${data.id} || ${data.date} || Max: ${data.maxTemp} || Min: ${data.minTemp}`);
};

for(const data of sensorData.reverse()) {
    console.log("Ex2 Reverse List :", `${data.id} || ${data.date} || Max: ${data.maxTemp} || Min: ${data.minTemp}`);
};

console.log("\n");






// Ex3 :

const isPalindrome = (word) => {
    let wordArray = [];
    let reverseWord = [];

    for (const getWord of word) {
        wordArray.push(getWord);
        reverseWord.push(getWord);
    }

    return wordArray.toString() === reverseWord.reverse().toString();
};

console.log("Ex3 :", isPalindrome("oppo") ? "Palindrome" : "Not Palindrome");

console.log("\n");

// The function isPalindrome takes a word and tells us if the word is a palindrome or not. A palindrome is a 
// word that is spelled the same backward as forward.






// Ex4 : 

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Ex 4:", fruits.reverse());

console.log("\n");

// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.









// Ex5 :

const weapons = [
    {
        item: 'Red Orbs',
        cost: 240,
      },
      {
        item: 'Green Orbs',
        cost: 194,
      },
      {
        item: 'Yellow Orbs',
        cost: 154,
      },
      {
        item: "Kill Machine",
        cost: 80,
      }
]

const displayWeapons = (array) => {
    for(const ele of array) {
        console.log("Ex 5:", `${ele.item}`, "|", `${ele.cost}`);
    }

    for(const ele of array.reverse()) {
        console.log("Ex 5 Reverse Method:", `${ele.item}`, "|", `${ele.cost}`);
    }

}

displayWeapons(weapons);
console.log("\n");






// Converting String to arrays and back

// The split method isn’t an Array method but is found on the String prototype. The reason we’re learning it is that it 
// lets us convert Strings to Arrays.

// As you know strings do behave like arrays to some extent. You can check their length using the String.length 
// property and you iterate on them like arrays. But you cannot mutate or process them like arrays unless you convert 
// them to arrays and this is what the split method does. The method takes a delimiter which used to break apart the 
// string into multiple array entries. You’ll see this in action, in just a moment.

// JavaScript String split() :

// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

// ex 6:

let text = "How are you doing today?";
const myArray = text.split();

console.log("ex 6: split method", myArray);
// document.getElementById("split").innerHTML = myArray;


// Split the word and and return the second word.
const myArray2 = text.split(" ");
console.log("ex 6 : split method", myArray2);
// document.getElementById("split2").innerHTML = myArray2;
// document.getElementById("split2SecondWord").innerHTML = myArray2[2];


// Split a substring into an array of substring and returns an array.
const myArray3 = text.split("");
console.log("split method", myArray3);
// document.getElementById("split2SplitSubstring").innerHTML = myArray3;


// Use the limit parameter:
const myArray4 = text.split(" ", 3);
console.log("split method :", myArray4);









// ex 7:

const str = "plot no. 448, kharadi complex, Banglore, 221457";

console.log("ex 7:", str.split(" "));
console.log("ex 7:", str.split(""));
console.log("ex 7:", str.split(" , "));

const greet = ["Hello", "How are you?", "It is nice to meet you again"];
console.log(greet.join());
console.log(greet.join(" "));
console.log(greet.join(" : "));
console.log(greet.join(", "));









// ex 8 :

const isPalindromeOrNot = (character) => {
    return character.split("").reverse().join("") === character;
}

console.log(isPalindromeOrNot("not") ? "is pal" : "not pal");


