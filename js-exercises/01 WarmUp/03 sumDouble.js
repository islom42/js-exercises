"use strict";

/* 

Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples

- sumDouble(1, 2) → 3
- sumDouble(3, 2) → 5
- sumDouble(2, 2) → 8
*/
const sumDouble = (a, b) => {
  return a === b ? (a + b) * 2 : a + b
}
console.log(sumDouble(1, 3));
