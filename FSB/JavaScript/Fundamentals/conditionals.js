"use strict";



// if-else statement

// Perhaps the most basic and commonly found conditional statement across a wide array of languages is the if-else conditional statement.

// This statement helps you implement conditional branching of control based on a simple true or false condition. If the condition is true, then the block following the if statement will execute, otherwise the block following the else will be executed.

// Once again, do ensure that the keyword ‘if’ is written in lower-case.

// We can handle multiple conditions using if-else if-else

// We can have as many else-if blocks as we want

// What will be the output of following?

let season = 'monsoon'

if (season === 'summer') {
    console.log('Carry hat')
} else if (season === 'monsoon') {
    console.log('Carry umbrella')
} else if (season === 'winter') {
    console.log('Carry jacket')
} else {
    console.log('Carry nothing')
}

// The condition in the first else-if block evaluates to true, hence carry umbrella is logged to the console.

// ex : 

const textNum = (a) => {
    let result1;

    if (a > 0) {
        result1 = `${a} is positive`;
    } else {
        result1 = `${a} is not positive`;
    }

    return result1;
}

console.log(textNum(-5));

// Syntax :

// if (condition)
//   statement1

// With an else clause
// if (condition)
//   statement1
// else
//   statement2


// "condition"
// An expression that is considered to be either truthy or falsy.

// "statement1"
// Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ({ /* ... */ }) to group those statements. To execute no statements, use an empty statement.

// "statement2"
// Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.



// else...if

// The 'else if' is another "if" block that comes after "else". If you’re coming from languages like Python, the else-if conditional is usually a special keyword. Python has 'elif' which does the same thing.

// Here in JavaScript, you’re just adding more if conditionals after else when you have to add more conditions and options.

// Multiple if...else statements can be nested to create an "else if" clause. Note that there is no elseif (in one word) keyword in JavaScript.

// if (condition1)
//  statement1
//   else if (condition2)
//    statement2
//  else if (condition3)
//    statement3
// …
//  else
//    statementN

// if (currentHour >= 0 && currentHour < 12) {
//     console.log("good morning");
// } else if (currentHour >= 12 && currentHour < 16) {
//     console.log("good afternoon");
// } else if (currentHour >= 16 && currentHour < 20) {
//     console.log("good evening");
// } else {
//     console.log("good night");
// }

// To see how this works, this is how it would look if the nesting were properly indented:

// if (condition1)
//  statement1
//  else
//    if (condition2)
//      statement2
//    else
//      if (condition3)
//        statement3

// To execute multiple statements within a clause, use a block statement ({ /* ... */ }) to group those statements.

// In general, it is a good practice to always use block statements, especially in code involving nested if statements.

const checkValue = (aa, bb) => {
    if (aa === 1) {
        if (bb === 2) {
            console.log("aa is 1 and bb is 2")
        }
    } else {
        console.log("aa is not 1");
    }
}

checkValue(1, 2);

// using else...if

//  if (x > 50) {

/* do something */

//  } else if (x > 5) {

/* do something */

//  } else {

/* do something */

//  }

// Handling multiple conditions is something that you have to do quite often. And if-else and else-if aren’t the only options in JavaScript. We also have the switch statement.






// Switch Statement :

// What is switch statement in javascript?

// The JavaScript switch statement is used in decision making. The switch statement evaluates an expression and executes the corresponding body that matches the expression's result.



// What is the purpose of using "switch" statement?

// Switch statement is used for performing different actions based on different conditions.

// Syntax :

// switch(variable/expression) {
//     case value1:  
//         // body of case 1
//         break;

//     case value2:  
//         // body of case 2
//         break;

//     case valueN:
//         // body of case N
//         break;

//     default:
//         // body of default
// }

// The switch statement evaluates a variable/expression inside parentheses ().

// If the result of the expression is equal to value1, its body is executed.
// If the result of the expression is equal to value2, its body is executed.
// This process goes on. If there is no matching case, the default body executes.

// ex : simple example using switch statement?

// let a = 2;

// switch (a) {
//     case 1:
//         a = "one";
//         break;

//     case 2:
//         a = "two";
//         break;

//     default:
//         a = "Not Found";
//         break;
// }

// console.log(`The value is ${a}`);

// In the above program, an expression a = 2 is evaluated with a switch statement.

// The expression's result is evaluated with case 1 which results in false.
// Then the switch statement goes to the second case. Here, the expression's result matches with case 2. So The value is two is displayed.
// The break statement terminates the block and control flow of the program jumps to outside of the switch block.



// ex : type checking in switch statement.

// let b = 1;

// switch (b) {
//     case "1":
//         b = 1;
//         break;

//     case 1:
//         b = "one";
//         break;

//     case 2:
//         b = "two";
//         break;

//     default:
//         b = "not found";
//         break;
// }

// console.log(`b is ${b}`);



// ex : simple calculator

// const calculate = (operator, operand1, operand2) => {
//     switch(operator) {
//         case "+":
//             return operand1 + operand2;

//         case "-":
//             return operand1 - operand2;

//         case "*":
//             return operand1 * operand2;

//         case "/":
//             return operand1 / operand2;

//         default:
//             return undefined;
//     }
// }

// let result = calculate(prompt("Enter Operator (either +, -, * or /) :"), parseFloat(prompt("Enter first number : ")), parseFloat(prompt("Enter second number : ")));

// console.log(`${operand1} ${operator} ${operand2} = ${result}`);



// What is the purpose of using break keyword in switch statement?

// "break" keyword is used to stop the execution and step out of the switch statement.


// When does the "default" case executes?

// switch statement excepts an expression. The value of the expression in the switch case is compared with the value of each case. If there is a match, the associated block of code is executed. If there is no match, the default case code block is executed.


// You'll notice a variable named item set to 'Lettuce'. Let's try to identify if Lettuce is a fruit or a vegetable.

// let item = 'Lettuce';
// let type;

// switch (item) {
//     case 'Apple':
//     case 'Banana':
//     case 'Kiwi':
//     case 'Strawberry':
//         type = 'fruit';
//                 break;

//                 case 'Lettuce':
//                 case 'Potato':
//                 case 'Celery':
//                     case 'Eggpiant':
//                         type = 'vegetable';
//                         break;
//                         default: {
//                             throw new Error('Unable to identify item...');
//                         }
// }
// console.log(`${item} is a ${type}`);






// Ternary Operator

// source : https://www.freecodecamp.org/news/the-ternary-operator-in-javascript/

// What is the ternary operatior?

// The ternary operator is a conditional operator which evaluates either of two expressions – a true expression and a false expression – based on a conditional expression that you provide.

// JavaScript offers us a nifty shortcut to the if-else in the form of the ternary operator.

// The ternary operator takes 3 operands, the only one in JavaScript to do so. These operands are:


// Syntax :

// "expression/condition ? operand if true : operand if false"

// You have the expression/condition which returns a truthy or falsy value. Truthy values here include true ("operand if true"), and non-falsy values ("operand if false"). Falsy values here include false, null, 0, and so on.

// After the expression/condition, you have the question mark (which you can think of as "questioning the condition"), followed by the trueExpression/operand if true. This expression is executed if the condition/ expression evaluates to true.

// After the true expression, you have a colon, followed by the falseExpression/ operand if false. This expression is executed if the condition expression evaluates to false.



// The ternary operator returns a value that you can assign to a variable. You cannot use the operator without assigning the returned value to a variable:

// const result = condition ? trueExpression : falseExpression;

// The returned value depends on the evaluation of the condition expression. If the condition is true, the returned value returned from trueExpression is assigned to the variable. Else, the returned value from falseExpression will be assigned to the variable.

// ex :

const score = 110;

let scoreRating;

if (score > 100) {
    scoreRating = "score rating is excellent";
} else {
    scoreRating = "do more efforts";
}

console.log(scoreRating);

// Now write above code in ternary operator

const score1 = 120;

const scoreRating1 = score1 > 90 ? "Excellent" : "Do more efforts";

console.log(scoreRating1);


// ex :

const printPoor = () => {
    console.log("poor result");
    return "poor";
}

const printSuccess = () => {
    console.log("nice result");
    return "success";
}

const pass = true;

const result3 = pass ? printSuccess() : printPoor();

console.log(result3);


// What if you wanted to achieve an if...else if...else statement with a ternary operator? Then you can use nested ternary operators. You should be careful how you use this, however, as it can make your code harder to read.

// Let's see an example:

const score4 = 60;

let scoreRating4;

if (score4 > 70) {
    scoreRating4 = "Excellent"
} else if (score4 > 50) {
    scoreRating4 = "Average"
} else {
    scoreRating4 = "Do better"
}

console.log(scoreRating4);
// "Average"


// now write above code in ternary form


const score5 = 60;

const scoreRating5 = score5 > 70 ? "Excellent" : score5 > 50 ? "Average" : "Do Better";

console.log(scoreRating5);






// binary logical operatiors

// Now in situations where you have to assign a value if the existing value is true, we can also use the logical AND assignment operator. This one assigns the value on the right to the variable on the left if the variable is not false.

// Remember, false here does not strictly mean a Boolean false, but a null, undefined, 0, an empty string, and NaN or not a number also evaluate to false. The opposite amounts to true.

// And just like the logical AND assignment, we have the logical OR assignment which only assigns the value if the operand on the left is false.






// Nullish Coalescing Operator (??)

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const fff = null ?? "default string";

console.log(fff);

const eee = 0 ?? 45;

console.log(eee);

// One of the core uses of this operator is providing a mechanism to get default values in cases like these where we’re dependent on the value of the user variable and we want to provide a default value if the user is not defined.

// But here’s an important caveat here. For the logical OR to work and provide the right-hand operand, the left-hand operand must be false. This means any of these values are construed as false and not particularly a Boolean false.






// Optional Chanining Operator (?.)

// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah"
    }
}

const dogName = adventurer.dog?.name;
// here the correct code is : "const dogName = adventurer.cat.name" but we use" adventurer.dog?.name" its a false code hence we can use "optional chaining operator (?" by using this method we doesn't get any error and the next code is executes smoothly.

console.log(dogName);

// take another ex. :

// Here’s an object with some properties including nested properties. Accessing these properties involves using the dot syntax for instance.

let user11 = {
    name: "John Mockery",
    age: 21,
    phone: {
        personal: 123456789,
        official: 987654321
    }
}

console.log(user11.phone.personal);

// But one of the problems with this approach is that if an intermediate property is non-existent, then we straight away get an error and this can break things down.

// It would be better if we could return an undefined if intermediate properties did not exist and as a result, we were unable to reach the property being accessed on the far right of this expression.

// console.log(user11.city.official);
// This throws an error "TypeError: Cannot read properties of undefined (reading 'official')"

// This is because the optional chaining operator short-circuits the expression which means that the part on the right-hand side is not executed at all, thus preventing the error.

// And the optional chaining operator can also be used when accessing elements from arrays.

//  Let us see an example of this.

// Here we an array featuring two objects which represent restaurants and we will display the location coordinates of the restaurants.

// To do this access the location.lat and location.long properties of the first object from the array.

let restaurants = [
    {
        name: "the bao boat",
        category: "oriental",
        city: "new york",
        location: {
            lat: 23.42,
            long: 67.32,
        },
    },
    {
        name: "Imperial Dinner",
        category: "Continental",
        city: "Los Angeloas",
    }
];

console.log(
    `Location: ${restaurants[0].location.lat}, ${restaurants[0].location.long}`
);

// Now let’s try to access the second restaurant’s location and we get an error ‘cannot read property ‘lat’ of undefined. So, what we’re being told is that there is no property named ‘lat’ on an undefined property which basically points to the missing location property in the middle.

// The location property represents a sub-object, which itself is missing for the second object in our array.

// console.log(
//     `Location: ${restaurants[1].location.lat}, ${restaurants[1].location.long}`
// );

// Here you will get an error "TypeError: Cannot read properties of undefined (reading 'lat'), TypeError: Cannot read properties of undefined (reading 'long')".

// To circumvent this error, we can use the optional chaining operator "?.". The question mark here will first check for the presence of the location property before it evaluates the rest of the expression. If the location property is found, then it proceeds to the rest of the expression, otherwise, it returns undefined here itself.

console.log(
    `Location: ${restaurants[1].location?.lat}, ${restaurants[1].location?.long}`
);

// Running this now displays undefined, undefined. This is a great opportunity to use the nullish coalescing operator to display the words NA which stand for Not Available.

// 

console.log(
    `Location: ${restaurants[1].location?.lat ?? "N/A"}, ${restaurants[1].location?.long ?? "N/A"}`
);

