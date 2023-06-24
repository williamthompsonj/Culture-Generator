// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Shamelessly acquired and adapted from https://donjon.bin.sh/name/markov.html
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/
'use strict';
let markovNames = {};
markovNames.chain_cache = {};
markovNames.name_set = {};

markovNames.more_names = function(qty = 20, b = "")
{
  if (b == '')
    b = Object.keys(window.dataset['training_data']).randomValue();
  //b = 'tolkienesque_forenames';
  var a = this.name_list(b, qty);
  util.setValue("#output", 'Source: ' + b + '<br><br>' + a.join(", "));
};

markovNames.generate_name = function(b)
{
  let a;
  return (a = this.markov_chain(b)) ? this.markov_name(a) : "";
};

markovNames.name_list = function(b, a)
{
  this.name_set[b] = window.dataset['training_data'][b];
  let c = [];
  for (let d = 0; d < a; d++)
  {
    c.push(
      this.formatName(
        this.generate_name(b)
    ));
  }
  return c;
};

markovNames.markov_chain = function(b)
{
  var a;
  if (a = this.chain_cache[b]) return a;

  let c;
  if ((c = this.name_set[b]) && c.length && (a = this.construct_chain(c)))
    return this.chain_cache[b] = a

  return false
};

markovNames.construct_chain = function(b)
{
  let a = {};

  for (let c = 0; c < b.length; c++)
  {
    let g = b[c].split(/\s+/);
    a = this.incr_chain(a, "parts", g.length);

    for (let f = 0; f < g.length; f++)
    {
      var d = g[f];
      var e = d.charAt(0);
      a = this.incr_chain(a, "name_len", d.length);
      a = this.incr_chain(a, "initial", e);

      for (d = d.substr(1); 0 < d.length;)
      {
        let h = d.charAt(0);
        a = this.incr_chain(a, e, h);
        d = d.substr(1);
        e = h
      }
    }
  }

  return this.scale_chain(a)
};

markovNames.incr_chain = function(b, a, c)
{
  b[a] ? b[a][c] ? b[a][c]++ : b[a][c] = 1 : (b[a] = {}, b[a][c] = 1);
  return b
};

markovNames.scale_chain = function(b)
{
  let a = {};

  Object.keys(b).forEach(c =>
  {
    a[c] = 0;

    Object.keys(b[c]).forEach(d =>
    {
      let e = Math.floor(Math.pow(b[c][d], 1.3));
      b[c][d] = e;
      a[c] += e
    })
  });

  b.table_len = a;
  return b
};

markovNames.markov_name = function(b)
{
  let a = this.select_link(b, "parts");
  let c = [];

  for (let d = 0; d < a; d++)
  {
    let g = this.select_link(b, "name_len");
    var e = this.select_link(b, "initial");
    let f = e;

    for (; f.length < g;)
    {
      e = this.select_link(b, e);

      if (!e) break;

      f += e
    }

    c.push(f)
  }

  return c.join(" ")
};

markovNames.select_link = function(b, a)
{
  var c = b.table_len[a];

  if (!c) return false;

  c = Math.floor(Math.random() * c);

  let d = Object.keys(b[a]);
  let e = 0;

  for (let g = 0; g < d.length; g++)
  {
    let f = d[g];
    e += b[a][f];

    if (e > c) return f;
  }
  return false;
};

// don't allow more than 2 of each letter in a row
markovNames.formatName = function(a)
{
  let b = a.charAt(0);
  for (let i = 1; i != a.length; i++)
  {
    let c = b.charAt(b.length-1);
    if (c != a.charAt(i) || c != a.charAt(i+1))
    {
        b = b + a[i];
    }
  }
  return b;
};