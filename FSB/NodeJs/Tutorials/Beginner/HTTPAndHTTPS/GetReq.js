import http from "http";



http.createServer(function (req, res) {
    if (req.method === "GET") {
        res.write("Get reqest received");
    } else {
        res.write("Other request received");
    }

    res.end();
}).listen(80);