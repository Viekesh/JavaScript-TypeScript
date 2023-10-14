// header can be used to provide additional information to the server about what are you sending requesting.
// Then server can use the header to send back information to the client.

import http from "http";

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello");
    res.end();
}).listen(80);
