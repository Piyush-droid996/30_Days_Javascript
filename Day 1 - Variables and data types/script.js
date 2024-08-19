// Activity 1: Variable declaration

// Task 1: Declare a integer variable using the `var` keyword & log it into console

var num = 2507;
console.log("var:", num);

// Task 2: Declare a string variable using the `let` keyword & log it to the console

let str = "Hello";
console.log("let:", str);

//Activity 2: Constant Declaration

// Task 3: Declare a variable using the `const` keyword & assign it to a boolean & log it to the console

const bool = true;
console.log("const", bool);

//Activity 3: Data Types

// Task 4: Create variales of different Data Types [ number , string , boolean , array ] & log each of them using the `typeof` opreator

let id = Symbol(2507),
  student = "Harsh",
  age = 21,
  isMonitor = false,
  arr = ["this", "is", "an", "array"];

console.log(typeof int);
console.log(typeof student);
console.log(typeof age);
console.log(typeof isMonitor);
console.log(typeof arr);

//Activity 4: Reassigning variables

//Task 5: Declare a `let` variable , assign it an initial value , reassign it & log both of them

let value = "Before Reassign";
console.log(value);
value = "After Reassign";
console.log(value);

//Activity 5: Understanding const

//Task 6: Try Reassigning a variable declared with const & observe the error

const triangle = "Three sides";
console.log(triangle);
triangle = "Four sides";
console.log(triangle);
