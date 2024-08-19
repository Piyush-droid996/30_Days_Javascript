//Activity 1: Function Declaration
//• Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

oddEven(3);

//• Task 2: Write a function to calculate the square of a number and return the result.
function square(x) {
  return x * x;
}

console.log(square(69));

//Activity 2: Function Expression
//• Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function max(a, b) {
  return Math.max(a, b);
}

console.log(max(21324, 21413));

//• Task 4: Write a function expression to concatenate two strings and return the result.
function concat(str_1, str_2) {
  return str_1 + str_2;
}

console.log(concat("Nish", "Harsh"));

//Activity 3: Arrow Functions
//• Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (x, y) => {
  return x + y;
};

console.log(sum(23, 543));

//• Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkStr = (str, char) => {
  return str.includes(char);
};

console.log(checkStr("Hello", "e"));

//Activity 4: Function Parameters and Default Values
//• Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (x, y = 10) => {
  return x * y;
};

console.log(product(10));

//• Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age) => {
  console.log(`Hello ${name}, your age is ${age}`);
};

greet("Harsh", 21);

//Activity 5: Higher-Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function hello(x) {
  console.log("Hello", x);
}

const callManyTimes = (func, num) => {
  for (let i = 0; i < num; i++) {
    func(i);
  }
};

callManyTimes(hello, 3);

//• Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const applyFunctions = (func_1, func_2, value) => func_2(func_1(value));

//Example functions
const add10 = (x) => x + 10;
const mulitply3 = (x) => x * 3;

console.log(applyFunctions(add10, mulitply3, 10));
