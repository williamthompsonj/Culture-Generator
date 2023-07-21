/**
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  Adapted from https://donjon.bin.sh/name/markov.html

  written and released to the public domain by drow <drow@bin.sh>
  http://creativecommons.org/publicdomain/zero/1.0/
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
**/
'use strict';
let markovNames = {};

markovNames.chain_cache = {};

markovNames.names_from_select = function(qty = 100)
{
  markovNames.more_names(qty, util.getValue('#markov_select'));
};

markovNames.more_names = function(qty = 20, data_name = '')
{
  if (qty < 1)
    return;

  if (util.getElem('#markov_select').options.length < 1)
  {
    util.getNameDatasets();
    return;
  }

  if (data_name == '')
  {
    data_name = Object.keys(window.dataset['training_data']).randomValue();
    util.setValue('#markov_select', data_name);
  }

  var names = markovNames
    .name_list(data_name, qty)
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

    str = markovNames.generate_name(data_name);

    if (str)
    names.add(
      markovNames.formatName(
        str
    ));
  }

  // return an array so it's easy to use
  return Array.from(names);
};

markovNames.generate_name = function(data_name)
{
  let cache = markovNames.markov_chain(data_name);

  if (cache)
  {
    return markovNames.markov_name(cache);
  }

  return "";
};

markovNames.markov_chain = function(data_name)
{
  var cache = markovNames.chain_cache[data_name];
  if (cache)
    return cache;

  let names = window.dataset['training_data'][data_name];
  cache = markovNames.construct_chain(names);

  // check we have a name_set and cache
  if (!names || !names.length || !cache)
  {
    return false;
  }

  markovNames.chain_cache[data_name] = cache;
  return cache;
};

markovNames.construct_chain = function(names)
{
  let chain = {};

  for (let c = 0; c < names.length; c++)
  {
    // split name into pieces if it has white space
    let pieces = names[c].split(/\s+/);
    chain = markovNames.incr_chain(chain, "parts", pieces.length);

    for (let f = 0; f < pieces.length; f++)
    {
      var word = pieces[f];

      // capture word length
      chain = markovNames.incr_chain(chain, "name_len", word.length);

      // determine single and double starting letters
      var chunks = markovNames.word_split(word);
      var e = chunks.shift();

      chain = markovNames.incr_chain(chain, "initial", e);

      if (e.length > 1)
        chain = markovNames.incr_chain(chain, "initial", e[0]);

      while (chunks.length)
      {
        let h = chunks.shift();
        chain = markovNames.incr_chain(chain, e, h);

        // chunks with more than 1 character
        if (e.length > 1)
        {
          for (let i = 0; i < e.length-1; i++)
          {
            chain = markovNames.incr_chain(chain, e[i], e[i+1]);
          }

          chain = markovNames.incr_chain(chain, e[e.length-1], h);

          if (h.length > 1)
          {
            chain = markovNames.incr_chain(chain, e[e.length-1], h[0]);
          }
        }

        // move to next chunk
        e = h
      }

      if (e.length > 1)
      {
        for (let i = 0; i < e.length-1; i++)
        {
          chain = markovNames.incr_chain(chain, e[i], e[i+1]);
        }
      }
    }
  }

  return markovNames.scale_chain(chain);
  //return chain;
};

// break word at vowels or 2 characters
markovNames.word_split = function(word)
{
  // normalize, lowercase, reduce white space, trim
  word = word
    .normalize()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

  // extract everything not a consonant
  let single = Array.from(
    new Set(
      Array.from(
        word.replace(/[b-df-hj-np-tv-xz]+/g, '')
      )
    )
  );

  var result = [];

  while (word.length > 0)
  {
    // check if letter is not a consonant
    if (single.indexOf(word[0]) != -1)
    {
      result.push(word[0]);
      word = word.substring(1);
      continue;
    }

    // check second letter
    if (single.indexOf(word[1]) != -1)
    {
      result.push(word[0]);
      word = word.substring(1);
    }
    else
    {
      result.push(word.substring(0, 2));
      word = word.substring(2);
    }
  }

  return result;
};

markovNames.incr_chain = function(chain, piece, len)
{
  // check if chain piece exists
  if (chain[piece])
  {
    // check how many times
    if (chain[piece][len])
    {
      chain[piece][len]++;
    }
    else
    {
      chain[piece][len] = 1;
    }
  }
  else
  {
    // chain doesn't exist, make it
    chain[piece] = {};
    chain[piece][len] = 1;
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
  let pieces = markovNames.select_link(cache, "parts");
  let c = [];

  for (let d = 0; d < pieces; d++)
  {
    let name_len = markovNames.select_link(cache, "name_len");
    if (name_len > 2)
      name_len--; // reduce total length due to consonant pairs

    var letters = markovNames.select_link(cache, "initial");
    let word = letters;

    while (word.length < name_len)
    {
      letters = markovNames.select_link(cache, letters);

      if (!letters)
        break;

      word += letters;
    }

    c.push(word);
  }
  c = String(c.join(" "));

  // ensure it's at least 2 characters
  if (c.length > 1)
    return c;

  // too short, try again
  return markovNames.markov_name(cache);
};

markovNames.select_link = function(cache, piece)
{
  var c = cache.table_len[piece];

  if (!c)
    return false;

  c = Math.floor(Math.random() * c);

  let d = Object.keys(cache[piece]);
  let e = 0;

  for (let g = 0; g < d.length; g++)
  {
    let f = d[g];
    e += cache[piece][f];

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