"use strict";



// Now, we’ll create a function, which will help us format the presentation of date and time for use in apps. 

// You’ve seen the various methods that help us present date and time values in a human-readable format. But what if we want to customize this presentation by reordering parts of the string as per a given template? 

// The template here has keywords that represent various parts of date and time components such as day, date, month, year, hour, minutes, and so on. We should be able to rearrange these at will to customize the presentation. There are third-party libraries that can help us do this effectively.  

// But since we’re learning JavaScript, we should also be able to do this ourselves. Let’s see how through the different versions of the function.



// Here is the the first version of our function named formatDate which accepts two parameters. 

'use strict';

const formatDate = (
    dateObj = new Date(),
    str = 'DD, d-MM-YYYY at hh:mm:ss'
) => {
    const [day, month, date, year] = dateObj.toDateString().split(/\s/);
    const [hour, minutes, ...rest] = dateObj.toTimeString().split(':');
    const [seconds] = rest[0].split(/\s/g);
    const formattedDate = str
        .replaceAll('d', date)
        .replaceAll('DD', day)
        .replaceAll('MM', month)
        .replaceAll('YYYY', year)
        .replaceAll('hh', hour)
        .replaceAll('mm', minutes)
        .replaceAll('ss', seconds);

    return formattedDate;
};

console.log(formatDate());



// The dateObj parameter must be a date object and in the absence of an argument, it is set to a new instance of a date object like so using default paramters. The second parameter is the format string which contains keywords representing various parts of the presentation.

// So, uppercase double DD is the day such as Monday, Tuesday etc., lowercase d is the date, uppercase double MMs is the month such as January, February etc., uppercase Ys are the full year.

// On the other hand double h is hours padded with a zero which means if the hour is below 10 such as 8 o clock, it should be written as 08 and not just 8. Likewise double mm and double ss are minutes and seconds respectively, padded with a 0 if less than 10.

// We’re setting the string here as default parameters but can obviously be customized as well.

// Now the first thing I’ll do is use the toDateString() to get the date portion.

// So if we split the output of toDateString by space (regular expression for whitespace in the split method), we can directly destructure these four entities.

// In the same fashion, we can extract hour, minutes and seconds from the totimeString where the separator is a double-colon. We can then use another split by whitespace to extract the seconds portion. This works well now. We have our hours, minutes and seconds.

// This is a good time to grab our format string and use a bunch of replaceAll methods to replace our keywords with their actual values.

// If I now provide the first argument as a custom date object, our formatted date reflects the outcome. And I can customize the presentation using keywords.






// Here we have another version of this function. 

const formatingDate = (d = new Date(), str = 'DD, d-MM-YYYY at hh:mm:ss') => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const formattedDate = str
        .replaceAll('d', d.getDate().toString().padStart(2, 0))
        .replaceAll('DD', days[d.getDay()])
        .replaceAll('MM', months[d.getMonth()])
        .replaceAll('YYYY', d.getFullYear())
        .replaceAll('hh', d.getHours().toString().padStart(2, 0))
        .replaceAll('mm', d.getMinutes().toString().padStart(2, 0))
        .replaceAll('ss', d.getSeconds().toString().padStart(2, 0));
    return formattedDate;
};

console.log(
    formatingDate(new Date('12 April, 2021 2:35:2'), 'DD, d-MM-YYYY at hh:mm:ss')
);

console.log("part 2 : ", formatingDate());



// Here start the same way by accepting a date object and a format string.Also we need two arrays, one for days of the week and the other for months.The days must start from Sunday while the months from January to December.

// Next create our formattedDate string and using the replaceAll method to first replace a single ‘d’ with the date using the getDate() method.Since this isn’t padded with a 0 for values less than 10, we can first append a toString() method and then using the padStart method to ensure our numbers are two digits wide using 0 as the padded digit if values are less than 10. The padStart method appears on the String prototype. 

// Next comes days of the week denoted by uppercase double DDs where we should use the getDay() method to get a number from 0 - 6 which we can then use on the days array to fetch the day of the week.Remember getDay returns days numbered 0 - 6 where 0 is Sunday and 6 is Saturday so it perfectly maps to an array such as the one we’re using here.

// In the same fashion, get the current month. Here too we get numbers 0 - 11 which maps from January to December in our array. Keep doing this using our getter methods to fetch all components of date and time to form the final output string. And this works as expected.






// There are multiple ways to format date and time in JavaScript. But the real fun is in building a function that lets you customize the way date is formatted. One of the easiest ways to do this is to use the toDateString() and toTimeString() methods, extracting the various components of date and time and then using these tokens to format the date string as needed.

// In this code a date object that is locked to 21st June, 2021 at 21:22:10 precisely. You need to write a function that formats this date as Wed, 21-Jul-2021 at 22:10:00 where the formatting would be done using a template string which looks like this : DD, d-MM-YYYY at hh:mm:ss. As you can see:.

// DD -> Day
// d -> Date
// MM -> Month
// YYYY -> Year
// hh -> Hour
// mm -> Minutes
// ss -> Seconds

// Using these tokens, your function should be able to format the date and time as needed. So, here’s how you can create the formatDate() function.

const date = new Date(2021, 6, 21, 22, 10, 0);

const formatData1 = (dateObj, str) => {
    const [day, month, date, year] = dateObj.toDateString().split(/\s/);
    const [hour, minutes, ...rest] = dateObj.toTimeString().split(':');
    const [seconds] = rest[0].split(/\s/g);
    const formattedDate = str
        .replaceAll('d', date)
        .replaceAll('DD', day)
        .replaceAll('MM', month)
        .replaceAll('YYYY', year)
        .replaceAll('hh', hour)
        .replaceAll('mm', minutes)
        .replaceAll('ss', seconds);

    return formattedDate;
};

console.log(
    `21st june, 2021 can be formatted as ${formatDate(
        date,
        "DD, d-MM-YYYY at hh:mm:ss"
    )}`
);



// What you’re doing here is using String.split() to extract day, month, date, year and likewise the hour and minutes from the output of toDateString() and toTimeString() respectively. The seconds bit however contains a lot more than just the seconds such as the time zone and offset from GMT. To remove this bit, the split method is used.
 
// That’s it. You can use this function in your web apps and projects.



// What will be the output of the following program?
const string='Health is wealth';
 
const array=string.split("is");
 
console.log(array);
// String.split() is used to split given string into array of strings by separating them into substrings using a specified separator provided in the argument along with the length of the string.


// What does the String.split() do?
// String.split() splits the string into substring using the splitter/separator and return them as array.


// String.PadStart() is used to pad a string with the string itself?
// String.PadStart() is used to pad a string with another string until it reaches the specified length.


// Splitting and joining an array
// replace() with a global regular expression.
// replaceAll() method

// All of the mentioned above are ways of replacing all the string occurrences



// .