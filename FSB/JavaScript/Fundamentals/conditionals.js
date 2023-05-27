"use strict";



// if-else statement

// We can handle multiple conditions using if-else if-else

// We can have as many else-if blocks as we want

// What will be the output of following?

let season='monsoon'

if(season === 'summer'){
    console.log('Carry hat')
} else if(season === 'monsoon'){
    console.log('Carry umbrella')
} else if(season==='winter'){
    console.log('Carry jacket')
} else {
    console.log('Carry nothing')
}

// The condition in the first else-if block evaluates to true, hence carry umbrella is logged to the console.






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



//.