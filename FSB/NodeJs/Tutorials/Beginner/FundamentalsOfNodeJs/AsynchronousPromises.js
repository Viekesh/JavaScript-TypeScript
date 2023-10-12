// Promises enables you to breakdown asynchronous code into two different pieces

import fs from 'fs';

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) {
                reject(error.message);
                console.log("Error has occured in 'if' block");
            } else {
                resolve(data.toString());
                console.log("Request accepted from else block");
            }
        })
    })
};

getFile('../async.txt').then((data) => {
    console.log(data, "\n request granted from callback function");
}).catch((error) => {
    console.log(error.message, "\n Error is occurred in catch block");
});



// const getFile = fileName => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (err,data) => {
//             if (err){
//                 reject(err);
//             }else{
//                 resolve(data.toString());
//             }
//         })
//     })
// }

// getFile('async.txt')
//     .then(data => console.log(data))
//     .catch(err => console.error(err));