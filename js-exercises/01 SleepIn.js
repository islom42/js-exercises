"use strict";
/* The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. 
Return true if we sleep in.
    
Test case
  sleepIn(true, true) → true
  sleepIn(true, false) → false
  sleepIn(false, true) → true
 */

const sleepIn = (weekday, vacation) => {
  return (!weekday || vacation )
}
console.log(sleepIn(true, true)); // true
console.log(sleepIn(true, false)); // false
console.log(sleepIn(false, true)); // true


