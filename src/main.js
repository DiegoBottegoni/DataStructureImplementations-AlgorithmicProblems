// Importing classes from their respective files
const { BinaryTree } = require('./models/BinaryTree.js');
const { Graph } = require('./models/Graph.js');
const { LinkedList } = require('./models/LinkedList.js');
const { MinMaxStack } = require('./models/MinMaxStack.js');
const { Queue } = require('./models/Queue.js');
const { Stack } = require('./models/Stack.js');
// Importing functions from their respective files
const { isBST } = require('../src/utils/binarySearchTree.js');
const { bfsShortestPath } = require('../src/utils/breadthFirstSearch.js');
const { dijkstra } = require('../src/utils/dijkstra.js');
const { hasCycle } = require('../src/utils/linkedListCycle.js');

// Demonstrate Stack usage
console.log('STACK');
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // expected 30
console.log(stack.peek()); // expected 20

// Demonstrate Queue usage
console.log('QUEUE');
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // expected 10
console.log(queue.peek()); // expected 20

// Demonstrate BinaryTree usage
console.log('BINARY TREE');
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
console.log(tree.search(15)); // expected true
console.log(tree.inOrderTraverse()); // expected [5, 7, 10, 15]

// Demonstrate Graph usage
console.log('GRAPH');
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.dfs('A'); // expected A B C
graph.bfs('C'); // expected C A B

// Demonstrate LinkedList usage
console.log('LINKED LIST');
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.delete(2);
console.log(list.search(2)); // expected false
console.log(list.search(3)); // expected true

// Demonstrate MinMaxStack usage
console.log('MIN/MAX STACK');
const minMaxStack = new MinMaxStack();
minMaxStack.push(10);
minMaxStack.push(20);
minMaxStack.push(5);
console.log(minMaxStack.getMin()); // expected 5
console.log(minMaxStack.getMax()); // expected 20
minMaxStack.pop();
console.log(minMaxStack.getMin()); // expected 10
console.log(minMaxStack.getMax()); // expected 20

// Demonstrate Binary Search Tree check
console.log('BINARY SEARCH TREE');
const bstTree = new BinaryTree();
bstTree.insert(10);
bstTree.insert(5);
bstTree.insert(15);
bstTree.insert(7);
console.log(isBST(bstTree.root)); // expected true

// Demonstrate Dijkstra's Algorithm
console.log('DIJKSTRA');
const dijkstraGraph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
console.log(dijkstra(dijkstraGraph, 'A', 'D')); // expected [ 'A', 'B', 'C', 'D' ]

// Demonstrate BFS Shortest Path
console.log('BREADTH-FIRST SEARCH (BFS)');
const bfsGraph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};
console.log(bfsShortestPath(bfsGraph, 'A', 'F')); // expected [ 'A', 'C', 'F' ]

// Demonstrate Linked List Cycle Detection
console.log('LINKED LIST CYCLE DETECTION');
const cycleList = new LinkedList();
cycleList.insert(1);
cycleList.insert(2);
cycleList.insert(3);
cycleList.head.next.next.next = cycleList.head.next; // Create a cycle
console.log(hasCycle(cycleList.head)); // expected true
