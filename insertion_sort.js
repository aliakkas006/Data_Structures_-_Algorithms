const numbers = [12, 17, 34, 65, 13, 18, 15, 65, 70];

const insertion_Sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  return nums;
};

const sortedNumbers = insertion_Sort(numbers);
console.log(sortedNumbers);