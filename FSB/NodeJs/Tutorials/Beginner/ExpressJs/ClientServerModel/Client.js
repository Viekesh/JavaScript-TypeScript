// import http2 from "http2";



// let books = [];

// const postBook = (stream, header) => {
//     let body = "";

//     stream.on("data", function (data) {
//         body += data;
//     });

//     stream.on("end", function () {
//         body = JSON.parse(body);

//         books[body.title] = body.author;

//         stream.respond({
//             ":status": "200"
//         });

//         stream.end();

//         console.log(books);
//     });
// }



// const notFoundHandler = (stream, headers) => {
//     stream.respond({
//         ":status": "404"
//     });

//     stream.end("Page not found");
// };



// const server = http2.createServer();

// server.on("error", (err) => {
//     console.error(err);
// });



// const router = (stream, header) => {
//     const path = header[":path"];

//     const method = header[":method"];

//     let handler;

//     if (path === "/" && method === "POST") {
//         handler = postBook;
//     } else {
//         handler = notFoundHandler;
//     }

//     handler(stream, header);
// };



// server.on("stream", router);

// server.listen(8080);


import http2 from "http2";

let books = [];

const postBook = (stream, header) => {
    let body = "";

    stream.on("data", function (data) {
        body += data;
    });

    stream.on("end", function () {
        body = JSON.parse(body);

        books[body.title] = body.author;

        stream.respond({
            ":status": "200"
        });

        stream.end("Added Book");

        console.log(books);
    });
};

// const getBook = (stream, header) => {
//     let body = "";

//     stream.on("data", function (chunk) {
//         body += chunk;
//     });

//     stream.on("end", function () {
//         body = JSON.parse(body);

//         console.log(body.title);

//         books[body.title] = body.author;

//         stream.respond({
//             ":status": "200"
//         });

//         stream.end("Added Book");

//         console.log(books);
//     });
// };

const notFoundHandler = (stream, headers) => {
    stream.respond({
        ":status": "404"
    });

    stream.end("Page not found");
};

const server = http2.createServer();

server.on("error", (err) => {
    console.error(err);
});

const router = (stream, header) => {
    const path = header[":path"];

    const method = header[":method"];

    let handler;

    if (path === "/" && method === "POST") {
        handler = postBook;
    } else {
        handler = notFoundHandler;
    }

    handler(stream, header);

    // Return the stream object to ensure that the server is able to send a response to the client.
    return stream;
};

server.on("stream", router);

server.listen(8080);
