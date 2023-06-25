// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Adapted from https://donjon.bin.sh/name/markov.html
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/
'use strict';
let markovNames = {};
markovNames.chain_cache = {};

markovNames.names_from_select = function(qty = 100)
{
  this.more_names(qty, util.getValue('#markov_select'));
};

markovNames.more_names = function(qty = 100, data_name = '')
{
  if (qty < 1)
    return;

  if (data_name == '')
    data_name = Object.keys(window.dataset['training_data']).randomValue();

  var names = Array.from(this.name_list(data_name, qty));
  util.setValue("#output", 'Source: ' + data_name + '<br><br>' + names.join(", "));
};

markovNames.name_list = function(data_name, qty)
{
  // save names as a unique set
  let names = new Set();
  let counter = 0;
  let max = qty * 1.5;

  while (names.size < qty)
  {
    counter++;
    names.add(
      this.formatName(
        this.generate_name(data_name)
    ));

    // prevent never-ending loop
    if (counter > max)
      break;
  }
  return names;
};

markovNames.generate_name = function(data_name)
{
  let cache = this.markov_chain(data_name);

  if (cache)
  {
    return this.markov_name(cache);
  }
  else
  {
    return "";
  }
};

markovNames.markov_chain = function(data_name)
{
  var cache = this.chain_cache[data_name];
  if (cache)
    return cache;

  let names = window.dataset['training_data'][data_name];
  cache = this.construct_chain(names);

  // check we have a name_set and cache
  if (!names || !names.length || !cache)
  {
    return false;
  }

  this.chain_cache[data_name] = cache;
  return cache;
};

markovNames.construct_chain = function(names)
{
  let chain = {};

  for (let c = 0; c < names.length; c++)
  {
    // split name into parts if it has white space
    let parts = names[c].split(/\s+/);
    chain = this.incr_chain(chain, "parts", parts.length);

    for (let f = 0; f < parts.length; f++)
    {
      var word = parts[f];
      var chunks = this.word_split(word);
      var e = chunks.shift();

      // capture word length and starting chunks
      chain = this.incr_chain(chain, "name_len", word.length);
      chain = this.incr_chain(chain, "initial", e);

      while (chunks.length)
      {
        let h = chunks.shift();
        chain = this.incr_chain(chain, e, h);
        e = h
      }
    }
  }

  return this.scale_chain(chain);
};

// break apart word at vowels or 2 characters
markovNames.word_split = function(word)
{
  // https://www.30secondsofcode.org/js/s/remove-accents/
  //
  // Use String.prototype.normalize() to convert the string to a normalized Unicode format
  // Use String.prototype.replace() to replace diacritical marks in the given Unicode
  // range by empty strings
  let safe = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // isolate vowels
  safe = safe
    .replaceAll('a', ' a ')
    .replaceAll('e', ' e ')
    .replaceAll('i', ' i ')
    .replaceAll('o', ' o ')
    .replaceAll('u', ' u ')
    .replaceAll('y', ' y ');

  // normalize white space and split
  safe = safe
    .trim()
    .replaceAll('  ', ' ')
    .split(' ');

  var result = [];

  // take 1 or 2 consonants at a time
  for (let i = 0; i < safe.length; i++)
  {
    safe[i] = safe[i].trim();
    while (safe[i].length > 0)
    {
      let len = 1;

      if (safe[i].length > 1)
        len = 2;

      let str = word.substring(0, len);
      if (str.length > 0)
        result.push(str.trim());
      safe[i] = safe[i].substring(len);
      word = word.substring(len);
    }
  }
  return result;
};

markovNames.incr_chain = function(chain, part, len)
{
  // check if chain part exists
  if (chain[part])
  {
    // check how many times
    if (chain[part][len])
    {
      chain[part][len]++;
    }
    else
    {
      chain[part][len] = 1;
    }
  }
  else
  {
    // chain doesn't exist, make it
    chain[part] = {};
    chain[part][len] = 1;
  }
  return chain;
};

markovNames.scale_chain = function(chain)
{
  let a = {};

  Object.keys(chain).forEach(c =>
  {
    a[c] = 0;

    Object.keys(chain[c]).forEach(d =>
    {
      let e = Math.floor(Math.pow(chain[c][d], 1.3));
      chain[c][d] = e;
      a[c] += e
    })
  });

  chain.table_len = a;
  return chain;
};

markovNames.markov_name = function(cache)
{
  let a = this.select_link(cache, "parts");
  let c = [];

  for (let d = 0; d < a; d++)
  {
    let g = this.select_link(cache, "name_len");
    var e = this.select_link(cache, "initial");
    let f = e;

    while (f.length < g)
    {
      e = this.select_link(cache, e);

      if (!e) break;

      f += e
    }

    c.push(f)
  }

  return c.join(" ")
};

markovNames.select_link = function(cache, part)
{
  var c = cache.table_len[part];

  if (!c)
    return false;

  c = Math.floor(Math.random() * c);

  let d = Object.keys(cache[part]);
  let e = 0;

  for (let g = 0; g < d.length; g++)
  {
    let f = d[g];
    e += cache[part][f];

    if (e > c)
    return f;
  }
  return false;
};

// don't allow more than 2 of each letter in a row
markovNames.formatName = function(name)
{
  let str = name.charAt(0);
  for (let i = 1; i < name.length; i++)
  {
    let check = str.charAt(str.length-1);
    if (check != name.charAt(i) || check != name.charAt(i+1))
    {
        str = str + name[i];
    }
  }
  return str;
};