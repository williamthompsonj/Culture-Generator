"use strict";
// Returns value of random array element
Array.prototype.randomValue = function()
{
  return this[
    Math.floor(
      Math.random() * this.length
    )
  ];
};