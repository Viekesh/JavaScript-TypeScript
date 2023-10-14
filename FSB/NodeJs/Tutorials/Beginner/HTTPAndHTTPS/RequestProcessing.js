import http from "http";
import url from "url";



http.createServer(function (req, res) {
    // console.log(req.url);
    const q = url.parse(req.url, true);
    console.log(q.query.param);    // it throws an error "q is not defined"
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello");
    res.end();
}).listen(80);