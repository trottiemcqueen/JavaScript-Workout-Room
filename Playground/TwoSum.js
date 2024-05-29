//TwoSum brute force

const numbers = [3, 6, 7, 9, 2, 11];
const targetNumber = 20;

const findTwoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFinds = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFinds === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

console.log(findTwoSum(numbers, targetNumber));


const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

const findTwoSums = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
   for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

console.log(findTwoSums(numsArray, targetToFind));