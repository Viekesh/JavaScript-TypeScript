"use strict";



// It is impossible to assume a universe without date and time, let alone computers and applications. Almost every application needs to work with a date and time. For instance, when you place an order on Amazon, your order is tied to a timestamp and from there on, the estimated date of delivery is computed and all throughout you get to see timestamps as the product travels from the warehouse to your home.   

// The banking industry relies heavily on timestamps and accurate time computations for managing transactions. It is therefore important to understand how JavaScript works with date and time as it will be important for you to work with, in your applications.

// JavaScript includes a Date object which can be used to work with date and time. In its primal form, date in JavaScript is described as the number of milliseconds that have elapsed since midnight on 1st January 1970 as per Greenwich Mean Time or GMT. 

// This date is also known as the Epoch and is based on how Unix handles time. 

// Now, Greenwich Mean Time or GMT refers to a standard based in Greenwich, England. After 1972 however, this has come to be known as the UTC or Universal Time Coordinated which is based on a standard maintained by the International Bureau of Weights and Measures or BIPM in Saint-cloud, France. 

// UTC is also known as Zulu time and is how date and time is expressed in JavaScript no matter where you are. This ensures uniformity in code. You can convert UTC time to your local time zone for display and computation.



// Date Contructor

// Date objects can be constructed using the Date() constructor function and once a date object is created, you get a number of methods on the prototype.

// A fundamental date object can be created using the Date constructor function. It is important to note that the ‘new’ keyword is essential here or else you’ll just get a String value which isn’t a valid date object. 

// By default, this will create a date object that refers to the current time as per your computer’s clock. If you try to peek in, you’ll notice we get a date object with an attached prototype that contains a ton of getter and setter functions, some of which we’ll explore later in this module. These are part of every date object and allow you to operate on date and time.

// Now, the date constructor can also accept strings which are parsed to create date objects. For instance, for valentine’s day, I’ll express the date as a string ’14 February, 2021’ and this actually converts it to a valid date object.  

// You can also set a specific time. And you can also express the date and time in multiple ways. 

// Another way, which is incredibly useful and always accurate is using literal numeric values expressed in this specific order. Year, month as a numeric value which actually begins from 0 and not 1. So, January is 0, and February is 1, followed by the day, hour, minutes and seconds. 

// Make sure you remember the way months are represented as values 0 - 11. So accidently setting 2 as a way of expressing February for instance will produce March instead. 

// In the same way, let’s also express world health day which falls on the 7th of April and we can then display the date value.



// But to see a date in a human readable format, we have a couple of methods available.

// toDateString() :
// For instance, the toDateString() method returns the date object in this format with the day, month, date and year.

// toISOString()

// Likewise, the toISOString() method returns the date object in the USO 8601 standard format where date and time are represented as 24 or 27 character long strings and ending with the character Z which refers to zulu time or the UTC standard. This time is as per UTC which means it does not correctly reflect the time as per your local time zone. 



// Examples :

const today = new Date();

console.log(today);
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleDateString('en-US'));
console.log(`New Delhi : ${today.toLocaleString('en-US', { timezone: 'Asia/Kolkata' })}`);
console.log(`Singapore : ${today.toLocaleString('en-US', { timezone: 'Asia/Singapore' })}`);
console.log(`New York : ${today.toLocaleString('en-US', { timezone: 'America/New_York' })}`);




// toLocaleString()

// So, getting time as per your time zone is as simple as using the toLocaleString() method which works like this. If you are in India and you can see the time difference between UTC time and time as per the toLocaleString method. 

// The toLocaleString method is actually quite interesting and allows us to convert date objects as per given timezone values. And it also formats the date as per the locale. So, here, by default, you’ll notice the date as 4 - 2 - 2021 which is 4th of February as per the Indian way of expressing dates. 

// To get the US way where month precedes day, we can set the first parameter as ‘en-US’. and this formats the date according to the US. 

// And you can also work with timezones.  For instance, here, passing a second parameter as an object where a property named timeZone in camel case is set as the timezone database name, you can get date and time for a given country.

// In Singapore, the time zone database name is Asia/Singapore and this gives us the current time as per Singapore. Likewise, for new York and this is Tokyo. 

// You can thus build a world clock app, using the toLocaleString() method, which reports time as per a given location. You just need to use the correct time zone database name. 

// Now, the Date object by itself also offers some ready to use static methods which do not require creation of a Date object instance using the ‘new’ keyword.



// Date.now
// It returns the number of miliseconds since epoch i.e. 1st January, 1970 at midnight. You can divide this by 1000 to get seconds since epoch.

// Date.parse
// It accepts a string date representation and it converts it to milliseconds until epoch. 



// To get a list of time zone database names, you can visit this webpage on Wikipedia. It should also be noted that the Date object has been the only way to handle date and time in JavaScript and is somewhat restricted by the built-in methods. This means that you have to write functions for date computations and processing, which can be tedious.   

// A solution is to use a third-party library such as Date.js which brings in a ton of date processing capabilities to your applications. 

// At the time of recording, the TC-39 committee is reviewing a new proposal called Temporal which like the Date object could be used for working with Date and time and would provide solutions to long-standing pain points with the current Date object.  

// Temporal isn’t ready to be used just yet however you do have polyfills to test its proposed capabilities. More details on Temporal can be had from this webpage.




// JavaScript offers a built-in Date object which lets us parse and work with Date and Time which is required in most web applications. The Date() constructor function can be used to create a Date object after which prototype methods may be used as necessary.

// In this exercise, you’ll do a very quick run through the essentials of working with the Date constructor and computing difference in years. Start by opening up the main.js file. You’ll notice a const named waltDisneyBirthday which is set to null right now.

// You’ll need to construct a date object that is set to Walt’s birth date - 5th December, 1901 at 00:35:00 hours.

// To achieve this, modify the constant as shown below:
// const waltDisneyBirthday = new Date('5 December, 1901 00:35:00');
// This creates a date object which can be used to perform date computation or simply parse it as a human readable date. So, first up in the console.log, modify the first expression as highlighted below.

// // Next, you’ll need to compute and display the number of years that has gone past since Walt was born. To achieve this, you’ll need to compute the difference between Walt’s birthdate and today in milliseconds and then divide the result by 31536000000 (1000ms * 60s * 60min * 24hours * 365days = 1 year).

const waltDisneyBirthday = new Date('5 December, 1901 00:35:00');

// Create the following function right below the constant.

const yearsTo = (date) => {
    const diff = (date - Date.now()) / 31536000000;
    return Math.abs(diff.toPrecision(4));
};

console.log(
    `Walt Disney was born on ${waltDisneyBirthday.toLocaleString(
        'en-IN'
    )}. That was ${waltDisneyBirthday} years ago!`
);


// This function accepts a valid date object, subtracts it from Date.now() which is a built-in method that produces the current time value in milliseconds since epoch. This is then divided by 31536000000. Finally, this result would be in negative, so you’ll be using Math.abs() to turn this into an absolute positive value. The .toPrecision() ensures you get a value that is precise to 4 points of the decimal.

// With this done, modify the console.log statement once more to incorporate an invocation to this function.

// That’s it. You’ve just played with the Date object for the very first time!

// The Date Object can be declared in four ways namely-
// 1.newDate() sets the current dateand time depending upon browser’s time zone.
// 2.newDate(milliseconds)which accepts single parameter indicating numeric value.
// 3. newDate(datastring) which accepts single parameter indicating string value.
// 4.new Date(year, month, date, hour, minute, second, millisecond) which accepts seven arguments.


// What will be the output of following program?
const k= new Date(1993,6,28,14,39,0o7);
console.log("Que", k.toDateString());
// The Date.toDateString() method returns the date converted into string which needs to be just in a readable format.



// What is syntax of converting date’s object into a string in ISO format?
// The correct syntax is dateObj.toIS0String() to convert given date into string in ISO standard.

// What is UTC?
// . UTC is primary time Standard by which the world regulates  clocks and time and UTC is same as GMT(Greenwich mean time) .
// There’s no difference in time between GMT and UTC ,which is a primary time standard used by the world to regulate clock and time.





//.