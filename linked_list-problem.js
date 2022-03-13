// print node datam return it inside an array:
const linkedListValues = (head) => {
  const arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }
  console.log(arr);
  return arr;
};

// summation of the linked list values:
const sumList = (head) => {
  let sum = 0;
  let current = head;

  while (current !== null) {
    sum += current.data;
    current = current.next;
  }

  return sum;
};

// linked list find:
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.data === target) return true;
  }

  return false;
};

// get node values:
const getNodeValues = (head, index) => {
  let current = head;
  let count = 0;

  while (current !== null) {
    if (count === index) return current.data;
    count += 1;
    current = current.next;
  }

  return null;
};

// reverse linked list:
const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

// zipper list:
const zipperList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head1;
};
