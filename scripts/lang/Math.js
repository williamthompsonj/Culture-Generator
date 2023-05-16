"use strict";
Math.range = function(min = 0, max = 1, precision = 0)
{
  if (min == max) return max.toFixed(precision);
  return Number((Math.random() * (max - min)) + min).toFixed(precision);
}