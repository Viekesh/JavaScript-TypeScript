import net from "net";



// Setup a client:
const client = net.connect({ port: 8080 }, function(){
    client.write("Connection to server");
});