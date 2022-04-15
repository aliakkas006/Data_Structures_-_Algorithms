// merge two array:
const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [6, 7, 8, 9, 10];
let mergeArr = [];

for (let i = 0; i < arr_1.length; i++) {
  mergeArr[i] = arr_1[i];
}

for (let i = 0; i < arr_2.length; i++) {
  mergeArr[i + arr_1.length] = arr_2[i];
}

// console.log(mergeArr);


// add the boundary elements of the two dimensional array:
const arr_2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i == 0 || j == 0 || i == 2 || j == 2) sum += arr_2d[i][j];
  }
}

// console.log(sum);
