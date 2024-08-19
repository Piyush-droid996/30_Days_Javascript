//Activity 1: Creating and Exporting Modules
//• Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export const addTwoNums = (num1, num2) => {
  return num1 + num2;
};

//• Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export const person = {
  name: "Harsh",
  age: 21,
  greet() {
    return `Hello I am ${this.name} and I am ${this.age} years old`;
  },
};
