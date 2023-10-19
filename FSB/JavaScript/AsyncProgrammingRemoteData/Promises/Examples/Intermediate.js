"use strict";



const fetchUser = () => {
    return (
        new Promise((resolve, reject) => {
            fetch("https://api.example.com/users")
                .then((response) => response.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    );
};

fetchUser()
    .then((users) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

// In this example, the fetchUsers() function is used to fetch a list of users from an API. The fetch() function is an 
// asynchronous function that returns a promise.

// The fetchUsers() function returns a promise that is resolved with the list of users if the fetch is successful. The 
// promise is rejected with an error if the fetch fails.

// The then() method is used to handle the successful completion of the promise. The catch () method is used to handle
// the rejection of the promise.

// In this example, the then() method is called with a callback function that logs the list of users to the console. The 
// catch () method is called with a callback function that logs the error to the console.