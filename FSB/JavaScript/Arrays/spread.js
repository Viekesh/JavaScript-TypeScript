"use strict";

// ex 1:

// const Tasks = function (title) {
//     this.title = title ?? "my tasks";
//     this.taskList = [];
//     this.showTasks = function () {
//         console.log(`-----${this.title}-----`);
//         this.taskList.forEach((item, index) =>
//             console.log(`${index + 1} : ${item}`)
//         );
//     };

//     this.add = function (item) {
//         this.taskList = [item, ...this.taskList];
//     };
// };

// const myTasks = new Tasks("Daily Tasks");

// myTasks.add = "Book Movie Tickets";

// myTasks.add = "Send Them Web Development Proposal";

// myTasks.showTasks();









// We saw the use of the Destructuring assignment for unpacking values from an array. We also saw the use of the rest 
// operator which allows packing together values, which weren’t destructured into a single variable. 

// The opposite of rest is spread which involves expanding an iterable into multiple distinct values. Some of the uses 
// of spread are:



// Shallow clone arrays

// Cloning an array is easy using the spread syntax. Instead of merely pointing to the items array we create a new 
// array, and using the spread syntax will expand the items array.

// Since we are creating a new array, there is no reference to the original array and "itemsCopy" is now a clone
// of the "items" array as we can see from the difference in output.

// The spread operator (line 5 in the code below) looks exactly like the rest operator we saw previously but its 
// implication is exactly the opposite. While rest collects multiple values into one variable, spread expands a 
// variable into multiple values.

// ex 1:

const items = ["mouse", "cable", "microphone"];

const itemsCopy = [...items];

itemsCopy.push("USB Hub");

console.log(`Items : ${items}`);

console.log(`Items Copy : ${itemsCopy}`);









// Concatenate Multiple Arrays :

// We can also use spread to concatenate multiple arrays. The following example concatenates two arrays with and 
// primary secondary colors using the spread operator.

// ex 2:

let primaryColors = ["white", "blue", "green"];

let secondaryColors = ["red", "yellow", "violet"];

let colorWheel = [...primaryColors, ...secondaryColors];

console.log(`ex 2 : ${colorWheel}`);









// Controlling The Oreder Of Insertion

// The spread syntax is very useful when you need to customize the order of insertion of elements in the array.

// Ex : ToDo App :

// The todo app allows us to instantiate task lists easily.

// We have a constructor function named Tasks that accepts the ‘title’ or name of the list as a parameter and set 
// it to an instance property using the ‘this’ keyword. The nullish coalescing to set it to 'My Tasks'' if no title 
// is supplied. Then, instantiate an array to hold the tasks.  

// The method named showTasks prints out the title of the list first and then displays every item in the taskList 
// array using a simple forEach method.  

// Next, to add items to the taskList array, we built another method, and append items to the array. To pre-pend 
// items to the beginning of the array as they’re added we used the spread syntax(refer to the code in bold 
// formatting).

// Here, a new array is created where the newly added item appears on index 0 while the existing array of items are 
// spread out from index 1 onwards and this is over-written on the taskList variable. 

// Next, we created a task list titled ‘Daily Tasks’. The showTasks method that renders the list is empty at this 
// time.

// So we used the add method to add a few tasks and they show up in a sequence where the last added task is on top. 

// And since we’re using index here, it’ll be best if we add a 1 so it shows up as 1, 2, 3 and not 0, 1, 2 which 
// looks odd when presenting a list to the user.

// const Tasks = function(title) {
//     this.title = title ?? "My Tasks";
//     this.taskList = [];

//     this.showTasks = function() {
//         console.log(`----${this.title}-----`);
//         this.taskList.forEach((item, index) => console.log(`${index + 1}, ${item}`))
//     }

//     this.add = function(item) {
//         this.taskList = [...item, this.taskList];
//     };
// };

// const myTasks = new Tasks("Daily Tasks");
// myTasks.add("Book Movie Tickets");
// myTasks.add("Send UX development proposal");
// myTasks.showTasks();

const Tasks = function (title) {

    this.title = title ?? 'My Tasks';

    this.taskList = [];

    this.showTasks = function () {

        console.log(`----- ${this.title}  -----`);

        this.taskList.forEach((item, index) => console.log(`${index + 1}. ${item}`)

        );

    };

    this.add = function (item) {

        this.taskList = [item, ...this.taskList];

    };

};

const myTasks = new Tasks('Daily Tasks');

myTasks.add('Book movie tickets');

myTasks.add('Send UX Development proposal');

myTasks.showTasks();








// ex 2:

const numArray = [
    [2, 23],
    [12, 44],
    [34, 9],
    [33, 55.55],
];

const isGreater = (a, b) => {
    a > b ? `${a} is greater than b` : `${b} is greater than a`;
}

numArray.forEach((elem) => console.log(isGreater(...elem)));






// The Spread operator allows us to take an array of elements and expand it in places such as a function’s arguments. 
// This allows arbitrary number of arguments to be passed to functions without actually hard coding them in place.

// This makes it really convenient to pass data to multiple parameters to a function call. Let’s work through such an example. Here you’ll notice an array of objects representing students with an array named ‘scores’ containing scores in three subjects. Our job is to compute the total percentile based on these scores and present them to the user.

// To achieve this, we have a calculatePercentile() function which accepts the scores in English, computer science and mathematics as three arguments and computes down the percentage value, down to 4 places of decimal.

// Your job now is to loop through the scoreCards array extract the scores array from each entry and then in the console.log, invoke the calculatePercentile() function passing in the scores using the spread syntax. Add the following code to achieve the final result.

// ex 3:
const scoreCards = [
    {
        id: 1,
        student: 'Joe M',
        scores: [54, 76, 65],
    },
    {
        id: 2,
        student: 'Jane K',
        scores: [68, 85, 74],
    },
    {
        id: 3,
        student: 'Chris P',
        scores: [55, 88, 80],
    },
];

const calculatePercentile = function (english, compSc, mathematics) {
    return (((english + compSc + mathematics) / 300) * 100).toPrecision(4);
};

for (let x of scoreCards) {
    let scoreArray = x.scores;
    console.log(`${x.student} has scored ${calculatePercentile(...scoreArray)}%`);
}


// ex 4: What will be the output of following?
const numbers = [100, 200, 50, 250]
console.log(Math.max(...numbers))

// Output : 250

// The rest operator is used to pass all the elements of array are passed to the Math.max() and hence the Math.max() returns the maximum number, which is 250.

// Spread operator is used for concatenation of arrays also lets see another example below :

// ex 5:
const numbers1 = [100, 200]
const otherNumbers = [-20, -80, -40]
const allNumbers = [...numbers1, ...otherNumbers]
console.log(allNumbers)

//.


