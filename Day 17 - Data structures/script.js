// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1);
console.log(node2);

// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor() {
    this.head = null;
  }

  // to add a node at the end
  add(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to remove a node from the end
  remove() {
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const removedValue = this.head.value;
      this.head = null;
      return removedValue;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const removedValue = current.next.value;
      current.next = null;
      return removedValue;
    }
  }

  // Method to display all nodes
  displayAll() {
    if (this.head === null) {
      return `List is empty`;
    } else {
      let current = this.head;
      let output = "";
      while (current !== null) {
        output += current.value + "->";
        current = current.next;
      }
      output += "null";
      console.log(output);
    }
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.displayAll();

console.log("Removed:" + list.remove());
list.displayAll();
console.log("Removed:" + list.remove());
list.displayAll();
console.log("Removed:" + list.remove());
list.displayAll();
console.log("Removed:" + list.remove());
list.displayAll();

// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("The stack is empty.");
    } else {
      console.log(this.items.join(" -> "));
    }
  }

  reverse(string) {
    string.split;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
stack.display();

// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(string) {
  const stack = new Stack();

  let reversed = "";

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);

// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log(`No items in queue`);
    } else {
      console.log(this.items.join("->"));
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();

console.log(`Front: ${queue.front()}`);
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Dequeue: ${queue.dequeue()}`);

// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function printer() {
  const printerQueue = new Queue();

  printerQueue.enqueue("Printer Job 1");
  printerQueue.enqueue("Printer Job 2");
  printerQueue.enqueue("Printer Job 3");
  printerQueue.display();

  while (!printerQueue.isEmpty()) {
    let currentJob = printerQueue.dequeue();
    console.log(`Processing: ${currentJob}`);
    // Simulate the time taken to print (e.g., 1 second per job)
    // In a real scenario, you might replace this with actual print logic
  }

  printerQueue.display();
}

printer();

// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const treenode1 = new TreeNode(1);
const treenode2 = new TreeNode(2);
const treenode3 = new TreeNode(3);

treenode1.left = treenode2;
treenode1.right = treenode3;
console.log(treenode1);

// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node into the binary tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Method to perform in-order traversal and display nodes
  inOrderTraversal() {
    this.inOrder(this.root);
  }

  // Helper method to perform in-order traversal
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}

// Example usage:
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(13);
binaryTree.insert(18);

console.log("In-order traversal:");
binaryTree.inOrderTraversal();

// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Method to add an edge to the graph
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // Assuming an undirected graph
    }
  }

  // Method to perform a breadth-first search (BFS)
  bfs(startingVertex) {
    if (!this.adjacencyList.has(startingVertex)) {
      return "Starting vertex not found";
    }

    const visited = new Set();
    const queue = [startingVertex];

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  // Method to perform a breadth-first search (BFS) and find the shortest path
  bfsShortestPath(start, goal) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(goal)) {
      return "Starting or goal vertex not found";
    }

    const visited = new Set();
    const queue = [[start]];
    while (queue.length > 0) {
      const path = queue.shift();
      const vertex = path[path.length - 1];
      if (!visited.has(vertex)) {
        for (const neighbor of this.adjacencyList.get(vertex)) {
          const newPath = [...path, neighbor];
          if (neighbor === goal) {
            return newPath;
          }
          queue.push(newPath);
        }
        visited.add(vertex);
      }
    }

    return "No path found";
  }
}

// Example usage:
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

// Perform BFS
console.log("BFS starting from vertex A:");
graph.bfs("A"); // Output: A B C D E (or a similar order)

// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

// Find the shortest path
console.log("Shortest path from A to E:", graph.bfsShortestPath("A", "E"));
