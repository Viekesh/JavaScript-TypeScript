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
let position = 3;
// console.warn(data.length);
// console.warn(data);
for(i=position; i<data.length; i++) {
    // console.warn(data[i]);
    data[i] = data[i+1];
    console.warn(data);
}
data.length = data.length - 1;
console.warn(data);

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


