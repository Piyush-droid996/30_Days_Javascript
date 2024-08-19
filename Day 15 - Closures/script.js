// Activity 1: Understanding Closures

// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunc() {
  let outerVar = "This is outer function variable";

  function innerFunc() {
    return outerVar;
  }

  return innerFunc();
}

const myFunction = outerFunc();
const result = myFunction;

console.log(result);

// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();

console.log(myCounter.getValue());

myCounter.increment();
myCounter.increment();
myCounter.increment();

console.log(myCounter.getValue());

// Activity 2: Practical Closures

// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call
function createID() {
  let lastID = 1000;

  return function () {
    lastID += 1;
    return lastID;
  };
}

const generateUniqueID = createID();

const id1 = generateUniqueID();
const id2 = generateUniqueID();
const id3 = generateUniqueID();

console.log(id1, id2, id3);

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
  return function () {
    return `Hello, ${name}`;
  };
}

const greetUser = createGreeter("Ironman");
const greetUser2 = createGreeter("Thor");

console.log(greetUser());
console.log(greetUser2());

// Activity 3: Closures in Loops

// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

let array = [];
for (let i = 0; i < 10; i++) {
  const func = () => {
    console.log(`This is function on index ${i}`);
  };
  array.push(func);
}
console.log(array);

// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createManager() {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
      console.log(`New item has been added to collection: ${item}`);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`${item} is successfully removed from collection`);
      } else {
        console.log(`Item not found in collection`);
      }
    },
    showList: function () {
      if (items.length === 0) {
        console.log(`Collection is empty`);
      } else {
        console.log(`Items in the collection are:`);
        items.forEach((item, index) => {
          console.log(`${index + 1}: ${item}`);
        });
      }
    },
  };
}

const myCollection = createManager();

myCollection.addItem(1);
myCollection.addItem(2);
myCollection.addItem(3);
myCollection.removeItem(2);
myCollection.addItem(4);
myCollection.showList();

// Activity 5: Memoization

// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(...args);
    if (cache[key] !== undefined) {
      console.log(`Fetching result from cache for arguments: ${key}`);
      return cache[key];
    } else {
      console.log(`Computing results for arguments: ${key}`);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function add(x, y) {
  return x + y;
}

const memoizedFunction = memoize(add);

console.log(memoizedFunction(1, 2));
console.log(memoizedFunction(1, 2));
console.log(memoizedFunction(3, 2));
console.log(memoizedFunction(3, 2));

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
  if (n < 0) {
    return undefined; // Factorial is not defined for negative numbers
  } else if (n === 0 || n === 1) {
    return 1; // The factorial of 0 and 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(7));
console.log(memoizedFactorial(7));
