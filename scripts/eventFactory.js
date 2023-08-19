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
    level = ["mundane", "minor", "moderate", "major"].randomValue();
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

    // replace known grammar issues
    temp_result = temp_result.replace("wolfs", "wolves");
    temp_result = temp_result.replace("?.", "?");
    temp_result = temp_result.replace('".', '."');

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
  let vowels = ["a", "e", "i", "o", "u"];

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

  // start with events object
  let local_ref = window.dataset['events'];
  let last_ref; // last context for local_ref

  // cycle through each piece of token
  for (let i = 0; i != parts.length; i++)
  {
    // check if random
    if (parts[i] == "random")
    {
      // resolve object to member
      if (local_ref != null && typeof local_ref == "object")
        local_ref = local_ref[Object.keys(local_ref).randomValue()];

      // resolve array to value
      if (Array.isArray(local_ref))
        local_ref = local_ref.randomValue();

      return local_ref.toString();
    }

    // look for property in object
    if (local_ref.hasOwnProperty(parts[i]))
    {
      // retain last context to pass later
      last_ref = local_ref;

      // move to next object in reference string
      local_ref = local_ref[parts[i]];
    }
    else
    {
      // could not resolve token, return string
      return token;
    }
  }

  // we have resolved the token to a specific thing
  if (typeof local_ref == "function")
  {
    // it's a function, pass correct context
    return local_ref(last_ref);
  }
  else if (Array.isArray(local_ref))
  {
    // it's an array, get random value
    return local_ref.randomValue();
  }
  else if (local_ref != null && typeof local_ref == "object")
  {
    // it's an object, get the string version of it
    return local_ref.toString();
  }
};