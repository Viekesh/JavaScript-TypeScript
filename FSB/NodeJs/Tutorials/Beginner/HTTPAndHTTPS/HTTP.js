import http from "http";



http.createServer(function (req, res) {
    if (req.method === "GET") {
        res.write("Get request received from HTTP.js file");
    } else if (req.method === "POST") {
        let body = "";

        req.on("data", data => {
            body += data;
        });

        req.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
        });
    }
    res.end();
}).listen(8080);



// simple form of above code

// http.createServer(function (req, res) {
//     res.write("Hello");
//     res.end();
// }).listen(80);