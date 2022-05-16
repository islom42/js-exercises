"use strict";

/* 
MonkeyTrouble
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

  Test case: 

  monkeyTrouble(true, true) → true
  monkeyTrouble(false, false) → true
  monkeyTrouble(true, false) → false
*/

const MonkeyTrouble = (aSmile, bSmile) => {
  return aSmile && bSmile || !(aSmile || bSmile)
}
console.log(MonkeyTrouble(true, true));
console.log(MonkeyTrouble(false, false));
console.log(MonkeyTrouble(true, false))

