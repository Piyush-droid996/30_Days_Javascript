// Activity 1: Sorting Algorithms
// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const nums = [3, 1, 23, 542, 42, 23, 75, 978, 236, -11, -45, 72];

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return arr;
}

console.log("Bubble Sort: " + bubbleSort(nums));

// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log("Selection Sort: " + selectionSort(nums));

// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap the pivot element
  return i + 1;
}

console.log(quickSort(nums));

// Activity 2: Searching Algorithms
// • Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Target value ${target} found at index ${i}`);
      return i;
    }
  }
  console.log(`Target value ${target} not found in the array`);
  return -1;
}

console.log(linearSearch(nums, -11));

// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log(`Target value ${target} found at index ${mid}`);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(`Target value ${target} not found in the array`);
  return -1;
}

// Example usage:
const nums_sorted = [-45, -11, 1, 3, 23, 23, 42, 72, 75, 236, 542, 978];
const targetValue = 23;
binarySearch(nums_sorted, targetValue);

// Activity 3: String Algorithms
// • Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function count(string) {
  let count = {};
  for (let i = 0; i < string.length; i++) {
    if (!count[string[i]]) {
      count[string[i]] = 1;
    } else {
      count[string[i]]++;
    }
  }
  return count;
}

const str = "Hello world";
console.log(count(str));

// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let set = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  console.log(
    `Length of the longest substring without repeating characters: ${maxLength}`
  );
  return maxLength;
}

// Example usage:
const strr = "AAABCDEAAA";
lengthOfLongestSubstring(strr);

// Activity 4: Array Algorithms
// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
  const n = arr.length;
  // Normalize k to ensure it's within the bounds of the array length
  k = k % n;

  // Handle negative k (rotate left)
  if (k < 0) {
    k = k + n;
  }

  // Split and concatenate the array
  const rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
  console.log(`Rotated array by ${k} positions:`, rotatedArray);
  return rotatedArray;
}

// Example usage:
const nums_2 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotateArray(nums_2, k);

// • Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  // Merge the arrays until one is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Append any remaining elements from arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Append any remaining elements from arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log(`Merged sorted array:`, mergedArray);
  return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

mergeSortedArrays(arr1, arr2);

// Activity 5: Dynamic Programming (Optional)
// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    console.log([0]);
    return [0];
  }

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  console.log(`Fibonacci sequence up to ${n} numbers:`, fib);
  return fib;
}

// Example usage:
const n = 10;
fibonacci(n);

// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  console.log(`Maximum value that can be obtained: ${dp[n][capacity]}`);
  return dp[n][capacity];
}

// Example usage:
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;

knapsack(values, weights, capacity);
