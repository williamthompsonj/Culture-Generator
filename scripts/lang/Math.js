"use strict";
Math.range = function(min = 0, max = 1, decimals = 0)
{
  if (min == max) return max.toFixed(decimals);
  return ((Math.random() * (max - min)) + min).toFixed(decimals);
}