"use strict";



// Replacing a portion of text has several uses as you’ll see in a moment. 

// The replace method accepts two parameters. The first parameter is the string or regex pattern to replace while the second parameter is a string, which acts as the replacement.

// String.replaceAll(regex, replacement_str);

// It should be noted that the second parameter can also be a function as we’ll soon see. 

// Now if the first parameter is a string, then the replace method only replaces the first occurrence in a given text so we can use the replaceAll method instead OR use a regex pattern with the global flag. 

// In all of this, an important point to note is that the replace or replaceAll methods do not mutate the original string, but instead return a new string. 

// Let’s see the replace and replaceAll methods with help of some examples to understand their use.

// In the follwing example, we have a string which talks about Johnny Depp, the actor. If we want to replace Johnny Depp with Tom Cruise, we can easily do so using the replace method. 


// ex 1 :

const str = 'Johnny Depp is an incredible actor. Johnny Depp was nominated for an Oscar';

//replace the first instance of the word ‘Johnny Depp’.

const tom = str.replace('Johnny Depp', 'Tom Cruise');
console.log(tom);

//replace the all instances of the word ‘Johnny Depp’

const allTom = str.replaceAll('Johnny Depp', 'Tom Cruise');

console.log(allTom);



// ex 2 :

// In this example we want to processes the given text and replace 200 miles and 150 miles with their kilometres equivalent values. 

const message = 'Rivercomb is 200 miles from the station and about 150 miles from the airport';
const messageKms = message

    //find the numeric value in miles and then convert it to km

    .replace(/(?<miles>\d+(?!miles))/g, (miles) => miles * 1.609)

    .replace(/miles/g, 'kms'); // turn word miles to km

console.log(message);
console.log(messageKms);



// In the above code, we used the replace method with a pattern that looks for numbers which are followed by the word ‘miles’. We used a negative look ahead as expressed in the parenthesis to match this pattern but exclude the word miles from being included in the value being returned.

// Now, since we do not want to replace the value in miles with a static number, we used a replacement function instead which gets our value from the search and we multiplied the value with 1.609 to convert it to kms.



// ex 3 :

// In this example we want to cmpare two strings which have similar content and yet they’re not same. Notice changes to punctuation and capitalization.  In such a case where the core content is the same, comparing these to match isn’t as straight forward as using the equality operator which will obviously return a false.



const compareStrings = (str1, str2) => {

    return (

        // convert the text to lower case, strip it off all special characters and white space and then use //the equality to match

        str1.toLowerCase().replaceAll(/[\W+_-]/g, '') ===

        str2.toLowerCase().replaceAll(/[\W+_-]/g, '')

    );

};

const str1 = 'The captain of this ship, a dangerous man - Captain Roger was known to have killed 10 whales!!!!';

const str2 = 'the captain of this ship - a dangerous man, captain roger was known to have killed 10 whales!!';
compareStrings(str1, str2);// returns true


