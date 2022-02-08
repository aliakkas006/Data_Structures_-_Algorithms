/* 
# Queue Data Structure:
1.First In First Out => FIFO
*/

class Queue{
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        this.queue.shift();
    }
}

const data = new Queue();

console.log(data.queue);
data.enqueue('Ali');
console.log(data.queue);
data.enqueue('Arif');
console.log(data.queue);
data.enqueue('Amirul');
console.log(data.queue);
data.enqueue('Salman');
console.log(data.queue);
data.enqueue('Zidan');
console.log(data.queue);

data.dequeue();
console.log(data.queue);
data.dequeue();
console.log(data.queue);
data.dequeue();
console.log(data.queue);
data.dequeue();
console.log(data.queue);
data.dequeue();
console.log(data.queue);