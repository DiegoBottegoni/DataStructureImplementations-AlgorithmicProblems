class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    // Enqueue an element with its associated priority into the queue
    enqueue(val, priority) {
      // Create an object to store both the value and its priority
      const element = { val, priority };
      // Add the element to the internal array
      this.values.push(element);
      // Sort the array to maintain priority order (lower priority first)
      this.sort();
    }
  
    // Dequeue (remove and return) the element with the highest priority (lowest numerical value)
    dequeue() {
      // Use the shift method to remove and return the first element (highest priority)
      return this.values.shift();
    }
  
    // Sort the internal array based on priority (lower priority first)
    sort() {
      // Use the sort method with a custom compare function
      this.values.sort((a, b) => a.priority - b.priority);
      // The compare function returns a negative value if 'a' has lower priority,
      // a positive value if 'b' has lower priority, and 0 if priorities are equal.
      // This ensures the elements are sorted with lower priority elements at the beginning.
    }
  }
  
  module.exports = { PriorityQueue }; // Exports the class
  