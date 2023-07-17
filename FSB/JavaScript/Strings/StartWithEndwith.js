"use strict";



// startsWith

// The startsWith method determines if a given string begins with a provided string or not and accordingly returns a true or false. 

// You can also provide an optional position value to begin your search with. 

const data = ['SENSE01,1123,23,55,0.52', 'SENSE01,1230,22.3,65,0.77', 'SENSE01,1330,22.8,62,0.872', 'SENSE02,1126,18,89,0.65', 'SENSE02,1235,17,90,0.77', 'SENSE02,1330,17.2,85,0.79',];
const readDataToObj = (key, arr) =>

    arr

        .filter((el) => el.startsWith(key))

        .filter((el) => el.split(',')[4] > 0.75)

        .map((el) => {

            const [sensor, time, temp, humidity, accuracy] = el.split(',');
            return {

                sensor,

                time,

                temp,

                humidity,

                accuracy,

            };

        });
console.log(readDataToObj('SENSE01', data));

console.log(readDataToObj('SENSE02', data));

// Here we have an array of sensor data readouts for two soil sensors where I have comma-separated rows containing the sensor name, the time, the temperature reading in degrees Celsius, the humidity value in percentage, and an accuracy value between 0 and 1. 

// A data processing pipeline ultimately converts these to objects with defined properties. The first thing we need to do this is isolate data by sensor name. So use the filter method where we can simply check to see if each element begins with a given sensor name or key in this case. 

// If we execute the method for the sensor named SENSE01, we get an array of sensor 1 data easily. The startsWith provides a very convenient way in this case to filter out data. 

// Next, filter the results so we get data for sensors, which report an accuracy value that is greater than 0.75 or 75%. Notice the use of split to break apart the data and access the last value directly for comparison.  

// This brings down our results to two rows of data as you can see. Now convert the comma-separated data into an object. We need to use a map method where we’ll use array destructuring assignment on the outcome of running a string.split where we’ll break apart the string using comma as the delimiter. This gives us our individual values which we can directly return back as an object. 

// We get nicely formatted results as an object which is easier to consume when you have to build a frontend dashboard, which must get this data from an API service to display the results on a web page.  We can use this method to fetch data from the second sensor. And it works beautifully.






// The endsWith method determines if a string ends with a given string and here you can also specify an optional length of the string from the right end to consider for the search. 

// In the same fashion as the startsWith, the endswith method checks the end of the string. So a function, which gets results based on a given accuracy value can be built like this. 

// For example, we have this function to fetch all records featuring 0.77 as the accuracy.

const byAccuracy = (acc, arr) => arr.filter((el) => el.endsWith(acc));
console.log(byAccuracy(0.77, data));





// The startsWith() and endsWith() methods allow us to validate strings that begin and end with a given string.

// Let’s work with the example we saw in the video. Start by opening the main.js. We have an array of sensor data presented as comma separated data where the first part is the name of the sensor, the second is the time when the data was recorded, the third was temperature followed by humidity and a sensor accuracy value between 0 and 1.

// The readDataToObj() function should read this data, filter by the sensor name (key), the accuracy value and should convert it to an object.

// Write the readDataToObj() function as shown below:

'use strict';

const data33 = [
  'SENSE_A,1020,12,25,0.52',
  'SENSE_A,1120,13,26,0.63',
  'SENSE_A,1222,16,28.5,0.65',
  'SENSE_A,1330,18,30,0.65',
  'SENSE_B,1010,10,20,0.65',
  'SENSE_B,1110,12,21,0.62',
];

const readDataToObj1 = (key, accuracy, arr) => 
    arr
     .filter((el) => el.startsWith(key))
     .filter((el) => el.endsWith(accuracy))
     .map((el) => {
      const [sensor, time, temp, humidity, accuracy] = el.split(',');
 
      return {
         sensor,
         time,
         temp,
         humidity,
         accuracy,
       };
    });

console.log(readDataToObj1('SENSE_A', 0.65, data33));


// When you now run the app, you get two entries from the dataset matching the queries.



// How many parameters can String.startsWith() accept?
// String.startsWith() can accept two parameters - one, the search string   and second the position from where the string should be searched.

// What will be the output of following program?
const language = 'JavaScript is good';
console.log(language.split(' ', 2));
// String.split() access two parameters - the separator and the limit. Limit is optional. If no limit is provided, the array of all the substrings is returned after splitting the string using separator( space in this case). Here, the limit is 2, hence first two elements of array are returned.


// What will be the output of the following?
const language = 'Javascript is good’;
console.log(language.endsWith(‘d'));

// String.endsWith() accepts two parameters - the search string and the end position. End position is optional. It is used to check if the search string is same as the ending string. Here the language ends with d and hence true is logged to the console.



// What will be the output of the following?
const language22 = 'Javascript is good’;
console.log(language22.endsWith(‘d’, 5));

// String.endsWith() accepts two parameters - the search string and the end position. End position is optional. It is used to check if the search string is same as the ending string. Here, at position 5, the character is c which does not match with d and hence false is logged to the console.




// .