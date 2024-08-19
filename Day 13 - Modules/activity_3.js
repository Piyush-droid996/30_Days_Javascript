// Activity 3: Importing Entire Modules

// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

export const addition = (a, b) => {
  return a + b;
};

export const subtraction = (a, b) => {
  return a - b;
};

export const division = (a, b) => {
  return a / b;
};

export const PI = 3.14;

export const person = {
  name: "Nobody",
  age: 45,
  city: "Badlands",
};
