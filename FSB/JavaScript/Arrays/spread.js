"use strict";

// ex 1:

const Tasks = function (title) {
    this.title = title ?? "my tasks";
    this.taskList = [];
    this.showTasks = function () {
        console.log(`-----${this.title}-----`);
        this.taskList.forEach((item, index) =>
            console.log(`${index + 1} : ${item}`)
        );
    };

    this.add = function (item) {
        this.taskList = [item, ...this.taskList];
    };
};

const myTasks = new Tasks("Daily Tasks");

myTasks.add = "Book Movie Tickets";

myTasks.add = "Send Them Web Development Proposal";

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






// The Spread operator allows us to take an array of elements and expand it in places such as a function’s arguments. This allows arbitrary number of arguments to be passed to functions without actually hard coding them in place.

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


