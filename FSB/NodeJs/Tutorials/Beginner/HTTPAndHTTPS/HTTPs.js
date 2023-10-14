import https from "https";
import fs from "fs";



const options = {
    key: fs.readFileSync(key.pem),
    cert: fs.readFileSync(key.pem),
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end();
}).listen(8080);