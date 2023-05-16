"use strict";
Math.range = function(min = 0, max = 1, digits = 0)
{
  // use Number(num.toFixed(x)) as lazy rounding to x decimals
  if (min == max) return Number(max.toFixed(digits));
  return Number(Number((Math.random() * (max - min)) + min).toFixed(digits));
}