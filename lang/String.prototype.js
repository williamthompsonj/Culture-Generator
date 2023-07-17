"use strict";
// Returns String With Title Case
String.prototype.toTitleCase = function(chars = "—-'—")
{
  // lowercase and normalize white space
  let c = this.normalize().replace(/\s+/g, ' ').trim().toLowerCase().split(' ');

  // uppercase the first letter
  for (var i = 0; i != c.length; i++)
  {
    if (c[i].length == 1)
    {
      c[i] = c[i].toUpperCase();
    }
    else
    {
      c[i] = c[i].slice(0, 1).toUpperCase() + c[i].slice(1);
    }
  };

  // turn into a string
  c = c.join(' ');

  // capitalize after special characters
  for (let i = 0; i < chars.length; i++)
  {
    let index = chars.charAt(i);

    if (c.indexOf(index) == -1)
      continue;

    c = c.split(index);
    for (let i = 1; i < c.length; i++)
    {
      c[i] = c[i].charAt(0).toUpperCase() + c[i].substring(1);
    }
    c = c.join(index);
  }

  // return results
  return c;
};