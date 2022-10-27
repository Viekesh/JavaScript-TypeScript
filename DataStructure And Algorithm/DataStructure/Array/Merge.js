// Merge Two Array

// Here we can do
    // Make three arrays
    // Use 2 different loops to merge elements
        // Shortcut for reverse array element (default function)
        // Shortcut for merge array element (default function)



let data1 = [19, 20, 30, 100, 77];
let data2 = [2, 44, 53, 91, 23];
let data3 = [];

for(i=0; i<=data1.length; i++) {
    data3[i] = data1[i];
}

console.warn(data3);

for(i=0; i<=data2.length; i++) {
    // console.warn(data1.length + i);
    data3[data1.length + i] = data2[i];
}

console.warn(data3);