// Returns String With Title Case
String.prototype.toTitleCase = function()
{
  // lowercase and normalize white space
  let c = this.normalize().replace(/\s+/g, ' ').trim().toLowerCase().split(' ');

  // uppercase the first letter
  for(var i = 0; i != c.length; i++)
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

  // return results
  return c.join(' ');
}