"use strict";
Math.range = function(min = 0, max = 1)
{
  if (min == max) return max;
  return (Math.random() * (max - min)) + min;
}