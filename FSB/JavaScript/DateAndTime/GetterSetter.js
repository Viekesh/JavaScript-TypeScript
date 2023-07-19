"use strict";




// ex 1 :
// //Create a shortcut method named log to save time from typing console.log everytime
const log = (str) => console.log(str);

//Instantiate a date object. It will always report the current date and time
const now = new Date();

now.setDate(8);
now.setHours(12);
now.setMinutes(30);

log(now.getDate());
log(now.getDay());
log(now.getMonth());
log(now.getFullYear());
log(now.getHours());
log(now.getMinutes());
log(now.getSeconds());
log(now.getMilliseconds());
log(now.getTimezoneOffset() / 60);
log(now.toTimeString());

//showTime method accepts a date object and returns back a formatted time string 

//use of default parameters with the Date constructor, without the new Keyword returns fully //formatted String representing the current date. 

const showTime = (date = Date()) => {

//date is parsed by the Date constructor
const dObj = new Date(date);
return `${dObj.getHours()}:${dObj.getMinutes()}:${dObj.getSeconds()}`;
};

console.log(showTime(new Date('7 April, 2021 13:00')));




// ex 2 : 
// Let’s now examine getter methods from the above example. A getter method as the name implies gets us a value. So, these some of the getter methods.

    // getDate()
    // This method reports a numeric value between 1 and 31 as the date

    // getDay()
    // This method reports a number between a 0 and 6 where 0 is sunday and 6 is saturday.

    // getMonth()
    // This method returns a number between 0 and 11 where 0 is january and 11 is December.

    // getFullYear()
    // This method returns a 4 digit years value such as 2021.

// Since the date object also represents time, we also have getter methods for working with the time component of the date. For instance:

    // getHours()
    // This method reports back a number representing the current hour as per the 24 hour format and the locale or timezone where this method is invoked.

    // getMinutes()
    // This method fetches us minutes as per the clock.

    // getSeconds() and getMilliseconds
    // These method reports backseconds and milliseconds as per the date object respectively.

// Now since all these methods return back time as per the current locale, we can also use the getTimezoneOffset method which returns the local timezone offset from UTC in seconds. 

// Here I’m getting -330 or - 5 and a half hours from UTC once I divide by 60 to get the value in hours. This is because India is 5 and a half hours ahead of UTC. For instance, when it is 6.30 pm in India, it's 1 pm as per UTC time. 
    
// Earlier in this module, we saw the use of .toDateString() method which gets us a human-readable date string. In the same fashion, we have the toTimeString which reports the time as per the date object and the current timezone. 
    
// So, these were getter methods. If you want to set a specific component of the date object, we can also use setter methods. For instance, using setDate(), we can set the date as 10, month as April and the time as 12:30 pm. 



// ex 3:
const date = new Date(2020, 2, 20);

// While this will create a valid date object, you still have to set the time. Do this by using setter methods on the date object as shown below.

date.setHours(15);
date.setMinutes(35);
date.setSeconds(23);
date.setMilliseconds(12);


// This will set the time to 15:35:23:12. Next, access the date, day, month and year as shown below.

const getDate = date.getDate();
const getDay = date.getDay();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();

const getHours = date.getHours();
const getMinutes = date.getMinutes();
const getSeconds = date.getSeconds();
const getMilliseconds = date.getMilliseconds();
const getTime = date.getTime();

console.log(`Date: ${date}`);
console.log(`The date: ${getDate}`);
console.log(`The day: ${getDay}`);
console.log(`The Month: ${getMonth}`);
console.log(`The year: ${getFullYear}`);
console.log(`Time: ${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`);
console.log(`Time (ms since Epoch): ${getTime}`);

// The getHours() reports back a value between 0 and 23, the getMinutes() reports back minutes between 0 and 59, getSeconds() gets us the value in seconds from 0 and 59 and so on. The getTime() method reports back time since Epoch in milliseconds.
 
// That’s it. You can now use the getter and setter methods on the Date object.



// Date.getMinutes() is used to get Minutes.

// What will be the output of following program?
const year=new Date();  
console.log(year.getFullYear());

// Date.getFullYear() returns a four-digit number of the current year.



// Which day of the week will 0 in the Date.getDay() represent?
// The DategetDay() method returns the day of the week (from 0 to 6) for the specified date where Sunday is 0, Monday is 1, and so on.

// Date.toTimeString() is used to return time portion of date object to a string .
