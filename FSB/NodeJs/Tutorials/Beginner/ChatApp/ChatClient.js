import net from "net";
import readline from "readline";



const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const usernameInput = new Promise(resolve => {
    readLine.question("Enter a username : ", answer => {
        resolve(answer);
    });
});

usernameInput.then((username) => {
    const client = net.connect({ port: 8080 }, function () {
        console.log("Connected to the server");
    });

    readLine.on("line", data => {
        // client.write(username + ":" + data);
        client.write(username + ":" + data);
    });

    client.on("data", function (data) {
        console.log(data.toString());
    });
});

