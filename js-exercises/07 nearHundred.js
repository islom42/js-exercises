"use strict";

/* nearHunderd
  Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number

  nearHundred(93) → true
  nearHundred(90) → true
  nearHundred(89) → false
*/

const nearHundred = (n) => {
  n = Math.abs(n);
  return 100 - n <= 10 || 200 - n <= 10;
};
console.log(nearHundred(93));
console.log(nearHundred(190));
console.log(nearHundred(89));
