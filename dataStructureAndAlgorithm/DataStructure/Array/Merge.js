// Merge Two Array

// Here we can do
// Make three arrays
// Use 2 different loops to merge elements
// Shortcut for reverse array element (default function)
// Shortcut for merge array element (default function)



// let data1 = [19, 20, 30, 100, 77];
// let data2 = [2, 44, 53, 91, 23];
// let data3 = [];

// the variables called data1 and data2 assigns it an array containing the different numbers in each array and variable data3 assign an empty array array.

// console.warn('data 1 :', data1);
// console.warn('data 2 :', data2);
// console.warn('data 3 :', data3);

// for(i=0; i<=data1.length-1; i++) {
//     data3[i] = data1[i];
// }
// This loop iterates over the data1 array and copies each element to the data3 array.

// console.warn('data 3 :', data3);

// for(i=0; i<=data2.length - 1; i++) {
//     console.warn('data 2 length', data1.length + i);
//     data3[data1.length + i] = data2[i];
// }
// This loop iterates over the data2 array and copies each element to the data3 array, starting at the index data1.length.

// console.warn(data3);






// Merge two array using while loop

// Here we can see
// Make three arrays
// Make while loop to merge elements
// Compare this logic with last one


let data1 = [2, 4, 5, 34, 45, 65, 69, 78, 99, 101, 106];
let data2 = [3, 23, 42, 55, 66, 105, 121];
let data3 = [];
// The first three lines of code create two arrays, data1 and data2, and an empty array called data3. we merge above two array in "data3" array.


let d1 = 0;
let d2 = 0;
let d3 = 0;
// The variables d1, d2, and d3 are the variables used to keep track of the current index in each array. Whose values initially 0, whenever we use loop then the value of this variable increases one by one.

// in while loop we will put some coditions, because of this conditions the values are increasing in d1, d2, d3 variables
// variable "d3" values is increasing every time, because every time a new value will be added here
// out of data1 and data2 variable we have to see which value to push in data3 array
// if we push the value of data1 array then we will increasing the value of "d1" variable similarly we doing with
// data2 array if we push the value of data2 array then we will increasing the value of "d2"

while (d1 < data1.length && d2 < data2.length) {
    // if "data1" 0th position is less than "data2" 0th position, then the value of "data1" 0th position will be push
    // in "data3" 0th position, now the value will be increased in "data3" array
    if (data1[d1] < data2[d2]) {
        data3[d3] = data1[d1];

        // we type "d3++" so that the next value we will be add will be in increasing order
        d3++;
        d1++;
        console.warn(data3[d3]);
    } else {
        data3[d3] = data2[d2];
        // d3++;
        d2++;
        console.warn(data3[d3]);
    }

    // it is better to type it here istead of type it in above two places
    d3++;
}

// The while loop iterates as long as the current index in data1 is less than the length of data1 and the current index in data2 is less than the length of data2. Inside the loop, the code checks to see if the value at the current index in data1 is less than the value at the current index in data2. If it is, the code copies the value from data1 to data3 and increments the indexes of d1 and d3. If it is not, the code copies the value from data2 to data3 and increments the index of d2. Finally, the code increments the index of d3 regardless of which value was copied.

console.warn(data3);
console.warn(d1);

// The next two lines of code print the contents of data3 and the value of d1.

while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d1++;

    // we type "d3++" so that the next value we will be add will be in increasing order
    d3++;

    console.warn(data3);
}

// The final while loop iterates as long as the current index in data1 is less than the length of data1. Inside the loop, the code copies the value at the current index in data1 to data3 and increments the indexes of d1 and d3. Finally, the code prints the contents of data3.
