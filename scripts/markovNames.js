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

  if (util.getElem('#markov_select').options.length < 1)
    util.getNameDatasets();

  if (data_name == '')
  {
    data_name = Object.keys(window.dataset['training_data']).randomValue();
    util.setValue('#markov_select', data_name);
  }

  var names = Array
    .from(
      this.name_list(data_name, qty)
    )
    .join(", ")
    .toTitleCase();

  util.setValue("#output",
    'Source: '
    + data_name.replaceAll('_', ' ').toTitleCase()
    + '<br><br>'
    + names
  );
};

markovNames.name_list = function(data_name, qty)
{
  // save names as a unique set
  let names = new Set();
  let counter = 0;
  let max = qty * 2;
  let str = '';

  while (names.size < qty)
  {
    // prevent never-ending loop
    if (counter > max)
      break;

    counter++;

    str = this.generate_name(data_name);

    if (str)
    names.add(
      this.formatName(
        str
    ));
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

  return "";
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
  // normalize, make lowercase, normalize white space
  word = word
    .normalize()
    .toLowerCase()
    .trim()
    .replace(/\s\s+/g, ' ');

  // make copy of word
  let safe = String(word);

  // isolate everything that's not normal alphabet except vowels
  let c = safe.replace(/[b-df-hj-np-tv-xz]+/g, '');
  for (let i = 0; i < c.length; i++)
  {
    safe = safe.replaceAll(c.charAt(i), ' '+c.charAt(i)+' ');
  }

  // normalize white space and split
  safe = safe
    .trim()
    .replace(/\s\s+/g, ' ')
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
      result.push(str);

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
  let parts = this.select_link(cache, "parts");
  let c = [];

  for (let d = 0; d < parts; d++)
  {
    let name_len = this.select_link(cache, "name_len");
    var chunk = this.select_link(cache, "initial");
    let word = chunk;

    while (word.length < name_len)
    {
      chunk = this.select_link(cache, chunk);

      if (!chunk)
        break;

      word += chunk;
    }

    c.push(word);
  }
  c = String(c.join(" "));

  // ensure it's at least 2 characters
  if (c.length > 1)
    return c;

  return this.markov_name(cache);
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