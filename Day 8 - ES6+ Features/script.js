//Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log thestring to the console.
const name = "Harsh",
  age = 21;

let string = `${name}, ${age}`;
console.log(string);

// Task 2: Create a multi-line string using template literals and log it to the console.
let multiline_str = `This is a 
multiline string`;
console.log(multiline_str);

//Activity 2: Destructuring
//• Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const nums = [11, 22, 33, 44, 55];
const [first, second] = nums;
console.log(first, second);

//• Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "Psychology of money",
  author: "Morgan Housel",
  year: 2020,
};
const { title, author } = book;
console.log(title, author);

//Activity 3: Spread and Rest Operators
//• Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const array = [1, 2, 3, 4, 5];
const new_array = [...array, 6, 7, 8, 9, 10];
console.log(new_array);

//• Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sum = (...numbers) => {
  return numbers.reduce((acc, current) => acc + current, 0);
};
console.log(sum(1, 2, 3, 4, 5));

//Activity 4: Default Parameters
//• Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const product = (first, second = 1) => {
  return first * second;
};
console.log(product(10));
console.log(product(10, 20));

//Activity 5: Enhanced Object Literals
//• Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let p_name = "John Wick",
  p_age = 40,
  p_city = "London";

const person = {
  p_name,
  p_age,
  greet() {
    return `Hello, I am ${p_name}`;
  },
  getDetails() {
    return `Name: ${p_name}, Age: ${p_age}, City: ${p_city}`;
  },
};
console.log(person.greet());
console.log(person.getDetails());

//• Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName = "name";
const propAge = "age";
const propLocation = "location";

const person_2 = {
  [propName]: "UnderTaker",
  [propAge]: undefined,
  [propLocation]: "Hell",
};
console.log(person_2);
