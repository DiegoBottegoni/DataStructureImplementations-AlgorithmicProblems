class MinMaxStack {
    constructor() {
      // Initializes an empty stack to store the main elements
      this.stack = [];
      // Initializes an empty stack to keep track of minimum elements
      this.minStack = [];
      // Initializes an empty stack to keep track of maximum elements
      this.maxStack = [];
    }
  
    // Push an element onto the stack
    push(element) {
      // Push the element onto the main stack
      this.stack.push(element);
  
      // Update the minimum element stack
      if (this.minStack.length === 0 || element <= this.getMin()) {
        // If the minStack is empty or the element is less than or equal to the current min, push the element onto the minStack
        this.minStack.push(element);
      }
  
      // Update the maximum element stack
      if (this.maxStack.length === 0 || element >= this.getMax()) {
        // If the maxStack is empty or the element is greater than or equal to the current max, push the element onto the maxStack
        this.maxStack.push(element);
      }
    }
  
    // Pop an element off the stack
    pop() {
      if (this.stack.length === 0) {
        // Throw an error if the stack is empty
        throw new Error("Stack is empty");
      }
  
      const element = this.stack.pop(); // Pop the element from the main stack
  
      // Update the minimum element stack if necessary
      if (element === this.getMin()) {
        this.minStack.pop(); // Pop the element from the minStack if it was the minimum
      }
  
      // Update the maximum element stack if necessary
      if (element === this.getMax()) {
        this.maxStack.pop(); // Pop the element from the maxStack if it was the maximum
      }
  
      return element;
    }
  
    // Get the minimum element in the stack
    getMin() {
      if (this.minStack.length === 0) {
        // Throw an error if the stack is empty
        throw new Error("Stack is empty");
      }
      return this.minStack[this.minStack.length - 1]; // Get the top element from the minStack
    }
  
    // Get the maximum element in the stack
    getMax() {
      if (this.maxStack.length === 0) {
        // Throw an error if the stack is empty
        throw new Error("Stack is empty");
      }
      return this.maxStack[this.maxStack.length - 1]; // Get the top element from the maxStack
    }
  }
  
  module.exports = { MinMaxStack }; // Exports the class
  