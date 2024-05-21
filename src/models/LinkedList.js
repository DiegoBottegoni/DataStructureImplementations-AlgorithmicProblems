const { ListNode } = require('./ListNode.js'); // Import class

class LinkedList {
  constructor() {
     this.head = null;
  }

  // Insert a node with a given value at the end of the linked list
  insert(value) {
    const newNode = new ListNode(value); // Create a new node with the value

    if (this.head === null) {
      // If the list is empty, make the new node the head
      this.head = newNode;
    } else {
      // Otherwise, traverse the list to find the last node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      // Set the last node's 'next' pointer to the new node
      current.next = newNode;
    }
  }

  // Delete a node with a given value from the linked list
  delete(value) {
    if (this.head === null) {
      // List is empty, nothing to delete
      return;
    }

    // Check if the head node needs to be deleted
    if (this.head.value === value) {
      this.head = this.head.next; // Update head to the next node
      return;
    }

    // Traverse the list to find the node to be deleted and its previous node
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        // Skip the node to be deleted by updating current.next
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Search for a node with a given value in the linked list
  search(value) {
    let current = this.head;
    // Traverse the list and check for matching value
    while (current !== null) {
      if (current.value === value) {
        // Value found, return true
        return true;
      }
      current = current.next;
    }
    // Value not found, return false
    return false;
  }
}

module.exports = { LinkedList }; // Exports the class
