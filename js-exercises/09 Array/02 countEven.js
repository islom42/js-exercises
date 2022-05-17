/* Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

Examples

- countEvens([2, 1, 2, 3, 4]) → 3
- countEvens([2, 2, 0]) → 3
- countEvens([1, 3, 5]) → 0 */

const countEvens = (arr) => {
  let result = 0;
  arr.map((num) => {
    if (num % 2 === 0) result++;
  });
  return result;
};
console.log(countEvens([2, 1, 2, 3, 4]));
console.log(countEvens([2, 2, 0]));
console.log(countEvens([1, 3, 5]));
