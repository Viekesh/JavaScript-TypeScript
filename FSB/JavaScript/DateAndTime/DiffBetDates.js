"use strict";



// Now, we’ll build a function that will help us compute the difference between two date objects. 

// Computing the difference between two date objects is as simple as simple subtraction, however, the function that we’re building will be a bit more elaborate because it will report back the difference in the formats that you see on the screen. 

// To achieve this, you have to keep in mind a few necessary conversion values. 

// 1 second = 1000ms and this is important to know because computed values are in milliseconds and we need to convert them to seconds, minutes, hours, days etc. So, keeping milliseconds as our base, to convert milliseconds to seconds, we simply divide by 1000 

// To convert milliseconds to minutes, we divide the value by 60,000. To convert them to hours, we need to divide the value by 3.6 million. That’s 36 followed by 5 zeroes. And finally, to compute milliseconds to days, we can divide the value by 86.4 million. Keeping these conversions in mind, let’s get down to business. 

// Assume today is the 7th of February, 2021 so let’s set up two date objects. Here, dateA refers to the current date and time by our computer’s clock while dateB is fixed approx. 3 days from now at 6 PM. 

// So let’s build a timeDiff function, which accepts a start date, an end date, and a format string to return the difference value in. 


const timeDiff = (start, end, format = 'D') => {
    const diff = end - start;
    const status = diff <= 0;
    const suffix = status ? 'elapsed...' : 'left...';
    const days = `${((status ? -diff : diff) / 86400000).toPrecision(2)} days`;
    const hours = `${Math.ceil((status ? -diff : diff) / 3600000)} hours`;
    const minutes = `${Math.ceil((status ? -diff : diff) / 60000)} minutes`;
    const seconds = `${Math.ceil((status ? -diff : diff) / 1000)} seconds`;
    switch (format) {
        case 'D': {
            return `${days} ${suffix}`;
        }
        case 'H': {
            return `${hours} ${suffix}`;
        }
        case 'M': {
            return `${minutes} ${suffix}`;
        }
        case 'S': {
            return `${seconds} ${suffix}`;
        }
    }
};

const dateA = new Date();
const dateB = new Date('9 Feb, 2021 18:00:00');
console.log(timeDiff(dateA, dateB, 'D'));

// Computing the difference is as simple as B - A and this will produce a value in milliseconds.

// A positive value implies the event is in future while a negative value would mean that the event has elapsed. Keeping this in mind, let’s detect if dateB has elapsed or is supposed to occur in the future.

// Now using the hasElapsed value, we will produce a suffix to add to our computed value. If hasElapsed is true, then we’ll append the word ‘elapsed’ or we’ll append ‘left’. You’ll understand the purpose of this in a few moments.

// Let’s compute the difference between the start and the end dates in days first. To do this append the word days to the computation so let’s use a template literal string here. The way we’ll compute this, is we’ll first use hasElapsed to remove the negative sign if it exists and then we’ll divide by 86.4 million. I’m also using the toPrecision method to limit the decimal count to 2 digits.

// For computing the hours, we’ll divide the difference by 3.6 million like so. Here I’m also using the Math.ceil method to round off the value and we’re appending the word ‘days’ at the end.

// Copy and paste Line 11 and we’ll change 3.6 million to 60,000 to produce a value in minutes like so.

// And finally, we’ll divide by 1000 to produce a value in seconds.

// Now let’s use switch on the format parameter and if it's set to upper case D, we’ll return the combined result of days and the suffix.

// Likewise, if the format string is H, we’ll output the hours value. If its M, then minutes and if its S then seconds like so.

// If nothing is specified or if we do not have a defined case, then we’ll simply output, ‘Invalid format string’. So let’s change to hours and we get 71 hours left to 10th Feb.

// If we now change to a date that has gone past and we get 146 hours have elapsed Or 6.1 days elapsed.

// This kind of function is useful when you’re building blogs, or messaging apps where you have to compute the time elapsed for posts.





// You have already experimented with computing the difference between two dates, so this example will be about customizing how data is returned back to the caller. Begin by opening up the main.js file. You’ll see an associative array of date pair strings. The objective is to compute the difference between the pair of dates and be able to present the difference in either days, hours, minutes or seconds.
 
// The bit involving iteration through the dates array, converting each string to a date object and invoking the dateDiff() function has been done for you however it won’t produce any result since the function itself hasn’t been defined as yet.
 
// So, carve out your function as shown below. This is what you saw in the video, however the status ? -diff : diff has been simplified by using Math.abs(diff) which will return an absolute value, obliterating the need to use a ternary.

const dates = [
    ['10 Feb, 2021', '1 Mar, 2021'],
    ['25 Dec, 2020', '25 Dec, 1999'],
    ['1 Jan, 2021', '1 Jan, 1954'],
];

const dateDiff = (start, end, format = 'D') => {
    const diff = end - start;
    const suffix = diff <= 0 ? 'elapsed...' : 'left...';
    const days = `${(Math.abs(diff) / 86400000).toPrecision(5)} days`;
    const hours = `${Math.ceil(Math.abs(diff) / 3600000)} hours`;
    const minutes = `${Math.ceil(Math.abs(diff) / 60000)} minutes`;
    const seconds = `${Math.ceil(Math.abs(diff) / 1000)} seconds`;
    switch (format) {
        case 'D': {
            return `${days} ${suffix}`;
        }
        case 'H': {
            return `${hours} ${suffix}`;
        }
        case 'M': {
            return `${minutes} ${suffix}`;
        }
        case 'S': {
            return `${seconds} ${suffix}`;
        }
    }
};

dates.forEach(([d1, d2]) => {
    const dateD1 = new Date(d1);
    const dateD2 = new Date(d2);
    console.log(
        `Diff between ${d1} and ${d2} is ${dateDiff(dateD1, dateD2, 'D')}`
    );
});


// As you can see from the function above, the actual difference between date objects is just simple subtraction. After that, all that you’ve got to do is transform the milliseconds value to days, hours, minutes and seconds and return back the value as demanded using the format keyword parameter.

// Feel free to use this in your web application projects.


// Math.abs() and Math.floor() are the two methods used in computing days from current date.

// Math.ceil() always rounds up the number to the next largest number/integer.

// Date constructor returns function date for dates.

// Math.ceil() doesn’t return a NaN error.