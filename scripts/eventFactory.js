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
  item: {},
  npc: {},
  occupation: {},
  race: {}
};

eventFactory.GetActivity = function(level = 'mundane', qty = 1)
{
  var factoryResult = [];
  for(var i = 0; i <= qty; i++)
  {
    var temp_result;
    switch (level)
    {
      case 'mundane':
      default:
        temp_result = this.ResolveActivity(this.incident.random());
        break;
    }

    // normalize white space
    temp_result = temp_result.replace(/\s\s+/, ' ');

    // final step: resolve articles [a/an]
    temp_result = this.ResolveArticles(temp_result);

    //save results
    factoryResult.push(temp_result);
  }

  return factoryResult.join("\r\n\r\n");
};

eventFactory.ResolveActivity = function(data, ChangeCase = true)
{
  // separate string into pieces
  let data_arr = data.split('{');

  // process tokens
  for (var i = 1; i != data_arr.length; i++)
  {
    // check for ending piece
    if (data_arr[i].indexOf('}') == -1)
    {
      // no ending piece, move on
      continue;
    }

    // extract token from string
    let token = data_arr[i].substring(0, data_arr[i].indexOf('}'));

    // replace token with a value
    data_arr[i] = this.ResolveToken(token) + data_arr[i].substring(token.length+1).replace('}', '');
  }

  // put string back together
  data = data_arr.join('');

  // check if we need to resolve more tokens
  if (data.indexOf('{') != -1)
    data = this.ResolveActivity(data, false);

  if (ChangeCase)
  {
    // normalize white space before proceeding
    data = data.trim().replace(/\s\s+/g, ' ');

    // Capitalize first word in sentence.
    let sentence = data.split(' ');
    sentence[0] = sentence[0].toTitleCase();
    data = sentence.join(' ');
  }

  return data;
};

eventFactory.ResolveArticles = function(data)
{
  // split everywhere we need to determine if it's A or AN
  let arr = data.split('[a/an]');

  // cycle through all the pieces to except the last one
  for (var i = 0; i != arr.length-1; i++)
  {
    arr[i+1] = arr[i+1].trimStart();
    let vowel = arr[i+1].substring(0, 1).toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].indexOf(vowel) == -1)
    {
      arr[i+1] = 'a ' + arr[i+1];
    }
    else
    {
      arr[i+1] = 'an ' + arr[i+1];
    }
  }

  return arr.join('');
}

eventFactory.ResolveToken = function(token)
{
  // check if we have multiple choice token
  if (token.indexOf('|') != -1)
  {
    // random multiple choice options
    token = token.split('|').randomValue();
  }

  // check for empty token
  if (token.length == 0) return '';

  // check for literal value in quotes
  let str_check = token.substring(0,1);
  if (str_check == '"')
  {
    // strip leading and trailing double quote
    // "text." => text.
    return token.replace(/^"/g, '').replace(/"$/g, '');
  }
  else if (str_check == "'")
  {
    // strip leading and trailing single quote
    // 'text.' => text.
    return token.replace(/^'/g, '').replace(/'$/g, '');
  }
  else if (str_check == '#')
  {
    // random number range in this format:
    // #0-123
    let arr = token.substring(1).split('-');
    return Math.range(Number(arr[0]), Number(arr[1]));
  }

  // get token pieces
  let parts = token.split('.');

  // start with eventFactory object
  var this_obj = this;
  var last_obj; // last context for this_obj

  // cycle through each piece of token
  for (var i = 0; i != parts.length; i++)
  {
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
      // could not successfully resolve token, return string
      return token;
    }
  }

  // we have resolved the token to a specific thing
  if (typeof this_obj == 'function')
  {
    // it's a function, pass correct context
    return this_obj(last_obj);
  }
  else if (Array.isArray(this_obj))
  {
    // it's an array, get random value
    return this_obj.randomValue();
  }
  else if (this_obj != null && typeof this_obj == 'object')
  {
    // it's an object, get the string version of it
    return this_obj.toString();
  }
};

eventFactory.activity.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    ['mundane']
    .randomValue()
  ].randomValue();
};

eventFactory.activity.mundane = [
  '{item.mundane} collecting',
  'archery',
  'bird watching',
  'boating',
  'bodyboarding',
  'camping',
  'canoeing',
  'canyoning',
  'cooking',
  'dancing',
  'diving',
  'dragon boat racing',
  'exercising',
  'fishing',
  'gardening',
  'hiking',
  'hunting',
  'ice climbing',
  'jogging',
  'jump roping',
  'kayaking',
  'lawn bowling',
  'mountaineering',
  'picnicking',
  'rafting',
  'riding',
  'rock climbing',
  'rowing',
  'running',
  'sailing',
  'sightseeing',
  'skiing',
  'snowboarding',
  'surfing',
  'swimming',
  'tobogganing',
  'trail running',
  'walking',
  'windsurfing',
];

eventFactory.activity.unsavory = [
  'aggressively petting animals',
  'arguing too much',
  'being a dreadful bore',
  'being childish',
  'being contemptuous',
  'being corrupt',
  'being cowardly',
  'being creepy',
  'being dangerous',
  'being devilish',
  'being disgusting',
  'being impish',
  'being indecent',
  'being judgmental',
  'being lazy',
  'being malicious',
  'being manic',
  'being manipulative',
  'being naughty',
  'being obnoxious',
  'being offensive',
  'being passive aggressive',
  'being racist',
  'being rowdy',
  'being scandalous',
  'being spiteful',
  'being unprofessional',
  'being violent',
  'being weird',
  'bullying',
  'cheating',
  'embezzlement',
  'fornicating with the wrong kind of people',
  'fraud',
  'gossiping',
  'inappropriate horseplay',
  "intentionally mispronouncing people's names",
  'lying',
  'micromanaging',
  'money laundering',
  'murder',
  'pan handling',
  'saying nasty things',
  'shenanigans',
  'theft',
  'yelling loudly while drunk',
];

eventFactory.animal.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    [
      'cute',
      'insect',
    ].randomValue()
  ].randomValue();
};

eventFactory.animal.cute = [
  'axolotl',
  'bird',
  'capybara',
  'cat',
  'dog',
  'duck',
  'fox',
  'hamster',
  'hedgehog',
  'hummingbird',
  'koala',
  'mangalica',
  'margay',
  'meerkat',
  'monkey',
  'owl',
  'panda',
  'rabbit',
  'raccoon dog',
  'sand cat',
  'sea otter',
  'serval',
  'shrew',
  'turtle',
  'weasel',
];

eventFactory.animal.insect = [
  'flies',
  'bees',
  'hornets',
  'wasps',
  'giant hornets',
  'giant wasps',
  'flying bullet ants',
  'mosquitos',
  'flying termites',
  'locust',
  "death's head moths",
  'cicadas',
  'scorpionflies',
  'flying spiders',
  'cockroaches',
  'wasp mantidflies',
];

eventFactory.characterization.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[[
      'positive',
      'neutral',
      'negative',
  ].randomValue()].randomValue();
};

eventFactory.characterization.positive = [
  'admired',
  'adored',
  'beloved',
  'cherished',
  'darling',
  'dearly loved',
  'endeared',
  'esteemed',
  'exalted',
  'favored',
  'hallowed',
  'highly regarded',
  'highly valued',
  'idolized',
  'loved',
  'pleasing',
  'popular',
  'precious',
  'prized',
  'respected',
  'revered',
  'treasured',
  'venerated',
  'well-liked',
];

eventFactory.characterization.neutral = [
  'accepted',
  'aloof',
  'apathetic',
  'casual',
  'complacent',
  'detached',
  'disinterested',
  'incurious',
  'insensible',
  'insouciant',
  'known',
  'mediocre',
  'nonchalant',
  'tolerated',
  'unconcerned',
  'uninterested',
];

eventFactory.characterization.negative = [
  'abandoned',
  'abhorred',
  'abhorrent',
  'abominable',
  'alienated',
  'appalling',
  'awful',
  'contemptible',
  'despised',
  'detestable',
  'detested',
  'disagreeable',
  'disdained',
  'disfavored',
  'disgusting',
  'disliked',
  'dreadful',
  'estranged',
  'execrated',
  'forgotten',
  'foul',
  'frightful',
  'grotesque',
  'hated',
  'heinous',
  'hideous',
  'horrendous',
  'horrid',
  'ignored',
  'ill-favored',
  'loathsome',
  'lousy',
  'monstrous',
  'nasty',
  'nauseating',
  'obnoxious',
  'obscene',
  'odious',
  'offensive',
  'repugnant',
  'repulsive',
  'revolting',
  'scandalous',
  'scorned',
  'shocking',
  'sickening',
  'ugly',
  'unappreciated',
  'unattractive',
  'uncherished',
  'unfavored',
  'unlovable',
  'unloved',
  'unpleasant',
  'unpopular',
  'unsightly',
  'vile',
  'wretched',
];

eventFactory.disaster.mundane = [
  '{animal.cute} fight',
  'flash flood',
  '{grass|house} fire',
  'shipwreck',
  '{carriage|ship} collision',
  'avalanche',
  'scary thunderstorm',
  'mine cave-in',
];

eventFactory.food.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    [
      'berry',
      'fruit',
      'melon',
      'vegetable',
    ].randomValue()
  ].randomValue();
};

eventFactory.food.berry = [
  'strawberry',
  'blueberry',
  'raspberry',
  'blackberry',
  'cranberry',
  'goji berry',
  'lingonberry',
  'mulberry',
  'acai berry',
  'elderberry',
  'huckleberry',
  'boysenberry',
  'gooseberry',
  'bilberry',
  'cloudberry',
  'chokeberry',
  'juniper berry',
  'serviceberry',
  'sea buckthorn berry',
  'barberry',
];

eventFactory.food.fruit = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'blackberry',
  'blueberry',
  'cherry',
  'coconut',
  'cucumber',
  'durian',
  'dragonfruit',
  'fig',
  'gooseberry',
  'grape',
  'guava',
  'jackfruit',
  'plum',
  'kiwifruit',
  'kumquat',
  'lemon',
  'lime',
  'mango',
  'watermelon',
  'mulberry',
  'orange',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'persimmon',
  'pineapple',
  'pineberry',
  'quince',
  'raspberry',
  'soursop',
  'star fruit',
  'strawberry',
  'tamarind',
  'yuzu',
];

eventFactory.food.melon = [
  'canary melon',
  'cantaloupe',
  'casaba melon',
  'Cavaillon melon',
  'Charentais melon',
  'crane melon',
  'crenshaw melon',
  'galia melon',
  'golden Langkawi melon',
  'Hami melon',
  'honeydew melon',
  'Juan Canary melon',
  'Korean melon',
  'Montreal melon',
  'muskmelon',
  'ogen melon',
  'Persian melon',
  'Santa Claus melon',
  'santa fe grande melon',
  'Sharlyn melon',
  'sprite melon',
  'sugar baby watermelon',
  'tiger melon',
  'watermelon',
];

eventFactory.food.vegetable = [
  'acorn squash',
  'adzuki',
  'alfalfa sprout',
  'anise',
  'artichoke',
  'arugula',
  'asparagu',
  'aubergine',
  'azuki bean',
  'banana squash',
  'basil',
  'bean sprout',
  'beet',
  'beetroot',
  'bell pepper',
  'bitter melon',
  'black bean',
  'black-eyed pea',
  'bok choy',
  'borlotti bean',
  'broad bean',
  'broccoli',
  'brussels sprout',
  'butter bean',
  'butternut squash',
  'cabbage',
  'calabrese',
  'caraway',
  'carrot',
  'cauliflower',
  'cayenne pepper',
  'ceci bean',
  'celeriac',
  'celery',
  'chamomile',
  'chard',
  'chickpea',
  'chili pepper',
  'chive',
  'collard green',
  'coriander',
  'corm',
  'courgette',
  'cucumber',
  'cymbopogon',
  'daikon',
  'delicata',
  'dill',
  'eddoe',
  'eggplant',
  'endive',
  'fennel',
  'fiddlehead',
  'frisee',
  'garbanzo',
  'garlic',
  'gem squash',
  'ginger',
  'green bean',
  'green onion',
  'habanero',
  'herb',
  'horseradish',
  'hubbard squash',
  'jalapeño',
  'jerusalem artichoke',
  'jicama',
  'kale',
  'kidney bean',
  'kohlrabi',
  'konjac',
  'lavender',
  'leek',
  'legume',
  'lemongrass',
  'lentil',
  'lettuce',
  'lima bean',
  'mange tout',
  'mangelwurzel',
  'marjoram',
  'marrow',
  'mung bean',
  'mushroom',
  'mustard green',
  'navy bean',
  'nettle',
  'okra',
  'onion',
  'oregano',
  'oyster plant',
  'paprika',
  'parsley',
  'parsnip',
  'peanut',
  'peppers',
  'pinto bean',
  'potato',
  'radicchio',
  'radish',
  'red cabbage',
  'rhubarb',
  'root vegetable',
  'rosemary',
  'runner bean',
  'rutabaga',
  'salsify',
  'savoy cabbage',
  'scallion',
  'shallot',
  'skirret',
  'snap pea',
  'soy bean',
  'spaghetti squash',
  'spinach',
  'split pea',
  'spring onion',
  'squash',
  'sweet potato',
  'sweetcorn',
  'tabasco pepper',
  'taro',
  'tat soi',
  'thyme',
  'tomato',
  'topinambur',
  'tubers',
  'turnip',
  'wasabi',
  'water chestnut',
  'watercress',
  'white radish',
  'yam',
  'zucchini',
];

eventFactory.incident.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    [
      'mundane'
    ].randomValue()
  ].randomValue();
};

eventFactory.incident.mundane = [
  '{characterization.random||npc.relevance} {occupation.mundane|race.mundane} saves {baby|elderly|} {animal.cute|race.mundane} from [a/an] {disaster.mundane}.',
  '{characterization.random||npc.relevance} {occupation.mundane|race.mundane} dies in {activity.mundane} accident.',
  '{characterization.random||npc.relevance} {occupation.mundane|race.mundane} swarmed by {animal.insect} during {disaster.mundane}.',
  '{characterization.random||npc.relevance} {occupation.mundane|race.mundane} swarmed by {animal.insect} in freak natural accident.',
  '{characterization.random} {occupation.mundane|race.mundane} falls down abandoned well while preparing for {activity.mundane} event.',
  '{npc.relevance} {occupation.mundane|race.mundane} discovers wild {food.berry|food.fruit|food.melon|food.vegetable} orchard.',
  '{npc.relevance} {occupation.mundane|race.mundane} discovers den of {animal.cute}s.',
  '{npc.relevance} {occupation.mundane|race.mundane} drunkenly fell on {npc.relevance} {occupation.mundane|race.mundane} during dance.',
  '{npc.relevance} {occupation.mundane|race.mundane} sings off-key during drunken performance.',
  '{npc.relevance} {occupation.mundane|race.mundane} discovers unholy large nest of {animal.insect}.',
  '{npc.relevance} {occupation.mundane|race.mundane} has pants spontaneously catch fire after telling unconvincing story.',
  '{npc.relevance} {occupation.mundane|race.mundane} stumbles drunk into home of {local|} {race.mundane}, hijinks ensue.',
  '{npc.relevance} {occupation.mundane|race.mundane} marries foreign {occupation.mundane|race.mundane}, towns people flabbergasted.',
  '{npc.relevance} {item.tool|item.music} producer accused of {activity.unsavory} after [a/an] {activity.mundane} incident.',
  '{activity.mundane} incident kills {occupation.mundane|race.mundane}, spouse, and only child.',
  '{activity.mundane} incident kills {occupation.mundane|race.mundane}, spouse, and {#2-9} children.',
  '{activity.mundane} incident kills {occupation.mundane|race.mundane} with no living relatives.',
  '{food.random} farmer has cart destroyed during high speed chase after local {occupation.mundane} does shenanigans.',
];

eventFactory.item.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    [
      'tool',
      'music',
      'mundane',
    ].randomValue()
  ].randomValue();
};

eventFactory.item.tool = [
  'hammer',
  'shovel',
  'crowbar',
  'hatchet',
  'saw',
  'plier',
  'ruler',
  'chisel',
  'knife',
  'needle and thread',
  'tinderbox',
  'rope',
  'pickaxe',
];

eventFactory.item.music = [
  'bagpipe',
  'birdpipe',
  'drum',
  'dulcimer',
  'flute',
  'glaur',
  'hand drum',
  'horn',
  'longhorn',
  'lute',
  'lyre',
  'pan flute',
  'shawm',
  'songhorn',
  'tantan',
  'thelarr',
  'tocken',
  'viol',
  'wargong',
  'yarting',
  'zulkoon',
];

eventFactory.item.mundane = [
  '{item.tool}',
  '{item.music}',
  'acid',
  'ale',
  'antitoxin',
  'arrow',
  'backpack',
  'ball bearing',
  'barrel',
  'basket',
  'bedroll',
  'bell',
  'blanket',
  'blood',
  'bomb',
  'book',
  'brass mug',
  'bucket',
  'caltrop',
  'candle',
  'chain',
  'chalk',
  'dice',
  'fishing hook',
  'food spice',
  'lantern',
  'poison',
  'rock',
  'flask',
  'bottle',
  'iron spike',
  'iron pan',
  'jug',
  'sealing wax',
  'soap',
  'steel mirror',
  'torch',
  'waterskin',
  'whetstone',
];

eventFactory.npc.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }
  else if (context == null)
  {
    return '_random_';
  }

  return context[
    [
      'title',
    ].randomValue()
  ].randomValue();
};

eventFactory.npc.generic = [
  'warrior',
  'expert',
  'mage',
  'witch',
  'warlock',
  'artisan',
  'craftsman',
];

eventFactory.npc.relevance = [
  'small-time',
  'big-time',
  'average',
  'major',
  'below average',
  'failed',
  'successful',
];

eventFactory.occupation.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    [
      'mundane',
    ].randomValue()
  ].randomValue();
};

eventFactory.occupation.mundane = [
  'alchemist',
  'apothecary',
  'architect',
  'armorer',
  'artist',
  'baker',
  'barrister',
  'beekeeper',
  'belt maker',
  'blacksmith',
  'brewer',
  'butcher',
  'butler',
  'calligrapher',
  'candlemaker',
  'carpenter',
  'clergyman',
  'clothier',
  'cobbler',
  'cook',
  'coppersmith',
  'cordwainer',
  'costermonger',
  'entertainer',
  'farmer',
  'farrier',
  'friar',
  'gardener',
  'glassblower',
  'goldsmith',
  'grocer ',
  'herbalist',
  'hired-hand',
  'jeweler',
  'leatherworker',
  'locksmith',
  'maid',
  'mason',
  'merchant',
  'navigator',
  'painter',
  'peddler',
  'performer',
  'poisoner',
  'potter',
  'rancher',
  'roofer',
  'sailor',
  'scribe',
  'shipwright',
  'soldier',
  'stonemason',
  'tanner',
  'tax collector',
  'tinker',
  'town crier',
  'watchman',
  'weaver',
  'wheelwright',
  'winemaker',
  'woodcarver',
];

eventFactory.race.random = function(context = null)
{
  // check if executing as anonymous function out of context
  if (this !== undefined)
  {
    context = this;
  }

  return context[
    [
      'mundane',
    ].randomValue()
  ].randomValue();
};

eventFactory.race.mundane = [
  'dragonborn',
  'dwarf',
  'elf',
  'gnome',
  'half-elf',
  'half-orc',
  'halfling',
  'human',
  'tiefling',
];