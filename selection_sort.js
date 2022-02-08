const numbers = [12, 17, 34, 65, 13, 18, 15, 65, 70];

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i])
                [arr[j], arr[i]] = [arr[i], arr[j]];    // do swap
        }
    }

    return arr;
}

const sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers);