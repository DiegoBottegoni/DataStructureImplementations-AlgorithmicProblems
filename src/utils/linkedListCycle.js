function hasCycle(head) {
    // Initialize two pointers: slow and fast
    let slow = head;
    let fast = head;
  
    // Loop as long as 'fast' and 'fast.next' are not null
    while (fast !== null && fast.next !== null) {
      // Move slow pointer one step forward
      slow = slow.next;
      // Move fast pointer two steps forward
      fast = fast.next.next;
  
      // If slow and fast pointers ever meet, it indicates a cycle exists
      if (slow === fast) {
        return true;
      }
    }
  
    // If the loop finishes without slow and fast meeting, there's no cycle
    return false;
  }
  
  module.exports = { hasCycle }; // Exports the function
  