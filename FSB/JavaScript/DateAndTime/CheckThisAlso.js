"use strict";



// Now, we’ll build a series of functions that can add days, hours, or minutes to a given date object. Now, let’s once again visit this conversion chart where this time, we’re converting days, hours, and minutes to milliseconds. This is because the common unit of measuring time in JavaScript is milliseconds and when it comes to computations, we have to rely on milliseconds to get the job done. So, let’s build our functions, which will allow us to add days, hours, and minutes to a given date object.

// We have here a date object representing the current moment in time and we’re displaying this using the toLocaleString() method as well.

const now = new Date();

console.log(`Now : ${now.toLocaleString()}`);

const addDays = (dateObj = new Date(), days = 0) => {
    const daysToMs = days * 864_00_000;
    return new Date(dateObj.getTime() + daysToMs);
}

console.log(addDays(now, 7).toLocaleString());


const addHours = (dateObj = new Date(), days = 0) => {
    const hoursToMs = days * 36_00_000;
    return new Date(dateObj.getTime() + hoursToMs);
}

console.log(addHours(now, 7).toLocaleString());


const addMinutes = (dateObj = new Date(), days = 0) => {
    const minutesToMs = days * 60;
    return new Date(dateObj.getTime() + minutesToMs);
}

console.log(addMinutes(now, 7).toLocaleString());



// The addDays method is quite simple to understand. It accepts a date object which we can set to a default value of a new date object, and a numeric value representing days to add to the provided date. 

// To get this to work, we’ll first convert days to milliseconds (the underscore separator makes the number easier to read). Then convert the incoming date object to milliseconds using the getTime() method, add the days, and use the Date constructor to return back a valid date object.

// So now, we can add a day and render this using the toLocaleString method.

// Next, copy the function and change days to hours and change our value here to 3.6 million and this works too. 

// In the same fashion, we can build the addMinutes method as well. Such functions are incredibly useful for simple date computations which are often needed in web apps.






// When you have to add days to a given date, the process is as simple as converting the date to a computational value such as in milliseconds, adding the number of days after converting them to milliseconds and using that to generate a new date object which can then be parsed or used whichever way you want.
 
// In this exercise, we’re 5 days short of International Family Day which falls on the 15th of May. Open the main.js file and you’ll see a constant named ‘date’ set to a date object representing 10th May, 2021. 
 
// Your task is to add 5 days to this date so it's 15th May. Create the addDays function as shown below. 

const date = new Date(2021, 4, 10);

const addDays2 = (dateObj, days = 0) => {
    const daysToMs = days * 864_00_000;
  return new Date(dateObj.getTime() + daysToMs);
};

console.log(`International Family Day is on ${addDays2(date, 5)}`);



// You should now see the actual date of International Family Day on the terminal!



// Date() constructor holds four basic forms namely-no parameters, timestamp number, timestamp string and individual date ,time component values.

// dateObj.toLocaleString(Locales, options) is the correct syntax where locale contains one or more Local tags and options is an optional parameter.

// Date.getTime() returns numeric value to the specified time.

// Both opera and chrome are supported by Date.getTime() method