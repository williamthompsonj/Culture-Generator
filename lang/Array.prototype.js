"use strict";
/**
  Returns value of random array element

  bitwise OR (|) coerces Number to 32-bit signed INT consistently faster
  than Math.floor() by 10-15%, order of precedence performs * before |
**/
Array.prototype.randomValue = function()
{
  return this[Math.random() * this.length | 0];
};