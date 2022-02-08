const numbers = [12, 17, 34, 65, 13, 18, 15, 65, 70];

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];    // do swap
            }
        }
    }

    return arr;
}

const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers);