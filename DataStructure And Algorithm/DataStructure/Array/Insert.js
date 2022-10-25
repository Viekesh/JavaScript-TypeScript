// Insert Element In Array

// Here we can do :
    // Understanding solution with whiteboard
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

const insertElement = () => {
    let data = [19, 20, 33, 83, 42];

    let newElement = document.getElementById("newEl").value;
    
    let position = document.getElementById("pos").value;

    newElement = parseInt(newElement);
    
    for(let i = data.length - 1; i>=0; i--) {

        console.warn(data[i]);

        if(i>=position) {
            console.log(data);
            data[i+1] = data[i];
            if(i==position) {
                data[i] = newElement;
            }
        }
    }
    document.getElementById("dataEl").innerHTML = data;
    console.log(data);
}
