"use strict";
// define event factory
let eventFactory = {local_vals:{}};

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

    // reset local variables and pronoun every cycle
    if (Math.range(0,1))
    {
      this.local_vals = {
        pronoun: "his", // 3rd person possessive
        pronoun2:"him", // 3rd person as object
        pronoun3:"he"   // 3rd person as subject
      };
    }
    else
    {
      this.local_vals = {
        pronoun: "her",
        pronoun2:"her",
        pronoun3:"she"
      };
    }

    // debugging thing, ignore
    this.track = false;

    // loop while { or [ exists in our string
    while (result.indexOf("{") != -1 || result.indexOf("[") != -1)
    {
      if (this.track) console.log(result);

      if (result.indexOf("{") != -1)
      {
        // step 1: resolve all choices
        result = eventFactory.ResolveChoice(result);
        continue;
      }

      // step 2: resolve commands
      result = eventFactory.ResolveCommand(result);
    }

    // step 3: normalize white space
    result = result.replace(/\s+/g, " ").trim();

    // step 4: Uppercase first letter and add a period
    let sentence = result.split(" ");
    sentence[0] = sentence[0].substring(0, 1).toUpperCase() + sentence[0].substring(1);
    result = sentence.join(" ") + ".";

    // step 5: fix known grammar issues
    result = result.replace(/([' ])i([' ])/g, "$1I$2");
    result = result.replace(/([' ])i([\.\:\;\!\?])/g, "$1I$2");
    result = result.replace(/^i([' ])/g, "I$1");
    result = result.replace("s's", "s'");
    result = result.replace(/ ([\.\,\:\;\?\!])/g, "$1");
    result = result.replace("'.", ".'");
    result = result.replace('".', '."');
    // uppercase first letter of new sentence
    result = result.replace(/([\.\!\?]) (.)/g, function(str, g1, g2){return g1+" "+g2.toUpperCase()});
    result = result.replace(/([\.\!\?])(["']) (.)/g, function(str, g1, g2, g3){return g1+g2+" "+g3.toUpperCase()});
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
    if (this.track) console.log(result);
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

    let action = "", temp_ref = "", token_numbers;
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

    // token has numbers on the end
    token_numbers = token.match(/[0-9]+$/);
    if (token_numbers != null)
    {
      token_numbers = Number(token_numbers[0]);
      token = token.replace(/[0-9]+$/, "");
    }
    else
    {
      token_numbers = "";
    }

    // resolve subcommand within the action
    if (action.indexOf("(") != -1)
    {
      let result = action.substring(action.indexOf("(") + 1);
      result = "[" + result.substring(0, result.indexOf(")")) + "]";
      result = eventFactory.ResolveCommand(result);
      action = action.substring(0, action.indexOf("(")) + result + action.substring(1+action.indexOf(")"));
    }

    // token is one or more !
    if (token.replace(/!/g, "") == "" && !token_numbers)
    {
      token_numbers = token.length;
      token = "!";
    }

    if (token == "token" && has_action)
    {
      // resolve token from command
      token = eventFactory.ResolveToken(action);
    }
    else if (token == "pronoun")
    {
      token = "pronoun" + token_numbers;
      if (has_action)
      {
        // setter
        this.local_vals[token] = action;
        token = "";
      }
      else
      {
        // getter
        token = this.local_vals[token];
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
          // found it
          token = this.local_vals[temp_ref];
        }
        else
        {
          // didn't find it, discard
          token = "";
        }
      }
      else
      {
        token = "";
      }
    }
    else if (token == "a/an")
    {
      let letter = ending.trimStart().substring(0, 1).toLowerCase();

      if (letter == "{" || (letter.length == 0 && i < data_arr.length-1))
      {
        // beside another command or choice
        token = "[a/an]";
      }
      else if (letter.length == 0)
      {
        // at end of string, discard
        token = "";
      }
      else if (vowels.indexOf(letter) == -1)
      {
        // not followed by vowel
        token = "a";
      }
      else
      {
        // followed by vowel
        token = "an";
      }
    }
    else if (token == "!")
    {
      // capitalize following word
      ending = ending.trimStart();
      let letter = ending.trimStart().substring(0, 1);
      token_numbers = token_numbers || 1;

      if (letter == "{" || (letter.length == 0 && i < data_arr.length-1))
      {
        // beside another command or choice
        token = "[" + "!".repeat(token_numbers) + "]";
      }
      else if (letter.length == 0)
      {
        // at end of string, discard
        token = "";
      }
      else
      {
        // found word, make title case
        token = "";
        ending = ending.split(" ");
        let c = 0;
        while (c < ending.length && c < token_numbers)
        {
          ending[c] = ending[c].toTitleCase();
          c++;
        }
        ending = ending.join(" ");
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

  if (this.track) console.log("token: " + token);

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

eventFactory.markov = function(data_name)
{
  data_name = data_name.split(".");
  let get_raw = false;

  // check for special names
  if (data_name[1] == "any")
  {
      data_name = Object.keys(window.dataset.markov_names).randomValue();
  }
  else if (data_name[1] == "raw" && data_name.length > 2)
  {
    data_name = data_name[data_name.length-1];
    get_raw = true;
  }
  else if (data_name[1] == "fantasy")
  {
    data_name = [
      "tolkien",
      "brythonic",
      "egyptian_deity",
      "french",
      "icelandic",
      "irish",
      "norse",
      "norwegian"
    ].randomValue();
  }
  else
  {
    data_name = data_name[1];
  }

  // check if data_name exists
  if (!Object.hasOwn(window.dataset.markov_names, data_name))
  {
    let result = [];

    // check if partial name match
    Object.keys(window.dataset.markov_names).forEach(elem => {
      if (elem.indexOf(data_name) != -1)
      {
        result.push(elem);
      }
    });

    if (result.length == 0)
    {
      // no matches, get random
      data_name = Object.keys(window.dataset.markov_names).randomValue();
    }
    else
    {
      // pick randomly from partial matches
      data_name = result.randomValue();
    }
  }

  if (get_raw)
  {
    return window.dataset.markov_names[data_name].randomValue();
  }

  return markovNames.name_list(1, data_name);
};