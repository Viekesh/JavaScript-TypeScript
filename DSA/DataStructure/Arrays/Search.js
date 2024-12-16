// Search Element In Array

// Here we can see :
// Make array use loop to search element
// search element with text input and button
// shortcut for search element (default function)
// shortcut for delete element (default function)

// Here we can use linear search method, this method search item one by one


// let data = [30, 49, 90, 94, 82, 11, 25, 56, 79, 100];

// let search = 100;

// let index = undefined;

// for (i = 0; i <= data.length - 1; i++) {
//     // console.warn(data[i]);
//     if (data[i] === search) {
//         index = i;
//         break;
//     }
// };

// console.warn(index);
// console.warn(data[index]);


const searchElement = () => {
    let data = [30, 49, 90, 94, 82, 11, 25, 56, 79, 100];

    let search = document.getElementById("searchEl").value;

    let index = undefined;

    for (i = 0; i <= data.length - 1; i++) {
        // console.warn(data[i]);
        if (data[i] == search) {
            index = i;
            break;
        }
    };

    console.warn(index);
    document.getElementById("searchResult").innerHTML = index;
}