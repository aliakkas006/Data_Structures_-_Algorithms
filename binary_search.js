/* 
 Binary search algorithm:
 1. numbers must be sorted either ascending order or descending order.
 2.first consider left, right and mid index of the array.
 3.left = first index,  right = array.length - 1, mid = (left + right) / 2  
 4.time complexity = log2 n (2 base logarithm n) ; here, n = total elements in array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const binarySearch = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === x)
            return mid;
        if (arr[mid] < x)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return -1;
}

const expectedIndex = binarySearch(numbers, 7);
console.log(expectedIndex);
