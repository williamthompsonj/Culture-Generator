"use strict";
database.races = [
{
  "name": "Aarakocra",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "fly": true
  },
  "traitTags": [
    "Natural Weapon"
  ],
  "additionalSpells": [
    {
      "innate": {
        "3": [
          "gust of wind"
        ]
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Flight",
      "entries": [
        "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
      ]
    },
    {
      "name": "Talons",
      "entries": [
        "You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Wind Caller",
      "entries": [
        "Starting at 3rd level, you can cast the {@spell gust of wind} spell with this trait, without requiring a material component. Once you cast the spell with this trait, you can't do so again until you finish a long rest. You can also cast the spell using any spell slots you have of 2nd level or higher.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for when you cast {@spell gust of wind} with this trait (choose when you select this race)."
      ]
    }
  ]
},
{
  "name": "Aasimar",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 180
  },
  "darkvision": 60,
  "resist": [
    "necrotic",
    "radiant"
  ],
  "additionalSpells": [
    {
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "1": [
          "light#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Celestial Resistance",
      "entries": [
        "You have resistance to necrotic damage and radiant damage."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Healing Hands",
      "entries": [
        "As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can't use it again until you finish a long rest."
      ]
    },
    {
      "name": "Light Bearer",
      "entries": [
        "You know the {@spell light} cantrip. Charisma is your spellcasting ability for it."
      ]
    },
    {
      "name": "Celestial Revelation",
      "entries": [
        "When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a bonus action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation below, you can't use it again until you finish a long rest.",
        {
          "items": [
            {
              "name": "Necrotic Shroud",
              "entry": "Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become {@condition frightened} of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
            },
            {
              "name": "Radiant Consumption",
              "entry": "Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
            },
            {
              "name": "Radiant Soul",
              "entry": "Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus."
            }
          ],
          "style": "list-hang-notitle"
        }
      ]
    }
  ]
},
{
  "name": "Autognome",
  "source": "AAG",
  "lineage": "VRGR",
  "creatureTypes": [
    "construct"
  ],
  "size": [
    "S"
  ],
  "speed": 30,
  "traitTags": [
    "Improved Resting",
    "Natural Armor"
  ],
  "toolProficiencies": [
    {
      "any": 2
    }
  ],
  "resist": [
    "poison"
  ],
  "conditionImmune": [
    "disease"
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Construct."
      ]
    },
    {
      "name": "Armored Casing",
      "entries": [
        "You are encased in thin metal or some other durable material. While you aren't wearing armor, your base Armor Class is 13 + your Dexterity modifier."
      ]
    },
    {
      "name": "Built for Success",
      "entries": [
        "You can add a {@dice d4} to one attack roll, ability check, or saving throw you make, and you can do so after seeing the {@dice d20} roll but before the effects of the roll are resolved. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Healing Machine",
      "entries": [
        "If the {@spell mending} spell is cast on you, you can spend a Hit Die, roll it, and regain a number of hit points equal to the roll plus your Constitution modifier (minimum of 1 hit point).",
        "In addition, your creator designed you to benefit from several spells that preserve life but that normally don't affect Constructs: {@spell cure wounds}, {@spell healing word}, {@spell mass cure wounds}, {@spell mass healing word}, and {@spell spare the dying}."
      ]
    },
    {
      "name": "Mechanical Nature",
      "entries": [
        "You have resistance to poison damage and immunity to disease, and you have advantage on saving throws against being {@condition paralyzed} or {@condition poisoned}. You don't need to eat, drink, or breathe."
      ]
    },
    {
      "name": "Sentry's Rest",
      "entries": [
        "When you take a long rest, you spend at least 6 hours in an inactive, motionless state, instead of sleeping. In this state, you appear inert, but you remain conscious."
      ]
    },
    {
      "name": "Specialized Design",
      "entries": [
        "You gain two tool proficiencies of your choice, selected from the {@book Player's Handbook|PHB}."
      ]
    }
  ]
},
{
  "name": "Bugbear",
  "source": "ERLW",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "dex": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 72,
    "heightMod": "2d12",
    "baseWeight": 200,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 16,
    "max": 80
  },
  "darkvision": 60,
  "traitTags": [
    "Monstrous Race",
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "stealth": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "goblin": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Bugbears reach adulthood at age 16 and live up to 80 years."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Bugbears live on the fringes of society even in Darguun, where they value self-sufficiency and violence. They are generally chaotic, organizing in loose tribes under charismatic and powerful leaders."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Long-Limbed",
      "entries": [
        "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Sneaky",
      "entries": [
        "You are proficient in the {@skill Stealth} skill."
      ]
    },
    {
      "name": "Surprise Attack",
      "entries": [
        "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra {@dice 2d6} damage to it. You can use this trait only once per combat."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Goblin."
      ]
    }
  ]
},
{
  "name": "Centaur",
  "source": "GGR",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "M"
  ],
  "speed": 40,
  "ability": [
    {
      "str": 2,
      "wis": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 72,
    "heightMod": "1d10",
    "baseWeight": 600,
    "weightMod": "2d12"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "traitTags": [
    "Natural Weapon",
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "medicine",
          "nature",
          "survival"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "sylvan": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Centaurs mature and age at about the same rate as humans."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Centaurs are inclined toward neutrality. Those who join the Selesnya are more often neutral good, while those who join the Gruul are typically chaotic neutral."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Centaurs stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers. Your size is Medium."
      ]
    },
    {
      "name": "Fey",
      "entries": [
        "Your creature type is fey, rather than humanoid."
      ]
    },
    {
      "name": "Charge",
      "entries": [
        "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves."
      ]
    },
    {
      "name": "Hooves",
      "entries": [
        "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Equine Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push or drag.",
        "In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot."
      ]
    },
    {
      "name": "Survivor",
      "entries": [
        "You have proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, or {@skill Survival}."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Sylvan. Sylvan is widely spoken in the Selesnya Conclave, for it is rich in vocabulary to describe natural phenomena and spiritual forces."
      ]
    }
  ]
},
{
  "name": "Changeling",
  "source": "ERLW",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "cha": 2,
      "choose": {
        "from": [
          "str",
          "dex",
          "con",
          "int",
          "wis"
        ],
        "count": 1
      }
    }
  ],
  "heightAndWeight": {
    "baseHeight": 61,
    "heightMod": "2d4",
    "baseWeight": 115,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "deception",
          "insight",
          "intimidation",
          "persuasion"
        ],
        "count": 2
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "anyStandard": 2
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Changelings mature slightly faster than humans but share a similar lifespan-typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Changelings tend toward pragmatic neutrality, and few changelings embrace evil."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium."
      ]
    },
    {
      "name": "Shapechanger",
      "entries": [
        "As an action, you can change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of a creature you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.",
        "You stay in the new form until you use an action to revert to your true form or until you die."
      ]
    },
    {
      "name": "Changeling Instincts",
      "entries": [
        "You gain proficiency with two of the following skills of your choice: {@skill Deception}, {@skill Insight}, {@skill Intimidation}, and {@skill Persuasion}."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and two other languages of your choice."
      ]
    }
  ]
},
{
  "name": "Dhampir",
  "source": "VRGR",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": {
    "walk": 35,
    "climb": true
  },
  "darkvision": 60,
  "traitTags": [
    "Natural Weapon"
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you gain this lineage."
      ]
    },
    {
      "name": "Ancestral Legacy",
      "entries": [
        "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
        "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray."
      ]
    },
    {
      "name": "Deathless Nature",
      "entries": [
        "You don't need to breathe."
      ]
    },
    {
      "name": "Spider Climb",
      "entries": [
        "You have a climbing speed equal to your walking speed. In addition, at 3rd level, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free."
      ]
    },
    {
      "name": "Vampiric Bite",
      "entries": [
        "Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals {@damage 1d4} piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite.",
        "When you attack with this bite and hit a creature that isn't a Construct or an Undead, you can empower yourself in one of the following ways of your choice:",
        {
          "items": [
            "You regain hit points equal to the piercing damage dealt by the bite.",
            "You gain a bonus to the next ability check or attack roll you make; the bonus equals the piercing damage dealt by the bite"
          ]
        },
        "You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Dragonborn",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "cha": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 66,
    "heightMod": "2d8",
    "baseWeight": 175,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 15,
    "max": 80
  },
  "traitTags": [
    "Uncommon Race"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "draconic": true
    }
  ],
  "resist": [
    {
      "choose": {
        "from": [
          "acid",
          "cold",
          "fire",
          "lightning",
          "poison"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Draconic Ancestry",
      "entries": [
        "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
        {
          "caption": "Draconic Ancestry",
          "colLabels": [
            "Dragon",
            "Damage Type",
            "Breath Weapon"
          ],
          "colStyles": [
            "col-3 text-center",
            "col-3 text-center",
            "col-6"
          ],
          "rows": [
            [
              "Black",
              "Acid",
              "5 by 30 ft. line (Dex. save)"
            ],
            [
              "Blue",
              "Lightning",
              "5 by 30 ft. line (Dex. save)"
            ],
            [
              "Brass",
              "Fire",
              "5 by 30 ft. line (Dex. save)"
            ],
            [
              "Bronze",
              "Lightning",
              "5 by 30 ft. line (Dex. save)"
            ],
            [
              "Copper",
              "Acid",
              "5 by 30 ft. line (Dex. save)"
            ],
            [
              "Gold",
              "Fire",
              "15 ft. cone (Dex. save)"
            ],
            [
              "Green",
              "Poison",
              "15 ft. cone (Con. save)"
            ],
            [
              "Red",
              "Fire",
              "15 ft. cone (Dex. save)"
            ],
            [
              "Silver",
              "Cold",
              "15 ft. cone (Con. save)"
            ],
            [
              "White",
              "Cold",
              "15 ft. cone (Con. save)"
            ]
          ]
        }
      ]
    },
    {
      "name": "Breath Weapon",
      "entries": [
        "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.",
        "When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes {@dice 2d6} damage on a failed save, and half as much damage on a successful one. The damage increases to {@dice 3d6} at 6th level, {@dice 4d6} at 11th level, and {@dice 5d6} at 16th level.",
        "After you use your breath weapon, you can't use it again until you complete a short or long rest."
      ]
    },
    {
      "name": "Damage Resistance",
      "entries": [
        "You have resistance to the damage type associated with your draconic ancestry."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants."
      ]
    }
  ]
},
{
  "name": "Dwarf",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 25,
  "ability": [
    {
      "con": 2
    }
  ],
  "age": {
    "mature": 20,
    "max": 350
  },
  "darkvision": 60,
  "traitTags": [
    "Tool Proficiency"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "dwarvish": true
    }
  ],
  "weaponProficiencies": [
    {
      "battleaxe|phb": true,
      "handaxe|phb": true,
      "light hammer|phb": true,
      "warhammer|phb": true
    }
  ],
  "resist": [
    "poison"
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Speed",
      "entries": [
        "Your speed is not reduced by wearing heavy armor."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Dwarven Resilience",
      "entries": [
        "You have advantage on saving throws against poison, and you have resistance against poison damage."
      ]
    },
    {
      "name": "Dwarven Combat Training",
      "entries": [
        "You have proficiency with the {@item battleaxe|phb}, {@item handaxe|phb}, {@item light hammer|phb}, and {@item warhammer|phb}."
      ]
    },
    {
      "name": "Tool Proficiency",
      "entries": [
        "You gain proficiency with the artisan's tools of your choice: {@item Smith's tools|phb}, {@item brewer's supplies|phb}, or {@item mason's tools|phb}."
      ]
    },
    {
      "name": "Stonecunning",
      "entries": [
        "Whenever you make an Intelligence ({@skill History}) check related to the origin of stonework, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
      ]
    }
  ]
},
{
  "name": "Dwarf",
  "subrace": "Duergar",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "dwarf"
  ],
  "size": [
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 350
  },
  "darkvision": 120,
  "resist": [
    "poison"
  ],
  "additionalSpells": [
    {
      "innate": {
        "3": {
          "daily": {
            "1": [
              "enlarge/reduce"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "invisibility"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered a dwarf for any prerequisite or effect that requires you to be a dwarf."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Duergar Magic",
      "entries": [
        "Starting at 3rd level, you can cast the {@spell enlarge/reduce} spell on yourself with this trait, without requiring a material component. Starting at 5th level, you can also cast the {@spell invisibility} spell on yourself with this trait, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      ]
    },
    {
      "name": "Dwarven Resilience",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition poisoned} condition on yourself. You also have resistance to poison damage."
      ]
    },
    {
      "name": "Psionic Fortitude",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} or {@condition stunned} condition on yourself."
      ]
    }
  ]
},
{
  "name": "Eladrin",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid",
    "elf"
  ],
  "creatureTypeTags": [
    "elf"
  ],
  "size": [
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 750
  },
  "darkvision": 60,
  "traitTags": [
    "Improved Resting",
    "Tool Proficiency",
    "Weapon Proficiency"
  ],
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "entries": [
    "{@i Choose your eladrin's season: autumn, winter, spring, or summer. When finishing a long rest, you can change your season. See the \"Info\" tab for more information.}",
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
      ]
    },
    {
      "name": "Fey Step",
      "entries": [
        "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        "When you reach 3rd level, your Fey Step gain an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race):",
        {
          "items": [
            {
              "name": "Autumn",
              "entry": "Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you for 1 minute, or until you or your companions deal any damage to the creatures."
            },
            {
              "name": "Winter",
              "entry": "When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be {@condition frightened} of you until the end of your next turn."
            },
            {
              "name": "Spring",
              "entry": "When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you."
            },
            {
              "name": "Summer",
              "entry": "Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your proficiency bonus."
            }
          ],
          "style": "list-hang-notitle"
        }
      ]
    },
    {
      "name": "Keen Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Trance",
      "entries": [
        "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        "Whenever you finish this trance, you can change your season, and you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest."
      ]
    }
  ]
},
{
  "name": "Elf",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "dex": 2
    }
  ],
  "age": {
    "mature": 100,
    "max": 750
  },
  "darkvision": 60,
  "traitTags": [
    "Improved Resting"
  ],
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "elvish": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Keen Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
      ]
    },
    {
      "name": "Trance",
      "entries": [
        "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
        "{@note If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.}"
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
      ]
    }
  ]
},
{
  "name": "Elf",
  "subrace": "Astral",
  "source": "AAG",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "elf"
  ],
  "size": [
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 750
  },
  "darkvision": 60,
  "traitTags": [
    "Improved Resting"
  ],
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "additionalSpells": [
    {
      "known": {
        "1": [
          "dancing lights#c"
        ]
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    },
    {
      "known": {
        "1": [
          "light#c"
        ]
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    },
    {
      "known": {
        "1": [
          "sacred flame#c"
        ]
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
      ]
    },
    {
      "name": "Astral Fire",
      "entries": [
        "You know one of the following cantrips of your choice: {@spell dancing lights}, {@spell light}, or {@spell sacred flame}. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this race)."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
      ]
    },
    {
      "name": "Keen Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Starlight Step",
      "entries": [
        "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Astral Trance",
      "entries": [
        "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious.",
        "Whenever you finish this trance, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the {@book Player's Handbook|PHB}. You mystically acquire these proficiencies by drawing them from shared elven memory and the experiences of entities on the Astral Plane, and you retain them until you finish your next long rest."
      ]
    }
  ]
},
{
  "name": "Fairy",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "S"
  ],
  "speed": {
    "walk": 30,
    "fly": true
  },
  "additionalSpells": [
    {
      "innate": {
        "3": {
          "daily": {
            "1": [
              "faerie fire"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "enlarge/reduce"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "1": [
          "druidcraft#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Fey."
      ]
    },
    {
      "name": "Fairy Magic",
      "entries": [
        "You know the {@spell druidcraft} cantrip. Starting at 3rd level, you can cast the {@spell faerie fire} spell with this trait. Starting at 5th level, you can also cast the {@spell enlarge/reduce} spell with this trait. Once you cast {@spell faerie fire} or {@spell enlarge/reduce} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      ]
    },
    {
      "name": "Flight",
      "entries": [
        "Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
      ]
    }
  ]
},
{
  "name": "Firbolg",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 500
  },
  "traitTags": [
    "Powerful Build"
  ],
  "additionalSpells": [
    {
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "innate": {
        "1": [
          "detect magic",
          "disguise self"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Firbolg Magic",
      "entries": [
        "You can cast {@spell detect magic} and {@spell disguise self} spells with this trait. When you use this version of {@spell disguise self}, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      ]
    },
    {
      "name": "Hidden Step",
      "entries": [
        "As a bonus action, you can magically turn {@condition invisible} until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Speech of Beast and Leaf",
      "entries": [
        "You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them."
      ]
    }
  ]
},
{
  "name": "Genasi",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 120
  },
  "darkvision": 60,
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    }
  ]
},
{
  "name": "Giff",
  "source": "AAG",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "swim": true
  },
  "traitTags": [
    "Powerful Build"
  ],
  "weaponProficiencies": [
    {
      "firearms": true
    }
  ],
  "entries": [
    {
      "name": "Astral Spark",
      "entries": [
        "Your psychic connection to the Astral Plane enables you to mystically access a spark of divine power, which you can channel through your weapons. When you hit a target with a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, you can cause the target to take extra force damage equal to your proficiency bonus.",
        "You can use this trait a number of times equal to your proficiency bonus, but you can use it no more than once per turn. You regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Firearms Mastery",
      "entries": [
        "You have a mystical connection to firearms that traces back to the gods of the giff, who delighted in such weapons. You have proficiency with all firearms and ignore the loading property of any firearm. In addition, attacking at long range with a firearm doesn't impose disadvantage on your attack roll."
      ]
    },
    {
      "name": "Hippo Build",
      "entries": [
        "You have advantage on Strength-based ability checks and Strength saving throws. In addition, you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    }
  ]
},
{
  "name": "Gith",
  "source": "MTF",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "int": 1
    }
  ],
  "age": {
    "mature": 20,
    "max": 100
  },
  "languageProficiencies": [
    {
      "common": true,
      "other": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Gith reach adulthood in their late teens and live for about a century."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Gith are taller and leaner than humans, with most a slender 6 feet in height."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Gith."
      ]
    }
  ]
},
{
  "name": "Githyanki",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "traitTags": [
    "Weapon Proficiency"
  ],
  "skillProficiencies": [
    {
      "any": 1
    }
  ],
  "toolProficiencies": [
    {
      "any": 1
    }
  ],
  "resist": [
    "psychic"
  ],
  "additionalSpells": [
    {
      "innate": {
        "3": {
          "daily": {
            "1": [
              "jump"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "misty step"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "1": [
          "mage hand#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Astral Knowledge",
      "entries": [
        "You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest."
      ]
    },
    {
      "name": "Githyanki Psionics",
      "entries": [
        "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
        "Starting at 3rd level, you can cast the {@spell jump} spell with this trait. Starting at 5th level, you can also cast {@spell misty step} with it. Once you cast {@spell jump} or {@spell misty step} with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait."
      ]
    },
    {
      "name": "Psychic Resilience",
      "entries": [
        "You have resistance to psychic damage."
      ]
    }
  ]
},
{
  "name": "Githzerai",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "resist": [
    "psychic"
  ],
  "additionalSpells": [
    {
      "innate": {
        "3": {
          "daily": {
            "1": [
              "shield"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "detect thoughts"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "1": [
          "mage hand#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Githzerai Psionics",
      "entries": [
        "You know the {@spell mage hand} cantrip, and the hand is {@condition invisible} when you cast the cantrip with this trait.",
        "Starting at 3rd level, you can cast the {@spell shield} spell with this trait. Starting at 5th level, you can also cast the {@spell detect thoughts} spell with it. Once you cast {@spell shield} or {@spell detect thoughts} spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race). None of these spells require spell components when you cast them with this trait."
      ]
    },
    {
      "name": "Mental Discipline",
      "entries": [
        "Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the {@condition charmed} and {@condition frightened} conditions on yourself."
      ]
    },
    {
      "name": "Psychic Resilience",
      "entries": [
        "You have resistance to psychic damage."
      ]
    }
  ]
},
{
  "name": "Gnome",
  "source": "PHB",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "int": 2
    }
  ],
  "heightAndWeight": {
    "baseHeight": 35,
    "heightMod": "2d4",
    "baseWeight": 35
  },
  "age": {
    "mature": 40,
    "max": 500
  },
  "darkvision": 60,
  "traitTags": [
    "Uncommon Race"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "gnomish": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Gnome Cunning",
      "entries": [
        "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world."
      ]
    }
  ]
},
{
  "name": "Gnome",
  "subrace": "Deep",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "gnome"
  ],
  "size": [
    "S"
  ],
  "speed": 30,
  "age": {
    "max": 500
  },
  "darkvision": 120,
  "traitTags": [
    "Magic Resistance"
  ],
  "additionalSpells": [
    {
      "innate": {
        "3": {
          "daily": {
            "1": [
              "disguise self"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "nondetection"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered a gnome for any prerequisite or effect that requires you to be a gnome."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Gift of the Svirfneblin",
      "entries": [
        "Starting at 3rd level, you can cast the {@spell disguise self} spell with this trait. Starting at 5th level, you can also cast the {@spell nondetection} spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these using spell slots you have of the appropriate level.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      ]
    },
    {
      "name": "Gnomish Magic Resistance",
      "entries": [
        "You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells."
      ]
    },
    {
      "name": "Svirfneblin Camouflage",
      "entries": [
        "When you make a Dexterity ({@skill Stealth}) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Goblin",
  "source": "ERLW",
  "_copy": {
    "name": "Goblin",
    "source": "VGM",
    "_mod": {
      "entries": [
        {
          "mode": "appendArr",
          "items": {
            "name": "Alignment",
            "entries": [
              "In Eberron, goblins are usually neutral. They tend to look out for themselves, preferably without drawing unwanted attention from any larger, more powerful people."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Size",
          "items": {
            "name": "Size",
            "entries": [
              "Your size is Small."
            ]
          }
        }
      ]
    },
    "_preserve": {
      "reprintedAs": true
    }
  },
  "size": [
    "S"
  ],
  "traitTags": null
},
{
  "name": "Goblin",
  "source": "GGR",
  "_copy": {
    "name": "Goblin",
    "source": "VGM",
    "_mod": {
      "entries": [
        {
          "mode": "appendArr",
          "items": {
            "name": "Alignment",
            "entries": [
              "Goblins are typically neutral evil, as they care only for their own needs. A few goblins might tend toward good or neutrality, but only rarely."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Age",
          "items": {
            "name": "Age",
            "entries": [
              "Goblins reach adulthood around age 8. They age noticeably faster than humans, and though few goblins live to old age, the most cautious rarely live longer than 60 years."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Languages",
          "items": {
            "name": "Languages",
            "entries": [
              "You can speak, read, and write Common and Goblin. In Ravnica, Goblin is a simplistic language with a limited vocabulary and fluid rules of grammar, unsuited for any sophisticated conversation."
            ]
          }
        }
      ]
    },
    "_preserve": {
      "reprintedAs": true
    }
  },
  "traitTags": null
},
{
  "name": "Goblin",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "goblinoid"
  ],
  "size": [
    "S"
  ],
  "speed": 30,
  "darkvision": 60,
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
      ]
    },
    {
      "name": "Fury of the Small",
      "entries": [
        "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your proficiency bonus.",
        "You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn."
      ]
    },
    {
      "name": "Nimble Escape",
      "entries": [
        "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns."
      ]
    }
  ]
},
{
  "name": "Goblin",
  "source": "VGM",
  "size": [
    "S"
  ],
  "speed": 30,
  "ability": [
    {
      "dex": 2,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 41,
    "heightMod": "2d4",
    "baseWeight": 35
  },
  "age": {
    "mature": 8,
    "max": 60
  },
  "darkvision": 60,
  "traitTags": [
    "Monstrous Race"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "goblin": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Goblins reach adulthood at age 8 and live up to 60 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Goblins are between 3 and 4 feet tall and weigh between 40 and 80 pounds. Your size is Small."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Fury of the Small",
      "entries": [
        "When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Nimble Escape",
      "entries": [
        "You can take the {@action Disengage} or {@action Hide} action as a bonus action on each of your turns."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Goblin."
      ]
    }
  ]
},
{
  "name": "Goliath",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "traitTags": [
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "athletics": true
    }
  ],
  "resist": [
    "cold"
  ],
  "entries": [
    {
      "name": "Little Giant",
      "entries": [
        "You have proficiency in the {@skill Athletics} skill, and you count as one size larger when determining your carrying weight and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Mountain Born",
      "entries": [
        "You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you've never been to one. This includes elevations above 20,000 feet."
      ]
    },
    {
      "name": "Stone's Endurance",
      "entries": [
        "You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a {@dice d12}. Add your Constitution modifier to the number rolled and reduce the damage by that total.",
        "You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Goliath",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 74,
    "heightMod": "2d10",
    "baseWeight": 200,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "traitTags": [
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "athletics": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "giant": true
    }
  ],
  "resist": [
    "cold"
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Natural Athlete",
      "entries": [
        "You have proficiency in the {@skill Athletics} skill."
      ]
    },
    {
      "name": "Stone's Endurance",
      "entries": [
        "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a {@dice d12}. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Mountain Born",
      "entries": [
        "You have resistance to cold damage. You're also acclimated to high altitude, including elevations above 20,000 feet."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Giant."
      ]
    }
  ]
},
{
  "name": "Hadozee",
  "source": "AAG",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": {
    "walk": 30,
    "climb": true
  },
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Dexterous Feet",
      "entries": [
        "As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object."
      ]
    },
    {
      "name": "Glide",
      "entries": [
        "When you fall at least 10 feet above the ground, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take 0 damage from the fall. You determine the direction of the glide."
      ]
    },
    {
      "name": "Hadozee Dodge",
      "entries": [
        "The magic that runs in your veins heightens your natural defenses. When you take damage, you can use your reaction to roll a {@dice d6}. Add your proficiency bonus to the number rolled, and reduce the damage you take by an amount equal to that total (minimum of 0 damage).",
        "You can use this trait a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Half-Elf",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "cha": 2,
      "choose": {
        "from": [
          "str",
          "dex",
          "con",
          "int",
          "wis"
        ],
        "count": 2
      }
    }
  ],
  "heightAndWeight": {
    "baseHeight": 57,
    "heightMod": "2d8",
    "baseWeight": 110,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 180
  },
  "darkvision": 60,
  "traitTags": [
    "Uncommon Race"
  ],
  "skillProficiencies": [
    {
      "any": 2
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "elvish": true,
      "anyStandard": 1
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
      ]
    },
    {
      "name": "Skill Versatility",
      "entries": [
        "You gain proficiency in two skills of your choice."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common, Elvish, and one extra language of your choice."
      ]
    }
  ]
},
{
  "name": "Half-Orc",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 58,
    "heightMod": "2d10",
    "baseWeight": 140,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 14,
    "max": 75
  },
  "darkvision": 60,
  "traitTags": [
    "Uncommon Race"
  ],
  "skillProficiencies": [
    {
      "intimidation": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "orc": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Menacing",
      "entries": [
        "You gain proficiency in the {@skill Intimidation} skill."
      ]
    },
    {
      "name": "Relentless Endurance",
      "entries": [
        "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
      ]
    },
    {
      "name": "Savage Attacks",
      "entries": [
        "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script."
      ]
    }
  ]
},
{
  "name": "Halfling",
  "source": "PHB",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "dex": 2
    }
  ],
  "heightAndWeight": {
    "baseHeight": 31,
    "heightMod": "2d4",
    "baseWeight": 35
  },
  "age": {
    "mature": 20,
    "max": 250
  },
  "languageProficiencies": [
    {
      "common": true,
      "halfling": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small."
      ]
    },
    {
      "name": "Lucky",
      "entries": [
        "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
      ]
    },
    {
      "name": "Brave",
      "entries": [
        "You have advantage on saving throws against being {@condition frightened}."
      ]
    },
    {
      "name": "Halfling Nimbleness",
      "entries": [
        "You can move through the space of any creature that is of a size larger than yours."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling."
      ]
    }
  ]
},
{
  "name": "Harengon",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Hare-Trigger",
      "entries": [
        "You can add your proficiency bonus to your initiative rolls."
      ]
    },
    {
      "name": "Leporine Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Lucky Footwork",
      "entries": [
        "When you fail a Dexterity saving throw, you can use your reaction to roll a {@dice d4} and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're {@condition prone} or your speed is 0."
      ]
    },
    {
      "name": "Rabbit Hop",
      "entries": [
        "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Harengon",
  "source": "WBtW",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Hare-Trigger",
      "entries": [
        "You can add your proficiency bonus to your initiative rolls."
      ]
    },
    {
      "name": "Leporine Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Lucky Footwork",
      "entries": [
        "When you fail a Dexterity saving throw, you can use your reaction to roll a {@dice d4} and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're {@condition prone} or your speed is 0."
      ]
    },
    {
      "name": "Rabbit Hop",
      "entries": [
        "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Hexblood",
  "source": "VRGR",
  "lineage": "VRGR",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "skillProficiencies": [
    {
      "any": 2
    }
  ],
  "additionalSpells": [
    {
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "1": [
          "disguise self",
          "hex"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Fey."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you gain this lineage."
      ]
    },
    {
      "name": "Ancestral Legacy",
      "entries": [
        "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
        "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray."
      ]
    },
    {
      "name": "Eerie Token",
      "entries": [
        "As a bonus action, you can harmlessly remove a lock of your hair, one of your nails, or one of your teeth. This token is imbued with magic until you finish a long rest. While the token is imbued in this way, you can take these actions:",
        {
          "style": "list-hang-notitle",
          "items": [
            {
              "name": "Telepathic Message",
              "entry": "As an action, you can send a telepathic message to the creature holding or carrying the token, as long as you are within 10 miles of it. The message can contain up to twenty-five words."
            },
            {
              "name": "Remote Viewing",
              "entry": "If you are within 10 miles of the token, you can enter a trance as an action. The trance lasts for 1 minute, but it ends early if you dismiss it (no action required) or are {@condition incapacitated}. During this trance, you can see and hear from the token as if you were located where it is. While you are using your senses at the token's location, you are {@condition blinded} and {@condition deafened} in regard to your own surroundings. When the trance ends, the token is harmlessly destroyed."
            }
          ]
        },
        "Once you create a token using this feature, you can't do so again until you finish a long rest, at which point your missing part regrows."
      ]
    },
    {
      "name": "Hex Magic",
      "entries": [
        "You can cast the {@spell disguise self} and {@spell hex} spells with this trait. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose the ability when you gain this lineage).",
        {
          "name": "Becoming a Hag",
          "entries": [
            "Hags can undertake a ritual to irreversibly transform a hexblood they created into a new hag, either one of their own kind or that embodies the hexblood's nature. This requires that both the hag and hexblood be in the same place and consent to the lengthy ritual-circumstances most hexbloods shun but might come to accept over the course of centuries. Once a hexblood undergoes this irreversible ritual, they emerge as a hag NPC no longer under the control of the hexblood's player, unless the DM rules otherwise."
          ]
        }
      ]
    }
  ]
},
{
  "name": "Hobgoblin",
  "source": "ERLW",
  "_copy": {
    "name": "Hobgoblin",
    "source": "VGM",
    "_mod": {
      "entries": [
        {
          "mode": "appendArr",
          "items": {
            "name": "Alignment",
            "entries": [
              "Hobgoblin society in Eberron is shaped by the ideal of a strict code of honor and rigid martial discipline. Most hobgoblins are lawful, tending toward harsh enforcement of their laws."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Size",
          "items": {
            "name": "Size",
            "entries": [
              "Your size is Medium."
            ]
          }
        }
      ]
    },
    "_preserve": {
      "reprintedAs": true
    }
  }
},
{
  "name": "Hobgoblin",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "goblinoid"
  ],
  "size": [
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid.You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
      ]
    },
    {
      "name": "Fey Gift",
      "entries": [
        "You can use this trait to take the {@action Help} action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.",
        "Starting at 3rd level, choose one of the options below each time you take the {@action Help} action with this trait:",
        {
          "items": [
            {
              "name": "Hospitality",
              "entry": "You and the creature you help each gain a number of temporary hit points equal to {@dice 1d6} plus your proficiency bonus."
            },
            {
              "name": "Passage",
              "entry": "You and the creature you help each increase your walking speeds by 10 feet until the start of your next turn."
            },
            {
              "name": "Spite",
              "entry": "Until the start of your next turn, the first time the creature you help hits a target with an attack roll, that target has disadvantage on the next attack roll it makes within the next minute."
            }
          ],
          "style": "list-hang-notitle"
        }
      ]
    },
    {
      "name": "Fortune from the Many",
      "entries": [
        "If you miss with an attack roll or fail an ability check or a saving throw, you can draw on your bonds of reciprocity to gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +3). You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Hobgoblin",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "con": 2,
      "int": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 56,
    "heightMod": "2d10",
    "baseWeight": 110,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "darkvision": 60,
  "traitTags": [
    "Monstrous Race"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "goblin": true
    }
  ],
  "weaponProficiencies": [
    {
      "choose": {
        "fromFilter": "type=martial weapon|miscellaneous=mundane",
        "count": 2
      }
    }
  ],
  "armorProficiencies": [
    {
      "light": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Hobgoblins mature at the same rate as humans and have lifespans similar in length to theirs."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Hobgoblins are between 5 and 6 feet tall and weigh between 150 and 200 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Martial Training",
      "entries": [
        "You are proficient with two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon} of your choice and with light armor."
      ]
    },
    {
      "name": "Saving Face",
      "entries": [
        "Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Goblin."
      ]
    }
  ]
},
{
  "name": "Human",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "heightAndWeight": {
    "baseHeight": 56,
    "heightMod": "2d10",
    "baseWeight": 110,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "languageProficiencies": [
    {
      "common": true,
      "anyStandard": 1
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Humans reach adulthood in their late teens and live less than a century."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."
      ]
    }
  ]
},
{
  "name": "Kalashtar",
  "source": "ERLW",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "wis": 2,
      "cha": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 64,
    "heightMod": "2d6",
    "baseWeight": 110,
    "weightMod": "1d6"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "languageProficiencies": [
    {
      "common": true,
      "other": true,
      "anyStandard": 1
    }
  ],
  "resist": [
    "psychic"
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Kalashtar mature and age at the same rate as humans."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all beings, but some kalashtar resist the virtuous influence of their spirit."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium."
      ]
    },
    {
      "name": "Dual Mind",
      "entries": [
        "You have advantage on all Wisdom saving throws."
      ]
    },
    {
      "name": "Mental Discipline",
      "entries": [
        "You have resistance to psychic damage."
      ]
    },
    {
      "name": "Mind Link",
      "entries": [
        "You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
        "When you're using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait's range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it."
      ]
    },
    {
      "name": "Severed from Dreams",
      "entries": [
        "Kalashtar sleep, but they don't connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like {@spell dream}, but not to spells and other magical effects that put you to sleep, like {@spell sleep}."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common, Quori, and one other language of your choice."
      ]
    }
  ]
},
{
  "name": "Kenku",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "skillProficiencies": [
    {
      "any": 2
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "Your size is Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Expert Duplication",
      "entries": [
        "When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate."
      ]
    },
    {
      "name": "Kenku Recall",
      "entries": [
        "Thanks to your supernaturally good memory, you have proficiency in two skills of your choice.",
        "Moreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the {@dice d20}. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Mimicry",
      "entries": [
        "You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom ({@skill Insight}) check against a DC of 8 + your proficiency bonus + your Charisma modifier."
      ]
    }
  ]
},
{
  "name": "Kenku",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "dex": 2,
      "wis": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 52,
    "heightMod": "2d8",
    "baseWeight": 50,
    "weightMod": "1d6"
  },
  "age": {
    "mature": 12,
    "max": 60
  },
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "acrobatics",
          "deception",
          "sleight of hand",
          "stealth"
        ],
        "count": 2
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "auran": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Kenku are around 5 feet tall and weigh between 90 and 120 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Expert Forgery",
      "entries": [
        "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects."
      ]
    },
    {
      "name": "Kenku Training",
      "entries": [
        "You are proficient in your choice of two of the following skills: {@skill Acrobatics}, {@skill Deception}, {@skill Stealth}, and {@skill Sleight of Hand}."
      ]
    },
    {
      "name": "Mimicry",
      "entries": [
        "You can mimic sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom ({@skill Insight}) check opposed by your Charisma ({@skill Deception}) check."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can read and write Common and Auran, but you can only speak using your Mimicry trait."
      ]
    }
  ]
},
{
  "name": "Kobold",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S"
  ],
  "speed": 30,
  "darkvision": 60,
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "arcana",
          "investigation",
          "medicine",
          "sleight of hand",
          "survival"
        ]
      }
    }
  ],
  "additionalSpells": [
    {
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "_": [
          {
            "choose": "level=0|class=Sorcerer",
            "count": 1
          }
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Draconic Cry",
      "entries": [
        "As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear you. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Kobold Legacy",
      "entries": [
        "Kobold's connections to dragons can manifest in unpredictable ways in an individual kobold. Choose one of the following legacy options for your kobold.",
        {
          "items": [
            {
              "name": "Craftiness",
              "entry": "You have proficiency in one of the following skills of your choice: {@skill Arcana}, {@skill Investigation}, {@skill Medicine}, {@skill Sleight of Hand}, or {@skill Survival}."
            },
            {
              "name": "Defiance",
              "entry": "You have advantage on saving throws to avoid or end the {@condition frightened} condition on yourself."
            },
            {
              "name": "Draconic Sorcery",
              "entry": "You know one {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race)."
            }
          ],
          "style": "list-hang-notitle"
        }
      ]
    }
  ],
  "_versions": [
    {
      "name": "Kobold; Craftiness",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Kobold Legacy",
          "items": {
            "name": "Kobold Legacy (Craftiness)",
            "entries": [
              "You have proficiency in one of the following skills of your choice: {@skill Arcana}, {@skill Investigation}, {@skill Medicine}, {@skill Sleight of Hand}, or {@skill Survival}."
            ]
          }
        }
      },
      "additionalSpells": null
    },
    {
      "name": "Kobold; Defiance",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Kobold Legacy",
          "items": {
            "name": "Kobold Legacy (Defiance)",
            "entries": [
              "You have advantage on saving throws to avoid or end the {@condition frightened} condition on yourself."
            ]
          }
        }
      },
      "skillProficiencies": null,
      "additionalSpells": null
    },
    {
      "name": "Kobold; Draconic Sorcery",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Kobold Legacy",
          "items": {
            "name": "Kobold Legacy (Draconic Sorcery)",
            "entries": [
              "You know one {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race)."
            ]
          }
        }
      },
      "skillProficiencies": null
    }
  ]
},
{
  "name": "Kobold",
  "source": "VGM",
  "size": [
    "S"
  ],
  "speed": 30,
  "ability": [
    {
      "dex": 2
    }
  ],
  "heightAndWeight": {
    "baseHeight": 25,
    "heightMod": "2d4",
    "baseWeight": 25
  },
  "age": {
    "mature": 6,
    "max": 120
  },
  "darkvision": 60,
  "traitTags": [
    "Monstrous Race",
    "Sunlight Sensitivity"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "draconic": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Kobolds reach adulthood at age 6 and can live up to 120 years but rarely do so."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Kobolds are between 2 and 3 feet tall and weigh between 25 and 35 pounds. Your size is Small."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Grovel, Cower, and Beg",
      "entries": [
        "As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that you can see. Once you use this trait, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Pack Tactics",
      "entries": [
        "You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't {@condition incapacitated}."
      ]
    },
    {
      "name": "Sunlight Sensitivity",
      "entries": [
        "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Draconic."
      ]
    }
  ]
},
{
  "name": "Leonin",
  "source": "MOT",
  "size": [
    "M"
  ],
  "speed": 35,
  "ability": [
    {
      "str": 1,
      "con": 2
    }
  ],
  "heightAndWeight": {
    "baseHeight": 66,
    "heightMod": "2d10",
    "baseWeight": 180,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "darkvision": 60,
  "traitTags": [
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "athletics",
          "intimidation",
          "perception",
          "survival"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "other": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Leonin mature and age at about the same rate as humans."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Leonin tend toward good alignments. Leonin who are focused on the pride lean toward lawful good."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Leonin are typically over 6 feet tall, with some standing over 7 feet. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Claws",
      "entries": [
        "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you can deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Hunter's Instincts",
      "entries": [
        "You have proficiency in one of the following skills of your choice: {@skill Athletics}, {@skill Intimidation}, {@skill Perception}, or {@skill Survival}."
      ]
    },
    {
      "name": "Daunting Roar",
      "entries": [
        "As a bonus action, you can let out an especially menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw or become {@condition frightened} of you until the end of your next turn. The DC of the save equals 8 + your proficiency bonus + your Constitution modifier. Once you use this trait, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Leonin."
      ]
    }
  ]
},
{
  "name": "Lizardfolk",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "swim": true
  },
  "traitTags": [
    "Natural Armor",
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "medicine",
          "nature",
          "perception",
          "stealth",
          "survival"
        ],
        "count": 2
      }
    }
  ],
  "entries": [
    {
      "name": "Speed",
      "entries": [
        "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
      ]
    },
    {
      "name": "Bite",
      "entries": [
        "You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Hold Breath",
      "entries": [
        "You can hold your breath for up to 15 minutes at a time."
      ]
    },
    {
      "name": "Hungry Jaws",
      "entries": [
        "You can throw yourself into a feeding frenzy. As a bonus action, you can make a special attack with your Bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    },
    {
      "name": "Natural Armor",
      "entries": [
        "You have tough, scaly skin. When you aren't wearing armor, your base AC is 13 + Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
      ]
    },
    {
      "name": "Nature's Intuition",
      "entries": [
        "Thanks to your mystical connection to nature, you gain proficiency with two of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}."
      ]
    }
  ]
},
{
  "name": "Lizardfolk",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "swim": 30
  },
  "ability": [
    {
      "con": 2,
      "wis": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 57,
    "heightMod": "2d10",
    "baseWeight": 120,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 14,
    "max": 60
  },
  "traitTags": [
    "Natural Armor",
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "nature",
          "perception",
          "stealth",
          "survival"
        ],
        "count": 2
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "draconic": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Lizardfolk reach maturity around age 14 and rarely live longer than 60 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Lizardfolk are a little bulkier and taller than humans, and their colorful frills make them appear even larger. Your size is Medium."
      ]
    },
    {
      "name": "Swim Speed",
      "entries": [
        "You have a swimming speed of 30 feet."
      ]
    },
    {
      "name": "Bite",
      "entries": [
        "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Cunning Artisan",
      "entries": [
        "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size small or larger to create one of the following items: a {@item shield|phb}, a {@item club|phb}, a {@item javelin|phb}, or {@dice 1d4} {@item dart|phb|darts} or {@item blowgun needle|phb|blowgun needles}. To use this trait, you need a blade, such as a {@item dagger|phb}, or appropriate {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools}, such as {@item leatherworker's tools|phb}."
      ]
    },
    {
      "name": "Hold Breath",
      "entries": [
        "You can hold your breath for up to 15 minutes at a time."
      ]
    },
    {
      "name": "Hunter's Lore",
      "entries": [
        "You gain proficiency with two of the following skills of your choice: {@skill Animal Handling}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, and {@skill Survival}."
      ]
    },
    {
      "name": "Natural Armor",
      "entries": [
        "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
      ]
    },
    {
      "name": "Hungry Jaws",
      "entries": [
        "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your Constitution modifier (minimum of 1), and you can't use this trait again until you finish a short or long rest."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Draconic."
      ]
    }
  ]
},
{
  "name": "Loxodon",
  "source": "GGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "con": 2,
      "wis": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 79,
    "heightMod": "2d10",
    "baseWeight": 295,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 450
  },
  "traitTags": [
    "Natural Armor",
    "Powerful Build"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "other": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Loxodons physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and are considered young until they reach the age of 60."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Most loxodons are lawful, believing in the value of a peaceful, ordered life. They also tend toward good."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Loxodons stand between 7 and 8 feet tall. Their massive bodies weigh between 300 and 400 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Loxodon Serenity",
      "entries": [
        "You have advantage on saving throws against being {@condition charmed} or {@condition frightened}."
      ]
    },
    {
      "name": "Natural Armor",
      "entries": [
        "You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.",
        {
          "name": "Tip: AC Calculations Don't Stack",
          "entries": [
            "When the game gives you more than one way to calculate your Armor Class, you can use only one of them. You choose the one to use. For example, if you have the loxodon's Natural Armor trait and the monk's Unarmored Defense feature, you don't mix them together. Instead, you choose which one determines your AC."
          ]
        }
      ]
    },
    {
      "name": "Trunk",
      "entries": [
        "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options.",
        "Your trunk can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell."
      ]
    },
    {
      "name": "Keen Smell",
      "entries": [
        "Thanks to your sensitive trunk, you have advantage on Wisdom ({@skill Perception}), Wisdom ({@skill Survival}), and Intelligence ({@skill Investigation}) checks that involve smell."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Loxodon."
      ]
    }
  ]
},
{
  "name": "Minotaur",
  "source": "GGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 64,
    "heightMod": "2d8",
    "baseWeight": 175,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 17,
    "max": 150
  },
  "traitTags": [
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "intimidation",
          "persuasion"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "other": true
    }
  ],
  "entries": [
    {
      "entries": [
        "{@note These traits are also suitable for minotaurs in other D&D worlds where these people have avoided the demonic influence of Baphomet.}"
      ]
    },
    {
      "name": "Age",
      "entries": [
        "Minotaurs enter adulthood at around the age of 17 and can live up to 150 years."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Most minotaurs who join the Boros Legion lean toward lawful alignments, while those associated with the Cult of Rakdos or the Gruul Clans tend toward chaotic alignments."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Minotaurs average over 6 feet in height, and they have stocky builds. Your size is Medium."
      ]
    },
    {
      "name": "Horns",
      "entries": [
        "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Goring Rush",
      "entries": [
        "Immediately after you use the {@action Dash} action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action."
      ]
    },
    {
      "name": "Hammering Horns",
      "entries": [
        "Immediately after you hit a creature with a melee attack as part of the {@action Attack} action on your turn, you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you push it up to 10 feet away from you."
      ]
    },
    {
      "name": "Imposing Presence",
      "entries": [
        "You have proficiency in one of the following skills of your choice: {@skill Intimidation} or {@skill Persuasion}."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Minotaur."
      ]
    }
  ]
},
{
  "name": "Minotaur",
  "source": "MOT",
  "_copy": {
    "name": "Minotaur",
    "source": "GGR",
    "_mod": {
      "entries": [
        {
          "mode": "replaceArr",
          "replace": "Age",
          "items": {
            "name": "Age",
            "entries": [
              "Minotaurs mature and age at about the same rate as humans."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Alignment",
          "items": {
            "name": "Alignment",
            "entries": [
              "Minotaurs who leave the walls of Skophos have the opportunity to be free of its culture and pursue chaotic alignments, while those who remain within the polis and its tyrannical regime tend toward lawful alignments."
            ]
          }
        }
      ]
    }
  }
},
{
  "name": "Minotaur",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "traitTags": [
    "Natural Weapon"
  ],
  "entries": [
    {
      "name": "Horns",
      "entries": [
        "You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Goring Rush",
      "entries": [
        "Immediately after you take the {@action Dash} action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action."
      ]
    },
    {
      "name": "Hammering Horns",
      "entries": [
        "Immediately after you hit a creature with a melee attack as part of the {@action Attack} action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you can push it up to 10 feet away from you."
      ]
    },
    {
      "name": "Labyrinthine Recall",
      "entries": [
        "You always know which direction is north, and you have advantage on any Wisdom ({@skill Survival}) check you make to navigate or track."
      ]
    }
  ]
},
{
  "name": "Orc",
  "source": "EGW",
  "_copy": {
    "name": "Orc",
    "source": "ERLW",
    "_mod": {
      "entries": [
        {
          "mode": "replaceArr",
          "replace": "Age",
          "items": {
            "name": "Age",
            "entries": [
              "Orcs reach adulthood at age 16, and live up to 80 years."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Alignment",
          "items": {
            "name": "Alignment",
            "entries": [
              "Orcs fear the curse of ruin that is said to plague their race, and tend strongly toward either chaos (accepting their fate), or toward law (rejecting it)."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Size",
          "items": {
            "name": "Size",
            "entries": [
              "Orcs stand easily 8 feet tall and corded with powerful muscles, weighing up to 280 pounds. Your size is Medium."
            ]
          }
        },
        {
          "mode": "replaceArr",
          "replace": "Primal Intuition",
          "items": {
            "name": "Primal Intuition",
            "entries": [
              "You have proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, {@skill Medicine}, {@skill Perception}, and {@skill Survival}."
            ]
          }
        }
      ]
    },
    "_preserve": {
      "reprintedAs": true
    }
  },
  "heightAndWeight": null,
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "insight",
          "intimidation",
          "medicine",
          "perception",
          "survival"
        ],
        "count": 2
      }
    }
  ]
},
{
  "name": "Orc",
  "source": "ERLW",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 64,
    "heightMod": "2d8",
    "baseWeight": 175,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 12,
    "max": 50
  },
  "darkvision": 60,
  "traitTags": [
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "insight",
          "intimidation",
          "medicine",
          "nature",
          "perception",
          "survival"
        ],
        "count": 2
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "orc": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Orcs reach adulthood at age 12 and live up to 50 years."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "The orcs of Eberron are a passionate people, given to powerful emotion and deep faith. They are generally chaotic, but can be any alignment."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Aggressive",
      "entries": [
        "As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started."
      ]
    },
    {
      "name": "Primal Intuition",
      "entries": [
        "You have proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, and {@skill Survival}."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Orc."
      ]
    }
  ]
},
{
  "name": "Orc",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "traitTags": [
    "Powerful Build"
  ],
  "entries": [
    {
      "name": "Adrenaline Rush",
      "entries": [
        "You can take the {@action Dash} action as a bonus action. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        "Whenever you use this trait, you gain a number of temporary hit points equal to your proficiency bonus."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Relentless Endurance",
      "entries": [
        "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can't do so again until you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Orc",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 64,
    "heightMod": "2d8",
    "baseWeight": 175,
    "weightMod": "2d6"
  },
  "age": {
    "mature": 12,
    "max": 50
  },
  "darkvision": 60,
  "traitTags": [
    "Monstrous Race",
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "insight",
          "intimidation",
          "medicine",
          "nature",
          "perception",
          "survival"
        ],
        "count": 2
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "orc": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Orcs reach adulthood at age 12 and live up to 50 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Aggressive",
      "entries": [
        "As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started."
      ]
    },
    {
      "name": "Primal Intuition",
      "entries": [
        "You have proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, and {@skill Survival}."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Orc."
      ]
    }
  ]
},
{
  "name": "Owlin",
  "source": "SCC",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": {
    "walk": 30,
    "fly": true
  },
  "darkvision": 120,
  "skillProficiencies": [
    {
      "stealth": true
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 120 feet of yourself as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Flight",
      "entries": [
        "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
      ]
    },
    {
      "name": "Silent Feathers",
      "entries": [
        "You have proficiency in the {@skill Stealth} skill."
      ]
    }
  ]
},
{
  "name": "Plasmoid",
  "source": "AAG",
  "lineage": "VRGR",
  "creatureTypes": [
    "ooze"
  ],
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "resist": [
    "acid",
    "poison"
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are an Ooze."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Amorphous",
      "entries": [
        "You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You have advantage on ability checks you make to initiate or escape a grapple."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Hold Breath",
      "entries": [
        "You can hold your breath for 1 hour."
      ]
    },
    {
      "name": "Natural Resilience",
      "entries": [
        "You have resistance to acid and poison damage, and you have advantage on saving throws against being {@condition poisoned}."
      ]
    },
    {
      "name": "Shape Self",
      "entries": [
        "As an action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size.",
        "As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into your body. As part of the same bonus action, you can use this pseudopod to manipulate an object, open or close a door or container, or pick up or set down a Tiny object. The pseudopod contains no sensory organs and can't attack, activate magic items, or lift more than 10 pounds."
      ]
    }
  ]
},
{
  "name": "Reborn",
  "source": "VRGR",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "traitTags": [
    "Improved Resting"
  ],
  "resist": [
    "poison"
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you gain this lineage."
      ]
    },
    {
      "name": "Ancestral Legacy",
      "entries": [
        "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
        "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
      ]
    },
    {
      "name": "Deathless Nature",
      "entries": [
        "You have escaped death, a fact represented by the following benefits:",
        {
          "items": [
            "You have advantage on saving throws against disease and being {@condition poisoned}, and you have resistance to poison damage.",
            "You have advantage on death saving throws.",
            "You don't need to eat, drink, or breathe.",
            "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you retain consciousness."
          ]
        }
      ]
    },
    {
      "name": "Knowledge from a Past Life",
      "entries": [
        "You temporarily remember glimpses of the past, perhaps faded memories from ages ago or a previous life. When you make an ability check that uses a skill, you can roll a {@dice d6} immediately after seeing the number on the {@dice d20} and add the number on the {@dice d6} to the check. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Satyr",
  "source": "MOT",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "M"
  ],
  "speed": 35,
  "ability": [
    {
      "cha": 2,
      "dex": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 56,
    "heightMod": "2d8",
    "baseWeight": 100,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "traitTags": [
    "Magic Resistance",
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "performance": true,
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "sylvan": true
    }
  ],
  "toolProficiencies": [
    {
      "musical instrument": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Satyrs mature and age at about the same rate as humans."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Satyrs delight in living a life free of the mantle of law. They gravitate toward being good, but some have devious streaks and enjoy causing dismay."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Satyrs range from just under 5 feet to about 6 feet in height, with generally slender builds. Your size is Medium."
      ]
    },
    {
      "name": "Fey",
      "entries": [
        "Your creature type is fey, rather than humanoid."
      ]
    },
    {
      "name": "Ram",
      "entries": [
        "You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to {@damage 1d4} + your Strength modifier."
      ]
    },
    {
      "name": "Magic Resistance",
      "entries": [
        "You have advantage on saving throws against spells and other magical effects."
      ]
    },
    {
      "name": "Mirthful Leaps",
      "entries": [
        "Whenever you make a long or high jump, you can roll a {@dice d8} and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal."
      ]
    },
    {
      "name": "Reveler",
      "entries": [
        "You have proficiency in the {@skill Performance} and {@skill Persuasion} skills, and you have proficiency with one musical instrument of your choice."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Sylvan."
      ]
    }
  ]
},
{
  "name": "Satyr",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "M"
  ],
  "speed": 35,
  "traitTags": [
    "Magic Resistance",
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "performance": true,
      "persuasion": true
    }
  ],
  "toolProficiencies": [
    {
      "musical instrument": true
    }
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Fey."
      ]
    },
    {
      "name": "Ram",
      "entries": [
        "You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Magic Resistance",
      "entries": [
        "You have advantage on saving throws against spells."
      ]
    },
    {
      "name": "Mirthful Leaps",
      "entries": [
        "Whenever you make a long jump or a high jump, you can roll a {@dice d8} and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as usual."
      ]
    },
    {
      "name": "Reveler",
      "entries": [
        "As an embodiment of revelry, you have proficiency in the {@skill Performance} and {@skill Persuasion} skills, and you have proficiency with one {@item musical instrument|PHB} of your choice."
      ]
    }
  ]
},
{
  "name": "Sea Elf",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "elf"
  ],
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "swim": true
  },
  "age": {
    "max": 750
  },
  "darkvision": 60,
  "traitTags": [
    "Amphibious",
    "Improved Resting",
    "Tool Proficiency",
    "Weapon Proficiency"
  ],
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "resist": [
    "cold"
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
      ]
    },
    {
      "name": "Speed",
      "entries": [
        "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
      ]
    },
    {
      "name": "Child of the Sea",
      "entries": [
        "You can breathe air and water, and you have a resistance to cold damage."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
      ]
    },
    {
      "name": "Friend of the Sea",
      "entries": [
        "Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return."
      ]
    },
    {
      "name": "Keen Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Trance",
      "entries": [
        "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        "Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest."
      ]
    }
  ]
},
{
  "name": "Shadar-Kai",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "humanoid"
  ],
  "creatureTypeTags": [
    "elf"
  ],
  "size": [
    "M"
  ],
  "speed": 30,
  "age": {
    "max": 750
  },
  "darkvision": 60,
  "traitTags": [
    "Improved Resting",
    "Tool Proficiency",
    "Weapon Proficiency"
  ],
  "skillProficiencies": [
    {
      "perception": true
    }
  ],
  "resist": [
    "necrotic"
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf."
      ]
    },
    {
      "name": "Blessing of the Raven Queen",
      "entries": [
        "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        "Start at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
      ]
    },
    {
      "name": "Keen Senses",
      "entries": [
        "You have proficiency in the {@skill Perception} skill."
      ]
    },
    {
      "name": "Necrotic Resistance",
      "entries": [
        "You have resistance to necrotic damage."
      ]
    },
    {
      "name": "Trance",
      "entries": [
        "You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.",
        "Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest."
      ]
    }
  ]
},
{
  "name": "Shifter",
  "source": "ERLW",
  "size": [
    "M"
  ],
  "speed": 30,
  "heightAndWeight": {
    "baseHeight": 54,
    "heightMod": "2d8",
    "baseWeight": 90,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 10,
    "max": 70
  },
  "darkvision": 60,
  "languageProficiencies": [
    {
      "common": true
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium."
      ]
    },
    {
      "name": "Speed",
      "entries": [
        "Your base walking speed is 30 feet."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Shifting",
      "entries": [
        "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.",
        "Once you shift, you can't do so again until you finish a short or long rest."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common."
      ]
    }
  ]
},
{
  "name": "Shifter",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "acrobatics",
          "athletics",
          "intimidation",
          "survival"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Bestial Instincts",
      "entries": [
        "Channeling the beast within, you have proficiency in one of the following skills of your choice: {@skill Acrobatics}, {@skill Athletics}, {@skill Intimidation}, or {@skill Survival}."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Shifting",
      "entries": [
        "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 &times; your proficiency bonus. You can shift a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
        "Whenever you shift, you gain an additional benefit based on one of the following options (choose when you select this race):",
        {
          "items": [
            {
              "name": "Beasthide",
              "entry": "You gain {@dice 1d6} additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class."
            },
            {
              "name": "Longtooth",
              "entry": "When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
            },
            {
              "name": "Swiftstride",
              "entry": "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks."
            },
            {
              "name": "Wildhunt",
              "entry": "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're {@condition incapacitated}."
            }
          ],
          "style": "list-hang-notitle"
        }
      ]
    }
  ],
  "_versions": [
    {
      "name": "Shifter; Beasthide",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Shifting",
          "items": {
            "name": "Shifting (Beasthide)",
            "entries": [
              "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 &times; your proficiency bonus + {@dice 1d6}, and you regain all expended uses when you finish a long rest.",
              "While shifted, you have a +1 bonus to your Armor Class."
            ]
          }
        }
      }
    },
    {
      "name": "Shifter; Longtooth",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Shifting",
          "items": {
            "name": "Shifting (Longtooth)",
            "entries": [
              "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 &times; your proficiency bonus, and you regain all expended uses when you finish a long rest.",
              "When you shift and as a bonus action on your other turns while shifted, you can use your elongated fangs to make an unarmed strike. If you hit with your fangs, you can deal piercing damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
            ]
          }
        }
      }
    },
    {
      "name": "Shifter; Swiftstride",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Shifting",
          "items": {
            "name": "Shifting (Swiftstride)",
            "entries": [
              "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 &times; your proficiency bonus, and you regain all expended uses when you finish a long rest.",
              "While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks."
            ]
          }
        }
      }
    },
    {
      "name": "Shifter; Wildhunt",
      "source": "MPMM",
      "_mod": {
        "entries": {
          "mode": "replaceArr",
          "replace": "Shifting",
          "items": {
            "name": "Shifting (Wildhunt)",
            "entries": [
              "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 &times; your proficiency bonus, and you regain all expended uses when you finish a long rest.",
              "While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you unless you're {@condition incapacitated}."
            ]
          }
        }
      }
    }
  ]
},
{
  "name": "Simic Hybrid",
  "source": "GGR",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30
  },
  "ability": [
    {
      "con": 2,
      "choose": {
        "from": [
          "str",
          "dex",
          "int",
          "wis",
          "cha"
        ],
        "count": 1
      }
    }
  ],
  "darkvision": 60,
  "traitTags": [
    "Amphibious",
    "Natural Armor",
    "Natural Weapon"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "choose": {
        "from": [
          "elvish",
          "other"
        ],
        "count": 1
      }
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Hybrids begin their lives as adult humans, elves, or vedalken. They age at a slightly accelerated rate, so their maximum life spans are probably reduced somewhat. The Guardian Project has not been operating long enough to observe the full effect of this phenomenon."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Most hybrids share the generally neutral outlook of the Simic Combine. They are more interested in scientific research and the standing of their guild than in moral or ethical questions. Those who leave the Combine, however, often do so because their philosophical outlook and alignment are more in line with a different guild's."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium, within the normal range of your humanoid base race."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and your choice of Elvish or Vedalken."
      ]
    },
    {
      "name": "Animal Enhancement",
      "entries": [
        "Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level.",
        "At 1st level, choose one of the following options:",
        {
          "style": "list-hang-notitle",
          "items": [
            {
              "name": "Manta Glide",
              "entry": "You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren't {@condition incapacitated}, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend."
            },
            {
              "name": "Nimble Climber",
              "entry": "You have a climbing speed equal to your walking speed."
            },
            {
              "name": "Underwater Adaptation",
              "entry": "You can breathe air and water, and you have a swimming speed equal to your walking speed."
            }
          ]
        },
        "At 5th level, your body evolves further, developing new characteristics. Choose one of the options you didn't take at 1st level, or one of the following options:",
        {
          "style": "list-hang-notitle",
          "items": [
            {
              "name": "Grappling Appendage",
              "entry": "You have two special appendages growing alongside your arms. Choose whether they're both claws or tentacles. As an action, you can use one of them to try to grapple a creature. Each one is also a natural weapon, which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to {@dice 1d6} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can't precisely manipulate anything and can't wield weapons, magic items, or other specialized equipment."
            },
            {
              "name": "Carapace",
              "entry": "Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you're not wearing heavy armor."
            },
            {
              "name": "Acid Spit",
              "entry": "As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes {@dice 2d10} acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 + your Constitution modifier + your proficiency bonus. This damage increases by {@dice 1d10} when you reach 11th level ({@dice 3d10}) and 17th level ({@dice 4d10}). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
            }
          ]
        }
      ]
    }
  ]
},
{
  "name": "Tabaxi",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": {
    "walk": 30,
    "climb": true
  },
  "darkvision": 60,
  "traitTags": [
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "perception": true,
      "stealth": true
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Speed",
      "entries": [
        "Your walking speed is 30 feet, and you have a climbing speed equal to your walking speed."
      ]
    },
    {
      "name": "Cat's Claws",
      "entries": [
        "You can use your claws to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Cat's Talent",
      "entries": [
        "You have proficiency in the {@skill Perception} and {@skill Stealth} skills."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Feline Agility",
      "entries": [
        "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."
      ]
    }
  ]
},
{
  "name": "Tabaxi",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "climb": 20
  },
  "ability": [
    {
      "dex": 2,
      "cha": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 58,
    "heightMod": "2d10",
    "baseWeight": 90,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "darkvision": 60,
  "traitTags": [
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "perception": true,
      "stealth": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "anyStandard": 1
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Tabaxi have lifespans equivalent to humans."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Tabaxi are taller on average than humans and relatively slender. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Feline Agility",
      "entries": [
        "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."
      ]
    },
    {
      "name": "Cat's Claws",
      "entries": [
        "Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Cat's Talents",
      "entries": [
        "You have proficiency in the {@skill Perception} and {@skill Stealth} skills."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and one other language of your choice."
      ]
    }
  ]
},
{
  "name": "Thri-kreen",
  "source": "AAG",
  "lineage": "VRGR",
  "creatureTypes": [
    "monstrosity"
  ],
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "traitTags": [
    "Improved Resting",
    "Natural Armor"
  ],
  "entries": [
    {
      "name": "Creature Type",
      "entries": [
        "You are a Monstrosity."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Chameleon Carapace",
      "entries": [
        "While you aren't wearing armor, your carapace gives you a base Armor Class of 13 + your Dexterity modifier.",
        "As an action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity ({@skill Stealth}) checks made to {@action hide} in those surroundings."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Secondary Arms",
      "entries": [
        "You have two slightly smaller secondary arms below your primary pair of arms. The secondary arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property."
      ]
    },
    {
      "name": "Sleepless",
      "entries": [
        "You do not require sleep and can remain conscious during a long rest, though you must still refrain from strenuous activity to gain the benefit of the rest."
      ]
    },
    {
      "name": "Thri-kreen Telepathy",
      "entries": [
        "Without the assistance of magic, you can't speak the non-thri-kreen languages you know. Instead you use telepathy to convey your thoughts. You have the magical ability to transmit your thoughts mentally to willing creatures within 120 feet of yourself. A contacted creature doesn't need to share a language with you to understand your thoughts, but it must be able to understand at least one language. Your telepathic link to a creature is broken if you and the creature move more than 120 feet apart, if either of you is {@condition incapacitated}, or if either of you mentally breaks the contact (no action required)."
      ]
    }
  ]
},
{
  "name": "Tiefling",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "cha": 2,
      "int": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 57,
    "heightMod": "2d8",
    "baseWeight": 110,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "darkvision": 60,
  "traitTags": [
    "Uncommon Race"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "infernal": true
    }
  ],
  "resist": [
    "fire"
  ],
  "additionalSpells": [
    {
      "innate": {
        "3": {
          "daily": {
            "1": [
              "hellish rebuke#2"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "darkness"
            ]
          }
        }
      },
      "ability": "cha",
      "known": {
        "1": [
          "thaumaturgy#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Tieflings mature at the same rate as humans but live a few years longer."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Tieflings are about the same size and build as humans. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Hellish Resistance",
      "entries": [
        "You have resistance to fire damage."
      ]
    },
    {
      "name": "Infernal Legacy",
      "entries": [
        "You know the {@spell thaumaturgy} cantrip. Once you reach 3rd level, you can cast the {@spell hellish rebuke} spell as a 2nd-level spell with this trait; you regain the ability to cast it when you finish a long rest. Once you reach 5th level, you can also cast the {@spell darkness} spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Infernal."
      ]
    }
  ]
},
{
  "name": "Tortle",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "traitTags": [
    "Natural Armor",
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "animal handling",
          "medicine",
          "nature",
          "perception",
          "stealth",
          "survival"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Claws",
      "entries": [
        "You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Hold Breath",
      "entries": [
        "You can hold your breath for up to 1 hour."
      ]
    },
    {
      "name": "Natural Armor",
      "entries": [
        "Your shell provides you a base AC of 17 (your Dexterity modifier doesn't affect this number). You can't wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield's bonus as normal."
      ]
    },
    {
      "name": "Nature's Intuition",
      "entries": [
        "Thanks to your mystical connection to nature, you gain proficiency with one of the following skills of your choice: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}."
      ]
    },
    {
      "name": "Shell Defense",
      "entries": [
        "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are {@condition prone}, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell."
      ]
    }
  ]
},
{
  "name": "Tortle",
  "source": "TTP",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "str": 2,
      "wis": 1
    }
  ],
  "age": {
    "mature": 15,
    "max": 50
  },
  "traitTags": [
    "Natural Armor",
    "Natural Weapon"
  ],
  "skillProficiencies": [
    {
      "survival": true
    }
  ],
  "languageProficiencies": [
    {
      "aquan": true,
      "common": true
    }
  ],
  "entries": [
    {
      "entries": [
        "{@note The Tortle Package is considered part of Xanathar's Guide to Everything for Adventurers League character creation.}"
      ]
    },
    {
      "name": "Age",
      "entries": [
        "Young tortles crawl for a few weeks after birth before learning to walk on two legs. They reach adulthood by the age of 15 and live an average of 50 years."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Tortles tend to lead orderly, ritualistic lives. They develop customs and routines, becoming more set in their ways as they age. Most are lawful good. A few can be selfish and greedy, tending more toward evil, but it's unusual for a tortle to shuck off order in favor of chaos."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Tortle adults stand 5 to 6 feet tall and average 450 pounds. Their shells account for roughly one-third of their weight. Your size is Medium."
      ]
    },
    {
      "name": "Claws",
      "entries": [
        "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Hold Breath",
      "entries": [
        "You can hold your breath for up to 1 hour at a time. Tortles aren't natural swimmers, but they can remain underwater for some time before needing to come up for air."
      ]
    },
    {
      "name": "Natural Armor",
      "entries": [
        "Due to your shell and the shape of your body, you are ill-suited to wearing armor. Your shell provides ample protection, however; it gives you a base AC of 17 (your Dexterity modifier doesn't affect this number). You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield's bonus as normal."
      ]
    },
    {
      "name": "Shell Defense",
      "entries": [
        "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are {@condition prone}, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell."
      ]
    },
    {
      "name": "Survival Instinct",
      "entries": [
        "You gain proficiency in the {@skill Survival} skill. Tortles have finely honed survival instincts."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Aquan and Common."
      ]
    }
  ]
},
{
  "name": "Triton",
  "source": "MOT",
  "_copy": {
    "name": "Triton",
    "source": "VGM",
    "_mod": {
      "entries": [
        {
          "mode": "appendArr",
          "items": {
            "name": "Alignment",
            "entries": [
              "Tritons tend toward neutrality. Their culture encourages them to be mindful of life's currents, knowing when to harness fate's tides and when to flow along with them."
            ]
          }
        }
      ]
    },
    "_preserve": {
      "reprintedAs": true
    }
  }
},
{
  "name": "Triton",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "swim": true
  },
  "darkvision": 60,
  "traitTags": [
    "Amphibious"
  ],
  "resist": [
    "cold"
  ],
  "additionalSpells": [
    {
      "innate": {
        "1": {
          "daily": {
            "1": [
              "fog cloud"
            ]
          }
        },
        "3": {
          "daily": {
            "1": [
              "gust of wind"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "water walk"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Speed",
      "entries": [
        "Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed."
      ]
    },
    {
      "name": "Amphibious",
      "entries": [
        "You can breathe air and water."
      ]
    },
    {
      "name": "Control Air and Water",
      "entries": [
        "You can cast {@spell fog cloud} with this trait. Starting at 3rd level, you can cast the {@spell gust of wind} spell with this trait. Starting at 5th level, you can also cast the {@spell water walk} spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Emissary of the Sea",
      "entries": [
        "You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return."
      ]
    },
    {
      "name": "Guardian of the Depths",
      "entries": [
        "Adapted to the frigid ocean depths, you have resistance to cold damage."
      ]
    }
  ]
},
{
  "name": "Triton",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 30,
    "swim": 30
  },
  "ability": [
    {
      "str": 1,
      "cha": 1,
      "con": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 54,
    "heightMod": "2d10",
    "baseWeight": 90,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 15,
    "max": 200
  },
  "darkvision": 60,
  "traitTags": [
    "Amphibious"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "primordial": true
    }
  ],
  "resist": [
    "cold"
  ],
  "additionalSpells": [
    {
      "innate": {
        "1": {
          "daily": {
            "1": [
              "fog cloud"
            ]
          }
        },
        "3": {
          "daily": {
            "1": [
              "gust of wind"
            ]
          }
        },
        "5": {
          "daily": {
            "1": [
              "wall of water|xge"
            ]
          }
        }
      },
      "ability": "cha"
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Tritons reach maturity around age 15 and can live up to 200 years."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Tritons are slightly shorter than humans, averaging about 5 feet tall. Your size is Medium."
      ]
    },
    {
      "name": "Swim Speed",
      "entries": [
        "You have a swimming speed of 30 feet."
      ]
    },
    {
      "name": "Amphibious",
      "entries": [
        "You can breathe air and water."
      ]
    },
    {
      "name": "Control Air and Water",
      "entries": [
        "A child of the sea, you can call on the magic of elemental air and water. You can cast {@spell fog cloud} with this trait. Starting at 3rd level, you can cast {@spell gust of wind} with it, and starting at 5th level, you can also cast {@spell wall of water|xge} with it. Once you cast a spell with this trait, you can't cast that spell with it again until you finish a long rest. Charisma is your spellcasting ability for these spells."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Emissary of the Sea",
      "entries": [
        "Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return."
      ]
    },
    {
      "name": "Guardians of the Depths",
      "entries": [
        "Adapted to even the most extreme ocean depths, you have resistance to cold damage."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and Primordial."
      ]
    }
  ]
},
{
  "name": "Vedalken",
  "source": "GGR",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "int": 2,
      "wis": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 64,
    "heightMod": "2d10",
    "baseWeight": 110,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 40,
    "max": 500
  },
  "traitTags": [
    "Skill Bonus Dice",
    "Tool Bonus Dice"
  ],
  "skillProficiencies": [
    {
      "choose": {
        "from": [
          "arcana",
          "history",
          "investigation",
          "medicine",
          "performance",
          "sleight of hand"
        ]
      }
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "other": true,
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "any": 1
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Vedalken mature slower than humans do, reaching maturity around age 40. Their life span is typically 350 years, with some living to the age of 500."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Vedalken are usually lawful and non-evil."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Tall and slender, Vedalken stand 6 to 6&frac12; feet tall on average and usually weigh less than 200 pounds. Your size is Medium."
      ]
    },
    {
      "name": "Vedalken Dispassion",
      "entries": [
        "You have advantage on all Intelligence, Wisdom, and Charisma saving throws."
      ]
    },
    {
      "name": "Tireless Precision",
      "entries": [
        "You are proficient in one of the following skills of your choice: {@skill Arcana}, {@skill History}, {@skill Investigation}, {@skill Medicine}, {@skill Performance}, or {@skill Sleight of Hand}. You are also proficient with one {@book tool|phb|5|tools} of your choice.",
        "Whenever you make an ability check with the chosen skill or tool, roll a {@dice d4} and add the number rolled to the check's total."
      ]
    },
    {
      "name": "Partially Amphibious",
      "entries": [
        "By absorbing oxygen through your skin, you can breathe underwater for up to 1 hour. Once you've reached that limit, you can't use this trait again until you finish a long rest."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common, Vedalken, and one other language of your choice."
      ]
    }
  ]
},
{
  "name": "Verdan",
  "source": "AI",
  "size": [
    "V"
  ],
  "speed": 30,
  "ability": [
    {
      "con": 1,
      "cha": 2
    }
  ],
  "age": {
    "mature": 24,
    "max": 200
  },
  "skillProficiencies": [
    {
      "persuasion": true
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "goblin": true,
      "anyStandard": 1
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Verdan reach adulthood at around the age of 24, and it is thought that they might live to nearly 200 years old. However, because no verdan has died of old age since the race's initial creation, their upper age limits remain subject to speculation."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Verdan are generally good, although their absence of racial identity and shared history can sometimes see individual verdan become untethered from any moral or ethical framework."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Verdan start out similar in size to the goblins they were created from, ranging from 3 to 4 feet in height. But at some point after reaching maturity, each verdan undergoes a sudden growth spurt of 2 feet or more. At 1st level, you are a Small creature. When you reach 5th level, you become a Medium creature."
      ]
    },
    {
      "name": "Black Blood Healing",
      "entries": [
        "The black blood that is a sign of your people's connection to That-Which-Endures boosts your natural healing. When you roll a 1 or 2 on any Hit Die you spend at the end of a short rest, you can reroll the die and must use the new roll."
      ]
    },
    {
      "name": "Limited Telepathy",
      "entries": [
        "You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathy, but it must be able to understand at least one language. This process of communication is slow and limited, allowing you to transmit and receive only simple ideas and straightforward concepts."
      ]
    },
    {
      "name": "Persuasive",
      "entries": [
        "Your people's lack of history makes you trustworthy and humble. You have proficiency in the {@skill Persuasion} skill."
      ]
    },
    {
      "name": "Telepathic Insight",
      "entries": [
        "Your mind's connection to the world around you strengthens your will. You have advantage on all Wisdom and Charisma saving throws."
      ]
    },
    {
      "name": "Language",
      "entries": [
        "You speak, read, and write Common, Goblin, and one additional language of your choice. This language typically has some connection to one of the areas or cultures that has been part of your life."
      ]
    }
  ]
},
{
  "name": "Warforged",
  "source": "ERLW",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "con": 2,
      "choose": {
        "from": [
          "str",
          "dex",
          "int",
          "wis",
          "cha"
        ],
        "count": 1
      }
    }
  ],
  "heightAndWeight": {
    "baseHeight": 70,
    "heightMod": "2d6",
    "baseWeight": 270,
    "weightMod": "4"
  },
  "age": {
    "mature": 2,
    "max": 30
  },
  "traitTags": [
    "Improved Resting",
    "Natural Armor"
  ],
  "skillProficiencies": [
    {
      "any": 1
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "anyStandard": 1
    }
  ],
  "toolProficiencies": [
    {
      "any": 1
    }
  ],
  "resist": [
    "poison"
  ],
  "conditionImmune": [
    "disease"
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "A typical warforged is between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects."
      ]
    },
    {
      "name": "Alignment",
      "entries": [
        "Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality, or lack thereof, of the beings with which they served."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Your size is Medium."
      ]
    },
    {
      "name": "Constructed Resilience",
      "entries": [
        "You were created to have remarkable fortitude, represented by the following benefits:",
        {
          "items": [
            "You have advantage on saving throws against being {@condition poisoned}, and you have resistance to poison damage.",
            "You don't need to eat, drink, or breathe.",
            "You are immune to disease.",
            "You don't need to sleep, and magic can't put you to sleep."
          ]
        }
      ]
    },
    {
      "name": "Sentry's Rest",
      "entries": [
        "When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you {@condition unconscious}, and you can see and hear as normal."
      ]
    },
    {
      "name": "Integrated Protection",
      "entries": [
        "Your body has built-in defensive layers, which can be enhanced with armor:",
        {
          "items": [
            "You gain a +1 bonus to Armor Class.",
            "You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way.",
            "While you live, the armor incorporated into your body can't be removed against your will."
          ]
        }
      ]
    },
    {
      "name": "Specialized Design",
      "entries": [
        "You gain one skill proficiency and one tool proficiency of your choice."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common and one other language of your choice."
      ]
    }
  ]
},
{
  "name": "Yuan-Ti",
  "source": "MPMM",
  "lineage": "VRGR",
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "darkvision": 60,
  "traitTags": [
    "Magic Resistance"
  ],
  "resist": [
    "poison"
  ],
  "additionalSpells": [
    {
      "innate": {
        "1": [
          "animal friendship"
        ],
        "3": {
          "daily": {
            "1": [
              "suggestion"
            ]
          }
        }
      },
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": {
        "1": [
          "poison spray#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Size",
      "entries": [
        "You are Medium or Small. You choose the size when you select this race."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."
      ]
    },
    {
      "name": "Magic Resistance",
      "entries": [
        "You have advantage on saving throws against spells."
      ]
    },
    {
      "name": "Poison Resilience",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition poisoned} condition on yourself. You also have resistance to poison damage."
      ]
    },
    {
      "name": "Serpentine Spellcasting",
      "entries": [
        "You know the {@spell poison spray} cantrip. You can cast {@spell animal friendship} an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast {@spell suggestion} with this trait. Once you cast it, you can't do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.",
        "Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race)."
      ]
    }
  ]
},
{
  "name": "Yuan-ti Pureblood",
  "source": "VGM",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "cha": 2,
      "int": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 56,
    "heightMod": "2d10",
    "baseWeight": 110,
    "weightMod": "2d4"
  },
  "age": {
    "mature": 20,
    "max": 100
  },
  "darkvision": 60,
  "traitTags": [
    "Magic Resistance",
    "Monstrous Race"
  ],
  "languageProficiencies": [
    {
      "common": true,
      "abyssal": true,
      "draconic": true
    }
  ],
  "immune": [
    "poison"
  ],
  "conditionImmune": [
    "poisoned"
  ],
  "additionalSpells": [
    {
      "innate": {
        "1": [
          "animal friendship"
        ],
        "3": {
          "daily": {
            "1": [
              "suggestion"
            ]
          }
        }
      },
      "ability": "cha",
      "known": {
        "1": [
          "poison spray#c"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Age",
      "entries": [
        "Purebloods mature at the same rate as humans and have lifespans similar in length to theirs."
      ]
    },
    {
      "name": "Size",
      "entries": [
        "Purebloods match humans in average size and weight. Your size is Medium."
      ]
    },
    {
      "name": "Darkvision",
      "entries": [
        "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
      ]
    },
    {
      "name": "Innate Spellcasting",
      "entries": [
        "You know the {@spell poison spray} cantrip. You can cast {@spell animal friendship} an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast {@spell suggestion} with this trait. Once you cast it, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells."
      ]
    },
    {
      "name": "Magic Resistance",
      "entries": [
        "You have advantage on saving throws against spells and other magical effects."
      ]
    },
    {
      "name": "Poison Immunity",
      "entries": [
        "You are immune to poison damage and the {@condition poisoned} condition."
      ]
    },
    {
      "name": "Languages",
      "entries": [
        "You can speak, read, and write Common, Abyssal, and Draconic."
      ]
    }
  ]
}
];