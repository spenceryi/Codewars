/*
Convert number to reversed array of digits by emporio

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    // Convert the digit into a string, spread the letters into an array, reverse the array, and finally return the converted array back.
    return String(n).split('').reverse().map(numStr => +numStr);
  }