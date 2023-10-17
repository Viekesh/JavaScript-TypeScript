// HTTP/2 allows servers to push content and supply data before request. Tries to avoid head of line blocking.
// Multiple request are multiplexed over a single TCP connection with the server, the request are coming in
// piecewise stream into the actual HTTP server.

// Rather than everyone having their own TCP connection with the server, the request are coming in piece wise
// and streamed into the actual HTTP server. Everything starts to work in the asynchronous stream based method
// rather than the HTTP1, where it was it's more like own HTTP connection and there wasn't as much of this stream
// type idea in the data collection.

import http2 from "http2";
import dns from "dns";

process.on("")

const server = http2.createServer();

server.on("error", err => {
    console.log(err);
});

server.on("stream", (stream, headers) => {
    stream.respond({
        "status": 200,
    });

    stream.write("Hello");
    stream.end();
});

server.listen(8080);



// .