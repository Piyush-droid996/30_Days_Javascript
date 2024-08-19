//Run "npm install" then "node index.js"

// Activity 1: Importing modules of activity_1.js
import _ from "lodash";
import { addTwoNums, person } from "./activity_1.js";

// • Task 1: Using imported addTwoNums function
const result = addTwoNums(10, 20);
console.log(result);

// • Task 2: Using imported {person} object
console.log(person.greet());

// Activity 2: Named and Default Imports from activity_2.js
import areaOfCircle, { square, multiply } from "./activity_2.js";

const radius = 10;
const value_1 = 17;
const value_2 = 19;

// • Task 3: results of task 3 imports
const square_res = square(value_1);
const multiply_res = multiply(value_1, value_2);

console.log(
  `Square of ${value_1} is ${square_res} and multiplication of ${value_1} and ${value_2} is ${multiply_res}`
);
// • Task 4: results of task 4 imports
const circle = areaOfCircle(radius);

console.log(`Area of circle with radius ${radius} is ${circle}`);

// Activity 3: Importing Entire Modules

// • Task 5: Using all modules from activity_3 as object
import * as obj from "./activity_3.js";

let num_1 = 69,
  num_2 = 77;

const add = obj.addition(num_1, num_2);
const sub = obj.subtraction(num_1, num_2);
const divide = obj.division(num_1, num_2);

console.log(
  `Addition of ${num_1} and ${num_2} is ${add}, subtraction is ${sub}, division is ${divide}`
);

console.log(`value of PI is ${obj.PI}`);
console.log(
  `Details of suspect are: Name - ${obj.person.name}, age - ${obj.person.age} and city is ${obj.person.city}`
);

// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// Load the full build.
import "lodash";

const str = "abcdefghijklmnopqrstuvwxyz";

console.log(_.invert(str));

// • Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

axios
  .get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw")
  .then((response) => {
    const data = response.data;
    if (data.joke) {
      console.log(data.joke);
    } else {
      console.log(data.setup);
      console.log(data.delivery);
    }
  })
  .catch((error) => {
    console.log("Something went wrong: " + error);
  });

// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

//Remove the `"main": "index.html"` from package.json and then run "npm run build"
//to run parcel. This will make a bundler of both files present in "src" into a "dist" folder.
