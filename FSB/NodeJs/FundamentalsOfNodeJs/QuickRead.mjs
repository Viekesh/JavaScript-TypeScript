// Node.js provides a non blocking event driven IO. It means requests are handled asynchronously no
// request is blocked from execution due to a previous request.

// For ex. client 1 makes first request and query a database and retrieve data. It can be time
// consuming to query the database and retrieve / get the data. Your request is fullfilled or not is
// depends on amount of data retrieved, location of the database and a lot of different factors.

// The second request comes in during the time of database querying by the first request and that
// request might need to do something different, what happens is rather than waiting for the first
// request is to finish Node.js simply makes the first request once asynchronously, then it takes the
// second request and processes it.

// Node.js works best for real-time, two-way communication between a client and a server, as it is
// built on the client - server architecture. Node.js excels in cases like chat apps, APIs, and data
// streaming.

// Node.js is a free, open source runtime that uses javascript as a web server. We can also used
// Node.js to write desktop applications with frameworks like electron.

// Node.js implements an asynchronous way, driven by various events, to handle multiple request at the
// same time.



// Setting up NVM (Node Version Management):

// It is a tool used to control Node.js versions.



// Setting up Node.js project directory :

// Create a new folder, type on your terminal or command prompt : mkdir yourFolderName
// second step type : cd yourFolderName
// third step type: npm init
// Now you are ready to create your first project

// type : node .
// It is run your main file associated with your node project.

// That's the way our programme is generally work. If you've gotten this far and everything is working
// !!! Congratulation !!!
// You're now take ready to take on all the different tasks required to learn about the Node.js



// A module is a block of code dedicated to specific functionality. It enables division of work and
// easier to read.

// If you want to use ES6 and above versions in your node then you have to follow by creating modules
// for this go to your package.json file first and type in just below of "main": "index.js",
// "type": "module",
// another way to follow module approach is give your file's extension .mjs instead of .js



// The * character is used to import all the components of a module in ES Script.
// module.exports is used for exports in CommonJS.



// corepack is used to work with specifit node package manager version, to do this type :
// corepack prepare @versionWhatYouWant --activate



// to check the version type : corepack npm -v or corepack npm -v



// libuv and V8 are the two main components that are responsible for parsing and executing the JavaScript.
// V8 is a JavaScript engine that lets you parse and execute JavaScript and it works independantly with the browser's
// libuv is composed of C++ code for low-level access of the OS.
// Node.js acts as a midpoint between V8 and libuv and distributes the code from V8 to libuv.