0+9*+//Activity 1: Understanding Promises
//• Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This promise is resolved after 2 seconds");
  }, 3000);
});

promise.then((message) => {
  console.log(message);
});

//• Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using •catch() .
const reject_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This promise is rejected after 2 seconds");
  }, 3000);
});

reject_promise.catch((err) => {
  console.log(err);
});

//Activity 2: Chaining Promises
//• Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from server 1");
  }, 1000);
});
const fetchData2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from server 2");
  }, 1500);
});
const fetchData3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from server 3");
  }, 2000);
});

fetchData1
  .then((result) => {
    console.log(result);
    return fetchData2;
  })
  .then((result) => {
    console.log(result);
    return fetchData3;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

//Activity 3: Using Async/Await
//• Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const async_func = async () => {
  const delay_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is a promise delayed by 3.5 seconds");
    }, 3500);
  });
  try {
    const data = await delay_promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
async_func();

//• Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const error_func = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise is rejected and handled using catch block");
    }, 4000);
  });

  try {
    const data = await promise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
error_func();

//Activity 4: Fetching Data from an API
//• Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://v2.jokeapi.dev/joke/Dark")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network Error" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    if (data.joke) {
      console.log(data.joke);
    }
    console.log(`Dark Joke: ${data.setup} : ${data.delivery}`);
  })
  .catch((error) => {
    console.log(error);
  });

//• Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchAPI() {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Spooky");
    if (!res.ok) {
      throw new Error("Network Error" + res.statusText);
    }
    const data = await res.json();
    if (data.joke) {
      console.log(data.joke);
    }
    console.log(`Spooky Joke: ${data.setup} : ${data.delivery}`);
  } catch (error) {
    console.log("There was a problem with the fetch operation:" + error);
  }
}
fetchAPI();

//Activity 5: Concurrent Promises
//• Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 5000);
});
const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 4500);
});
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 5500);
});

Promise.all([promise_1, promise_2, promise_3])
  .then((values) => {
    console.log("All promises Resolved");
    values.forEach((value, i) => {
      console.log(`Promise ${i + 1}: ${value}`);
    });
  })
  .catch((error) => console.log("One of the promises failed" + error));

//• Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise_1, promise_2, promise_3]).then((winner) => {
  console.log(`First resolved promise is: ${winner}`);
});
