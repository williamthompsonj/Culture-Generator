"use strict";
// generate events based on conditions
let eventFactory = {
  activity: {},
  animal: {},
  behavior: {},
  characterization: {},
  disaster: {},
  food: {},
  incident: {},
  incident_creature: {},
  incident_natural: {},
  incident_people: {},
  incident_political: {},
  incident_religious: {},
  item: {},
  npc: {},
  occupation: {},
  race: {},
  relevance: {},
};

/*** FUNCTIONS ***/

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
        temp_result = eventFactory.incident.major.randomValue();
        break;

      case "moderate":
        temp_result = eventFactory.incident.moderate.randomValue();
        break;

      case "minor":
        temp_result = eventFactory.incident.minor.randomValue();
        break;

      case "mundane":
      default:
        temp_result = eventFactory.incident.mundane.randomValue();
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
    if (ending == -1)
    {
      // no ending piece, move on
      continue;
    }

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
    {
      arr[i] = "a " + arr[i];
    }
    else
    {
      arr[i] = "an " + arr[i];
    }
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
    // random number range in this format:
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

  // start with eventFactory object
  let this_obj = this;
  let last_obj; // last context for this_obj

  // cycle through each piece of token
  for (let i = 0; i != parts.length; i++)
  {
    // check if random
    if (parts[i] == "random")
    {
      // resolve object to member
      if (this_obj != null && typeof this_obj == "object")
        this_obj = this_obj[Object.keys(this_obj).randomValue()];

      // resolve array to value
      if (Array.isArray(this_obj))
        this_obj = this_obj.randomValue();

      return this_obj.toString();
    }
    
    // look for property in object
    if (this_obj.hasOwnProperty(parts[i]))
    {
      // retain last context to pass later
      last_obj = this_obj;

      // move to next object in reference string
      this_obj = this_obj[parts[i]];
    }
    else
    {
      // could not resolve token, return string
      return token;
    }
  }

  // we have resolved the token to a specific thing
  if (typeof this_obj == "function")
  {
    // it's a function, pass correct context
    return this_obj(last_obj);
  }
  else if (Array.isArray(this_obj))
  {
    // it's an array, get random value
    return this_obj.randomValue();
  }
  else if (this_obj != null && typeof this_obj == "object")
  {
    // it's an object, get the string version of it
    return this_obj.toString();
  }
};

/*** DATA ***/

eventFactory.activity.fart = [
  "answered the call of a wild burrito",
  "beeped their chocolate horn",
  "blasted a bad one",
  "booty belched",
  "bottom burped",
  "burped down below",
  "busted a nasty one",
  "busted ass",
  "busted wind from behind",
  "butt yodeled",
  "cut the cheese",
  "dropped a fart bomb",
  "experienced rectal turbulence",
  "farted",
  "floated air biscuits",
  "found a barking spider",
  "had a backend blowout",
  "had a trouser cough",
  "laid a rotten egg",
  "launched their butt bazooka",
  "let a bum blaster fly",
  "let loose a brown cloud",
  "let one rip",
  "made brown bubbles",
  "made their butt bark",
  "made their butt-butt go putt-putt",
  "made their fanny frog bark",
  "passed gas",
  "played the butt tuba",
  "produced anal audio",
  "produced flatulence",
  "put some tootie in their fruity",
  "released a brown cloud",
  "ripped a bad one",
  "ripped ass",
  "sent their cheeks a flapping",
  "sounded the sphincter {alarm|siren}",
  "stunk up the place",
  "tooted their butt horn",
  "tooted",
  "tore out a tear jerker",
  "wafted stale wind",
];

eventFactory.activity.mundane = [
  "{item.mundane} collecting",
  "archery",
  "bird watching",
  "boating",
  "bodyboarding",
  "camping",
  "canoeing",
  "canyoning",
  "cooking",
  "dancing",
  "diving",
  "dragon boat racing",
  "exercising",
  "fishing",
  "gardening",
  "hiking",
  "hunting",
  "ice climbing",
  "jogging",
  "jump roping",
  "kayaking",
  "lawn bowling",
  "mountaineering",
  "picnicking",
  "rafting",
  "riding",
  "rock climbing",
  "rowing",
  "running",
  "sailing",
  "sightseeing",
  "skiing",
  "snowboarding",
  "surfing",
  "swimming",
  "tobogganing",
  "trail running",
  "walking",
  "windsurfing",
];

eventFactory.activity.sexual = [
  "adultery",
  "bestiality",
  "cohabitating",
  "fooling around",
  "fornicating with the wrong kind of people",
  "fornicating",
  "having carnal relations",
  "masturbating",
  "providing oral favors",
  "providing profane pleasures",
];

eventFactory.activity.unsavory = [
  "{activity.sexual}",
  "{activity.violent}",
  "aggressively petting animals",
  "arguing too much",
  "being a dreadful bore",
  "being childish",
  "being contemptuous",
  "being corrupt",
  "being cowardly",
  "being creepy",
  "being devilish",
  "being disgusting",
  "being impish",
  "being indecent",
  "being judgmental",
  "being lazy",
  "being manic",
  "being manipulative",
  "being naughty",
  "being obnoxious",
  "being offensive",
  "being passive aggressive",
  "being racist",
  "being rowdy",
  "being scandalous",
  "being spiteful",
  "being unprofessional",
  "being weird",
  "bullying",
  "cheating",
  "embezzlement",
  "fraud",
  "gossiping",
  "inappropriate horseplay",
  "intentionally mispronouncing people's names",
  "lying",
  "micromanaging",
  "money laundering",
  "pan handling",
  "saying nasty things",
  "shenanigans",
  "theft",
  "yelling loudly while drunk",
];

eventFactory.activity.violent = [
  "being dangerous",
  "being malicious",
  "being violent",
  "murder",
  "stabbing",
];

eventFactory.animal.aggressive = [
  "ankheg",
  "awakened shrub",
  "awakened tree",
  "badger",
  "basilisk",
  "behir",
  "blink dog",
  "boar",
  "bugbear",
  "bulette",
  "carrion crawler",
  "chimera",
  "cockatrice",
  "crocodile",
  "dire wolf",
  "ettercap",
  "ettin",
  "flying snake",
  "giant badger",
  "giant boar",
  "giant centipede",
  "giant crab",
  "giant crocodile",
  "giant fire beetle",
  "giant scorpion",
  "giant snail",
  "giant snake",
  "giant toad",
  "giant wolf spider",
  "grick",
  "hag",
  "hag",
  "harpy",
  "hostile dryad",
  "hyena",
  "jackal",
  "lion",
  "naga",
  "ogre",
  "owlbear",
  "panther",
  "phase spider",
  "poisonous snake",
  "rust monster",
  "stirge",
  "swarm of bats",
  "swarm of insects",
  "swarm of poisonous snakes",
  "swarm of rats",
  "swarm of ravens",
  "tiger",
  "treant",
  "troll",
  "umber hulk",
  "winter wolf",
  "wolf",
  "worg",
  "yeti",
];

eventFactory.animal.cute = [
  "axolotl",
  "bird",
  "capybara",
  "cat",
  "dog",
  "duck",
  "fox",
  "hamster",
  "hedgehog",
  "hummingbird",
  "koala",
  "mangalica",
  "margay",
  "meerkat",
  "monkey",
  "owl",
  "panda",
  "rabbit",
  "raccoon dog",
  "sand cat",
  "sea otter",
  "serval",
  "shrew",
  "turtle",
  "weasel",
];

eventFactory.animal.insect = [
  "bees",
  "centipedes",
  "cicadas",
  "cockroaches",
  "death's head moths",
  "flies",
  "flying bullet ants",
  "flying spiders",
  "flying termites",
  "giant hornets",
  "giant wasps",
  "hornets",
  "locust",
  "mosquitos",
  "scorpionflies",
  "scorpions",
  "wasp mantidflies",
  "wasps",
];

eventFactory.characterization.negative = [
  "abandoned",
  "abhorred",
  "abhorrent",
  "abominable",
  "alienated",
  "appalling",
  "awful",
  "contemptible",
  "despised",
  "detestable",
  "detested",
  "disagreeable",
  "disdained",
  "disfavored",
  "disgusting",
  "disliked",
  "dreadful",
  "estranged",
  "execrated",
  "forgotten",
  "foul",
  "frightful",
  "grotesque",
  "hated",
  "heinous",
  "hideous",
  "horrendous",
  "horrid",
  "ignored",
  "ill-favored",
  "loathsome",
  "lousy",
  "monstrous",
  "nasty",
  "nauseating",
  "obnoxious",
  "obscene",
  "odious",
  "offensive",
  "repugnant",
  "repulsive",
  "revolting",
  "scandalous",
  "scorned",
  "shocking",
  "sickening",
  "ugly",
  "unappreciated",
  "unattractive",
  "uncherished",
  "unfavored",
  "unlovable",
  "unloved",
  "unpleasant",
  "unpopular",
  "unsightly",
  "vile",
  "wretched",
];

eventFactory.characterization.neutral = [
  "accepted",
  "aloof",
  "apathetic",
  "casual",
  "complacent",
  "detached",
  "disinterested",
  "incurious",
  "insensible",
  "insouciant",
  "known",
  "mediocre",
  "nonchalant",
  "tolerated",
  "unconcerned",
  "uninterested",
];

eventFactory.characterization.positive = [
  "admired",
  "adored",
  "beloved",
  "cherished",
  "darling",
  "dearly loved",
  "endeared",
  "esteemed",
  "exalted",
  "favored",
  "hallowed",
  "highly regarded",
  "highly valued",
  "idolized",
  "loved",
  "pleasing",
  "popular",
  "precious",
  "prized",
  "respected",
  "revered",
  "treasured",
  "venerated",
  "well-liked",
];

eventFactory.disaster.mundane = [
  "{animal.cute|animal.aggressive} fight",
  "{carriage|ship} collision",
  "{field|grass|house} fire",
  "avalanche",
  "flash flood",
  "mine cave-in",
  "scary thunderstorm",
  "shipwreck",
];

eventFactory.food.berry = [
  "acai berry",
  "barberry",
  "bilberry",
  "blackberry",
  "blueberry",
  "boysenberry",
  "chokeberry",
  "cloudberry",
  "cranberry",
  "elderberry",
  "goji berry",
  "gooseberry",
  "huckleberry",
  "juniper berry",
  "lingonberry",
  "mulberry",
  "raspberry",
  "sea buckthorn berry",
  "serviceberry",
  "strawberry",
];

eventFactory.food.fruit = [
  "apple",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blueberry",
  "cherry",
  "coconut",
  "cucumber",
  "dragonfruit",
  "durian",
  "fig",
  "gooseberry",
  "grape",
  "guava",
  "jackfruit",
  "kiwifruit",
  "kumquat",
  "lemon",
  "lime",
  "mango",
  "mulberry",
  "orange",
  "papaya",
  "passionfruit",
  "peach",
  "pear",
  "persimmon",
  "pineapple",
  "pineberry",
  "plum",
  "quince",
  "raspberry",
  "soursop",
  "star fruit",
  "strawberry",
  "tamarind",
  "watermelon",
  "yuzu",
];

eventFactory.food.melon = [
  "canary melon",
  "cantaloupe",
  "casaba melon",
  "cavaillon melon",
  "charentais melon",
  "crane melon",
  "crenshaw melon",
  "galia melon",
  "golden langkawi melon",
  "hami melon",
  "honeydew melon",
  "juan canary melon",
  "korean melon",
  "montreal melon",
  "muskmelon",
  "ogen melon",
  "persian melon",
  "santa claus melon",
  "santa fe grande melon",
  "sharlyn melon",
  "sprite melon",
  "sugar baby watermelon",
  "tiger melon",
  "watermelon",
];

eventFactory.food.vegetable = [
  "acorn squash",
  "adzuki",
  "alfalfa sprout",
  "anise",
  "artichoke",
  "arugula",
  "asparagu",
  "aubergine",
  "azuki bean",
  "banana squash",
  "basil",
  "bean sprout",
  "beet",
  "beetroot",
  "bell pepper",
  "bitter melon",
  "black bean",
  "black-eyed pea",
  "bok choy",
  "borlotti bean",
  "broad bean",
  "broccoli",
  "brussels sprout",
  "butter bean",
  "butternut squash",
  "cabbage",
  "calabrese",
  "caraway",
  "carrot",
  "cauliflower",
  "cayenne pepper",
  "ceci bean",
  "celeriac",
  "celery",
  "chamomile",
  "chard",
  "chickpea",
  "chili pepper",
  "chive",
  "collard green",
  "coriander",
  "corm",
  "courgette",
  "cucumber",
  "cymbopogon",
  "daikon",
  "delicata",
  "dill",
  "eddoe",
  "eggplant",
  "endive",
  "fennel",
  "fiddlehead",
  "frisee",
  "garbanzo",
  "garlic",
  "gem squash",
  "ginger",
  "green bean",
  "green onion",
  "habanero",
  "herb",
  "horseradish",
  "hubbard squash",
  "jalapeño",
  "jerusalem artichoke",
  "jicama",
  "kale",
  "kidney bean",
  "kohlrabi",
  "konjac",
  "lavender",
  "leek",
  "legume",
  "lemongrass",
  "lentil",
  "lettuce",
  "lima bean",
  "mange tout",
  "mangelwurzel",
  "marjoram",
  "marrow",
  "mung bean",
  "mushroom",
  "mustard green",
  "navy bean",
  "nettle",
  "okra",
  "onion",
  "oregano",
  "oyster plant",
  "paprika",
  "parsley",
  "parsnip",
  "peanut",
  "peppers",
  "pinto bean",
  "potato",
  "radicchio",
  "radish",
  "red cabbage",
  "rhubarb",
  "root vegetable",
  "rosemary",
  "runner bean",
  "rutabaga",
  "salsify",
  "savoy cabbage",
  "scallion",
  "shallot",
  "skirret",
  "snap pea",
  "soy bean",
  "spaghetti squash",
  "spinach",
  "split pea",
  "spring onion",
  "squash",
  "sweet potato",
  "sweetcorn",
  "tabasco pepper",
  "taro",
  "tat soi",
  "thyme",
  "tomato",
  "topinambur",
  "tubers",
  "turnip",
  "wasabi",
  "water chestnut",
  "watercress",
  "white radish",
  "yam",
  "zucchini",
];

eventFactory.item.mundane = [
  "{item.tool}",
  "{item.music_instrument}",
  "{item.supplies}",
];

eventFactory.item.music_instrument = [
  "bagpipe",
  "birdpipe",
  "drum",
  "dulcimer",
  "flute",
  "glaur",
  "hand drum",
  "horn",
  "longhorn",
  "lute",
  "lyre",
  "pan flute",
  "shawm",
  "songhorn",
  "tantan",
  "thelarr",
  "tocken",
  "viol",
  "wargong",
  "yarting",
  "zulkoon",
];

eventFactory.item.supplies = [
  "acid",
  "ale",
  "antitoxin",
  "arrow",
  "backpack",
  "ball bearing",
  "barrel",
  "basket",
  "bedroll",
  "bell",
  "blanket",
  "blood",
  "bomb",
  "book",
  "bottle",
  "brass mug",
  "bucket",
  "caltrop",
  "candle",
  "chain",
  "chalk",
  "dice",
  "fishing hook",
  "flask",
  "food spice",
  "iron pan",
  "iron spike",
  "jug",
  "lantern",
  "poison",
  "rock",
  "sealing wax",
  "soap",
  "steel mirror",
  "torch",
  "waterskin",
  "whetstone",
];

eventFactory.item.tool = [
  "chisel",
  "crowbar",
  "hammer",
  "hatchet",
  "knife",
  "needle and thread",
  "pickaxe",
  "plier",
  "rope",
  "ruler",
  "saw",
  "shovel",
  "tinderbox",
];

eventFactory.occupation.mundane = [
  "alchemist",
  "apothecary",
  "architect",
  "armorer",
  "artist",
  "baker",
  "barrister",
  "beekeeper",
  "belt maker",
  "blacksmith",
  "brewer",
  "butcher",
  "butler",
  "calligrapher",
  "candlemaker",
  "carpenter",
  "clergyman",
  "clothier",
  "cobbler",
  "cook",
  "coppersmith",
  "cordwainer",
  "costermonger",
  "entertainer",
  "farmer",
  "farrier",
  "friar",
  "gardener",
  "glassblower",
  "goldsmith",
  "grocer ",
  "herbalist",
  "hired-hand",
  "jeweler",
  "leatherworker",
  "locksmith",
  "maid",
  "mason",
  "merchant",
  "navigator",
  "painter",
  "peddler",
  "performer",
  "poisoner",
  "potter",
  "rancher",
  "roofer",
  "sailor",
  "scribe",
  "shipwright",
  "soldier",
  "stonemason",
  "tanner",
  "tax collector",
  "tinker",
  "town crier",
  "watchman",
  "weaver",
  "wheelwright",
  "winemaker",
  "woodcarver",
];

eventFactory.race.mundane = [
  "dragonborn",
  "dwarf",
  "elf",
  "gnome",
  "half-elf",
  "halfling",
  "half-orc",
  "human",
  "tiefling",
];

eventFactory.npc.generic = [
  "artisan",
  "craftsman",
  "expert",
  "mage",
  "nobleman",
  "warlock",
  "warrior",
  "witch",
];

eventFactory.relevance.average = [
  "average",
  "common",
  "everyday",
  "mainstream",
  "mediocre",
  "ordinary",
  "passable",
  "regular",
  "run of the mill",
  "standard issue",
  "successful",
  "tolerable",
  "undistinguished",
  "unexceptional",
  "unimportant",
  "unknown",
  "usual",
];

eventFactory.relevance.greater = [
  "big-league",
  "big-time",
  "chief",
  "crucial",
  "essential",
  "esteemed",
  "exceptional",
  "foremost",
  "germane",
  "high-brow",
  "high-value",
  "important",
  "major",
  "momentous",
  "principal",
  "significant",
  "superior",
  "vital",
];

eventFactory.relevance.lesser = [
  "below average",
  "failed",
  "foremost",
  "inconsequential",
  "insignificant",
  "irrelevant",
  "low-brow",
  "low-ranking",
  "minor",
  "negligible",
  "nonessential",
  "paltry",
  "second-rate",
  "small-time",
  "trifling",
  "trivial",
  "unimportant",
  "unnecessary",
  "worthless",
];

/*** INCIDENTS ***/

eventFactory.incident.major = [
  "creature: {incident_creature.major}",
  "natural: {incident_natural.major}",
  "people: {incident_people.major}",
  "political: {incident_political.major}",
  "religious: {incident_religious.major}",
];

eventFactory.incident.minor = [
  "creature: {incident_creature.minor}",
  "natural: {incident_natural.minor}",
  "people: {incident_people.minor}",
  "political: {incident_political.minor}",
  "religious: {incident_religious.minor}",
];

eventFactory.incident.moderate = [
  "creature: {incident_creature.moderate}",
  "natural: {incident_natural.moderate}",
  "people: {incident_people.moderate}",
  "political: {incident_political.moderate}",
  "religious: {incident_religious.moderate}",
];

eventFactory.incident.mundane = [
  "creature: {incident_creature.mundane}",
  "natural: {incident_natural.mundane}",
  "people: {incident_people.mundane}",
  "political: {incident_political.mundane}",
  "religious: {incident_religious.mundane}",
];

/*
  Tornadoes and Severe Storms
  Hurricanes and Tropical Storms
  Winter storm
  tropical cyclone
  blizzard
  Floods
  Wildfires
  heat wave
  Earthquakes
  famine
  Drought
  volcanic eruption
  lava flows
  explosions
  toxic gas cloud
  ash falls
  pyroclastic flows
  landslide
  avalanches
  Tsunamis
  above normal sea level
  meteor or comet impact
*/

eventFactory.incident_natural.major = [
  "{hurricane|tropical storm|tornado} sweeps the land causing buildings to collapse and whole forests to be blown down",
  "an illness decimated the {animal.cute}s",
  "heavy tremors from quake destroy buildings, cause landslides, and uproot trees. {Locals|Townsfolk|Politicians|Religious leaders} proclaim end-times are near",
  "the fields {yielded a bumper crop|withered and died}",
];

eventFactory.incident_natural.minor = [
  "{boy|girl|child} {found|missing, presumed} {alive|dead|missing|injured} after {flash flood|sink hole appears}",
  "{landslide} destroys roads and kills several locals following a heavy rain storm",
  "{roads ruined|buildings collapse|orphanage destroyed} after {landslide|heavy downpour}, {local|} {trade unions|poor people|guild workers} suffer",
  "caving trip ends in tragedy after heavy rain floods local caves",
];

eventFactory.incident_natural.moderate = [
  "[a/an] {mine cave-in|avalanche|terrible flood|} occurred",
  "a new star cluster was discovered",
  "heavy storm ravages {local|} population causing a town and the surrounding area to fall into ruin",
  "meteor makes landfall in middle of town causing {panic|fire|tremors}, townsfolk {run in fear|run for the hills|proclaim end-times are near|blame the major}",
  "there was [a/an] {epidemic|disease|blight} with an infection rate of {#1-70}% and a mortality rate of {#30-39}%",
  "there was [a/an] {epidemic|disease|blight} with an infection rate of {#71-80}% and a mortality rate of {#1-10}%",
];

eventFactory.incident_natural.mundane = [
  "seasonal storm {rains|snows|hails} on {circus|carnival|traveling|} parade, locals {disappointed|have fun anyway|go home|huddle in tents|wander off}",
  "thunder storm {scares|frightens|freaks out} {local|} {animal.cute}s causing them to to flee in {fear|terror}",
];

eventFactory.incident_creature.major = [
  "horde of {animal.aggressive}s last seen destroying nearby village, local township's mayor issues call to arms",
  "invasive species of {animal.insect} disrupting farms throughout the land",
];

eventFactory.incident_creature.minor = [
  "coven of hags moves into local {swamp|forest|cave|abandoned temple}",
  "hoard of {murderous|demon|violent} {animal.cute}s descends upon unsuspecting {food.random} farmer, origin of creatures unknown",
  "hoard of {murderous|demon|violent} {animal.insect} descends upon unsuspecting {food.random} farmer, origin of creatures unknown",
];

eventFactory.incident_creature.moderate = [
  "[a/an] new species of {monster|plant|animal|insect} was discovered that is {harmful|helpful|beneficial|devastating} to the people",
];

eventFactory.incident_creature.mundane = [
  "{animal.cute}s were fruitful and multiplied",
  "{characterization.random||relevance.random} {occupation.mundane|race.mundane} saves {baby|elderly|} {animal.cute}s from [a/an] {disaster.mundane}",
  "{characterization.random||relevance.random} {occupation.mundane|race.mundane} swarmed by {animal.insect} during {disaster.mundane}",
  "{characterization.random||relevance.random} {occupation.mundane|race.mundane} swarmed by {animal.insect} in freak natural accident",
  "{relevance.random} {occupation.mundane|race.mundane} discovers den of {animal.cute}s",
  "{relevance.random} {occupation.mundane|race.mundane} discovers unholy large nest of {animal.insect}",
];

eventFactory.incident_people.major = [
  "violent crime {increased|decreased} {everywhere|in the cities|in the country|near the capitol|on cabbage merchants}",
];

eventFactory.incident_people.minor = [
  "{characterization.positive} {occupation.mundane|noble|townsfolk} found {drained of blood|torn to pieces|brutally mutilated} {on the road to town|in an alley|hanging from a tree|under the stairs|behind a pile of firewood|} by local {'hero'|occupation.mundane|noble|townsfolk}",
  "[a/an] {characterization.random|relevance.random} {occupation.mundane} died {by mishap|from old age|from sickness}, leaving behind an unusual {item.random}",
  "[a/an] {characterization.random|relevance.random} {occupation.mundane} was {assassinated|struck down in battle}",
  "violence against {food.random|item.random} merchants {increased|decreased}",
];

eventFactory.incident_people.moderate = [
  "[a/an] {characterization.positive} {'hero'|noble|member of the leader's family|clergy member|leader} died suddenly",
  "[a/an] {new religion|academy of higher learning|walled town|castle} was founded",
  "a forgotten culture was rediscovered",
  "a powerful of {evil|neutrality|good} organization made their presence known",
  "an ancient {city|shrine|temple|civilization} was {re|}discovered",
  "there was an advance in {defensive military|offensive military|engineering|food production|medical|naval} technology",
];

eventFactory.incident_people.mundane = [
  "[a/an] {characterization.positive} {'hero'|minor noble|member of the leader's family|clergy member|local leader} died suddenly",
  "[a/an] {relevance.lesser|relevance.average} {'hero'|noble|clergy member|local leader} {activity.fart} after over-indulging in [a/an] {food.random} eating contest",
  "[a/an] {relevance.lesser|relevance.average} noble house {was destroyed|rose to prominence|gained favor|was excommunicated}",
  "{activity.mundane} incident kills {occupation.mundane|race.mundane} with no living relatives",
  "{activity.mundane} incident kills {occupation.mundane|race.mundane}, spouse, and {#2-9} children",
  "{activity.mundane} incident kills {occupation.mundane|race.mundane}, spouse, and only child",
  "{characterization.random||relevance.random} {occupation.mundane|race.mundane} dies in {activity.mundane} accident",
  "{characterization.random||relevance.random} {occupation.mundane|race.mundane} saves {baby|elderly|} {race.mundane} from [a/an] {disaster.mundane}",
  "{characterization.random} {occupation.mundane|race.mundane} falls down abandoned well while preparing for {activity.mundane} event",
  "{food.random} farmer has cart destroyed during high speed chase after local {occupation.mundane} does shenanigans",
  "{occupation.mundane|race.mundane} and {occupation.mundane|race.mundane} {friend|lover|companion|arch nemesis|} {run away together|begin fighting|begin arguing} when caught in the act of {activity.unsavory}",
  "{relevance.random} {item.tool|item.music_instrument} producer accused of {activity.unsavory} after [a/an] {activity.mundane} incident",
  "{relevance.random} {occupation.mundane|race.mundane} discovers wild {food.berry|food.fruit|food.melon|food.vegetable} orchard",
  "{relevance.random} {occupation.mundane|race.mundane} drunkenly fell on {relevance.random} {occupation.mundane|race.mundane} during dance",
  "{relevance.random} {occupation.mundane|race.mundane} flees local area after being accused of {activity.unsavory}",
  "{relevance.random} {occupation.mundane|race.mundane} has pants spontaneously catch fire after telling unconvincing story",
  "{relevance.random} {occupation.mundane|race.mundane} marries foreign {occupation.mundane|race.mundane}, towns people {flabbergasted|outraged|relieved|disappointed}",
  "{relevance.random} {occupation.mundane|race.mundane} sings off-key during drunken performance",
  "{relevance.random} {occupation.mundane|race.mundane} stumbles drunk into home of {local|} {race.mundane}, hijinks ensue",
];

eventFactory.incident_political.major = [
  "{taxes|pirate attacks|bandit raids} {increased|decreased}",
  "the peasants revolted and {installed a new ruler|were violently suppressed|violently murdered the nobles}",
  "there was an {assassination attempt|incursion} on a {relevance.greater} {npc.generic} by {the military|foreign interests|a secret society|a cult}",
  "there was an assassination attempt on [a/an] {relevance.greater} {npc.generic} by [a/an] {rival guild|lesser noble|personal enemy|religious order|state enemy|organizational enemy}",
  "there was an attack by a group of {highly organized|poorly organized|peasant|foreign|outcast} raiders",
];

eventFactory.incident_political.minor = [
  "mayor found guilty of {embezzling money|fraud|tax evasion|telling a white lie}, townsfolk to choose new mayor"
];

eventFactory.incident_political.moderate = [
  "[a/an] {assassination|great violation of temple law|rebellion of the nobles|regional peasant uprising|successful overthrow of the ruling government} occurred",
  "[a/an] {peace|settlement|trade} treaty was {signed|broken} by a neighboring city-state",
  "[a/an] {relevance.greater} noble house {was destroyed|rose to prominence|gained favor|was excommunicated}",
  "{active spying|treacherous sabotage} by rival political leader was discovered",
  "a military campaign was launched {for monetary gain|for punitive reasons|to expand borders|to regain lost territory|to explore an unknown wasteland}",
  "a series of {reformative|more restrictive|less restrictive} laws were enacted",
  "there was an {assassination attempt|incursion} on a {relevance.greater} {npc.generic} by {the military|foreign interests|a secret society|a cult}",
  "there was an attack by a group of {allied state|enemy state|internally} sponsored raiders",
  "there was an invasion {for punitive reasons|for the expansion of borders|to increase the national treasury|to regain lost territory}",
];

eventFactory.incident_political.mundane = [
  "town's mayor declares all {male|female} {race.mundane} babies to be cute, celebration this evening",
];

eventFactory.incident_religious.major = [
  "[a/an] {relevance.greater} article of faith was {lost|stolen|destroyed|hidden away}",
];

eventFactory.incident_religious.minor = [
  "{arguing|fighting|an incident} between {evil|neutral|good} temples occurred",
  "{arguing|fighting|an incident} between evil and {neutral|good} temples occurred",
  "{arguing|fighting|an incident} between good and {evil|neutral} temples occurred",
  "{arguing|fighting|an incident} between neutral and {evil|good} temples occurred",
];

eventFactory.incident_religious.moderate = [
  "[a/an] {lost|stolen|famous} {artifact|religious text} of the faith was {discovered|recovered|destroyed|hidden away}",
  "[a/an] {noble|religious} order was {disbanded|scattered} and fell into disgrace",
];

eventFactory.incident_religious.mundane = [
  "{belittling|name calling|public mockery} between {evil|good|neutral} temples occurred",
  "{belittling|name calling|public mockery} between evil and {good|neutral} temples occurred",
  "{belittling|name calling|public mockery} between good and {evil|neutral} temples occurred",
  "{belittling|name calling|public mockery} between neutral and {evil|good} temples occurred",
];

