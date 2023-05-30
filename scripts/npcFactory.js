"use strict";
// generate NPCs based on profiles and conditions
let npcFactory = {};

// all the things you want to copy and fill out
npcFactory.template = {};

// stat block for an NPC
npcFactory.template.base = {
  race: '',
  ancestry: '',
  creature_type: '',
  size: '',
  sense: [],
  speed: [],
  class_name: '',
  initiative: 0,
  level: 0,
  ability: {
    "str": 0,
    "dex": 0,
    "con": 0,
    "wis": 0,
    "int": 0,
    "cha": 0,
  },
  language: [],
  skill: [],
  feat: [],
  saving_throw: [],
  resistance: [],
  special: [],
};

// some ideas taken from
// https://www.5esrd.com/gamemastering/monsters-foes/npc/
npcFactory.profiles = {
  // magic users
  'arcanist': null,
  'bard': null,
  'beastshifter': null,
  'cleric': null,
  'cultist': null,
  'druid': null,
  'elementalist': null,
  'illusionist': null,
  'necromancer': null,
  'paladin': null,
  'psion': null,
  'pyromancer': null,
  'shaman': null,
  'sorcerer': null,
  'witch': null,

  // rogue types
  'assassin': null,
  'bandit': null,
  'buccaneer': null,
  'burglar': null,
  'hunter': null,
  'pirate': null,
  'rogue': null,
  'scout': null,
  'swashbuckler': null,
  'thief': null,

  // skills focus
  'artist': null,
  'cook': null,
  'engineer': null,
  'entertainer': null,
  'merchant': null,
  'navigator': null,
  'noble': null,
  'performer': null,
  'sailor': null,
  'scholar': null,

  // warrior types
  'archer': null,
  'artillerist': null,
  'berserker': null,
  'blackguard': null,
  'brigand': null,
  'cannoneer': null,
  'captain': null,
  'citywatch': null,
  'commander': null,
  'footman': null,
  'gladiator': null,
  'guard': null,
  'knight': null,
  'thug': null,
  'warrior': null,
};