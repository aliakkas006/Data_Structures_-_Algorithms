/*
# Stack Data Structure:
1.Last In First Out => LIFO 
*/

class Stack{
    constructor() {
        this.stack = [];
    }

    add(element) {
        this.stack.push(element);
    }

    remove() {
        this.stack.pop();
    }
}

const plates = new Stack();

console.log(plates.stack);
plates.add('Anis');
console.log(plates.stack);
plates.add('Arif');
console.log(plates.stack);
plates.add('Rakib');
console.log(plates.stack);
plates.add('Rifat');
console.log(plates.stack);
plates.add('Zidan');
console.log(plates.stack);

plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);