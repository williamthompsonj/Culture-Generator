"use strict";
// define event factory
let eventFactory = {local_vals:{pronoun:""}};

// pull event data from JSON
eventFactory.GetActivity = function(level = "", qty = 1)
{
  let factoryResult = new Set();
  let result;

  if (level == "")
  {
    level = Object.keys(
      window.dataset["events"].incident
    ).randomValue();
  }

  for (let i = 0; qty != factoryResult.size; i++)
  {
    // ensure we never infinite loop
    if (i > 2*qty)
    {
      break;
    }

    switch (level)
    {
      case "major":
        result = window.dataset["events"].incident.major.randomValue();
        break;

      case "moderate":
        result = window.dataset["events"].incident.moderate.randomValue();
        break;

      case "minor":
        result = window.dataset["events"].incident.minor.randomValue();
        break;

      case "mundane":
      default:
        result = window.dataset["events"].incident.mundane.randomValue();
        break;
    }

    // generate a random stable pronoun each cycle
    if (Math.range(0,1))
    {
      this.local_vals["pronoun"] = "his";
    }
    else
    {
      this.local_vals["pronoun"] = "her";
    }

    // loop while { or [ exists in our string
    while (result.indexOf("{") != -1 || result.indexOf("[") != -1)
    {
      if (result.indexOf("{") != -1)
      {
        // step 1: resolve all choices first
        result = eventFactory.ResolveChoice(result);
        continue;
      }

      // step 2: resolve commands
      result = eventFactory.ResolveCommand(result);
    }

    // step 3: normalize white space
    result = result.replace(/\s+/g, " ").trim();

    // step 4: Title case the first word and add a period
    let sentence = result.split(" ");
    sentence[0] = sentence[0].toTitleCase();
    result = sentence.join(" ") + ".";

    // step 5: fix known grammar issues
    result = result.replace("s's", "s'");
    result = result.replace(/ ([\.\,\;\:\?\!])/g, "$1");
    result = result.replace("'.", ".'");
    result = result.replace('".', '."');
    result = result.replace(/([\u0001-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u00bf])\./g, "$1");

    // wolfs -> wolves
    result = result.replace(/lfs([\u0001-\u0040\u005b-\u0060\u007b-\u00bf])/g, "lves$1");

    // wifes, lifes, knifes -> wives, lives, knives
    result = result.replace(/([wln])ifes([\u0001-\u0040\u005b-\u0060\u007b-\u00bf])/g, "$1ives$2");

    // save results (unique entries only because it's a Set)
    if (result.length > 1)
    {
      factoryResult.add(result);
    }
  }

  result = Array.from(factoryResult).join("\r\n<br>\r\n<br>");

  return result;
};

eventFactory.ResolveChoice = function(data)
{
  // separate string into pieces
  let data_arr = data.split("{");

  // process tokens
  for (let i = 1; i != data_arr.length; i++)
  {
    let ending = data_arr[i].indexOf("}");

    // check for ending piece
    if (ending == -1)
    {
      continue;
    }

    // extract token from string
    let token = data_arr[i].substring(0, ending);

    // replace token with a value
    data_arr[i] = eventFactory.ResolveToken(token) + data_arr[i].substring(ending+1);
  }

  // put string back together
  data = data_arr.join("");

  return data;
};

eventFactory.ResolveCommand = function(data)
{
  // separate string into pieces
  let data_arr = data.split("[");

  // define all the vowels we know exist in our dataset
  let vowels = "aeiouáàȧâäăāãåấầẫảạæðéèêëěēềíìİîïīóòôöōõőồøơộœúùûüūũư";

  // process tokens
  for (let i = 1; i < data_arr.length; i++)
  {
    let ending = data_arr[i].indexOf("]");

    // check for ending piece
    if (ending == -1)
    {
      continue;
    }

    // extract token from string
    let token = data_arr[i].substring(0, ending).trim();
    ending = data_arr[i].substring(ending+1);

    let action = "", temp_ref = "";
    let has_action = false, has_ref = false;

    // extract value from token string
    if (token.indexOf("=") != -1)
    {
      has_action = true;
      action = token.substring(token.indexOf("=")+1).trim();
      token = token.substring(0, token.indexOf("=")).trim();
    }

    // extract reference name from token string
    if (token.indexOf(":") != -1)
    {
      has_ref = true;
      temp_ref = token.substring(token.indexOf(":")+1).trim();
      token = token.substring(0, token.indexOf(":")).trim();
    }

    if (token == "a/an")
    {
      let letter = ending.trimStart().substring(0, 1).toLowerCase();
      if ("[{".indexOf(letter) != -1)
      {
        token = "[a/an]";
      }
      else if (vowels.indexOf(letter) == -1)
      {
        token = "a";
      }
      else
      {
        token = "an";
      }
    }
    else if (token == "pronoun")
    {
      if (has_action)
      {
        // setter
        this.local_vals["pronoun"] = action;
        token = "";
      }
      else
      {
        // getter
        token = this.local_vals["pronoun"];
      }
    }
    else if (token == "var")
    {
      if (has_action)
      {
        // setter
        if (temp_ref == "")
        {
        // default value
          temp_ref = "_";
        }
        token = "";
        this.local_vals[temp_ref] = action;
      }
      else if (has_ref)
      {
        // getter
        if (Object.hasOwn(this.local_vals, temp_ref))
        {
          token = this.local_vals[temp_ref];
        }
        else
        {
          console.log("unknown: this.local_vals['" + temp_ref + "']");
          token = "";
        }
      }
      else
      {
        token = "";
      }
    }
    else if (token == "token" && has_action)
    {
      // resolve token from command
      token = eventFactory.ResolveToken(action);
    }
    else if (token == "!")
    {
      // capitalize following word
      ending = ending.trimStart();
      if (ending.length == 0)
      {
        token = "";
      }
      else if ("[{".indexOf(ending.substring[0]) == -1)
      {
        // found word
        token = "";
        ending = ending.split(" ");
        ending[0] = ending[0].toTitleCase();
        ending = ending.join(" ");
      }
      else
      {
        // can't find word, put it back
        token = "[!]";
      }
    }

    // put string back together
    data_arr[i] = token + ending;
  }

  // put string back together
  data = data_arr.join("");

  return data;
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
  if (token.length == 0)
  {
    return "";
  }

  // begins with # means number range
  if (token[0] == "#")
  {
    // random number range in format:
    // #0-123
    let arr = token.substring(1).split("-");
    let ending = arr[1].replace(/^[0-9]+/g, "").trimStart();
    arr[0] = arr[0].replace(/[^0-9]+/g, "");
    arr[1] = arr[1].substring(0, arr[1].length-ending.length);
    arr[1] = arr[1].replace(/[^0-9]+/g, "");
    return Math.range(Number(arr[0]), Number(arr[1])) + ending;
  }

  // extract string from quote wrapper and return
  if (token[0] == '"' || token[0] == "'")
  {
    token = token.substring(1).replace(/['"]$/g, "");
    return token;
  }

  // not a look-up, return as literal string
  if (token.indexOf(".") == -1)
  {
    return token;
  }

  // get token pieces
  let parts = token.split(".");

  // start with events dataset
  let local_ref = this;
  let data_ref = window.dataset["events"];
  let last_ref = null; // last context for data_ref

  // cycle through each piece of token
  for (let i = 0; i != parts.length; i++)
  {
    // look for property in local object
    if (local_ref.hasOwnProperty(parts[i]))
    {
      // save last reference
      last_ref = local_ref;

      // move to next object in reference string
      data_ref = local_ref[parts[i]];

      // found what we came for
      continue;
    }

    // look for property in dataset
    if (data_ref.hasOwnProperty(parts[i]))
    {
      // retain last context to pass later
      last_ref = data_ref;

      // move to next object in reference string
      data_ref = data_ref[parts[i]];

      // found what we came for
      continue;
    }

    // check if anything will work
    if (parts[i] == "any")
    {
      // resolve object to member
      if (typeof data_ref == "object")
      {
        data_ref = data_ref[Object.keys(data_ref).randomValue()];
      }

      // resolve array to value
      if (Array.isArray(data_ref))
      {
        data_ref = data_ref.randomValue();
      }

      return data_ref.toString();
    }

    break;
  }

  // we have resolved the token to a specific thing
  if (typeof data_ref == "function")
  {
    // it's a function, pass token
    return data_ref(token);
  }
  else if (Array.isArray(data_ref))
  {
    // it's an array, get random value
    return data_ref.randomValue();
  }
  else if (last_ref != null)
  {
    // it's an object, get the string version of it
    return data_ref.toString();
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
      data_name = "tolkien";
      break;

    case "raw":
      if (Object.hasOwn(window.dataset["markov_names"], data_name[2]))
      {
        return window.dataset["markov_names"][data_name[2]].randomValue();
      }
      break;

    default:
      data_name = data_name[1];
      break;
  }

  // check if data_name exists
  if (Object.hasOwn(window.dataset["markov_names"], data_name))
  {
    return markovNames.name_list(1, data_name);
  }

  // try to fuzzy match
  let result = [];

  // check if partial name, select randomly from matches
  Object.keys(window.dataset["markov_names"]).forEach(elem => {
    if (elem.indexOf(data_name) != -1)
    {
      result.push(elem);
    }
  });

  if (result.length > 0)
  {
    markovNames.name_list(1, result.randomValue());
  }

  // give up, return random
  return markovNames.name_list(1);
};