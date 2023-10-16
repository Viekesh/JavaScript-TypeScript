// The net module enable the networking capabilities in NodeJs and allow to set up explicit client server
// behavior. This is something that goint to be core to a lot of Node.js activities when it acts like a web
// server.


// The net module create client and server for net communication using a protocol called transmission control
// protocol. In this module client and server communicate with each other.

// Server class is used for TCP server. Using a server class you can set up a TCP client to communicate with the
// server. You can use this class to where you need to send data and receive data.

// Socket class is used for stream socket. Stream unable you to stream data in chunks. In networking you may want
// to send chunks of data when uploading something big in size. , like a huge file. You may have to send the file
// in pieces to the server. The server receives the whole file in chunks and combines them together.

// A protocol called TCP which is typically used to transmit data between devices over a network. For this work
// we also using UDP.

// With TCP we have something called stateful networking. So, it means that networking works with states so we can
// keep track of the state of our transaction whereas UDP is more stateless. UDP provide stateless networking. UDP
// doesn't have the ability to track the actual state of transactions. So, TCP is commonly more used than UDP.

// TCP is typically more commonly used because it is helpful to handle different aspects of communication between the actual clients and the users.



// Protocols that use TCP:

// HTTP
// FTP
// SMTP
//  SSH
// If you have ever used any protocol over a network, it was probably TCP since it's the most common protocol for many mainstream protocols.

// TCP uses the client-server architecture, which is similar to the publisher-subscriber model.
// The publisher-subscriber model indicates that many people are subscribed to something that publishes data.
// Let us assume the server is the publisher and the clients as the subscribers.
// In TCP, clients can send data to the server and vice versa.
// It’s a two-way communication rather than the publisher-subscriber model, which is a one-way communication.
// The server keeps track of the clients, i.e., the data they send back.



// .