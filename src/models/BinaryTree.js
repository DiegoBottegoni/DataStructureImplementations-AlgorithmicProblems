const { TreeNode } = require('./TreeNode.js'); // Import class

class BinaryTree {
    constructor() {
        // Initializes the root node of the binary tree to null
        this.root = null;
    }

    // Insert a node with a given value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            // If the tree is empty, make the new node the root
            this.root = newNode;
        } else {
            // Otherwise, call the helper function to insert recursively
            this._insertNode(this.root, newNode);
        }
    }

    // Helper function for recursive insertion
    _insertNode(node, newNode) {
            if (newNode.value < node.value) {
            // If the new node's value is less, insert it in the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            // If the new node's value is greater or equal, insert it in the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Search for a node with a given value in the binary tree (recursive)
    search(value) {
        return this._searchNode(this.root, value);
    }

    // Helper function for recursive search
    _searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            // If the value is less, search in the left subtree
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            // If the value is greater, search in the right subtree
            return this._searchNode(node.right, value);
        } else {
            // If the values match, the value is found
            return true;
        }
    }

    // In-order traversal: visit left subtree, root, right subtree
    inOrderTraverse() {
        const result = [];
        this._inOrderTraverseNode(this.root, result);
        return result;
    }

    // Helper function for in-order traversal
    _inOrderTraverseNode(node, result) {
        if (node !== null) {
            this._inOrderTraverseNode(node.left, result); // Visit left subtree
            result.push(node.value); // Visit root node
            this._inOrderTraverseNode(node.right, result); // Visit right subtree
        }
    }

    // Pre-order traversal: visit root, left subtree, right subtree
    preOrderTraverse() {
        const result = [];
        this._preOrderTraverseNode(this.root, result);
        return result;
    }

    // Helper function for pre-order traversal (recursive)
    _preOrderTraverseNode(node, result) {
        if (node !== null) {
            result.push(node.value); // Visit root node
            this._preOrderTraverseNode(node.left, result); // Visit left subtree
            this._preOrderTraverseNode(node.right, result); // Visit right subtree
        }
    }

    // Post-order traversal: visit left subtree, right subtree, root
    postOrderTraverse() {
        const result = [];
        this._postOrderTraverseNode(this.root, result);
        return result;
    }

    // Helper function for post-order traversal (recursive)
    _postOrderTraverseNode(node, result) {
        if (node !== null) {
            this._postOrderTraverseNode(node.left, result); // Visit left subtree
            this._postOrderTraverseNode(node.right, result); // Visit right subtree
            result.push(node.value); // Visit root node
        }
    }
}

module.exports = { BinaryTree }; // Exports the class