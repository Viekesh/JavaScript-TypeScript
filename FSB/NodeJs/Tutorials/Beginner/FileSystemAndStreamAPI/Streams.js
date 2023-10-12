// Reading and Writing files in streams:

// Streams are gonna be very important because they allow us to handle situations where data comes in pieces.
// When you worked on a network based application like a web application, What happens is when a user sends data
// to this web application it goes in pieces when it transmit over the network. You know when you go to upload
// something it uploads it percentages or sort of in pieces.

// That would be the idea of what a stream is. A stream take each chunk of data and assemble them into one big piece.

// This is another form of reading asynchronous file. The main difference between this method and previous read
// file method is that everything happens in pieces here. A lot of processing happens with streams even before you
// recieve everything. This makes it truly asynchronous in all fashions. Streams process data as they get and work
// asynchronously from the main programme.

import fs from "fs";



// read data
let stream = fs.createReadStream("log.txt");

stream.on("data", function (data) {
    let chunk = data.toString();
    console.log(chunk);
});



// write data
let stream2 = fs.createWriteStream("log3.js");

stream2.write("line1 \n");
stream2.write("line2 \n");
stream2.write("line3 \n");

// With the streams you can write data as it is available. You can write to files based on data that may be
// asynhronous.



// .