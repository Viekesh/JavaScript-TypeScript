// import http2 from "http2";



// const session = http2.connect("http://localhost:8080");

// session.on = ("error", (err) => {
//     console.error(err);
// });

// const req = session.request({ ":path": "/", ":method": "POST" });

// req.write(JSON.stringify({ title: "abc", author: "def" }), "utf8");

// req.end();

// req.on("response", (headers) => {
//     console.log(headers);
// });

// req.setEncoding("utf8");

// req.on("data", (data) => {
//     console.log(data);
// });




import http2 from "http2";

const session = http2.connect("http://localhost:8080");

session.on("error", (err) => {
  console.error(err);

  // Close the session if an error occurs.
  session.destroy();
});

const req = session.request({ ":path": "/", ":method": "POST" });

// Add event handlers to the request object inside the session.on("error") event handler.
req.on("response", (headers) => {
  console.log(headers);
});

req.setEncoding("utf8");

req.on("data", (data) => {
  console.log(data);
});

req.write(JSON.stringify({ title: "abc", author: "def" }), "utf8");

req.end();
