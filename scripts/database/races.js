"use strict";
database.races = [
{
  "name": "Aarakocra",
  "source": "DMG",
  "size": [
    "M"
  ],
  "speed": {
    "walk": 20,
    "fly": 50
  },
  "ability": [
    {
      "dex": 2,
      "wis": 2
    }
  ],
  "traitTags": [
    "Natural Weapon",
    "NPC Race"
  ],
  "languageProficiencies": [
    {
      "auran": true
    }
  ],
  "entries": [
    {
      "name": "Dive Attack",
      "entries": [
        "If you are flying and dive at least 30 ft. straight toward a target and then hit it with a melee weapon attack, the attack deals an extra {@dice 1d6} damage to the target."
      ]
    },
    {
      "name": "Talons",
      "entries": [
        "You are proficient with your unarmed strikes, which deal {@damage 1d4} slashing damage on a hit."
      ]
    }
  ]
},
{
  "name": "Aasimar",
  "source": "DMG",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "wis": 1,
      "cha": 2
    }
  ],
  "age": {
    "mature": 20,
    "max": 100
  },
  "darkvision": 60,
  "languageProficiencies": [
    {
      "common": true,
      "celestial": true
    }
  ],
  "resist": [
    "necrotic",
    "radiant"
  ],
  "additionalSpells": [
    {
      "innate": [
        "daylight",
        "lesser restoration"
      ],
      "will": [
        "light"
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
    }
  ]
},
{
  "name": "Bugbear",
  "source": "VGM",
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
      "name": "Surprise Attack",
      "entries": [
        "If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra {@dice 2d6} damage to it. You can use this trait only once per combat."
      ]
    }
  ]
},
{
  "name": "Centaur",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "M"
  ],
  "speed": 40,
  "traitTags": [
    "Natural Weapon",
    "Powerful Build"
  ],
  "skillProficiencies": [
    {
      "choose": [
        "animal handling",
        "medicine",
        "nature",
        "survival"
      ]
    }
  ],
  "entries": [
    {
      "name": "Charge",
      "entries": [
        "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves."
      ]
    },
    {
      "name": "Equine Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push or drag.",
        "In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet instead of the normal 1 extra foot."
      ]
    },
    {
      "name": "Hooves",
      "entries": [
        "You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    }
  ]
},
{
  "name": "Changeling",
  "source": "MPMM",
  "lineage": "VRGR",
  "creatureTypes": [
    "fey"
  ],
  "size": [
    "S",
    "M"
  ],
  "speed": 30,
  "skillProficiencies": [
    {
      "choose": [
        "deception",
        "insight",
        "intimidation",
        "performance",
        "persuasion"
      ],
      "count": 2
    }
  ],
  "entries": [
    {
      "name": "Shapechanger",
      "entries": [
        "As an action, you change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height between Medium and Small. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of an individual you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.",
        "You stay in the new form until you use an action to revert to your true form or until you die."
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
  "skillProficiencies": [
    {
      "any": 2
    }
  ],
  "darkvision": 60,
  "traitTags": [
    "Natural Weapon"
  ],
  "entries": [
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
        "You don't need to breathe."
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
      "choose": [
        "acid",
        "cold",
        "fire",
        "lightning",
        "poison"
      ]
    }
  ],
  "entries": [
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
      "name": "Speed",
      "entries": [
        "Your speed is not reduced by wearing heavy armor."
      ]
    },
    {
      "name": "Dwarven Resilience",
      "entries": [
        "You have advantage on saving throws against poison, and you have resistance against poison damage."
      ]
    },
    {
      "name": "Stonecunning",
      "entries": [
        "Whenever you make an Intelligence ({@skill History}) check related to the origin of stonework, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
      ]
    }
  ]
},
{
  "name": "Dwarf",
  "subrace": "Hill",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 25,
  "ability": [
    {
      "con": 2,
      "wis": 1
    }
  ],
  "heightAndWeight": {
    "baseHeight": 44,
    "heightMod": "2d4",
    "baseWeight": 115,
    "weightMod": "2d6"
  },
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
      "name": "Speed",
      "entries": [
        "Your speed is not reduced by wearing heavy armor."
      ]
    },
    {
      "name": "Dwarven Resilience",
      "entries": [
        "You have advantage on saving throws against poison, and you have resistance against poison damage."
      ]
    },
    {
      "name": "Stonecunning",
      "entries": [
        "Whenever you make an Intelligence ({@skill History}) check related to the origin of stonework, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
      ]
    },
    {
      "name": "Dwarven Toughness",
      "entries": [
        "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
      ]
    }
  ]
},
{
  "name": "Dwarf",
  "subrace": "Mountain",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 25,
  "ability": [
    {
      "con": 2,
      "str": 2
    }
  ],
  "heightAndWeight": {
    "baseHeight": 48,
    "heightMod": "2d4",
    "baseWeight": 130,
    "weightMod": "2d6"
  },
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
  "armorProficiencies": [
    {
      "light": true,
      "medium": true
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
      "name": "Speed",
      "entries": [
        "Your speed is not reduced by wearing heavy armor."
      ]
    },
    {
      "name": "Dwarven Resilience",
      "entries": [
        "You have advantage on saving throws against poison, and you have resistance against poison damage."
      ]
    },
    {
      "name": "Stonecunning",
      "entries": [
        "Whenever you make an Intelligence ({@skill History}) check related to the origin of stonework, you are considered proficient in the {@skill History} skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
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
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "will": {
        "choose": [
          "dancing lights",
          "light",
          "sacred flame"
        ]
      }
    }
  ],
  "entries": [
    {
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws you make to avoid or end the {@condition charmed} condition on yourself."
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
  "name": "Elf",
  "subrace": "Drow",
  "alias": [
    "Dark Elf"
  ],
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "cha": 1,
      "dex": 2
    }
  ],
  "age": {
    "mature": 100,
    "max": 750
  },
  "darkvision": 120,
  "traitTags": [
    "Improved Resting",
    "Sunlight Sensitivity"
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
  "weaponProficiencies": [
    {
      "rapier|phb": true,
      "shortsword|phb": true,
      "hand crossbow|phb": true
    }
  ],
  "entries": [
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
      "name": "Sunlight Sensitivity",
      "entries": [
        "You have disadvantage on attack rolls and on Wisdom ({@skill Perception}) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
      ]
    }
  ]
},
{
  "name": "Elf",
  "subrace": "High",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "dex": 2,
      "int": 1
    }
  ],
  "age": {
    "mature": 100,
    "max": 750
  },
  "heightAndWeight": {
    "baseHeight": 54,
    "heightMod": "2d10",
    "baseWeight": 90,
    "weightMod": "1d4"
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
      "elvish": true,
      "anyStandard": 1
    }
  ],
  "weaponProficiencies": [
    {
      "longsword|phb": true,
      "shortsword|phb": true,
      "shortbow|phb": true,
      "longbow|phb": true
    }
  ],
  "additionalSpells": [
    {
      "ability": "int",
      "known": [
        {
          "choose": "level=0|class=Wizard"
        }
      ]
    }
  ],
  "entries": [
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
    }
  ]
},
{
  "name": "Elf",
  "subrace": "Shadar-kai",
  "alias": [
    "Shadow Elf"
  ],
  "source": "MPMM",
  "size": [
    "M"
  ],
  "speed": 30,
  "ability": [
    {
      "con": 1,
      "dex": 2
    }
  ],
  "age": {
    "mature": 100,
    "max": 750
  },
  "heightAndWeight": {
    "baseHeight": 56,
    "heightMod": "2d8",
    "baseWeight": 90,
    "weightMod": "1d4"
  },
  "darkvision": 60,
  "traitTags": [
    "Improved Resting"
  ],
  "resist": [
    "necrotic"
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
      "name": "Blessing of the Raven Queen",
      "entries": [
        "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest.",
        "Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent."
      ]
    }
  ]
},
{
  "name": "Elf",
  "subrace": "Wood",
  "source": "PHB",
  "size": [
    "M"
  ],
  "speed": 35,
  "ability": [
    {
      "dex": 2,
      "wis": 1
    }
  ],
  "age": {
    "mature": 100,
    "max": 750
  },
  "heightAndWeight": {
    "baseHeight": 54,
    "heightMod": "2d10",
    "baseWeight": 100,
    "weightMod": "1d4"
  },
  "weaponProficiencies": [
    {
      "longsword|phb": true,
      "shortsword|phb": true,
      "shortbow|phb": true,
      "longbow|phb": true
    }
  ],
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
      "name": "Mask of the Wild",
      "entries": [
        "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
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
      "innate": [
        "faerie fire",
        "enlarge/reduce"
      ],
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "will": [
        "druidcraft"
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
      "innate": [
        "detect magic",
        "disguise self"
      ]
    }
  ],
  "entries": [
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
      "innate": [
        "jump",
        "misty step"
      ],
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "mage hand"
      ]
    }
  ],
  "entries": [
    {
      "name": "Astral Knowledge",
      "entries": [
        "You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest."
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
      "innate": [
        "shield",
        "detect thoughts"
      ],
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "mage hand"
      ]
    }
  ],
  "entries": [
    {
      "name": "Mental Discipline",
      "entries": [
        "Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the {@condition charmed} and {@condition frightened} conditions on yourself."
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
      "name": "Gnome Cunning",
      "entries": [
        "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
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
      "innate": [
        "disguise self",
        "nondetection"
      ],
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
  "name": "Gnome",
  "subrace": "Forest",
  "source": "PHB",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "dex": 1,
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
      "name": "Gnome Cunning",
      "entries": [
        "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      ]
    },
    {
      "name": "Speak with Small Beasts",
      "entries": [
        "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
      ]
    }
  ]
},
{
  "name": "Gnome",
  "subrace": "Lightfoot",
  "source": "PHB",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "cha": 1,
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
      "name": "Gnome Cunning",
      "entries": [
        "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      ]
    },
    {
      "name": "Naturally Stealthy",
      "entries": [
        "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
      ],
      "type": "entries"
    }
  ]
},
{
  "name": "Gnome",
  "subrace": "Rock",
  "source": "PHB",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "con": 1,
      "int": 2
    }
  ],
  "traitTags": [
    "Uncommon Race"
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
  "languageProficiencies": [
    {
      "common": true,
      "gnomish": true
    }
  ],
  "toolProficiencies": [
    {
      "tinker's tools": true
    }
  ],
  "entries": [
    {
      "name": "Gnome Cunning",
      "entries": [
        "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      ]
    },
    {
      "name": "Artificer's Lore",
      "entries": [
        "Whenever you make an Intelligence ({@skill History}) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
      ]
    },
    {
      "name": "Tinker",
      "entries": [
        "You have proficiency with artisan's tools ({@item tinker's tools|phb}). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
        "When you create a device, choose one of the following options:",
        {
          "name": "Clockwork Toy",
          "entries": [
            "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
          ]
        },
        {
          "name": "Fire Starter",
          "entries": [
            "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
          ]
        },
        {
          "name": "Music Box",
          "entries": [
            "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
          ]
        }
      ]
    }
  ]
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
      "choose": [
        "str",
        "dex",
        "con",
        "int",
        "wis"
      ],
      "count": 2
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
      "name": "Fey Ancestry",
      "entries": [
        "You have advantage on saving throws against being {@condition charmed}, and magic can't put you to sleep."
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
    }
  ]
},
{
  "name": "Halfling",
  "subrace": "Lotusden",
  "source": "EGW",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "dex": 2,
      "wis": 1
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
  "additionalSpells": [
    {
      "innate": [
        "entangle",
        "spike growth"
      ],
      "ability": "wis",
      "known": [
        "druidcraft"
      ]
    }
  ],
  "entries": [
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
      "type": "entries",
      "name": "Timberwalk",
      "entries": [
        "Ability checks made to track you have disadvantage, and you can move across {@quickref difficult terrain||3} made of nonmagical plants and undergrowth without expending extra movement."
      ]
    }
  ]
},
{
  "name": "Halfling",
  "subrace": "Stout",
  "source": "PHB",
  "size": [
    "S"
  ],
  "speed": 25,
  "ability": [
    {
      "con": 1,
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
  "resist": [
    "poison"
  ],
  "entries": [
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
      "name": "Stout Resilience",
      "entries": [
        "You have advantage on saving throws against poison, and you have resistance against poison damage."
      ],
      "type": "entries"
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
      "known": [
        "disguise self",
        "hex"
      ]
    }
  ],
  "entries": [
    {
      "name": "Ancestral Legacy",
      "entries": [
        "If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.",
        "If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice."
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
            "Hags can undertake a ritual to irreversibly transform a hexblood they created into a new hag, either one of their own kind or that embodies the hexblood's nature. This requires that both the hag and hexblood be in the same place and consent to the lengthy ritualâ€”circumstances most hexbloods shun but might come to accept over the course of centuries. Once a hexblood undergoes this irreversible ritual, they emerge as a hag NPC no longer under the control of the hexblood's player, unless the DM rules otherwise."
          ]
        }
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
      "name": "Saving Face",
      "entries": [
        "Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest."
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
  "ability": [
    {
      "str": 1,
      "dex": 1,
      "con": 1,
      "int": 1,
      "wis": 1,
      "cha": 1
    }
  ],
  "languageProficiencies": [
    {
      "common": true,
      "anyStandard": 1
    }
  ]
},
{
  "name": "Human",
  "subrace": "Variant",
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
  "ability": [
    {
      "choose": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ],
      "count": 2
    }
  ],
  "feats": [
    {
      "any": 1
    }
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
      "quori": true,
      "anyStandard": 1
    }
  ],
  "resist": [
    "psychic"
  ],
  "entries": [
    {
      "name": "Dual Mind",
      "entries": [
        "You have advantage on all Wisdom saving throws."
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
      "choose": [
        "acrobatics",
        "deception",
        "sleight of hand",
        "stealth"
      ],
      "count": 2
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
      "name": "Expert Forgery",
      "entries": [
        "You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects."
      ]
    },
    {
      "name": "Mimicry",
      "entries": [
        "You can mimic sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom ({@skill Insight}) check opposed by your Charisma ({@skill Deception}) check."
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
      "choose": [
        "arcana",
        "investigation",
        "medicine",
        "sleight of hand",
        "survival"
      ]
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
      "known": [
        {
          "choose": "level=0|class=Sorcerer",
        }
      ]
    }
  ],
  "entries": [
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
          "type": "list",
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
          ]
        }
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
      "choose": [
        "athletics",
        "intimidation",
        "perception",
        "survival"
      ]
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
      "name": "Claws",
      "entries": [
        "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you can deal slashing damage equal to {@damage 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      ]
    },
    {
      "name": "Daunting Roar",
      "entries": [
        "As a bonus action, you can let out an especially menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw or become {@condition frightened} of you until the end of your next turn. The DC of the save equals 8 + your proficiency bonus + your Constitution modifier. Once you use this trait, you can't use it again until you finish a short or long rest."
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
      "choose": [
        "animal handling",
        "medicine",
        "nature",
        "perception",
        "stealth",
        "survival"
      ],
      "count": 2
    }
  ],
  "entries": [
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
      "choose": [
        "intimidation",
        "persuasion"
      ]
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
      "choose": [
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
  ],
  "languageProficiencies": [
    {
      "common": true,
      "orc": true
    }
  ],
  "entries": [
    {
      "name": "Aggressive",
      "entries": [
        "As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started."
      ]
    },
    {
      "name": "Powerful Build",
      "entries": [
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
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
      "entries": [
        "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
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
      "type": "entries",
      "name": "Amorphous",
      "entries": [
        "You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You have advantage on ability checks you make to initiate or escape a grapple."
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
      "choose": [
        "acrobatics",
        "athletics",
        "intimidation",
        "survival"
      ]
    }
  ],
  "entries": [
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
      "name": "Cat's Claws",
      "entries": [
        "You can use your claws to make unarmed strikes. When you hit with them, the strike deals {@damage 1d6} + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike."
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
      "name": "Chameleon Carapace",
      "entries": [
        "While you aren't wearing armor, your carapace gives you a base Armor Class of 13 + your Dexterity modifier.",
        "As an action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity ({@skill Stealth}) checks made to {@action hide} in those surroundings."
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
      "innate": [
        "hellish rebuke",
        "darkness"
      ],
      "ability": "cha",
      "known": [
        "thaumaturgy"
      ]
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
      "choose": [
        "animal handling",
        "medicine",
        "nature",
        "perception",
        "stealth",
        "survival"
      ]
    }
  ],
  "entries": [
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
      "name": "Shell Defense",
      "entries": [
        "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are {@condition prone}, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell."
      ]
    }
  ]
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
      "innate": [
        "fog cloud",
        "gust of wind",
        "water walk"
      ],
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
      "name": "Amphibious",
      "entries": [
        "You can breathe air and water."
      ]
    },
    {
      "name": "Emissary of the Sea",
      "entries": [
        "You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return."
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
      "name": "Telepathic Insight",
      "entries": [
        "Your mind's connection to the world around you strengthens your will. You have advantage on all Wisdom and Charisma saving throws."
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
      "choose": [
        "str",
        "dex",
        "int",
        "wis",
        "cha"
      ],
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
    }
  ]
}
];