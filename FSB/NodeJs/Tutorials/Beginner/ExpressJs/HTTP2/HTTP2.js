// What is HTTP/2?

// It is a revised version of HTTP that provides additional features for speed.

// The main idea of HTTP/2 is to avoid making the web application providers rewrite their applications but to
// provide benefits to enhance the speed and functionality of HTTP.

// HTTP/2 allows servers to push content and supply data before requests. So basically, if you know that someone
// is going to need some data, you can provide it ahead of time so that it gets cached on the client and so, they
// don't need to make constant requests to the actual server itself.

// In addition to this, it also tries to avoid head-of-line blocking, where the requests at the front of the
// queue end up taking up all of the time of the server.



// In HTTP 1 each request needs its own TCP connection with the server.

// In HTTP 2 multiple request multiplexed over a single TCP connection.

// Multiple requests are multiplexed over a single TCP connection.

// Rather than everyone having their own TCP connection with the server, the requests are coming in piecewise,
// streamed into the actual HTTP server.

// Everything started to work in the asynchronous stream-based method, rather than the HTTP1, where it was more 
// like its own connection, and there wasn't as much of this stream type of idea in the data collection.



//.