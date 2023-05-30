"use strict";
database.feats = [
{
  "name": "Aberrant Dragonmark",
  "source": "ERLW",
  "prerequisite": [
    {
      "other": "No other dragonmark"
    }
  ],
  "ability": [
    {
      "con": 1
    }
  ],
  "additionalSpells": [
    {
      "ability": "con",
      "innate": [
        {
          "choose": "level=1|class=Sorcerer"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Sorcerer"
        }
      ]
    }
  ]
},
{
  "name": "Actor",
  "source": "PHB",
  "ability": [
    {
      "cha": 1
    }
  ],
  "entries": [
    "You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person.",
    "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."
  ]
},
{
  "name": "Alert",
  "source": "PHB",
  "initiative": 5,
  "entries": [
    "You can't be surprised while you are conscious.",
    "Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you."
  ]
},
{
  "name": "Artificer Initiate",
  "source": "TCE",
  "toolProficiencies": [
    {
      "anyArtisansTool": true
    }
  ],
  "additionalSpells": [
    {
      "ability": "int",
      "innate": [
        {
          "choose": "level=1|class=Artificer"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Artificer"
        }
      ]
    }
  ],
  "entries": [
    "You gain proficiency with one type of {@filter artisan's tools|items|type=artisan's tools} of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability."
  ]
},
{
  "name": "Athlete",
  "source": "PHB",
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "entries": [
    "When you are {@condition prone}, standing up uses only 5 feet of your movement.",
    "Climbing doesn't cost you extra movement.",
    "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
  ]
},
{
  "name": "Bountiful Luck",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "halfling"
        }
      ]
    }
  ],
  "entries": [
    "When an ally you can see within 30 feet of you rolls a 1 on the {@dice d20} for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll.",
    "When you use this ability, you can't use your Lucky racial trait before the end of your next turn."
  ]
},
{
  "name": "Charger",
  "source": "PHB",
  "entries": [
    "When you use your action to {@action Dash}, you can use a bonus action to make one melee weapon attack or to {@action shove} a creature.",
    "If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
  ]
},
{
  "name": "Chef",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "con",
        "wis"
      ]
    }
  ],
  "toolProficiencies": [
    {
      "cook's utensils": true
    }
  ],
  "entries": [
    "As part of a short rest, you can cook special food, provided you have ingredients and {@item cook's utensils|phb} on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra {@dice 1d8} hit points.",
    "With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus."
  ]
},
{
  "name": "Crossbow Expert",
  "source": "PHB",
  "entries": [
    "You ignore the loading quality of crossbows with which you are proficient.",
    "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
    "When you use the {@action Attack} action and attack with a one-handed weapon, you can use a bonus action to attack with a {@item hand crossbow|phb} you are holding."
  ]
},
{
  "name": "Crusher",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "str",
        "con"
      ]
    }
  ],
  "entries": [
    "Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.",
    "When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn."
  ]
},
{
  "name": "Defensive Duelist",
  "source": "PHB",
  "prerequisite": [
    {
      "ability": [
        {
          "dex": 13
        }
      ]
    }
  ],
  "entries": [
    "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
  ]
},
{
  "name": "Dragon Fear",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "dragonborn"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "str",
        "con",
        "cha"
      ]
    }
  ],
  "entries": [
    "Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds on the save if it can't hear or see you. On a failed save, a target becomes {@condition frightened} of you for 1 minute. If the {@condition frightened} target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."
  ]
},
{
  "name": "Dragon Hide",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "dragonborn"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "str",
        "con",
        "cha"
      ]
    }
  ],
  "entries": [
    "Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
    "You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@dice 1d4} + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike."
  ]
},
{
  "name": "Drow High Magic",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "elf",
          "subrace": "drow"
        }
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "cha",
      "known": [
        "detect magic"
      ],
      "innate": [
        "levitate",
        "dispel magic"
      ]
    }
  ]
},
{
  "name": "Dual Wielder",
  "source": "PHB",
  "entries": [
    "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
    "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light.",
    "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
  ]
},
{
  "name": "Dungeon Delver",
  "source": "PHB",
  "entries": [
    "You have advantage on Wisdom ({@skill Perception}) and Intelligence ({@skill Investigation}) checks made to detect the presence of secret doors.",
    "You have advantage on saving throws made to avoid or resist traps.",
    "You have resistance to the damage dealt by traps.",
    "Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom ({@skill Perception}) score."
  ]
},
{
  "name": "Durable",
  "source": "PHB",
  "ability": [
    {
      "con": 1
    }
  ],
  "entries": [
    "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
  ]
},
{
  "name": "Dwarven Fortitude",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "dwarf"
        }
      ]
    }
  ],
  "ability": [
    {
      "con": 1
    }
  ],
  "entries": [
    "Whenever you take the {@action Dodge} action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1)."
  ]
},
{
  "name": "Eldritch Adept",
  "source": "TCE",
  "prerequisite": [
    {
      "spellcasting": true
    }
  ],
  "optionalfeatureProgression": [
    {
      "name": "Eldritch Invocations",
      "featureType": [
        "EI"
      ],
      "progression": {
        "*": 1
      }
    }
  ],
  "entries": [
    "Studying occult lore, you learn one {@filter Eldritch Invocation|optionalfeatures|Feature Type=EI} option of your choice from the warlock class. Your spellcasting ability for the invocation is Intelligence, Wisdom, or Charisma (choose when you select this feat). If the invocation has a prerequisite of any kind, you can choose that invocation only if you're a warlock who meets the prerequisite.",
    "Whenever you gain a level, you can replace the invocation with another one from the warlock class."
  ]
},
{
  "name": "Elemental Adept",
  "source": "PHB",
  "prerequisite": [
    {
      "spellcasting": true
    }
  ],
  "entries": [
    "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.",
    "Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
    "You can select this feat multiple times. Each time you do so, you must choose a different damage type."
  ]
},
{
  "name": "Elven Accuracy",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "elf"
        },
        {
          "name": "half-elf"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "dex",
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "entries": [
    "Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once."
  ]
},
{
  "name": "Fade Away",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "gnome"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "dex",
        "int"
      ]
    }
  ],
  "entries": [
    "Immediately after you take damage, you can use a reaction to magically become {@condition invisible} until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest."
  ]
},
{
  "name": "Fey Teleportation",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "elf",
          "subrace": "high"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "int",
        "cha"
      ]
    }
  ],
  "languageProficiencies": [
    {
      "sylvan": true
    }
  ],
  "additionalSpells": [
    {
      "ability": "int",
      "innate": [
        {
          "misty step": "short or long rest"
        }
      ]
    }
  ]
},
{
  "name": "Fey Touched",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "inherit",
      "innate": [
        "misty step",
        {
          "choose": "level=1|school=E; D"
        }
      ]
    }
  ],
  "entries": [
    "You learn the {@spell misty step} spell and one {@filter 1st-level spell|spells|level=1|school=E; D} of your choice. The {@filter 1st-level spell|spells|level=1|school=E; D} must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat."
  ]
},
{
  "name": "Fighting Initiate",
  "source": "TCE",
  "prerequisite": [
    {
      "proficiency": [
        {
          "weapon": "martial"
        }
      ]
    }
  ],
  "optionalfeatureProgression": [
    {
      "name": "Fighting Style",
      "featureType": [
        "FS:F"
      ],
      "progression": {
        "*": 1
      }
    }
  ]
},
{
  "name": "Flames of Phlegethos",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "tiefling"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "int",
        "cha"
      ]
    }
  ],
  "entries": [
    "When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.",
    "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes {@damage 1d4} fire damage."
  ]
},
{
  "name": "Gift of the Chromatic Dragon",
  "source": "FTD",
  "entries": [
    {
      "name": "Chromatic Infusion",
      "description": [
        "As a bonus action, you can touch a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon; simple weapon} and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra {@damage 1d4} damage of the chosen type when it hits. After you use this bonus action, you can't do so again until you finish a long rest."
      ]
    },
    {
      "name": "Reactive Resistance",
      "description": [
        "When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Gift of the Gem Dragon",
  "source": "FTD",
  "ability": [
    {
      "choose": [
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "entries": [
    {
      "name": "Telekinetic Reprisal",
      "description": [
        "When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes {@damage 2d8} force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Gift of the Metallic Dragon",
  "source": "FTD",
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
        "cure wounds"
      ]
    }
  ],
  "entries": [
    {
      "name": "Protective Wings",
      "description": [
        "When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. You grant a bonus to the target's AC equal to your proficiency bonus against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Grappler",
  "source": "PHB",
  "srd": true,
  "prerequisite": [
    {
      "ability": [
        {
          "str": 13
        }
      ]
    }
  ],
  "entries": [
    "You have advantage on attack rolls against a creature you are grappling.",
    "You can use your action to try to pin a creature {@condition grappled} by you. To do so, make another grapple check. If you succeed, you and the creature are both {@condition restrained} until the grapple ends."
  ]
},
{
  "name": "Great Weapon Master",
  "source": "PHB",
  "entries": [
    "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
    "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
  ]
},
{
  "name": "Gunner",
  "source": "TCE",
  "ability": [
    {
      "dex": 1
    }
  ],
  "weaponProficiencies": [
    {
      "firearms": true
    }
  ],
  "entries": [
    "You ignore the loading property of firearms.",
    "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls."
  ]
},
{
  "name": "Healer",
  "source": "PHB",
  "entries": [
    "When you use a {@item healer's kit|phb} to stabilize a dying creature, that creature also regains 1 hit point.",
    "As an action, you can spend one use of a {@item healer's kit|phb} to tend to a creature and restore {@dice 1d6 + 4} hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
  ]
},
{
  "name": "Heavily Armored",
  "source": "PHB",
  "prerequisite": [
    {
      "proficiency": [
        {
          "armor": "medium"
        }
      ]
    }
  ],
  "ability": [
    {
      "str": 1
    }
  ],
  "armorProficiencies": [
    {
      "heavy": true
    }
  ]
},
{
  "name": "Heavy Armor Master",
  "source": "PHB",
  "prerequisite": [
    {
      "proficiency": [
        {
          "armor": "heavy"
        }
      ]
    }
  ],
  "ability": [
    {
      "str": 1
    }
  ],
  "entries": [
    "While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical attacks is reduced by 3."
  ]
},
{
  "name": "Infernal Constitution",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "tiefling"
        }
      ]
    }
  ],
  "ability": [
    {
      "con": 1
    }
  ],
  "resist": [
    "cold",
    "poison"
  ],
  "entries": [
    "You have advantage on saving throws against being {@condition poisoned}."
  ]
},
{
  "name": "Inspiring Leader",
  "source": "PHB",
  "prerequisite": [
    {
      "ability": [
        {
          "cha": 13
        }
      ]
    }
  ],
  "entries": [
    "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest."
  ]
},
{
  "name": "Keen Mind",
  "source": "PHB",
  "ability": [
    {
      "int": 1
    }
  ],
  "entries": [
    "You always know which way is north.",
    "You always know the number of hours left before the next sunrise or sunset.",
    "You can accurately recall anything you have seen or heard within the past month."
  ]
},
{
  "name": "Lightly Armored",
  "source": "PHB",
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "armorProficiencies": [
    {
      "light": true
    }
  ]
},
{
  "name": "Linguist",
  "source": "PHB",
  "ability": [
    {
      "int": 1
    }
  ],
  "languageProficiencies": [
    {
      "any": 3
    }
  ],
  "entries": [
    "You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
  ]
},
{
  "name": "Lucky",
  "source": "PHB",
  "entries": [
    "You have inexplicable luck that seems to kick in at just the right moment.",
    "You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional {@dice d20}. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the {@dice d20}s is used for the attack roll, ability check, or saving throw.",
    "You can also spend one luck point when an attack roll is made against you. Roll a {@dice d20}, and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.",
    "You regain your expended luck points when you finish a long rest."
  ]
},
{
  "name": "Mage Slayer",
  "source": "PHB",
  "entries": [
    "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.",
    "When you damage a creature that is {@status concentration||concentrating} on a spell, that creature has disadvantage on the saving throw it makes to maintain its {@status concentration}.",
    "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
  ]
},
{
  "name": "Magic Initiate",
  "source": "PHB",
  "additionalSpells": [
    {
      "name": "Bard Spells",
      "ability": "cha",
      "innate": [
        {
          "choose": "level=1|class=Bard"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Bard",
          "count": 2
        }
      ]
    },
    {
      "name": "Cleric Spells",
      "ability": "wis",
      "innate": [
        {
          "choose": "level=1|class=Cleric"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Cleric",
          "count": 2
        }
      ]
    },
    {
      "name": "Druid Spells",
      "ability": "wis",
      "innate": [
        {
          "choose": "level=1|class=Druid"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Druid",
          "count": 2
        }
      ]
    },
    {
      "name": "Sorcerer Spells",
      "ability": "cha",
      "innate": [
        {
          "choose": "level=1|class=Sorcerer"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Sorcerer",
          "count": 2
        }
      ]
    },
    {
      "name": "Warlock Spells",
      "ability": "cha",
      "innate": [
        {
          "choose": "level=1|class=Warlock"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Warlock",
          "count": 2
        }
      ]
    },
    {
      "name": "Wizard Spells",
      "ability": "int",
      "innate": [
        {
          "choose": "level=1|class=Wizard"
        }
      ],
      "known": [
        {
          "choose": "level=0|class=Wizard",
          "count": 2
        }
      ]
    }
  ]
},
{
  "name": "Martial Adept",
  "source": "PHB",
  "optionalfeatureProgression": [
    {
      "name": "Maneuvers",
      "featureType": [
        "MV:B"
      ],
      "progression": {
        "*": 2
      }
    }
  ],
  "entries": [
    "You learn two {@filter maneuvers|optionalfeatures|feature type=MV:B} of your choice from among those available to the {@class fighter|phb|Battle Master|Battle Master|phb|2-0} archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
    "You gain one superiority die, which is a {@dice d6} (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
  ]
},
{
  "name": "Medium Armor Master",
  "source": "PHB",
  "prerequisite": [
    {
      "proficiency": [
        {
          "armor": "medium"
        }
      ]
    }
  ],
  "entries": [
    "Wearing medium armor doesn't impose disadvantage on your Dexterity ({@skill Stealth}) checks.",
    "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
  ]
},
{
  "name": "Metamagic Adept",
  "source": "TCE",
  "prerequisite": [
    {
      "spellcasting": true
    }
  ],
  "optionalfeatureProgression": [
    {
      "name": "Metamagic",
      "featureType": [
        "MM"
      ],
      "progression": {
        "*": 2
      }
    }
  ],
  "entries": [
    "You learn two {@filter Metamagic|optionalfeatures|Feature Type=MM} options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class.",
    "You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest."
  ]
},
{
  "name": "Mobile",
  "source": "PHB",
  "speed": 10,
  "entries": [
    "When you use the {@action Dash} action, {@quickref difficult terrain||3} doesn't cost you extra movement on that turn.",
    "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
  ]
},
{
  "name": "Moderately Armored",
  "source": "PHB",
  "prerequisite": [
    {
      "proficiency": [
        {
          "armor": "light"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "armorProficiencies": [
    {
      "medium": true,
      "shield|phb": true
    }
  ]
},
{
  "name": "Mounted Combatant",
  "source": "PHB",
  "entries": [
    "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.",
    "You can force an attack targeted at your mount to target you instead.",
    "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
  ]
},
{
  "name": "Observant",
  "source": "PHB",
  "ability": [
    {
      "choose": [
        "int",
        "wis"
      ]
    }
  ],
  "entries": [
    "If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
    "You have a +5 bonus to your passive Wisdom ({@skill Perception}) and passive Intelligence ({@skill Investigation}) scores."
  ]
},
{
  "name": "Orcish Fury",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "half-orc"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "str",
        "con"
      ]
    }
  ],
  "entries": [
    "When you hit with an attack using a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon; simple weapon}, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.",
    "Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."
  ]
},
{
  "name": "Piercer",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "entries": [
    "Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.",
    "When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes."
  ]
},
{
  "name": "Poisoner",
  "source": "TCE",
  "toolProficiencies": [
    {
      "poisoner's kit": true
    }
  ],
  "entries": [
    "When you make a damage roll that deals poison damage, it ignores resistance to poison damage.",
    "You can apply poison to a weapon or piece of ammunition as a bonus action, instead of an action.",
    "You gain proficiency with the {@item poisoner's kit|phb} if you don't already have it. With one hour of work using a {@item poisoner's kit|phb} and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take {@damage 2d8} poison damage and become {@condition poisoned} until the end of your next turn."
  ]
},
{
  "name": "Polearm Master",
  "source": "PHB",
  "entries": [
    "When you take the {@action Attack} action and attack with only a {@item glaive|phb}, {@item halberd|phb}, {@item quarterstaff|phb}, or {@item spear|phb}, you can use a bonus action to make a melee attack with the opposite end of the weapon; this attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a {@dice d4}, and the attack deals bludgeoning damage.",
    "While you are wielding a {@item glaive|phb}, {@item halberd|phb}, {@item pike|phb}, {@item quarterstaff|phb}, or {@item spear|phb}, other creatures provoke an opportunity attack from you when they enter the reach you have with that weapon."
  ]
},
{
  "name": "Prodigy",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "half-elf"
        },
        {
          "name": "half-orc"
        },
        {
          "name": "human"
        }
      ]
    }
  ],
  "skillProficiencies": [
    {
      "any": 1
    }
  ],
  "languageProficiencies": [
    {
      "any": 1
    }
  ],
  "toolProficiencies": [
    {
      "any": 1
    }
  ]
},
{
  "name": "Resilient",
  "source": "PHB",
  "ability": [
    {
      "choose": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "savingThrowProficiencies": [
    {
      "choose": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ]
    }
  ]
},
{
  "name": "Revenant Blade",
  "source": "ERLW",
  "prerequisite": [
    {
      "race": [
        {
          "name": "elf"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "entries": [
    "While you are holding a double-bladed scimitar with two hands, you gain a +1 bonus to Armor Class.",
    "A double-bladed scimitar has the finesse property when you wield it."
  ]
},
{
  "name": "Ritual Caster",
  "source": "PHB",
  "prerequisite": [
    {
      "ability": [
        {
          "int": 13
        },
        {
          "wis": 13
        }
      ]
    }
  ],
  "additionalSpells": [
    {
      "name": "Bard Spells",
      "ability": "cha",
      "innate": [
        {
          "choose": "level=1|class=Bard|components & miscellaneous=ritual",
          "count": 2
        }
      ]
    },
    {
      "name": "Cleric Spells",
      "ability": "wis",
      "innate": [
        {
          "choose": "level=1|class=Cleric|components & miscellaneous=ritual",
          "count": 2
        }
      ]
    },
    {
      "name": "Druid Spells",
      "ability": "wis",
      "innate": [
        {
          "choose": "level=1|class=Druid|components & miscellaneous=ritual",
          "count": 2
        }
      ]
    },
    {
      "name": "Sorcerer Spells",
      "ability": "cha",
      "innate": [
        {
          "choose": "level=1|class=Sorcerer|components & miscellaneous=ritual",
          "count": 2
        }
      ]
    },
    {
      "name": "Warlock Spells",
      "ability": "cha",
      "innate": [
        {
          "choose": "level=1|class=Warlock|components & miscellaneous=ritual",
          "count": 2
        }
      ]
    },
    {
      "name": "Wizard Spells",
      "ability": "int",
      "innate": [
        {
          "choose": "level=1|class=Wizard|components & miscellaneous=ritual",
          "count": 2
        }
      ]
    }
  ]
},
{
  "name": "Savage Attacker",
  "source": "PHB",
  "entries": [
    "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total."
  ]
},
{
  "name": "Second Chance",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "halfling"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "dex",
        "con",
        "cha"
      ]
    }
  ],
  "entries": [
    "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't use it again until you roll initiative at the start of combat or until you finish a short or long rest."
  ]
},
{
  "name": "Sentinel",
  "source": "PHB",
  "entries": [
    "When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.",
    "Creatures provoke opportunity attacks from you even if they take the {@action Disengage} action before leaving your reach.",
    "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
  ]
},
{
  "name": "Shadow Touched",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "inherit",
      "innate": [
        "invisibility",
        {
          "choose": "level=1|school=I; N"
        }
      ]
    }
  ],
  "entries": [
    "You learn the {@spell invisibility} spell and one {@filter 1st-level spell|spells|level=1|school=I; N} of your choice. The {@filter 1st-level spell|spells|level=1|school=I; N} must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat."
  ]
},
{
  "name": "Sharpshooter",
  "source": "PHB",
  "entries": [
    "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
    "Your ranged weapon attacks ignore half cover and three-quarters cover.",
    "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
  ]
},
{
  "name": "Shield Master",
  "source": "PHB",
  "entries": [
    "If you take the {@action Attack} action on your turn, you can use a bonus action to try to {@action shove} a creature within 5 feet of you with your shield.",
    "If you aren't {@condition incapacitated}, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
    "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
  ]
},
{
  "name": "Skill Expert",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "skillProficiencies": [
    {
      "any": 1
    }
  ],
  "expertise": [
    {
      "anyProficientSkill": 1
    }
  ]
},
{
  "name": "Skilled",
  "source": "PHB",
  "skillToolLanguageProficiencies": [
    {
      "choose": [
        "anySkill",
        "anyTool"
      ],
      "count": 3
    }
  ]
},
{
  "name": "Skulker",
  "source": "PHB",
  "prerequisite": [
    {
      "ability": [
        {
          "dex": 13
        }
      ]
    }
  ],
  "entries": [
    "You can try to hide when you are lightly obscured from the creature from which you are hiding.",
    "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.",
    "Dim light doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks relying on sight."
  ]
},
{
  "name": "Slasher",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "entries": [
    "Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.",
    "When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls."
  ]
},
{
  "name": "Spell Sniper",
  "source": "PHB",
  "prerequisite": [
    {
      "spellcasting": true
    }
  ],
  "additionalSpells": [
    {
      "name": "Bard Spells",
      "ability": "cha",
      "known": [
        {
          "choose": "level=0|class=Bard|spell attack=m; r; o"
        }
      ]
    },
    {
      "name": "Cleric Spells",
      "ability": "wis",
      "known": [
        {
          "choose": "level=0|class=Cleric|spell attack=m; r; o"
        }
      ]
    },
    {
      "name": "Druid Spells",
      "ability": "wis",
      "known": [
        {
          "choose": "level=0|class=Druid|spell attack=m; r; o"
        }
      ]
    },
    {
      "name": "Sorcerer Spells",
      "ability": "cha",
      "known": [
        {
          "choose": "level=0|class=Sorcerer|spell attack=m; r; o"
        }
      ]
    },
    {
      "name": "Warlock Spells",
      "ability": "cha",
      "known": [
        {
          "choose": "level=0|class=Warlock|spell attack=m; r; o"
        }
      ]
    },
    {
      "name": "Wizard Spells",
      "ability": "int",
      "known": [
        {
          "choose": "level=0|class=Wizard|spell attack=m; r; o"
        }
      ]
    }
  ],
  "entries": [
    "When you cast a spell that requires you to make an attack roll, the spell's range is doubled.",
    "Your ranged spell attacks ignore half cover and three-quarters cover."
  ]
},
{
  "name": "Squat Nimbleness",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "dwarf"
        },
        {
          "name": "small race",
          "displayEntry": "a Small race"
        }
      ]
    }
  ],
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "skillProficiencies": [
    {
      "choose": [
        "acrobatics",
        "athletics"
      ]
    }
  ],
  "speed": 5,
  "entries": [
    "You have advantage on any Strength ({@skill Athletics}) or Dexterity ({@skill Acrobatics}) check you make to escape from being {@condition grappled}."
  ]
},
{
  "name": "Strixhaven Initiate",
  "source": "SCC",
  "additionalSpells": [
    {
      "name": "Lorehold 1",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "light",
        "sacred flame"
      ],
      "innate": [
        {
          "choose": "level=1|class=cleric; wizard"
        }
      ]
    },
    {
      "name": "Lorehold 2",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "light",
        "thaumaturgy"
      ],
      "innate": [
        {
          "choose": "level=1|class=cleric; wizard"
        }
      ]
    },
    {
      "name": "Lorehold 3",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "sacred flame",
        "thaumaturgy"
      ],
      "innate": [
        {
          "choose": "level=1|class=cleric; wizard"
        }
      ]
    },
    {
      "name": "Prismari 1",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "fire bolt",
        "prestidigitation"
      ],
      "innate": [
        {
          "choose": "level=1|class=bard; sorcerer"
        }
      ]
    },
    {
      "name": "Prismari 2",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "fire bolt",
        "ray of frost"
      ],
      "innate": [
        {
          "choose": "level=1|class=bard; sorcerer"
        }
      ]
    },
    {
      "name": "Prismari 3",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "prestidigitation",
        "ray of frost"
      ],
      "innate": [
        {
          "choose": "level=1|class=bard; sorcerer"
        }
      ]
    },
    {
      "name": "Quandrix 1",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "druidcraft",
        "guidance"
      ],
      "innate": [
        {
          "choose": "level=1|class=druid; wizard"
        }
      ]
    },
    {
      "name": "Quandrix 2",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "druidcraft",
        "mage hand"
      ],
      "innate": [
        {
          "choose": "level=1|class=druid; wizard"
        }
      ]
    },
    {
      "name": "Quandrix 3",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "guidance",
        "mage hand"
      ],
      "innate": [
        {
          "choose": "level=1|class=druid; wizard"
        }
      ]
    },
    {
      "name": "Silverquill 1",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "sacred flame",
        "thaumaturgy"
      ],
      "innate": [
        {
          "choose": "level=1|class=bard; cleric"
        }
      ]
    },
    {
      "name": "Silverquill 2",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "sacred flame",
        "vicious mockery"
      ],
      "innate": [
        {
          "choose": "level=1|class=bard; cleric"
        }
      ]
    },
    {
      "name": "Silverquill 3",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "thaumaturgy",
        "vicious mockery"
      ],
      "innate": [
        {
          "choose": "level=1|class=bard; cleric"
        }
      ]
    },
    {
      "name": "Witherbloom 1",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "chill touch",
        "druidcraft"
      ],
      "innate": [
        {
          "choose": "level=1|class=druid; wizard"
        }
      ]
    },
    {
      "name": "Witherbloom 2",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "chill touch",
        "spare the dying"
      ],
      "innate": [
        {
          "choose": "level=1|class=druid; wizard"
        }
      ]
    },
    {
      "name": "Witherbloom 3",
      "ability": {
        "choose": [
          "int",
          "wis",
          "cha"
        ]
      },
      "known": [
        "druidcraft",
        "spare the dying"
      ],
      "innate": [
        {
          "choose": "level=1|class=druid; wizard"
        }
      ]
    }
  ]
},
{
  "name": "Strixhaven Mascot",
  "source": "SCC",
  "prerequisite": [
    {
      "level": 4,
      "feat": [
        "strixhaven initiate|scc"
      ]
    }
  ],
  "additionalSpells": [
    {
      "ritual": [
        "find familiar"
      ]
    }
  ],
  "entries": [
    "When you take the {@action Attack} action on your turn, you can forgo one attack to allow your mascot familiar to make one attack of its own with its reaction.",
    "If your mascot familiar is within 60 feet of you, you can teleport as an action, swapping places with the familiar. If your destination space is too small for you to occupy, the teleportation fails and is wasted. Once you teleport in this way, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to do it again."
  ]
},
{
  "name": "Svirfneblin Magic",
  "source": "MTF",
  "prerequisite": [
    {
      "race": [
        {
          "name": "gnome",
          "subrace": "deep"
        }
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "int",
      "known": [
        "nondetection"
      ],
      "innate": [
        "blindness/deafness",
        "blur",
        "disguise self"
      ]
    }
  ]
},
{
  "name": "Tavern Brawler",
  "source": "PHB",
  "ability": [
    {
      "choose": [
        "str",
        "con"
      ]
    }
  ],
  "entries": [
    "You are proficient with improvised weapons.",
    "Your unarmed strike uses a {@damage d4} for damage.",
    "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
  ]
},
{
  "name": "Telekinetic",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "inherit",
      "known": [
        "mage hand"
      ]
    }
  ],
  "entries": [
    "You learn the {@spell mage hand} cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand {@condition invisible}. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.",
    "As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save."
  ]
},
{
  "name": "Telepathic",
  "source": "TCE",
  "ability": [
    {
      "choose": [
        "int",
        "wis",
        "cha"
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "inherit",
      "innate": [
        "detect thoughts"
      ]
    }
  ],
  "entries": [
    "You can speak telepathically to any creature you can see within 60 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.",
    "You can cast the {@spell detect thoughts} spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them."
  ]
},
{
  "name": "Tough",
  "source": "PHB",
  "entries": [
    "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
  ]
},
{
  "name": "War Caster",
  "source": "PHB",
  "prerequisite": [
    {
      "spellcasting": true
    }
  ],
  "entries": [
    "You have advantage on Constitution saving throws that you make to maintain your {@status concentration} on a spell when you take damage.",
    "You can perform the somatic components of spells even when you have weapons or a {@item shield|phb} in one or both hands.",
    "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
  ]
},
{
  "name": "Weapon Master",
  "source": "PHB",
  "ability": [
    {
      "choose": [
        "str",
        "dex"
      ]
    }
  ],
  "weaponProficiencies": [
    {
      "choose": {
        "fromFilter": "type=martial weapon; mundane weapon|miscellaneous=mundane",
        "count": 4
      }
    }
  ]
},
{
  "name": "Wood Elf Magic",
  "source": "XGE",
  "prerequisite": [
    {
      "race": [
        {
          "name": "elf",
          "subrace": "wood"
        }
      ]
    }
  ],
  "additionalSpells": [
    {
      "ability": "wis",
      "innate": [
        "longstrider",
        "pass without trace"
      ],
      "known": [
        {
          "choose": "level=0|class=Druid"
        }
      ]
    }
  ]
}
];