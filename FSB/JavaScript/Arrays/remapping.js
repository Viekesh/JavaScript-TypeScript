// The Array.map() method allows you to transform the contents of an array easily. The method iterates through every 
// item, runs a transform function and returns a new array. This way it doesn’t mutate the original.

// Array.map() is one of the most useful of all Array methods, especially when building web applications using 
// libraries/frameworks like React where data mutation is frowned upon and is counter productive.

// see an array of objects representing citizens with their age and name. We want to add a new property to every object 
// in this array called isSeniorCitizen which should be true if the age of the citizen is greater than or equal to 60. 
// And we want to create a new array in the process.

// To achieve this, we’ll use the Array.map() method.


// ex 1:

const citizens = [
    {
        id: 1,
        name: 'John Smith',
        age: 65,
    },
    {
        id: 2,
        name: 'Roger McShane',
        age: 68,
    },
    {
        id: 3,
        name: 'Dolly McShane',
        age: 55,
    },
    {
        id: 4,
        name: 'Joan Mockery',
        age: 61,
    },
];


const seniorCitizens = citizens.map(function (person) {
    person.isSeniorCitizen = person.age >= 60;
    return person;
});

console.log(seniorCitizens);


// Array.map() takes a callback function as an argument which is run for every element in the array to create a new 
// resultant array.









// ex 2:

const numbers = [100, 200, 50, 250];
// const num = numbers.map((n) => n*2 );
const num = numbers.map((n) => {
    return n * 2;
});
console.log(num);

// Array.map() is an iteration method and it does not modify the original array. Hence the numbers array stays unmodified.

// Math.random() generates random numbers between 0 and 1 (except 1) and returns a different number at every invocation.