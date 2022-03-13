// create a node:
class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert node at last from the linkedlist:
  insertLast(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }

    // list is empty
    this.head = this.tail = newNode;
    return newNode;
  }

  // insert node at first from the linkedlist:
  insertFirst(value) {
    this.length++;
    const newNode = new Node(value);

    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  // remove node at last from the linkedlist:
  removeLast() {
    if (this.tail) {
      this.length--;
      const removedTail = this.tail;
      this.tail = this.tail.previous;

      if (this.tail) this.tail.next = null;
      else this.head = null;

      return removedTail;
    }
    return undefined;
  }

  // remove node at last from the linkedlist:
  removeFirst() {
    if (this.head) {
      this.length--;
      const removeHead = this.head;
      this.head = this.head.next;

      if (this.head) this.head.previous = null;
      else this.tail = null;
      return removeHead;
    }
    return undefined;
  }

  // insert at specific index:
  insertIndex(value, index) {
    if (index >= this.length) throw new Error('Insert index out of boubs!');

    if (index === 0) return this.insertFirst(value);

    this.length++;
    let currentNode = this.head;

    for (let i = 0; i < index; i++) currentNode = currentNode.next;

    const previousNode = currentNode.previous;
    const newNode = new Node(value);
    newNode.next = currentNode;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    currentNode.previous = newNode;

    return newNode;
  }

  // remove at specific index:
  removeIndex(index) {
    if (index >= this.length)
      throw new Error('Remove index out of bounds!');
    
    if (index === 0)
      return this.removeFirst();
    
    this.length--;
    let currentNode = this.head;
    for (let i = 0; i < index; i++)
      currentNode = currentNode.next;
    
    const previousNode = currentNode.previous;
    const nextNode = currentNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    return currentNode;
  }

  // print the LinkedList:
  printDoublyLinkedList() {
    let current = this.head;
    while (current) {
      // console.log(current.previous?.value, current.value, current.next?.value);
      console.log(current.value);
      current = current.next;
    }
  }
}

const instance = new DoublyLinkedList();

instance.insertLast('7');
instance.insertLast('8');
instance.insertLast('9');

instance.insertFirst('6');

// instance.removeLast();
// instance.removeFirst();
instance.printDoublyLinkedList();
