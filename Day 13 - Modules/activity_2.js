// Activity 2: Named and Default Exports

// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export const square = (num) => {
  return num * num;
};

export const multiply = (num1, num2) => {
  return num1 * num2;
};

// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const areaOfCircle = (rad) => {
  return (22 / 7) * rad * rad;
};

export default areaOfCircle;
