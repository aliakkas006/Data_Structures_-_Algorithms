class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserting a node:
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) return undefined;

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // searching a node:
  search(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let found = false;

    while (currentNode !== null && !found) {
      if (value < currentNode) currentNode = currentNode.left;
      else if (value > currentNode) currentNode = currentNode.right;
      else found = currentNode;
    }

    if (!found) return undefined;
    return found;
  }
}
