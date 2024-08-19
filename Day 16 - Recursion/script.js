// Activity 1: Basic Recursion

// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  if (n < 0) {
    return `Negative numbers are invalid`;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(10));

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n < 0) {
    return undefined;
  } else if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(fibonacci(10));

// Activity 2: Recursion with Arrays

// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
let nums = [1, 3, 53, 644, 23, 34];

function addArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + addArray(arr.slice(1));
}

console.log(addArray(nums));

// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxEl(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxOfRest = maxEl(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(maxEl([1, 2]));
console.log(maxEl([15, 2, 14, 56, 99]));
console.log(maxEl([11, 22, -10, 20, 45, 5]));

// Activity 3: String Manipulation with Recursion

// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("abc"));

// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return checkPalindrome(str.slice(1, -1));
}

console.log(checkPalindrome("abc"));
console.log(checkPalindrome("abcba"));

// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: if the left index exceeds the right index, the target is not in the array
  if (left > right) {
    console.log("Target is not in the array");
    return -1;
  }

  // calculate mid of the array
  const mid = Math.floor((left + right) / 2);

  // check if middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // search left of mid if target is smaller than middle element
  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }

  // search right of mid if target is greater than middle element
  return binarySearch(arr, target, mid + 1, right);
}

// Test cases
const testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const testArray3 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const testArray4 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21];
const testArray5 = [];

console.log(binarySearch(testArray1, 7));
console.log(binarySearch(testArray2, 20));
console.log(binarySearch(testArray3, 30));
console.log(binarySearch(testArray4, 12));
console.log(binarySearch(testArray5, 10));

// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function findOccurrences(arr, target, index = 0) {
  // return 0, if length of array is equal to index
  if (arr.length === index) {
    return 0;
  }
  // if current element is equal to target, add 1 to count and proceed to next element
  const count = arr[index] === target ? 1 : 0;
  return count + findOccurrences(arr, target, index + 1);
}

const test_Array1 = [1, 2, 3, 4, 5, 3, 2, 1, 3];
const test_Array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const test_Array3 = [5, 5, 5, 5, 5, 5, 5];
const test_Array4 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const test_Array5 = [];

console.log(findOccurrences(test_Array1, 3));
console.log(findOccurrences(test_Array2, 40));
console.log(findOccurrences(test_Array3, 5));
console.log(findOccurrences(test_Array4, 2));
console.log(findOccurrences(test_Array1, 6));
console.log(findOccurrences(test_Array5, 5));

// Activity 5: Tree Traversal (Optional)

// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Recursive function for in-order traversal
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Traverse the left subtree
  inOrderTraversal(node.left);

  // Visit the root node
  console.log(node.value);

  // Traverse the right subtree
  inOrderTraversal(node.right);
}

// Test cases
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);
// Logs: 1, 2, 3, 4, 5, 6, 7

const root_2 = new TreeNode(10);
root_2.left = new TreeNode(5);
root_2.right = new TreeNode(15);
root_2.left.left = new TreeNode(2);
root_2.left.right = new TreeNode(7);
root_2.right.left = new TreeNode(12);
root_2.right.right = new TreeNode(18);

console.log("In-order traversal of the second binary tree:");
inOrderTraversal(root_2);
// Logs: 2, 5, 7, 10, 12, 15, 18

// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// Recursive function to calculate the depth of a binary tree
function calculateDepth(node) {
  // Base case: if the node is null, return 0
  if (node === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  // The depth of the current node is the greater of the two depths plus 1
  return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases
const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(6);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(5);
root1.right.right = new TreeNode(7);

const root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(12);
root2.right.right = new TreeNode(18);

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.left.left = new TreeNode(3);
root3.left.left.left = new TreeNode(4);

console.log("Depth of the first binary tree:", calculateDepth(root1)); // Logs: 3
console.log("Depth of the second binary tree:", calculateDepth(root2)); // Logs: 3
console.log("Depth of the third binary tree:", calculateDepth(root3)); // Logs: 4
console.log("Depth of an empty tree:", calculateDepth(null)); // Logs: 0
