// Array Traversing And Accessing


// Here we can write :
// Basic html page write basic array
// Traversing with loop
// Accessing element
// Access array element input using button
// Validations


// Traversing with loop :

let data = [22, 3, 34, 55, 54, 63, 19, 72, 44, 90, 199, 100];

// for(i = 0; i < data.length; i++) {
//     document.write(data[i]);

//     document.write(`${data[i]} <br />`);

//     document.write(`On the position of ${i}th element is ${data[i]} <br />`);
// }


// Accessing element :

// let x = 9;

// document.write(data[x]);


// const getElement = () => {
//     let el = document.getElementById("arr").value;
//     alert("You entered " + el);
//     alert(data[el]);
// };

// console.log(data.length);


// Access element using button :

// const getElement = () => {
//     let el = document.getElementById("arr").value;
//     alert(`You enter ${el}`);
//     alert(`On the position of ${el}th index is ${data[el]}`);

//     if (el < data.length) {
//         alert("You enter " + el);
//         alert(data[el] + " is on the position of " + el + "th");
//     } else {
//         alert("Enter valid number");
//     }
// }