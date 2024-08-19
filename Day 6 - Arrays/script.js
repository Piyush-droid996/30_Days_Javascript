//Activity 1: Array Creation and Access
//• Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr_nums = [1, 2, 3, 4, 5];
console.log(arr_nums);

//• Task 2: Access the first and last elements of the array and log them to the console.
console.log(
  `First element of array is ${arr_nums[0]} and last is ${
    arr_nums[arr_nums.length - 1]
  }`
);

//Activity 2: Array Methods (Basic)
//• Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr_nums.push(6);
console.log(arr_nums);

//• Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr_nums.pop();
console.log(arr_nums);

//• Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr_nums.shift();
console.log(arr_nums);

//• Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr_nums.unshift(69);
console.log(arr_nums);

//Activity 3: Array Methods (Intermediate)
//• Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let new_arr = [];
arr_nums.map((num) => {
  new_arr.push(num * 2);
});
console.log(new_arr);

//• Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const filter_arr = [1, 23, 43, 42, 34, 67, 58];
const evenArr = filter_arr.filter((num) => num % 2 === 0);
console.log(evenArr);

//• Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const reduce_arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
const addArr = reduce_arr.reduce((a, b) => a + b);
console.log(addArr);

//Activity 4: Array Iteration
//• Task 10: Use a for loop to iterate over the array and log each element to the console.
const loop_arr = [
  "This",
  "is",
  "an",
  "array",
  "and",
  "we",
  "are",
  "going",
  "to",
  "loop",
  "on",
  "it",
];

for (i in loop_arr) {
  console.log(loop_arr[i]);
}

//• Task 11: Use the forEach method to iterate over the array and log each element to the console.
const forEach_arr = [1, 23, 42, 432, 69, 100, -15];
let x;
let targetNum = 69;

forEach_arr.forEach((num) => {
  x = targetNum - num;
  console.log(
    `${x < 0 ? -x : x} is to be ${
      x > 0 ? "added" : "subtracted"
    } to ${num} to make it ${targetNum}`
  );
});

//Activity 5: Multi-dimensional Arrays
//• Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const arr_2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr_2d);

//• Task 13: Access and log a specific element from the two-dimensional array.
console.log(arr_2d[2][0]);
