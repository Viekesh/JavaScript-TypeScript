// Event driven programming is a programming model where entities communicate through messages.
// Any action done in an application like clicking a button can be an event.
// An event handler captures the event and performs an action based on it.
// Anything that produces an event is a producer and anything that is depends on event is a consumer.
// The event driven model decouples the producer and the consumer.






// Handling Events with Callbacks :

// Callback functions of Node.js :

// They explain how to handle asynchronous things (events\entities) in the program. The user can set up callback
// functions to handle events. That's because the user can trigger a function to run asynchronously when an event
// happens.

// Note that events can fire all over the application. The user must handle them with asynchronous processing.

// The user can use callback functions as they can take actions based on events that occur.

// So when an event happens, the callback can trigger, and this is called an event handler.






// Event Loop:

// The event loop continuously checks for event occurrences. When these events happen, it will call the event
// handler to handle that event. This diagram demonstrates that all these events float in the event loop and wait
// to be picked up. The event loop picks up each event that occurs. Sends them to the respective event handlers.
// Note that there is a small degree of asynchronous working here.
// The event loop may take some time to pick up on the fact that an event has occurred.
// If you dig down into the lower levels of this process, you can see that a loop triggers every millisecond or so.
// The event loop keeps checking for events and eventually an event may be triggered.
// There may be a slight delay from the time of event trigger to the time of event pick-up.
// This delay accounts for the small degree of asynchronous processing of events.
// The user needs to understand how to add events in the program, and how to handle different events that occur.



// So, callback function acts as event handlers and enable you to handle events asynchronously.

// The event loop checks event occurences and sends the event to their respective event handler. This is also an
// asynchronous process.



import { EventEmitter } from "events";
import { resolve } from "path";

const myEventEmitter = new EventEmitter;

const notifyConnection = (ip) => {
    console.log(ip + "connected to server");
};

const process = async (ip) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(ip + "has connected");
};

myEventEmitter.on("connection", notifyConnection);
myEventEmitter.on("connection", process);

myEventEmitter.emit("connection", "127.0.0.7");
myEventEmitter.emit("connection", "192.168.0.1");




// How are the following events handled?

function notifyConnection(ip) {
}
async function process(ip) {
    await new Promise(resolve => setTimeout(resolve, 1000));
}
MyEventEmitter.on('connection', notifyConnection);
MyEventEmitter.on('connection', process);

MyEventEmitter.emit('connection', '192.168.0.1');
MyEventEmitter.emit('connection', '127.0.0.1');

// Consider the asynchronous code impact in this case. The notifyConnection function completes its execution for
// both events during the wait for the process.

// notifyConnection runs for both connection Ips while the process waits on the first connection.



// .