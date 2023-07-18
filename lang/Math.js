"use strict";
Math.range = function(min = 0, max = 1, digits = 0)
{
  // use Number(num.toFixed(x)) as lazy rounding to x decimals
  if (min == max)
    return Number(
      max.toFixed(digits)
    );

  if (digits < 0)
  {
    return Number(
      min +
      (
        Math.random() * (max - min)
      )
    );
  }

  return Number(
    Number(
      min +
      (
        Math.random() * (max - min)
      )
    ).toFixed(digits)
  );

};