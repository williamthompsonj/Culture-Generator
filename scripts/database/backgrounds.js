"use strict";
database.backgrounds = [
{
  "name": "Acolyte",
  "source": "PHB",
  "skillProficiencies": [
    {
      "insight": true,
      "religion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Anthropologist",
  "source": "ToA",
  "skillProficiencies": [
    {
      "insight": true,
      "religion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Archaeologist",
  "source": "ToA",
  "skillProficiencies": [
    {
      "history": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": [
        "navigator's tools",
        "cartographer's tools"
      ]
    }
  ]
},
{
  "name": "Astral Drifter",
  "source": "AAG",
  "feats": [
    {
      "magic initiate": true
    }
  ],
  "skillProficiencies": [
    {
      "insight": true,
      "religion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "fromFeature": {
    "feats": true
  }
},
{
  "name": "Athlete",
  "source": "MOT",
  "skillProficiencies": [
    {
      "acrobatics": true,
      "athletics": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "vehicles (land)": true
    }
  ]
},
{
  "name": "Azorius Functionary",
  "source": "GGR",
  "skillProficiencies": [
    {
      "insight": true,
      "intimidation": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "friends",
          "message"
        ],
        "s1": [
          "command",
          "ensnaring strike"
        ],
        "s2": [
          "arcane lock",
          "calm emotions",
          "hold person"
        ],
        "s3": [
          "clairvoyance",
          "counterspell"
        ],
        "s4": [
          "compulsion",
          "divination"
        ],
        "s5": [
          "dominate person"
        ]
      }
    }
  ]
},
{
  "name": "Boros Legionnaire",
  "source": "GGR",
  "skillProficiencies": [
    {
      "athletics": true,
      "intimidation": true
    }
  ],
  "languageProficiencies": [
    {
      "choose": {
        "from": [
          "celestial",
          "draconic",
          "goblin",
          "other"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "gaming set": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "fire bolt",
          "sacred flame"
        ],
        "s1": [
          "guiding bolt",
          "heroism"
        ],
        "s2": [
          "aid",
          "scorching ray"
        ],
        "s3": [
          "beacon of hope",
          "blinding smite"
        ],
        "s4": [
          "death ward",
          "wall of fire"
        ],
        "s5": [
          "flame strike"
        ]
      }
    }
  ]
},
{
  "name": "Celebrity Adventurer's Scion",
  "source": "AI",
  "skillProficiencies": [
    {
      "perception": true,
      "performance": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true
    }
  ]
},
{
  "name": "Charlatan",
  "source": "PHB",
  "skillProficiencies": [
    {
      "deception": true,
      "sleight of hand": true
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true,
      "forgery kit": true
    }
  ]
},
{
  "name": "City Watch",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "athletics": true,
      "insight": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Clan Crafter",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "history": true,
      "insight": true
    }
  ],
  "languageProficiencies": [
    {
      "dwarvish": true
    },
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ]
},
{
  "name": "Cloistered Scholar",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "history": true,
      "choose": {
        "from": [
          "arcana",
          "nature",
          "religion"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Courtier",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "insight": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Criminal",
  "source": "PHB",
  "skillProficiencies": [
    {
      "deception": true,
      "stealth": true
    }
  ],
  "toolProficiencies": [
    {
      "gaming set": true,
      "thieves' tools": true
    }
  ]
},
{
  "name": "Dimir Operative",
  "source": "GGR",
  "skillProficiencies": [
    {
      "deception": true,
      "stealth": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "encode thoughts",
          "mage hand"
        ],
        "s1": [
          "disguise self",
          "sleep"
        ],
        "s2": [
          "detect thoughts",
          "pass without trace"
        ],
        "s3": [
          "gaseous form",
          "meld into stone",
          "nondetection"
        ],
        "s4": [
          "arcane eye",
          "freedom of movement"
        ],
        "s5": [
          "modify memory"
        ]
      }
    }
  ]
},
{
  "name": "Entertainer",
  "source": "PHB",
  "skillProficiencies": [
    {
      "acrobatics": true,
      "performance": true
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true,
      "musical instrument": true
    }
  ]
},
{
  "name": "Faceless",
  "source": "BGDIA",
  "skillProficiencies": [
    {
      "deception": true,
      "intimidation": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true
    }
  ]
},
{
  "name": "Faction Agent",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "insight": true,
      "choose": {
        "from": [
          "arcana",
          "animal handling",
          "deception",
          "history",
          "intimidation",
          "investigation",
          "medicine",
          "nature",
          "perception",
          "performance",
          "persuasion",
          "religion",
          "survival"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Failed Merchant",
  "source": "AI",
  "skillProficiencies": [
    {
      "investigation": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ]
},
{
  "name": "Far Traveler",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "insight": true,
      "perception": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "musical instrument",
          "gaming set"
        ]
      }
    }
  ]
},
{
  "name": "Feylost",
  "source": "WBtW",
  "skillProficiencies": [
    {
      "deception": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1,
      "choose": {
        "from": [
          "elvish",
          "gnomish",
          "goblin",
          "sylvan"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "musical instrument": true
    }
  ]
},
{
  "name": "Fisher",
  "source": "GoS",
  "skillProficiencies": [
    {
      "history": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ]
},
{
  "name": "Folk Hero",
  "source": "PHB",
  "skillProficiencies": [
    {
      "animal handling": true,
      "survival": true
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true,
      "vehicles (land)": true
    }
  ]
},
{
  "name": "Gambler",
  "source": "AI",
  "skillProficiencies": [
    {
      "deception": true,
      "insight": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "gaming set": true
    }
  ]
},
{
  "name": "Golgari Agent",
  "source": "GGR",
  "skillProficiencies": [
    {
      "nature": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "choose": {
        "from": [
          "elvish",
          "giant",
          "other"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "poisoner's kit": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "dancing lights",
          "spare the dying"
        ],
        "s1": [
          "entangle",
          "ray of sickness"
        ],
        "s2": [
          "protection from poison",
          "ray of enfeeblement",
          "spider climb"
        ],
        "s3": [
          "animate dead",
          "plant growth"
        ],
        "s4": [
          "giant insect",
          "grasping vine"
        ],
        "s5": [
          "cloudkill",
          "insect plague"
        ]
      }
    }
  ]
},
{
  "name": "Grinner",
  "source": "EGW",
  "skillProficiencies": [
    {
      "deception": true,
      "performance": true
    }
  ],
  "toolProficiencies": [
    {
      "thieves' tools": true,
      "musical instrument": true
    }
  ]
},
{
  "name": "Gruul Anarch",
  "source": "GGR",
  "skillProficiencies": [
    {
      "animal handling": true,
      "athletics": true
    }
  ],
  "languageProficiencies": [
    {
      "choose": {
        "from": [
          "draconic",
          "giant",
          "goblin",
          "sylvan"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "herbalism kit": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "fire bolt",
          "produce flame"
        ],
        "s1": [
          "compelled duel",
          "speak with animals",
          "thunderwave"
        ],
        "s2": [
          "beast sense",
          "shatter"
        ],
        "s3": [
          "conjure animals",
          "conjure barrage"
        ],
        "s4": [
          "dominate beast",
          "stoneskin"
        ],
        "s5": [
          "destructive wave"
        ]
      }
    }
  ]
},
{
  "name": "Guild Artisan",
  "source": "PHB",
  "skillProficiencies": [
    {
      "insight": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ]
},
{
  "name": "Guild Merchant",
  "source": "PHB",
  "skillProficiencies": [
    {
      "insight": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "skillToolLanguageProficiencies": [
    {
      "choose": [
        "anyArtisansTool",
        "navigator's tools",
        "anyStandard"
      ]
    }
  ]
},
{
  "name": "Haunted One",
  "source": "VRGR",
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "arcana",
          "investigation",
          "religion",
          "survival"
        ],
        "count": 2
      }
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1,
      "choose": {
        "from": [
          "abyssal",
          "celestial",
          "deep speech",
          "draconic",
          "infernal",
          "primordial",
          "sylvan",
          "undercommon"
        ]
      }
    }
  ]
},
{
  "name": "Hermit",
  "source": "PHB",
  "skillProficiencies": [
    {
      "medicine": true,
      "religion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "herbalism kit": true
    }
  ]
},
{
  "name": "House Agent",
  "source": "ERLW",
  "skillProficiencies": [
    {
      "investigation": true,
      "persuasion": true
    }
  ],
  "toolProficiencies": [
    {
      "alchemist's supplies": true,
      "tinker's tools": true
    },
    {
      "gaming set": true,
      "vehicles (land)": true
    },
    {
      "brewer's supplies": true,
      "cook's utensils": true
    },
    {
      "alchemist's supplies": true,
      "herbalism kit": true
    },
    {
      "tinker's tools": true,
      "thieves' tools": true
    },
    {
      "vehicles (water)": true,
      "vehicles (air)": true,
      "navigator's tools": true
    },
    {
      "thieves' tools": true,
      "disguise kit": true
    },
    {
      "disguise kit": true,
      "musical instrument": true
    },
    {
      "calligrapher's supplies": true,
      "forgery kit": true
    },
    {
      "thieves' tools": true,
      "gaming set": true
    },
    {
      "poisoner's kit": true,
      "musical instrument": true
    },
    {
      "vehicles (land)": true,
      "herbalism kit": true
    }
  ]
},
{
  "name": "Inheritor",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "survival": true,
      "choose": {
        "from": [
          "arcana",
          "history",
          "religion"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "musical instrument",
          "gaming set"
        ]
      }
    }
  ]
},
{
  "name": "Investigator",
  "source": "VRGR",
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "insight",
          "investigation",
          "perception"
        ],
        "count": 2
      }
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true,
      "thieves' tools": true
    }
  ]
},
{
  "name": "Izzet Engineer",
  "source": "GGR",
  "skillProficiencies": [
    {
      "arcana": true,
      "investigation": true
    }
  ],
  "languageProficiencies": [
    {
      "choose": {
        "from": [
          "draconic",
          "goblin",
          "other"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "produce flame",
          "shocking grasp"
        ],
        "s1": [
          "chaos bolt",
          "create or destroy water",
          "unseen servant"
        ],
        "s2": [
          "heat metal",
          "rope trick"
        ],
        "s3": [
          "call lightning",
          "elemental weapon",
          "glyph of warding"
        ],
        "s4": [
          "conjure minor elementals",
          "divination",
          "otiluke's resilient sphere"
        ],
        "s5": [
          "animate objects",
          "conjure elemental"
        ]
      }
    }
  ]
},
{
  "name": "Knight of Solamnia",
  "source": "DSotDQ",
  "prerequisite": [
    {
      "campaign": [
        "Dragonlance"
      ]
    }
  ],
  "feats": [
    {
      "squire of solamnia": true
    }
  ],
  "skillProficiencies": [
    {
      "athletics": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "fromFeature": {
    "feats": true
  }
},
{
  "name": "Knight of the Order",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "persuasion": true,
      "choose": {
        "from": [
          "arcana",
          "history",
          "nature",
          "religion"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "musical instrument",
          "gaming set"
        ]
      }
    }
  ]
},
{
  "name": "Lorehold Student",
  "source": "SCC",
  "feats": [
    {
      "strixhaven initiate": true
    }
  ],
  "skillProficiencies": [
    {
      "history": true,
      "religion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s1": [
          "comprehend languages",
          "identify"
        ],
        "s2": [
          "borrowed knowledge",
          "locate object"
        ],
        "s3": [
          "speak with dead",
          "spirit guardians"
        ],
        "s4": [
          "arcane eye",
          "stone shape"
        ],
        "s5": [
          "flame strike",
          "legend lore"
        ]
      }
    }
  ],
  "fromFeature": {
    "additionalSpells": true,
    "feats": true
  }
},
{
  "name": "Mage of High Sorcery",
  "source": "DSotDQ",
  "prerequisite": [
    {
      "campaign": [
        "Dragonlance"
      ]
    }
  ],
  "feats": [
    {
      "initiate of high sorcery": true
    }
  ],
  "skillProficiencies": [
    {
      "arcana": true,
      "history": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "fromFeature": {
    "feats": true
  }
},
{
  "name": "Marine",
  "source": "GoS",
  "skillProficiencies": [
    {
      "athletics": true,
      "survival": true
    }
  ],
  "toolProficiencies": [
    {
      "vehicles (water)": true,
      "vehicles (land)": true
    }
  ]
},
{
  "name": "Mercenary Veteran",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "athletics": true,
      "persuasion": true
    }
  ],
  "toolProficiencies": [
    {
      "gaming set": true,
      "vehicles (land)": true
    }
  ]
},
{
  "name": "Noble",
  "source": "PHB",
  "skillProficiencies": [
    {
      "history": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "gaming set": true
    }
  ]
},
{
  "name": "Orzhov Representative",
  "source": "GGR",
  "skillProficiencies": [
    {
      "intimidation": true,
      "religion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "friends",
          "guidance"
        ],
        "s1": [
          "command",
          "illusory script"
        ],
        "s2": [
          "enthrall",
          "ray of enfeeblement",
          "zone of truth"
        ],
        "s3": [
          "bestow curse",
          "speak with dead",
          "spirit guardians"
        ],
        "s4": [
          "blight",
          "death ward",
          "leomund's secret chest"
        ],
        "s5": [
          "geas"
        ]
      }
    }
  ]
},
{
  "name": "Outlander",
  "source": "PHB",
  "skillProficiencies": [
    {
      "athletics": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "musical instrument": true
    }
  ]
},
{
  "name": "Plaintiff",
  "source": "AI",
  "skillProficiencies": [
    {
      "medicine": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ]
},
{
  "name": "Prismari Student",
  "source": "SCC",
  "feats": [
    {
      "strixhaven initiate": true
    }
  ],
  "skillProficiencies": [
    {
      "acrobatics": true,
      "performance": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "anyArtisansTool",
          "musical instrument"
        ]
      }
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s1": [
          "chromatic orb",
          "thunderwave"
        ],
        "s2": [
          "flaming sphere",
          "kinetic jaunt"
        ],
        "s3": [
          "haste",
          "water walk"
        ],
        "s4": [
          "freedom of movement",
          "wall of fire"
        ],
        "s5": [
          "cone of cold",
          "conjure elemental"
        ]
      }
    }
  ],
  "fromFeature": {
    "additionalSpells": true,
    "feats": true
  }
},
{
  "name": "Quandrix Student",
  "source": "SCC",
  "feats": [
    {
      "strixhaven initiate": true
    }
  ],
  "skillProficiencies": [
    {
      "arcana": true,
      "nature": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s1": [
          "entangle",
          "guiding bolt"
        ],
        "s2": [
          "enlarge/reduce",
          "vortex warp"
        ],
        "s3": [
          "aura of vitality",
          "haste"
        ],
        "s4": [
          "control water",
          "freedom of movement"
        ],
        "s5": [
          "circle of power",
          "passwall"
        ]
      }
    }
  ],
  "fromFeature": {
    "additionalSpells": true,
    "feats": true
  }
},
{
  "name": "Rakdos Cultist",
  "source": "GGR",
  "skillProficiencies": [
    {
      "acrobatics": true,
      "performance": true
    }
  ],
  "languageProficiencies": [
    {
      "choose": {
        "from": [
          "abyssal",
          "giant"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "musical instrument": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "fire bolt",
          "vicious mockery"
        ],
        "s1": [
          "burning hands",
          "dissonant whispers",
          "hellish rebuke"
        ],
        "s2": [
          "crown of madness",
          "enthrall",
          "flaming sphere"
        ],
        "s3": [
          "fear",
          "haste"
        ],
        "s4": [
          "confusion",
          "wall of fire"
        ],
        "s5": [
          "dominate person"
        ]
      }
    }
  ]
},
{
  "name": "Rival Intern",
  "source": "AI",
  "skillProficiencies": [
    {
      "history": true,
      "investigation": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ]
},
{
  "name": "Sage",
  "source": "PHB",
  "skillProficiencies": [
    {
      "arcana": true,
      "history": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ]
},
{
  "name": "Sailor",
  "source": "PHB",
  "skillProficiencies": [
    {
      "athletics": true,
      "perception": true
    }
  ],
  "toolProficiencies": [
    {
      "navigator's tools": true,
      "vehicles (water)": true
    }
  ]
},
{
  "name": "Selesnya Initiate",
  "source": "GGR",
  "skillProficiencies": [
    {
      "nature": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "choose": {
        "from": [
          "elvish",
          "other",
          "sylvan"
        ]
      }
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "anyArtisansTool",
          "musical instrument"
        ]
      }
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "druidcraft",
          "friends"
        ],
        "s1": [
          "animal friendship",
          "charm person"
        ],
        "s2": [
          "aid",
          "animal messenger",
          "calm emotions",
          "warding bond"
        ],
        "s3": [
          "plant growth",
          "speak with plants"
        ],
        "s4": [
          "aura of life",
          "conjure minor elementals"
        ],
        "s5": [
          "awaken",
          "commune with nature"
        ]
      }
    }
  ]
},
{
  "name": "Shipwright",
  "source": "GoS",
  "skillProficiencies": [
    {
      "history": true,
      "perception": true
    }
  ],
  "toolProficiencies": [
    {
      "carpenter's tools": true,
      "vehicles (water)": true
    }
  ]
},
{
  "name": "Silverquill Student",
  "source": "SCC",
  "feats": [
    {
      "strixhaven initiate": true
    }
  ],
  "skillProficiencies": [
    {
      "intimidation": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s1": [
          "dissonant whispers",
          "silvery barbs"
        ],
        "s2": [
          "calm emotions",
          "darkness"
        ],
        "s3": [
          "beacon of hope",
          "daylight"
        ],
        "s4": [
          "compulsion",
          "confusion"
        ],
        "s5": [
          "dominate person",
          "rary's telepathic bond"
        ]
      }
    }
  ],
  "fromFeature": {
    "additionalSpells": true,
    "feats": true
  }
},
{
  "name": "Simic Scientist",
  "source": "GGR",
  "skillProficiencies": [
    {
      "arcana": true,
      "medicine": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 2
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s0": [
          "acid splash",
          "druidcraft"
        ],
        "s1": [
          "detect poison and disease",
          "expeditious retreat",
          "jump"
        ],
        "s2": [
          "alter self",
          "enhance ability",
          "enlarge/reduce"
        ],
        "s3": [
          "gaseous form",
          "water breathing",
          "wind wall"
        ],
        "s4": [
          "freedom of movement",
          "polymorph"
        ],
        "s5": [
          "creation"
        ]
      }
    }
  ]
},
{
  "name": "Smuggler",
  "source": "GoS",
  "skillProficiencies": [
    {
      "athletics": true,
      "deception": true
    }
  ],
  "toolProficiencies": [
    {
      "vehicles (water)": true
    }
  ]
},
{
  "name": "Soldier",
  "source": "PHB",
  "skillProficiencies": [
    {
      "athletics": true,
      "intimidation": true
    }
  ],
  "toolProficiencies": [
    {
      "gaming set": true,
      "vehicles (land)": true
    }
  ]
},
{
  "name": "Urban Bounty Hunter",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "deception",
          "insight",
          "persuasion",
          "stealth"
        ],
        "count": 2
      }
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "gaming set",
          "musical instrument",
          "thieves' tools"
        ],
        "count": 2
      }
    }
  ]
},
{
  "name": "Urchin",
  "source": "PHB",
  "skillProficiencies": [
    {
      "sleight of hand": true,
      "stealth": true
    }
  ],
  "toolProficiencies": [
    {
      "disguise kit": true,
      "thieves' tools": true
    }
  ]
},
{
  "name": "Uthgardt Tribe Member",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "athletics": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "musical instrument",
          "anyArtisansTool"
        ]
      }
    }
  ]
},
{
  "name": "Volstrucker Agent",
  "source": "EGW",
  "skillProficiencies": [
    {
      "deception": true,
      "stealth": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "poisoner's kit": true
    }
  ]
},
{
  "name": "Waterdhavian Noble",
  "source": "SCAG",
  "skillProficiencies": [
    {
      "history": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "gaming set",
          "musical instrument"
        ]
      }
    }
  ]
},
{
  "name": "Wildspacer",
  "source": "AAG",
  "feats": [
    {
      "tough": true
    }
  ],
  "skillProficiencies": [
    {
      "athletics": true,
      "survival": true
    }
  ],
  "toolProficiencies": [
    {
      "navigator's tools": true,
      "vehicles (space)": true
    }
  ],
  "fromFeature": {
    "feats": true
  }
},
{
  "name": "Witchlight Hand",
  "source": "WBtW",
  "skillProficiencies": [
    {
      "performance": true,
      "sleight of hand": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "choose": {
        "from": [
          "disguise kit",
          "musical instrument"
        ]
      }
    }
  ]
},
{
  "name": "Witherbloom Student",
  "source": "SCC",
  "feats": [
    {
      "strixhaven initiate": true
    }
  ],
  "skillProficiencies": [
    {
      "nature": true,
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "herbalism kit": true
    }
  ],
  "additionalSpells": [
    {
      "expanded": {
        "s1": [
          "cure wounds",
          "inflict wounds"
        ],
        "s2": [
          "lesser restoration",
          "wither and bloom"
        ],
        "s3": [
          "revivify",
          "vampiric touch"
        ],
        "s4": [
          "blight",
          "death ward"
        ],
        "s5": [
          "antilife shell",
          "greater restoration"
        ]
      }
    }
  ],
  "fromFeature": {
    "additionalSpells": true,
    "feats": true
  }
}
];