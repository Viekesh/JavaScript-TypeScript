// Higher Order Functions

function filterTasks(tasks, condition) {
    return (tasks.filter(condition));
};
const tasks = [
    { id: 1, title: "buy groceries", completed: false },
    { id: 1, title: "complete the homework", completed: true },
];
const incompleteTasks = filterTasks(tasks, task => !task.completed);
console.log("Incomplete tasks: ", incompleteTasks);



function filterTasks2(tasks, predicate) {
    return tasks.filter(predicate);
};

const tasks2 = [
    { id: 1, title: "Gym", completed: false },
    { id: 1, title: "Homework", completed: true },
    { id: 1, title: "Breakfast", completed: false },
];

const completedTasks = filterTasks2(tasks, task => task.completed);

console.warn(completedTasks);



function applyDisc(products, discountFunction) {
    return products.map(product => ({
        ...product,
        discPri: discountFunction(product.price),
    }));
};

const products = [
    { id: 1, name: "Apple Mac Book", price: 3000 },
    { id: 1, name: "Headphones", price: 800 },
    { id: 1, name: "Honda CB350", price: 9000 },
];

const discountedProd = applyDisc(products, price => price * 0.9);
console.warn(discountedProd);



function analyzeTrades(trades, analysisFunction) {
    return trades.map(analysisFunction);
};

const trades = [
    { symbol: "AAPL", price: 150, volume: 100 },
    { symbol: "GOOGL", price: 2800, volume: 150 },
];

const analyzedTrades = analyzeTrades(trades, trade => ({
    ...trade,
    value: trade.price * trade.volume,
}));

console.warn("Analyzed Trades", analyzedTrades);






// Callback Function

function addTask(task, callback) {
    setTimeout(() => {
        console.log(`Task "${task}" added.`);
        callback();
    }, 3000);
};

addTask("Finish Homework", () => {
    console.log(
        "Callback executed: Task added successfully!"
    );
});



function fetchProduct(productId, callback) {
    setTimeout(() => {
        const product = { id: productId, name: "Laptop", price: 1000 };
        callback(product);
    }, 2000);
};

fetchProduct(1, product => {
    console.warn(`Fetched product: ${product.name} for $${product.price}`);
});



function executeTrade(trade, callback) {
    setTimeout(() => {
        console.log(`Trade executed for ${trade.symbol} at $${trade.price}`);
        callback(trade);
    }, 1000);
};

executeTrade({ symbol: "AAPL", price: 150 }, trade => {
    console.log((`Trade details: ${trade.symbol} at $${trade.price}`));
});






// IIFE

const todoList = (function () {
    const tasks = [];
    return {
        addTask: function (task) {
            tasks.push(task);
            console.log(`Task ${task} added.`);
        },
        getTasks: function () {
            return tasks;
        },
    };
})();
todoList.addTask(`Read a book`);
console.warn(todoList.getTasks());



const shoppingCart = (function () {
    const cart = [];

    return {
        addItem: function (item) {
            cart.push(item);
            console.log(
                (`"${item.name}" added to cart.`)
            );
        },
        getItem: function () {
            return cart;
        },
    };
})();

shoppingCart.addItem({ name: "Apple IOS 15", price: 1000 });
console.log(shoppingCart.getItem());



const tradeManager = (function () {
    const trades = [];

    return {
        recordTrade: function (trade) {
            trades.push(trade);
            console.log(`Trade recorded for ${trade.symbol} at $${trade.price}`);
        },
        getTrades: function () {
            return trades;
        },
    };
})();

tradeManager.recordTrade({ symbol: "AAPL", price: 150 });
console.warn(tradeManager.getTrades());






// Anonymous Functions

const tasks3 = [
    "Do Homework", "Buy Groceries", "Clean Room"
];

tasks3.forEach(function (task) {
    console.log(`Task: ${task}`);
});



const todos = [];

const addToDo = function (todo) {
    todos.push(todo);
    console.log(`Added: ${todo}`);
};

const displayToDos = function () {
    console.log("Your to-do list:");
    todos.forEach(function (todo) {
        console.log(`- ${todo}`);
    });
};

// usage:
addToDo("Buy Groceries");
addToDo("Morning Walk");
displayToDos();

// In this example we define two anonymous functions: "addToDo" and "displayToDos".
// The "addToDo" function added new item to the "todos" array., while "displayTodos" prints the
// current list of todos. The "forEach" method uses another anonymous function to iterate over
// over the "todos" array.






// Arrow Function

const cart = [];
const addToCart = (item) => {
    cart.push(item);
    console.log(`Added to cart: ${item.name} at $${item.price}`);
};

const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total price: $${total.toFixed(2)}`);
};

// Usage
addToCart({ name: "laptop", price: 999.99 });
addToCart({ name: "CPU", price: 25.99 });
calculateTotal();

// In this ex, we use arrow functions to define "addToCart" and "calculateTotal".
// The "addToCart" function adds an item to the "cart", while "calculateTotal" computes
// the total price of items in the cart using the "reduce" method with an arrow function
// as the callback.






const allTrade = [];

const addTrade = function (symbol, price, quantity) {
    const trade = { symbol, price, quantity };
    allTrade.push(trade);
    console.log(`Added ${quantity} of ${symbol} at $${price} shares`);
};

const calculateAveragePrice = () => {
    const total = allTrade.reduce((acc, trade) => acc + (trade.price * trade.quantity), 0);
    const totalQuantity = allTrade.reduce((acc, trade) => acc + trade.quantity, 0);
    const averagePrice = totalQuantity ? (total / totalQuantity) : 0;
    console.log(`Average trade price: $${averagePrice.toFixed(2)}`);
};

// Usage
addTrade("AAPL", 150, 10);
addTrade("GOOGL", 2800, 5);
calculateAveragePrice();