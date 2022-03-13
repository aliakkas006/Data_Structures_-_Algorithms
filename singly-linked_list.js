// create a node:
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// travarse on linked list:
const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
};

// different operation on linked list:
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // added a node at the end of the list and added data to it:
  add(data) {
    const node = new Node(data);
    let current;

    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
    // printLinkedList(node);
  }

  // inserted node:
  insert(data) {
    const node = new Node(data);

    if (this.head === null) return node;

    let current = this.head;

    while (node.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  // remove a node from the specified location:
  removenode(node) {
    if (node === this.head) {
      this.head = node.next;
      return this.head;
    }

    let current = this.head;

    while (current !== null) {
      if (current.next === node) break;
      current = current.next;
    }

    if (current === null) return this.head;

    current.next = node.next;
  }
}

const ll = new LinkedList();

// A -> B -> C -> D -> E



