// Operator precedence describes the order in which operations are performed in an arithmetic expression.
// Exponentiation (**) are executed before multiplication.
// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
// The precedence can be change by using parentheses.
// When using parentheses, the operations inside the parentheses are computed first.

let x = 100 * 50 / 3;
console.log(x);

let y = 3 / 100 * 50;
console.log(y);

let z = 0.03 * 50;
console.log(z);

// Operation with the same precedence (like * and /) are computed left to right.
// Expression in parentheses are computed before the rest of the expression.
// Function are executed before the result is used in the rest of the expression.

let a = 5;
let b = a++;

let e = 5;
let c = ++e;
console.log("b: ", b, ++b);
console.log("c: ", e, ++e);

// Increment Operator
// Postfix (a++) increment are executed before prefix increment(++a).
// Postfix (b--) decrement are executed before prefix decrement(--).