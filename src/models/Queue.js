class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the back of the queue (enqueue)
    enqueue(element) {
      // Push the element to the end of the 'items' array
      this.items.push(element);
      // console.log(`Enqueued: ${element}`);
    }
  
    // Remove and return the element from the front of the queue (dequeue)
    dequeue() {
      if (this.isEmpty()) {
        // Throw an error if the queue is empty
        throw new Error("Queue is empty");
      }
      const dequeuedElement = this.items.shift(); // Remove and return the first element
      // console.log(`Dequeued: ${dequeuedElement}`);
      return dequeuedElement;
    }
  
    // Peek at the front element of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        // Throw an error if the queue is empty
        throw new Error("Queue is empty");
      }
      const frontElement = this.items[0]; // Get the first element without removing it
      // console.log(`Peek: ${frontElement}`);
      return frontElement;
    }
  
    // Check if the queue is empty
    isEmpty() {
      // Return true if the 'items' array has no elements
      return this.items.length === 0;
    }
  }
  
  module.exports = { Queue }; // Exports the class
  