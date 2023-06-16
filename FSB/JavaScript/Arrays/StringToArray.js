// Converting String to arrays and back

// The split method isn’t an Array method but is found on the String prototype. The reason we’re learning it is that it lets us convert Strings to Arrays.

// As you know strings do behave like arrays to some extent. You can check their length using the String.length property and you iterate on them like arrays. But you cannot mutate or process them like arrays unless you convert them to arrays and this is what the split method does. The method takes a delimiter which used to break apart the string into multiple array entries. You’ll see this in action, in just a moment.

// JavaScript String split() :

// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

// ex 1:

let text = "How are you doing today?";
const myArray = text.split();

console.log(myArray);
// document.getElementById("split").innerHTML = myArray;


// Split the word and and return the second word.
const myArray2 = text.split(" ");
console.log(myArray2);
// document.getElementById("split2").innerHTML = myArray2;
// document.getElementById("split2SecondWord").innerHTML = myArray2[2];


// Split a substring into an array of substring and returns an array.
const myArray3 = text.split("");
console.log(myArray3);
// document.getElementById("split2SplitSubstring").innerHTML = myArray3;


// Use the limit parameter:
const myArray4 = text.split(" ", 3);
console.log(myArray4);






// ex 2:

const str = "plot no. 448, kharadi complex, Banglore, 221457";

console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split(" , "));



const greet = ["Hello", "How are you?", "It is nice to meet you again"];
console.log(greet.join());
console.log(greet.join(" "));
console.log(greet.join(" : "));
console.log(greet.join(", "));






// ex 3 :

const isPalindromeOrNot = (character) => {
    return character.split("").reverse().join("") === character;
}

console.log(isPalindromeOrNot("not") ? "is pal" : "not pal");


