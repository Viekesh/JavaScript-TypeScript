


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





// What is the purpose of using "switch" statement?

// Switch statement is used for performing different actions based on different conditions


// What is the purpose of using break keyboard in switch statement?

// break keyword is used to stop the execution and step out of the switch statement.


// When does the default case executes?

// switch statement excepts an expression. The value of the expression in the switch case is compared with the value of each case. If there is a match, the associated block of code is executed. If there is no match, the default case code block is executed.


// You'll notice a variable named item set to 'Lettuce'. Let's try to identify if Lettuce is a fruit or a vegetable.

'use strict';

let item = 'Lettuce';
let type;

switch (item) {
    case 'Apple':
    case 'Banana':
    case 'Kiwi':
    case 'Strawberry':
        type = 'fruit';
                break;

                case 'Lettuce':
                case 'Potato':
                case 'Celery':
                    case 'Eggpiant':
                        type = 'vegetable';
                        break;
                        default: {
                            throw new Error('Unable to identify item...');
                        }
}
console.log(`${item} is a ${type}`);



//.