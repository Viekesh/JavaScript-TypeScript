// A lot of the code in the Node.js has the option to run asynchronously and basically all that means is that
// we have the ability to run it at the same time as other code running, it means asynchronously to other
// code rather that synchronously where we have to wait for one block to finish before the next block.



// How does a callback function work in terms of or what is happening in  asynchronous programming?

// let's take an example to understand this better?

import fs from "fs";

fs.readFile("async.txt", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});

// This whole block of code is a callback was executed, it was run and it was waiting to read file to come back
// with the data. While it was waiting it continued on to execute rest of the code. So it executed "console.log"
// and it was all good to go. So, this is what is happening right? So, it's executing the remaining code while
// it waits for the other code to finish. Once that code comes back it executes this function you know that it
// has. So, this is the whole idea of callback!!!

// So, basically what's gonna happening here is it's going to send request to read a file and it's going to
// wait until it get's that request back. Once it get's that request back, it's execute the code that in this
// function, that's what a callback is. We are calling back to this function when a asynchronous task is
// completes. So, the...

console.log("Done!!!");

// Note here is that it console first "Done!!!" and then it prints async.txt content.

// So the code which is outside our function is execute before our callback function, the reason why that happen
// is because in function there is a little bit of delay between requesting the file and actually reading it.



// Asynchronous programming occurs in the time between a function call and a function return.

// A callback uses a function to call when another one completes.