// Delete Element In Array

// Here we can see :
// Make array, define the position
// Use loop to delete element
// Delete element with text input and button



// let data = [10, 20, 30, 40, 50, 60, 70];
// let position = 3;
// console.warn(data.length-1);
// for(i = position; i<data.length-1; i++) {
//     console.warn(data[i]);
//     data[i] = data[i + 1];
//     console.warn(data);
// };



let data = [11, 22, 33, 44, 55, 66];
// This line creates an array called data

let position = 3;
// This line create the variable called position and assign the value it to 3

// console.warn(data.length);
// console.warn(data);
for(i=position; i<data.length; i++) {
    // console.warn(data[i]);
    data[i] = data[i+1];
    console.warn(data, 'for loop executed');
}
// This line creates a for loop that iterates over the data array, starting at the index 3 and ending
// at the last index. For each iteration the value at index i is assigned to the value of index i + 1.
// the console.warn function is used to display the current value of the data array after each iteration.

data.length = data.length - 1;
// this line reduces the 'data' array by 1

console.warn(data, 'data displayed');
// this line displays the final value of the 'data' array

// In the above code As you can see, the for loop has shifted the values in the data array by one position to the left. The last value in the array has been removed

// for(i=position; i<data.length-1; i++) {
//     console.warn(data[i]);
//     data[i] = data[i + 1];
//     console.log(data);
// }
// data.length = data.length - 1;
// console.warn(data);



// const removeEl = () => {
//     let data = [30, 20, 30, 44, 99, 98, 293];
//     let position = document.getElementById("pos1").value;
//     position = parseInt(position);
//     for (i = position; i < data.length - 1; i++) {
//         console.warn(data[i]);
//         data[i] = data[i + 1];
//         console.log(data);
//     }
//     data.length = data.length - 1;
//     document.getElementById("rmElement").innerHTML = data;
//     console.warn(data);
// }


