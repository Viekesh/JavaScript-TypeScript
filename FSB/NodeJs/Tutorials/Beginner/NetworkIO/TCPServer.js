import net from "net";



// Setup a server:
// const srvr = net.createServer(function(connection){
//     console.log("Connection made");
// });



// Here the parameter socket provides a connection between the client and the server which can be used to
// communicate between them.
const server = net.createServer(function (socket) {
    socket.write("Hello");
})

srvr.listen(8080, function(){
    console.log(`Server is listening on`);
});



// 