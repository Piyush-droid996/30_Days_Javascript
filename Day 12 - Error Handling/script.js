//Activity 1: Basic Error Handling with Try-Catch
//• Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throw_err() {
  throw new Error("Intentional error");
}

function handleError() {
  try {
    throw_err();
  } catch (error) {
    console.log("An error occurred: " + error.message);
  }
}
handleError();

//• Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(num_1, num_2) {
  if (num_2 === 0) {
    throw new Error("Denominator cannot be zero");
  } else {
    return num_1 / num_2;
  }
}
console.log(divide(69, 10));

//Activity 2: Finally Block
//• Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function check_flow() {
  try {
    console.log("This is try block");
    // throw_err();
  } catch (error) {
    console.log("Error: This is error block");
  } finally {
    console.log("This is Finally block");
  }
}
check_flow();

//Activity 3: Custom Error Objects
//• Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function throwCustomError() {
  throw new customError("This is a custom Error");
}

function handleCustomError() {
  try {
    throwCustomError();
  } catch (error) {
    if (error instanceof customError) {
      console.log(`Caught a custom error: ${error.message}, ${error.name}`);
    } else {
      console.log(`Unknown error occurred: ${error.message}`);
    }
  }
}

handleCustomError();

//• Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails.
//Handle the custom error using a try-catch block.

const checkUser = (user) => {
  try {
    if (user.length < 3 || typeof user !== "string") {
      throw_err();
    } else {
      console.log(`Username is ${user}`);
    }
  } catch (error) {
    console.log("Error: Name is either empty or invalid");
  }
};
checkUser("Harsh");

//Activity 4: Error Handling in Promises
//• Task 6: Create a promise that randomly resolves or rejects. Use -catch () to handle the rejection and log an appropriate message to the console.
const random_num = Math.round(Math.random() * 1);

const myPromise = new Promise((resolve, reject) => {
  if (random_num === 1) {
    resolve("This promise is resolved");
  } else {
    reject("This promise is rejected");
  }
});

function check_promise() {
  myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}
check_promise();

//• Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function check_promise_2() {
  try {
    const res = await myPromise;
    console.log(res);
  } catch (error) {
    console.log(`An error occurred in check_promise_2()`);
  }
}

check_promise_2();

//Activity 5: Graceful Error Handling in Fetch
//• Task 8: Use the fetch API to request data from an invalid URL and handle the error using -catch () . Log an appropriate error message to the console.
function fetchAPI() {
  const url = "https://Invalidurl";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`Data fetched successfully: ${data}`);
    })
    .catch((error) => {
      console.log(`An error occurred in fetching data: ${error}`);
    });
}
fetchAPI();

//• Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const handleAPI = async () => {
  const url = "https://Invalidurl";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("HTTP Error!", res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(
      `An error occurred in fetching data using async function: ${error.message}`
    );
  }
};
handleAPI();
