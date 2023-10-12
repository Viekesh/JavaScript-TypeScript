import repl from "repl";

repl.start();



import readline from "readline";

let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your name?", (name) => {
    console.log("Hello!!!", name);
    rl.close();
});

