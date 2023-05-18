// Insert Element In Array

// Here we can do :
    // Make array, define the solution
    // Use loop to insert new element
    // Insert element with text input and button
    // Insert element with by default function



// let data = [19, 20, 33, 83, 42];

// let newElement = 70;

// let position = 2;

// for(let i = data.length - 1; i>=0; i--) {
//     console.warn(data[i]);
//     if(i>=position) {
//         console.log(data);
//         data[i+1] = data[i];
//         if(i==position) {
//             data[i] = newElement;
//         }
//     }
// }

// console.warn(data);



// This line defines a function called insertElement(). The function takes no arguments and returns no value.
const insertElement = () => {
    let data = [19, 20, 33, 83, 42];
    // This line creates an array called "data" and assigns it the values 19, 20, 33, 83, and 42.

    let newElement = document.getElementById("newEl").value;
    // This line creates a variable called newElement and assigns it the value of the element with the ID newEl.
    
    let position = document.getElementById("pos").value;
    // This line creates a variable called "position" and assigns it the value of the element with the ID pos.

    newElement = parseInt(newElement);
    // This line converts the value of the variable "newElement" to an integer.
    
    for(let i = data.length - 1; i>=0; i--) {
        // This line creates a for loop that iterates over the "data" array, starting at the last index and ending at index 0.

        console.warn(data[i]);
        // This line displays the value of the data array at index i

        if(i>=position) {
            console.log(data);
            data[i+1] = data[i];
            if(i==position) {
                data[i] = newElement;
            }
        }

        // In first "if" block we can check if the value of i is greater than or equal to the value of "position" then we will assigns the value of the data array at index i to the value of the data array at index i+1

        // In nested "if" block we will checks if the value of i is equal to the value of "position" and assigns the value of the variable "newElement" to the value of the "data" array at index i.
    }

    document.getElementById("dataEl").innerHTML = data;
    // Here we will sets an inner HTML of the element with the ID "dataEl" to the value of the "data" array.
    console.log(data);
}


