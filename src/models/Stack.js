class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push (add) an element onto the top of the stack
    push(element) {
      // Push the element to the end of the 'items' array (becomes the new top)
      this.items.push(element);
    }
  
    // Pop (remove) the top element from the stack and return it
    pop() {
      if (this.isEmpty()) {
        // Throw an error if the stack is empty (nothing to pop)
        throw new Error("Stack is empty");
      }
      // Use the pop method to remove and return the last element (top of the stack)
      return this.items.pop();
    }
  
    // Peek at the top element of the stack
    peek() {
      if (this.isEmpty()) {
        // Throw an error if the stack is empty (nothing to peek at)
        throw new Error("Stack is empty");
      }
      // Access the last element (top of the stack)
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      // Return true if the 'items' array has no elements
      return this.items.length === 0;
    }
  }
  
  module.exports = { Stack }; // Exports the class
  