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
};

executeTrade({ symbol: "AAPL", price: 150 });

// Here, "push()" is used to log executed trades in a trading application, keeping track of the
// total number of trades executed.