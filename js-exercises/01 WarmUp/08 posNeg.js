/* 
### Warmup-1 **-** posNeg

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Examples

- posNeg(1, -1, false) → true
- posNeg(-1, 1, false) → true
- posNeg(-4, -5, true) → true
*/

const posNeg = (num1, num2, negative) => {
  if (negative) return num1 < 0 && num2 < 0;
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) return true;
  return false;
};
console.log(posNeg(-1, -1, true));
console.log(posNeg(-1, 1, false));
console.log(posNeg(-4, -5, true));
