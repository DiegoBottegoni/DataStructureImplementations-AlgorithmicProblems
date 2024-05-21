function isBST(node, min = null, max = null) {
    // Base case: If the node is null (empty tree), it's considered a valid BST
    if (node === null) return true;
  
    // Check if the current node's value violates BST properties:
    // - If a minimum value is set and the node's value is less than or equal to it (not allowed)
    // - If a maximum value is set and the node's value is greater than or equal to it (not allowed)
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
      // Node violates BST property, return false
      return false;
    }
  
    // Recursively check the left subtree:
    // - Pass the current node's value as the new maximum for the left subtree
    //   (values in the left subtree should be less than the parent)
    const leftValid = isBST(node.left, min, node.value);
  
    // Recursively check the right subtree:
    // - Pass the current node's value as the new minimum for the right subtree
    //   (values in the right subtree should be greater than the parent)
    const rightValid = isBST(node.right, node.value, max);
  
    // Return true only if both the left and right subtrees are valid BSTs
    return leftValid && rightValid;
  }
  
  module.exports = { isBST }; // Exports the function
  