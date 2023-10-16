import net from "net";



let chatSocket = [];

function brodcast(data) {
    chatSocket.forEach(socket => {
        socket.write(data);
    });
}

const server = net.createServer(function (socket) {
    chatSocket.push(socket);

    socket.on("data", function (data) {
        brodcast(data);
    });

    socket.on("error", function (error) {
        console.error(error);
    });
});

// This programme mimics the publisher subscriber model discussed in previous sections with event driven
// programming. There is a little bit more to the pub-sub model, as you can established a two way communication
// here. The client sends data to the server, and server broadcast the data.

// It's a bit more complex in a publisher - subscriber model but still draws a lot of parallels, we have a lot
// of clients receiving messages from a single entity (server). These clients can talk to the server.

// So, with this all set up, all we really need to do now is really to set our server to listen, right?

server.listen(8080, function () {
    console.log("Server is listening");
});

// Now we need to create module for our client, the main goal of the client is able to connect to the server and
// send out a message and we're generally gonna have it also take in a username so that we can uniquely indentify
// each for client which makes it easier to verify that things are actually working 