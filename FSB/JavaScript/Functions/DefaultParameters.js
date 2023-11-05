// To set a default value for a function parameter you simply need to assign a value to the parameter
// in the function definition. If the parameter is not passed a vaue when the function is called
// then the default value is used instead.


function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet("Code");