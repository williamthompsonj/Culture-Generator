"use strict";
// define event factory
let eventFactory = {};

// pull event data from JSON
eventFactory.GetActivity = function(level = "", qty = 1)
{
  let factoryResult = new Set();
  let temp_result;

  if (level == "")
  {
    level = Object.keys(
      window.dataset['events'].incident
    ).randomValue();
  }

  for (let i = 0; qty != factoryResult.size; i++)
  {
    // ensure we never infinite loop
    if (i > 2*qty) break;

    switch (level)
    {
      case "major":
        temp_result = window.dataset['events'].incident.major.randomValue();
        break;

      case "moderate":
        temp_result = window.dataset['events'].incident.moderate.randomValue();
        break;

      case "minor":
        temp_result = window.dataset['events'].incident.minor.randomValue();
        break;

      case "mundane":
      default:
        temp_result = window.dataset['events'].incident.mundane.randomValue();
        break;
    }

    // step 1: resolve variable actions
    temp_result = eventFactory.ResolveActivity(temp_result);

    // step 2: resolve articles [a/an]
    temp_result = eventFactory.ResolveArticles(temp_result);

    // step 3: normalize white space
    temp_result = temp_result.replace(/\s+/g, " ").trim();

    // step 4: Title case the first word
    let sentence = temp_result.split(" ");
    sentence[0] = sentence[0].toTitleCase();
    temp_result = sentence.join(" ") + ".";

    // known grammar issues that are easy to fix
    temp_result = temp_result.replace("wolfs", "wolves");
    temp_result = temp_result.replace("'.", ".'");
    temp_result = temp_result.replace('".', '."');
    temp_result = temp_result.replace("?.", "?");
    temp_result = temp_result.replace("!.", "!");

    // save results (unique entries only because it's a Set)
    if (temp_result.length > 1)
      factoryResult.add(temp_result);
  }

  temp_result = Array
    .from(factoryResult)
    .join("\r\n<br>\r\n<br>");

  return temp_result;
};

eventFactory.ResolveActivity = function(data)
{
  // separate string into pieces
  let data_arr = data.split("{");

  // process tokens
  for (let i = 1; i != data_arr.length; i++)
  {
    let ending = data_arr[i].indexOf("}");

    // check for ending piece
    if (ending == -1) continue;

    // extract token from string
    let token = data_arr[i].substring(0, ending);

    // replace token with a value
    data_arr[i] = eventFactory.ResolveToken(token)
      + data_arr[i].substring(ending+1);
  }

  // put string back together
  data = data_arr.join("");

  // check if we need to resolve more tokens
  if (data.indexOf("{") != -1 && data.indexOf("}") != -1)
    data = eventFactory.ResolveActivity(data);

  return data;
};

eventFactory.ResolveArticles = function(data)
{
  // split everywhere we need to determine if it's A or AN
  let arr = data.split("[a/an]");
  let vowels = "aeiouáàȧâäăāãåấầẫảạæðéèêëěēềíìİîïīóòôöōõőồøơộœúùûüūũư";

  // cycle through the pieces, skip first one
  for (var i = 1; i < arr.length; i++)
  {
    arr[i] = arr[i].trimStart();
    let letter = arr[i].substring(0, 1).toLowerCase();

    if (vowels.indexOf(letter) == -1)
      arr[i] = "a " + arr[i];
    else
      arr[i] = "an " + arr[i];
  }

  return arr.join("");
}

eventFactory.ResolveToken = function(token)
{
  // check if we have multiple choice token
  if (token.indexOf("|") != -1)
  {
    // random multiple choice options
    token = token.split("|").randomValue();
  }

  // ensure white space isn't present on either end of string
  token = token.trim();

  // check for empty token
  if (token.length == 0) return "";

  // begins with # means number range
  if (token[0] == "#")
  {
    // random number range in format:
    // #0-123
    let arr = token.substring(1).split("-");
    let leftover = arr[1].replace(/^[0-9]+/g, "");
    arr[1] = arr[1].substring(0, arr[1].length-leftover.length);
    return Math.range(Number(arr[0]), Number(arr[1]))+leftover;
  }

  // value in quotes or no period present
  if (token[0] == '"' || token[0] == "'" || token.indexOf(".") == -1)
  {
    return token;
  }

  // get token pieces
  let parts = token.split(".");

  // start with events dataset
  let local_ref = this;
  let here_ref = window.dataset['events'];
  let last_ref = null; // last context for here_ref

  // cycle through each piece of token
  for (let i = 0; i != parts.length; i++)
  {
    // check if random
    if (parts[i] == "random")
    {
      // resolve object to member
      if (typeof here_ref == "object")
        here_ref = here_ref[Object.keys(here_ref).randomValue()];

      // resolve array to value
      if (Array.isArray(here_ref))
        here_ref = here_ref.randomValue();

      return here_ref.toString();
    }

    // look for property in local object
    if (local_ref.hasOwnProperty(parts[i]))
    {
      // save last reference
      last_ref = local_ref;

      // move to next object in reference string
      here_ref = local_ref[parts[i]];

      // don't check dataset if found locally
      continue;
    }

    // look for property in dataset
    if (here_ref.hasOwnProperty(parts[i]))
    {
      // retain last context to pass later
      last_ref = here_ref;

      // move to next object in reference string
      here_ref = here_ref[parts[i]];

      // don't keep checking forever
      continue;
    }

    break;
  }

  // we have resolved the token to a specific thing
  if (typeof here_ref == "function")
  {
    // it's a function, pass correct context
    return here_ref(token);
  }
  else if (Array.isArray(here_ref))
  {
    // it's an array, get random value
    return here_ref.randomValue();
  }
  else if (last_ref != null)
  {
    // it's an object, get the string version of it
    return here_ref.toString();
  }

  // doesn't resolve, return original token
  return token;
};

eventFactory.markov_names = function(data_name)
{
  data_name = data_name.split(".");

  // check for special names
  switch (data_name[1])
  {
    case "any":
      return markovNames.name_list(1);
      break;

    case "hobbit":
    case "lotr":
      data_name = "tolkienesque_forenames";
      break;

    case "raw":
      if (Object.hasOwn(window.dataset['markov_names'], data_name[2]))
        return window.dataset['markov_names'][data_name[2]].randomValue();
      break;

    default:
      data_name = data_name[1];
      break;
  }

  // check if it data_name exists
  if (Object.hasOwn(window.dataset['markov_names'], data_name))
    return markovNames.name_list(1, data_name);

  // prepare for fuzzy matching
  let result = [];

  // check if partial name, select randomly from matches
  Object.keys(window.dataset['markov_names']).forEach(elem => {
    if (elem.indexOf(data_name) != -1)
      result.push(elem);
  });

  if (result.length > 0)
    markovNames.name_list(1, result.randomValue());

  // give up, return random
  return markovNames.name_list(1);
};