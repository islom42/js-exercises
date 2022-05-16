/* Given a string and a non-negative int n, return a larger string that is n copies of the original string.

Examples

- stringTimes('Hi', 2) → HiHi
- stringTimes('Hi', 3) → HiHiHi
- stringTimes('Hi', 1) → Hi */

const stringTimes = function (str, num) {
  return str.repeat(num);
};
console.log(stringTimes("Islom", 5));
