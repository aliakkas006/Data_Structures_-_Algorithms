const numbers = [12, 17, 34, 65, 13, 18, 15, 65, 70];

const linearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === x ) {
            return i;
        }
    }

    return -1
}

const expectedIndex = linearSearch(numbers, 15);
console.log(expectedIndex);
