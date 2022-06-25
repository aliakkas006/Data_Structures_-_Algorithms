const numbers = [12, 17, 34, 65, 13, 18, 15, 65, 70];

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let index_min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index_min])
                index_min = j;
        }
        if (index_min !== i)
            arr[i,index_min] = arr[index_min,i]
    }

    return arr;
}

const sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers);