// push()
// Adds one or more elements to the end of an array.
// And returns the new element of the array.
// It's a great way to build up a collection of item's dynamically.

let fruits = ["apple", "banana"];
console.warn("Earlier: ", fruits);
let addOneMoreFr = fruits.push("banana");
console.warn("Added one more fruit: ", addOneMoreFr);
console.warn("Fruits is now: ", fruits);
console.warn(".....................");



let tasks = [];
tasks.push("DesignUI", "Develop API")
console.warn("Now tasks assigns: ", tasks);
console.warn(".....................");



const cart = [];
console.warn("Earlier cart: ", cart)
const addToCart = (stuff) => {
    cart.push(stuff);
    console.warn(`Stuff added in the cart ${stuff.name} and their price is ${stuff.price}. Now the length of the cart ${cart.length}`);
};

addToCart({ name: "headphones", price: 999 });
console.warn("Now cart is: ", cart);
console.warn(".....................");

// In this ex the "push()" method is used to add item's to the shopping cart.
// Each time an item is added, the total count of item's in the cart is logged.



const trades = [];
const executeTrade = (trade) => {
    trades.push(trade);
    console.log(`Trade executed: ${trade.symbol} at ${trade.price}. Total trades: ${trades.length}`);

    console.warn(".....................");
};

executeTrade({ symbol: "AAPL", price: 150 });

// Here, "push()" is used to log executed trades in a trading application, keeping track of the
// total number of trades executed.






// pop()
// The pop() method removes the last element from an array and return's that element.
// This is useful for managing a stack of stuffs/items.

let colours = ["red", "green", "blue"];
console.warn("Before removing colour: ", colours);
let lastColor = colours.pop();
console.warn("Last colour is: ", lastColor);
console.warn("Colours is now: ", colours);



let history = ["page1", "page2", "page3"];
console.warn("Before using pop() method: ", history);
let lastPage = history.pop();
console.warn("Last page: ", lastPage);
console.warn("History is now: ", history);
console.warn(".....................");



const anotherCart = [{ name: "Laptop" }, { name: "Mouse" }, { name: "Keyboard" }];
console.warn("Before removing product: ", anotherCart);
const removeLastProd = () => {
    let removedProd = anotherCart.pop();
    console.warn("Removed product: ", removedProd);
};

removeLastProd();
console.warn("After removing last product: ", anotherCart);
console.warn(".....................");

// In this example, "pop()" removes the last item added to the cart, allowing users to manage
// their selections effectively.



const tradeHistory = [{ symbol: "AAPL", price: 150 }, { symbol: "GOOGL", price: 2800 }];
console.warn("Before removing: ", tradeHistory);
const removeLastTrade = () => {
    let removedTrade = tradeHistory.pop();
    console.warn("Removed last trade: ", removedTrade);
}

removeLastTrade();
console.warn("After removing last trade: ", tradeHistory);
console.warn(".....................");

// Here, "pop()" is used to undo the last executed trade, which is crucial for
// managing trading decisions.






// shift()
// The shift() method removes the first element from an array and return that element.
// It's handy for processing queues.

const queue = ["first", "second", "third"];
console.warn("Before use shift() mehtod: ", queue);
let firstEle = queue.shift();
console.warn("First element in the array: ", firstEle);
console.warn("Queue is now: ", queue);
console.warn(".....................");



let requests = ["req1", "req2", "req3"];
console.warn("Before using shift() method: ", requests);
let firstReq = requests.shift();
console.warn("First request of an array:- ", firstReq);
console.warn("After used shift method(): ", requests);
console.warn(".....................");



const orderQueue = ["o1", "o2", "o3"];
console.warn("Before using shift mehltod: ", orderQueue);
let processNextOrder = () => {
    const nextOrder = orderQueue.shift();
    console.log(`Processing: ${nextOrder}. Remaining orders: ${orderQueue.length}`);
};
processNextOrder();
console.warn("After using shift() method: ", orderQueue);
console.warn(".....................");

// In this ex, "shift()" processes the next order in a queue, simulating an order
// fulfillment system.



const pendingOrders = ["Buy AAPL", "Sell GOOGL", "Buy TSLA"];
console.warn("Before using shift() method: ", pendingOrders);
const executeNextOrder = () => {
    const nextOrder = pendingOrders.shift();
    console.log(`Executing: ${nextOrder}. Remaining orders: ${pendingOrders.length}`);
};

executeNextOrder();
console.warn("After using shift() method: ", pendingOrders);

// Here, "shift()" is used to execute the next pending order in a trading application,
// ensuring timely order processing.