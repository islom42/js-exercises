/* 
Array-1 -- sameFirstLast
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

Examples

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true */

function sameFirstLast(nums) {
  return nums.length !== 0 && nums[0] === nums[nums.length - 1];
}

console.log(sameFirstLast([1, 2, 3]));
console.log(sameFirstLast([1, 2, 3, 1]));
