// This diagram represents the transformation of the read stream into the write stream.

// Read Stream: Implies reading from a source; in this case, it is reading from files.

// Transform: A transform performs something with the data.

// Write Stream: The transform outputs the data to the write stream, which writes data to a file.

// The main idea is to allow the user to connect the read stream to the write stream.
// This concept is useful in the following situations:
// Reading from a location
// Getting data in chunks
// Writing data to another location as it is received
// A common example of this process is uploading a file to a server.

// Upload a file.
// Read stream reads data from the file that is uploading.
// Read stream writes the data to a file in the web server.

// In this javascript code get an error "TypeError: chunk.toString(...).toUppercase is not a function"
// please solve this...
import fs from "fs";
import { Transform } from "stream";

const fileReadStream = fs.createReadStream("./log.txt");
const fileWriteStream = fs.createWriteStream("./log2.txt");

const trans = new Transform({
    transform(chunk, encodeing, callback) {
        if (typeof chunk === "string") {
            callback(null, chunk.toString().toUppercase());
            console.log("chunk converted to string");
        } else {
            callback(null, chunk);
            console.log("Unable to convert it to the string");
        }
    }
});

// const trans = new Transform({
//     transform(chunk, encodeing, callback) {
//         callback(null, chunk.toString().toUppercase());
//     }
// });

fileReadStream.pipe(trans).pipe(fileWriteStream);

// Remember here a callback is something that will runs once the asynchronous call is completed. In this case an
// asynchronous call is the read function of our read stream. So once the data is read it takes that chunk of data
// in and that it runs our callback.

// So, what is our callback going to do?

// Our callback to do really multiple number of things.