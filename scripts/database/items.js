"use strict";
database.items = [
{
  "name": "+1 All-Purpose Tool",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by an artificer",
  "reqAttuneTags": [
    {
      "class": "artificer"
    }
  ],
  "wondrous": true,
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "focus": [
    "Artificer"
  ],
  "entries": [
    "This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the {@book Player's Handbook} for a list of {@item artisan's tools}). Whatever form the tool takes, you are proficient with it.",
    "While holding this tool, you gain a +1 bonus to the spell attack rolls and the saving throw DCs of your artificer spells.",
    "As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "+1 Amulet of the Devout",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by a cleric or paladin",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "paladin"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "entries": [
    "This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a +1 bonus to spell attack rolls and the saving throw DCs of your spells.",
    "While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "+1 Arcane Grimoire",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "focus": [
    "Wizard"
  ],
  "entries": [
    "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your wizard spells.",
    "You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1."
  ]
},
{
  "name": "+1 Bloodwell Vial",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells.",
    "In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn."
  ]
},
{
  "name": "+1 Dragonhide Belt",
  "source": "FTD",
  "rarity": "uncommon",
  "reqAttune": "by a monk",
  "reqAttuneTags": [
    {
      "class": "monk"
    }
  ],
  "wondrous": true,
  "entries": [
    "This finely detailed belt is made of dragonhide. While wearing it, you gain a +1 bonus to the saving throw DCs of your ki features. In addition, you can use an action to regain ki points equal to a roll of your Martial Arts die. You can't use this action again until the next dawn."
  ]
},
{
  "name": "+1 Moon Sickle",
  "source": "TCE",
  "baseItem": "sickle",
  "type": "M",
  "rarity": "uncommon",
  "reqAttune": "by a druid or ranger",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "ranger"
    }
  ],
  "weight": 2,
  "weaponCategory": "simple",
  "property": [
    "L"
  ],
  "dmg1": "1d4",
  "dmgType": "S",
  "bonusWeapon": "+1",
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "focus": [
    "Druid",
    "Ranger"
  ],
  "weapon": true,
  "entries": [
    "This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a +1 bonus to attack and damage rolls made with it, and you gain a +1 bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.",
    "When you cast a spell that restores hit points, you can roll a {@dice d4} and add the number rolled to the amount of hit points restored, provided you are holding the sickle."
  ]
},
{
  "name": "+1 Rhythm-Maker's Drum",
  "source": "TCE",
  "type": "INS",
  "rarity": "uncommon",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "grantsProficiency": true,
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "entries": [
    "While holding this {@item drum}, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your bard spells.",
    "As an action, you can play the {@item drum} to regain one use of your Bardic Inspiration feature. This property of the {@item drum} can't be used again until the next dawn."
  ]
},
{
  "name": "+1 Rod of the Pact Keeper",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a warlock",
  "reqAttuneTags": [
    {
      "class": "warlock"
    }
  ],
  "weight": 2,
  "bonusSpellAttack": "+1",
  "bonusSpellSaveDc": "+1",
  "entries": [
    "While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your warlock spells.",
    "In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "+1 Wand of the War Mage",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "bonusSpellAttack": "+1",
  "entries": [
    "While you are holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "+2 All-Purpose Tool",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by an artificer",
  "reqAttuneTags": [
    {
      "class": "artificer"
    }
  ],
  "wondrous": true,
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "focus": [
    "Artificer"
  ],
  "entries": [
    "This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the {@book Player's Handbook} for a list of {@item artisan's tools}). Whatever form the tool takes, you are proficient with it.",
    "While holding this tool, you gain a +2 bonus to the spell attack rolls and the saving throw DCs of your artificer spells.",
    "As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "+2 Amulet of the Devout",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a cleric or paladin",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "paladin"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "entries": [
    "This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a +2 bonus to spell attack rolls and the saving throw DCs of your spells.",
    "While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "+2 Arcane Grimoire",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "focus": [
    "Wizard"
  ],
  "entries": [
    "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your wizard spells.",
    "You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1."
  ]
},
{
  "name": "+2 Bloodwell Vial",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells.",
    "In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn."
  ]
},
{
  "name": "+2 Dragonhide Belt",
  "source": "FTD",
  "rarity": "rare",
  "reqAttune": "by a monk",
  "reqAttuneTags": [
    {
      "class": "monk"
    }
  ],
  "wondrous": true,
  "entries": [
    "This finely detailed belt is made of dragonhide. While wearing it, you gain a +2 bonus to the saving throw DCs of your ki features. In addition, you can use an action to regain ki points equal to a roll of your Martial Arts die. You can't use this action again until the next dawn."
  ]
},
{
  "name": "+2 Moon Sickle",
  "source": "TCE",
  "baseItem": "sickle",
  "type": "M",
  "rarity": "rare",
  "reqAttune": "by a druid or ranger",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "ranger"
    }
  ],
  "weight": 2,
  "weaponCategory": "simple",
  "property": [
    "L"
  ],
  "dmg1": "1d4",
  "dmgType": "S",
  "bonusWeapon": "+2",
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "focus": [
    "Druid",
    "Ranger"
  ],
  "weapon": true,
  "entries": [
    "This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a +2 bonus to attack and damage rolls made with it, and you gain a +2 bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.",
    "When you cast a spell that restores hit points, you can roll a {@dice d4} and add the number rolled to the amount of hit points restored, provided you are holding the sickle."
  ]
},
{
  "name": "+2 Rhythm-Maker's Drum",
  "source": "TCE",
  "type": "INS",
  "rarity": "rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "grantsProficiency": true,
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "entries": [
    "While holding this {@item drum}, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your bard spells.",
    "As an action, you can play the {@item drum} to regain one use of your Bardic Inspiration feature. This property of the {@item drum} can't be used again until the next dawn."
  ]
},
{
  "name": "+2 Rod of the Pact Keeper",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a warlock",
  "reqAttuneTags": [
    {
      "class": "warlock"
    }
  ],
  "weight": 2,
  "bonusSpellAttack": "+2",
  "bonusSpellSaveDc": "+2",
  "entries": [
    "While holding this rod, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your warlock spells.",
    "In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "+2 Wand of the War Mage",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "bonusSpellAttack": "+2",
  "entries": [
    "While you are holding this wand, you gain a +2 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "+3 All-Purpose Tool",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": "by an artificer",
  "reqAttuneTags": [
    {
      "class": "artificer"
    }
  ],
  "wondrous": true,
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "focus": [
    "Artificer"
  ],
  "entries": [
    "This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the {@book Player's Handbook} for a list of {@item artisan's tools}). Whatever form the tool takes, you are proficient with it.",
    "While holding this tool, you gain a +3 bonus to the spell attack rolls and the saving throw DCs of your artificer spells.",
    "As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "+3 Amulet of the Devout",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": "by a cleric or paladin",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "paladin"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "entries": [
    "This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol, you gain a +3 bonus to spell attack rolls and the saving throw DCs of your spells.",
    "While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "+3 Arcane Grimoire",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "focus": [
    "Wizard"
  ],
  "entries": [
    "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your wizard spells.",
    "You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1."
  ]
},
{
  "name": "+3 Bloodwell Vial",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells.",
    "In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn."
  ]
},
{
  "name": "+3 Dragonhide Belt",
  "source": "FTD",
  "rarity": "very rare",
  "reqAttune": "by a monk",
  "reqAttuneTags": [
    {
      "class": "monk"
    }
  ],
  "wondrous": true,
  "entries": [
    "This finely detailed belt is made of dragonhide. While wearing it, you gain a +3 bonus to the saving throw DCs of your ki features. In addition, you can use an action to regain ki points equal to a roll of your Martial Arts die. You can't use this action again until the next dawn."
  ]
},
{
  "name": "+3 Moon Sickle",
  "source": "TCE",
  "baseItem": "sickle",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": "by a druid or ranger",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "ranger"
    }
  ],
  "weight": 2,
  "weaponCategory": "simple",
  "property": [
    "L"
  ],
  "dmg1": "1d4",
  "dmgType": "S",
  "bonusWeapon": "+3",
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "focus": [
    "Druid",
    "Ranger"
  ],
  "weapon": true,
  "entries": [
    "This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a +3 bonus to attack and damage rolls made with it, and you gain a +3 bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.",
    "When you cast a spell that restores hit points, you can roll a {@dice d4} and add the number rolled to the amount of hit points restored, provided you are holding the sickle."
  ]
},
{
  "name": "+3 Rhythm-Maker's Drum",
  "source": "TCE",
  "type": "INS",
  "rarity": "very rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "grantsProficiency": true,
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "entries": [
    "While holding this {@item drum}, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your bard spells.",
    "As an action, you can play the {@item drum} to regain one use of your Bardic Inspiration feature. This property of the {@item drum} can't be used again until the next dawn."
  ]
},
{
  "name": "+3 Rod of the Pact Keeper",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a warlock",
  "reqAttuneTags": [
    {
      "class": "warlock"
    }
  ],
  "weight": 2,
  "bonusSpellAttack": "+3",
  "bonusSpellSaveDc": "+3",
  "entries": [
    "While holding this rod, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your warlock spells.",
    "In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "+3 Wand of the War Mage",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "bonusSpellAttack": "+3",
  "entries": [
    "While you are holding this wand, you gain a +3 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Abacus",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 200
},
{
  "name": "Abracadabrus",
  "source": "IDRotF",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 25,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d20}",
  "charges": 20,
  "entries": [
    "An abracadabrus is an ornate, gemstone-studded wooden chest that weighs 25 pounds while empty. Its interior compartment is a cube measuring 1&frac12; feet on a side.",
    "The chest has 20 charges. A creature can use an action to touch the closed lid of the chest and expend 1 of the chest's charges while naming one or more nonmagical objects (including raw materials, foodstuffs, and liquids) worth a total of 1 gp or less. The named objects magically appear in the chest, provided they can all fit inside it and the chest doesn't contain anything else. For example, the chest can conjure a plate of strawberries, a bowl of hot soup, a flagon of water, a stuffed animal, or a bag of twenty caltrops. Food and drink conjured by the chest are delicious, and they spoil if not consumed after 24 hours. Gems and precious metals created by the chest disappear after 1 minute.",
    "The chest regains {@dice 1d20} expended charges daily at dawn. If the item's last charge is expended, roll a {@dice d20}. On a 1, the chest loses its magic (becoming an ordinary chest), and its gemstones turn to dust."
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Acid (vial)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 2500,
  "entries": [
    "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes {@damage 2d6} acid damage."
  ]
},
{
  "name": "Acid Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "acid"
  ],
  "detail1": "green",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Adamantine Bar",
  "source": "WDH",
  "type": "TG",
  "rarity": "none",
  "weight": 10,
  "value": 100000
},
{
  "name": "Airship",
  "source": "DMG",
  "type": "AIR",
  "rarity": "none",
  "value": 2000000,
  "crew": 10,
  "vehAc": 13,
  "vehHp": 300,
  "vehSpeed": 8,
  "capPassenger": 20,
  "capCargo": 1
},
{
  "name": "Alchemical Compendium",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "Acrid odors cling to this stained, heavy volume. The book's metal fittings are copper, iron, lead, silver, and gold, some frozen mid-transition from one metal to another. When found, the book contains the following spells: {@spell enlarge/reduce}, {@spell feather fall}, {@spell flesh to stone}, {@spell gaseous form}, {@spell magic weapon}, and {@spell polymorph}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the transmutation school.",
        "As an action, you can touch a nonmagical object that isn't being worn or carried and spend a number of charges to transform the target into another object. For 1 charge, the object can be no larger than 1 foot on a side. You can spend additional charges to increase the maximum dimensions by 2 feet per charge. The new object must have a gold value equal to or less than the original."
      ]
    }
  ],
  "attachedSpells": [
    "enlarge/reduce",
    "feather fall",
    "flesh to stone",
    "gaseous form",
    "magic weapon",
    "polymorph"
  ]
},
{
  "name": "Alchemist's Fire (flask)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 5000,
  "entries": [
    "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes {@damage 1d4} fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
  ]
},
{
  "name": "Alchemist's Supplies",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 79
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 8,
  "value": 5000,
  "additionalEntries": [
    "Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana",
      "entries": [
        "Proficiency with alchemist's supplies allows you to unlock more information on {@skill Arcana} checks involving potions and similar materials."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "When you inspect an area for clues, proficiency with alchemist's supplies grants additional insight into any chemicals or other substances that might have been used in the area."
      ]
    },
    {
      "type": "entries",
      "name": "Alchemical Crafting",
      "entries": [
        "You can use this tool proficiency to create alchemical items. A character can spend money to collect raw materials, which weigh 1 pound for every 50 gp spent. The DM can allow a character to make a check using the indicated skill with advantage. As part of a long rest, you can use alchemist's supplies to make one dose of {@item acid (vial)|acid}, {@item alchemist's fire (flask)|alchemist's fire}, {@item antitoxin (vial)|antitoxin}, {@item oil (flask)|oil}, {@item perfume (vial)|perfume}, or {@item soap}. Subtract half the value of the created item from the total gp worth of raw materials you are carrying."
      ]
    },
    {
      "type": "table",
      "caption": "Alchemist's Supplies",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Create a puff of thick smoke",
          "10"
        ],
        [
          "Identify a poison",
          "10"
        ],
        [
          "Identify a substance",
          "15"
        ],
        [
          "Start a fire",
          "15"
        ],
        [
          "Neutralize acid",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Alchemy Jug",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 12,
  "entries": [
    "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
    "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
    "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
    {
      "type": "table",
      "colLabels": [
        "Liquid",
        "Max Amount"
      ],
      "colStyles": [
        "col-2",
        "col-10"
      ],
      "rows": [
        [
          "Acid",
          "8 ounces"
        ],
        [
          "Basic poison",
          "&frac12; ounce"
        ],
        [
          "Beer",
          "4 gallons"
        ],
        [
          "Honey",
          "1 gallon"
        ],
        [
          "Mayonnaise",
          "2 gallons"
        ],
        [
          "Oil",
          "1 quart"
        ],
        [
          "Vinegar",
          "2 gallons"
        ],
        [
          "Water, fresh",
          "8 gallons"
        ],
        [
          "Water, salt",
          "12 gallons"
        ],
        [
          "Wine",
          "1 gallon"
        ]
      ]
    }
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Alchemy Jug (Blue)",
  "source": "CM",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 12,
  "entries": [
    "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
    "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
    "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
    {
      "type": "table",
      "colStyles": [
        "col-6 text-center",
        "col-6 text-center"
      ],
      "colLabels": [
        "Liquid",
        "Max Amount"
      ],
      "rows": [
        [
          "Beer",
          "4 gallons"
        ],
        [
          "Boiling Hot Tea",
          "1 quart"
        ],
        [
          "Honey",
          "1 gallon"
        ],
        [
          "Mayonnaise",
          "2 gallons"
        ],
        [
          "Oil",
          "quart"
        ],
        [
          "Vinegar",
          "2 gallons"
        ],
        [
          "Water, fresh",
          "8 gallons"
        ],
        [
          "Water, salt",
          "12 gallons"
        ],
        [
          "Wine",
          "1 gallon"
        ]
      ]
    }
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Alchemy Jug (Orange)",
  "source": "CM",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 12,
  "entries": [
    "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.",
    "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
    "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
    {
      "type": "table",
      "colStyles": [
        "col-6 text-center",
        "col-6 text-center"
      ],
      "colLabels": [
        "Liquid",
        "Max Amount"
      ],
      "rows": [
        [
          "Beer",
          "4 gallons"
        ],
        [
          "Honey",
          "1 gallon"
        ],
        [
          "Mayonnaise",
          "2 gallons"
        ],
        [
          "Oil",
          "quart"
        ],
        [
          "Soy Sauce",
          "1 gallon"
        ],
        [
          "Vinegar",
          "2 gallons"
        ],
        [
          "Water, fresh",
          "8 gallons"
        ],
        [
          "Water, salt",
          "12 gallons"
        ],
        [
          "Wine",
          "1 gallon"
        ]
      ]
    }
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Ale (Gallon)",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 20
},
{
  "name": "Ale (Mug)",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 4
},
{
  "name": "Alexandrite",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 50000,
  "entries": [
    "A transparent dark green gemstone."
  ]
},
{
  "name": "Amber",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A transparent watery gold to rich gold gemstone."
  ]
},
{
  "name": "Amber Runestone",
  "source": "NRH-TLT",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This piece of polished amber is engraved with many tiny runes. As a bonus action, you can mentally command the stone to shed bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the light persists, you can also use a bonus action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each."
  ]
},
{
  "name": "Amethyst",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A transparent deep purple gemstone."
  ]
},
{
  "name": "Amethyst Lodestone",
  "source": "FTD",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "equal": {
      "fly": "walk"
    }
  },
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6}",
  "charges": 6,
  "entries": [
    "This fist-sized chunk of amethyst is infused with an amethyst dragon's ability to bend gravitational forces. While you are carrying the lodestone, you have advantage on Strength saving throws.",
    "The lodestone has 6 charges for the following properties, which you can use while you are holding the stone. The stone regains {@dice 1d6} expended charges daily at dawn.",
    {
      "type": "entries",
      "name": "Flight",
      "entries": [
        "As a bonus action, you can expend 1 charge to gain the power of flight for 10 minutes. For the duration, you gain a flying speed equal to your walking speed, and you can hover."
      ]
    },
    {
      "type": "entries",
      "name": "Gravitational Thrust",
      "entries": [
        "As an action, you can expend 1 charge to focus gravity around a creature you can see within 60 feet of you. The target must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet in a direction of your choice."
      ]
    },
    {
      "type": "entries",
      "name": "Reverse Gravity",
      "entries": [
        "As an action, you can expend 3 charges to cast {@spell reverse gravity} from the stone (save DC 18)."
      ]
    }
  ],
  "attachedSpells": [
    "reverse gravity"
  ]
},
{
  "name": "Amulet",
  "source": "PHB",
  "type": "SCF",
  "scfType": "holy",
  "rarity": "none",
  "weight": 1,
  "value": 500
},
{
  "name": "Amulet of Health",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "ability": {
    "static": {
      "con": 19
    }
  },
  "entries": [
    "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution score is already 19 or higher without it."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Amulet of Proof against Detection and Location",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "While wearing this amulet, you are hidden from {@filter divination|spells|school=D} magic. You can't be targeted by such magic or perceived through magical scrying sensors."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Amulet of Protection from Turning",
  "source": "TftYP",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "While you wear this amulet of silver and turquoise, you have advantage on saving throws against effects that turn undead.",
    "If you fail a saving throw against such an effect, you can choose to succeed instead. You can do so three times, and expended uses recharge daily at dawn. Each time an effect that turns undead is used against you, the amulet glows with silvery blue light for a few seconds."
  ]
},
{
  "name": "Amulet of dinosaur feathers (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Amulet of the Black Skull",
  "source": "ToA",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6}",
  "charges": 6,
  "entries": [
    "This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.",
    "The amulet has 6 charges and regains {@dice 1d6} charges daily at dawn. While wearing the amulet, you can use an action to expend 1 of its charges to transport yourself and anything you are wearing or carrying to a location within 100 feet of you. The destination you choose doesn't need to be in your line of sight, but it must be familiar to you (in other words, a place you have seen or visited), and it must be on the same plane of existence as you. This effect isn't subject to the magic restrictions placed on the Tomb of the Nine Gods; thus, the amulet can be used to enter and exit the tomb.",
    "If you aren't undead, you must make a DC 16 Constitution saving throw each time you use the amulet to teleport. On a failed saving throw, the black skull cackles as you are transformed in transit. The transformation takes effect as soon as you arrive at the destination, and is determined randomly by rolling percentile dice and consulting the Black Skull Transformation table.",
    {
      "type": "table",
      "caption": "Black Skull Transformation",
      "colLabels": [
        "{@dice d100}",
        "Transformation"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01-20",
          "The symbol of {@creature Acererak|ToA} is burned into your flesh, a curse that can only be removed with a {@spell remove curse} spell or similar magic. Until the curse ends, your hit points can't be restored by magic."
        ],
        [
          "21-35",
          "You grow larger as if affected by an {@spell enlarge/reduce} spell, except the effect lasts for 1 hour."
        ],
        [
          "36-50",
          "You grow smaller as if affected by an {@spell enlarge/reduce} spell, except the effect lasts for 1 hour."
        ],
        [
          "51-70",
          "You arrive at the destination wearing nothing but the amulet of the black skull. Everything else that you were wearing or carrying appears in a random unoccupied space within 100 feet of you."
        ],
        [
          "71-95",
          "You are {@condition paralyzed} for 1 minute or until this effect is ended with a {@spell lesser restoration} spell or similar magic."
        ],
        [
          "96-00",
          "You become {@condition petrified}. This effect can be ended only with a {@spell greater restoration} spell or similar magic."
        ]
      ]
    }
  ]
},
{
  "name": "Amulet of the Drunkard",
  "source": "EGW",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This amulet smells of old, ale-stained wood. While wearing it, you can regain {@dice 4d4 + 4} hit points when you drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can't do so again until the next dawn."
  ]
},
{
  "name": "Amulet of the Planes",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the {@spell plane shift} spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a {@dice d100}. On a 1-60, you travel to a random location on the plane you named. On a 61-100, you travel to a randomly determined plane of existence."
  ],
  "attachedSpells": [
    "plane shift"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Animated Shield",
  "source": "DMG",
  "type": "S",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "entries": [
    "While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are {@condition incapacitated} or die, at which point the shield falls to the ground or into your hand if you have one free."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Antitoxin (vial)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
  ]
},
{
  "name": "Aquamarine",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 50000,
  "entries": [
    "A transparent pale blue-green gemstone."
  ]
},
{
  "name": "Arcane Cannon",
  "source": "EGW",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "This Large cannon is imbued with magic. It requires no ammunition and doesn't need to be loaded. It takes one action to aim the cannon and one action to fire it. After the cannon has fired, it must recharge for 5 minutes before it can be fired again.",
    "The creature firing the cannon chooses the effect from the following options:",
    {
      "type": "entries",
      "name": "Acid Jet",
      "entries": [
        "The cannon discharges acid in a line 300 feet long and 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 22 ({@damage 4d10}) acid damage on a failed save, or half as much damage on a successful one. In addition, a creature that fails its saving throw takes 11 ({@damage 2d10}) acid damage at the start of each of its turns; a creature can end this damage by using its action to wash off the acid with a pint or more of water."
      ]
    },
    {
      "type": "entries",
      "name": "Fire Jet",
      "entries": [
        "The cannon discharges fire in a line 300 feet long and 5 feet wide. Each creature in the area must make a DC 15 Dexterity saving throw, taking 33 ({@damage 6d10}) fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
      ]
    },
    {
      "type": "entries",
      "name": "Frost Shot",
      "entries": [
        "The cannon shoots a ball of frost to a point you can see within 1,200 feet of the cannon. The ball then expands to form a 30-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, a creature takes 22 ({@damage 4d10}) cold damage, and its speed is reduced by 10 feet for 1 minute. On a successful save, the creature takes half as much damage, and its speed isn't reduced. A creature whose speed is reduced by this effect can repeat the save at the end of each of its turns, ending the effect on itself on a success."
      ]
    },
    {
      "type": "entries",
      "name": "Lightning Shot",
      "entries": [
        "The cannon shoots a ball of lightning to a point you can see within 1,200 feet of the cannon. The lightning then expands to form a 20-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Dexterity saving throw, taking 33 ({@damage 6d10}) lightning damage on a failed save, or half as much damage on a successful one. Creatures wearing metal armor have disadvantage on the save."
      ]
    },
    {
      "type": "entries",
      "name": "Poison Spray",
      "entries": [
        "The cannon expels poison gas in a 60-foot cone. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, the creature takes 22 ({@damage 4d10}) poison damage and is {@condition poisoned} for 1 minute. On a successful save, the creature takes half as much damage and isn't {@condition poisoned}. A creature {@condition poisoned} in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      ]
    }
  ]
},
{
  "name": "Arcane Propulsion Arm",
  "source": "ERLW",
  "rarity": "very rare",
  "reqAttune": "by a creature missing a hand or an arm",
  "wondrous": true,
  "property": [
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d8",
  "dmgType": "O",
  "weapon": true,
  "entries": [
    "This prosthetic appendage was developed by artificers of House Cannith. To attune to this item, you must attach it to your arm at the wrist, elbow, or shoulder, at which point the prosthetic magically forms a copy of the appendage it's replacing.",
    "While attached, the prosthetic provides these benefits:",
    {
      "type": "list",
      "items": [
        "The prosthetic is a fully capable part of your body.",
        "You can take an action to remove the prosthetic, and it removes itself if your attunement to it ends. It can't be removed against your will.",
        "The prosthetic is a magic melee weapon with which you're proficient. It deals {@damage 1d8} force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the prosthetic detaches and flies at the target of the attack, then immediately returns to you and reattaches."
      ]
    }
  ],
  "optionalfeatures": [
    "replicate magic item"
  ]
},
{
  "name": "Armor of Vulnerability (Bludgeoning)",
  "source": "DMG",
  "baseItem": "plate armor",
  "type": "HA",
  "resist": [
    "bludgeoning"
  ],
  "vulnerable": [
    "piercing",
    "slashing"
  ],
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "curse": true,
  "weight": 65,
  "ac": 18,
  "strength": "15",
  "stealth": true,
  "entries": [
    "While wearing this armor, you have resistance to bludgeoning damage.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This armor is cursed, a fact that is revealed only when an {@spell identify} spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the {@spell remove curse} spell or similar magic; removing the armor fails to end the curse. While cursed you have vulnerability to piercing and slashing damage."
      ]
    }
  ]
},
{
  "name": "Armor of Vulnerability (Piercing)",
  "source": "DMG",
  "baseItem": "plate armor",
  "type": "HA",
  "resist": [
    "piercing"
  ],
  "vulnerable": [
    "bludgeoning",
    "slashing"
  ],
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "curse": true,
  "weight": 65,
  "ac": 18,
  "strength": "15",
  "stealth": true,
  "entries": [
    "While wearing this armor, you have resistance to piercing damage.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This armor is cursed, a fact that is revealed only when an {@spell identify} spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the {@spell remove curse} spell or similar magic; removing the armor fails to end the curse. While cursed you have vulnerability to bludgeoning and slashing damage."
      ]
    }
  ]
},
{
  "name": "Armor of Vulnerability (Slashing)",
  "source": "DMG",
  "baseItem": "plate armor",
  "type": "HA",
  "resist": [
    "slashing"
  ],
  "vulnerable": [
    "bludgeoning",
    "piercing"
  ],
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "curse": true,
  "weight": 65,
  "ac": 18,
  "strength": "15",
  "stealth": true,
  "entries": [
    "While wearing this armor, you have resistance to slashing damage.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This armor is cursed, a fact that is revealed only when an {@spell identify} spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the {@spell remove curse} spell or similar magic; removing the armor fails to end the curse. While cursed you have vulnerability to bludgeoning and piercing damage."
      ]
    }
  ]
},
{
  "name": "Arrow-Catching Shield",
  "source": "DMG",
  "type": "S",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "bonusAc": "+2",
  "entries": [
    "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Assassin's Blood",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 15000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 ({@damage 1d12}) poison damage and is {@condition poisoned} for 24 hours. On a successful save, the creature takes half damage and isn't {@condition poisoned}."
  ],
  "poisonTypes": [
    "ingested"
  ]
},
{
  "name": "Astral Shard",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This crystal is a solidified shard of the Astral Plane, swirling with silver mist. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, immediately after casting the spell you can teleport to an unoccupied space you can see within 30 feet of you."
  ]
},
{
  "name": "Astromancy Archive",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "This brass disc of articulated, concentric rings unfolds into an armillary sphere. As a bonus action, you can unfold it into the sphere or back into a disc. When found, it contains the following spells, which are wizard spells for you while you are attuned to it: {@spell augury}, {@spell divination}, {@spell find the path}, {@spell foresight}, {@spell locate creature}, and {@spell locate object}. It functions as a spellbook for you, with spells encoded on the rings.",
    "While you are holding the archive, you can use it as a spellcasting focus for your wizard spells.",
    "The archive has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the archive, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the archive. The new spell must be of the divination school.",
        "When a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to expend 1 charge and force the creature to roll a {@dice d4} and apply the number rolled as a bonus or penalty (your choice) to the original roll. You can do this after you see the roll but before its effects are applied."
      ]
    }
  ],
  "attachedSpells": [
    "augury",
    "divination",
    "find the path",
    "foresight",
    "locate creature",
    "locate object"
  ]
},
{
  "name": "Atlas of Endless Horizons",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "This thick book is bound in dark leather, crisscrossed with inlaid silver lines suggesting a map or chart. When found, the book contains the following spells, which are wizard spells for you while you are attuned to the book: {@spell arcane gate}, {@spell dimension door}, {@spell gate}, {@spell misty step}, {@spell plane shift}, {@spell teleportation circle}, and {@spell word of recall}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.",
        "When you are hit by an attack, you can use your reaction to expend 1 charge to teleport up to 10 feet to an unoccupied space you can see. If your new position is out of range of the attack, it misses you."
      ]
    }
  ],
  "attachedSpells": [
    "arcane gate",
    "dimension door",
    "gate",
    "misty step",
    "plane shift",
    "teleportation circle",
    "word of recall"
  ]
},
{
  "name": "Axe Beak",
  "source": "IDRotF",
  "type": "MNT",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An {@creature axe beak}'s splayed toes allow it to run across snow, and it can carry as much weight as a mule. A domesticated axe beak can be purchased in Ten-Towns for 50 gp."
  ]
},
{
  "name": "Azorius Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Azorius, allows you to cast {@spell ensnaring strike}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Azorius's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "ensnaring strike"
  ]
},
{
  "name": "Azorius Keyrune",
  "source": "GGR",
  "rarity": "rare",
  "reqAttune": "by a member of the Azorius guild",
  "reqAttuneTags": [
    {
      "background": "azorius functionary|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "This keyrune is carved from white marble and lapis lazuli to resemble a noble bird of prey. It can become a {@creature giant eagle} for up to 1 hour. While the transformed eagle is within 1 mile of you, you can communicate with it telepathically. As an action, you can see through the eagle's eyes and hear what it hears until the start of your next turn, and you gain the benefit of its keen sight. During this time, you are deaf and blind with regard to your own senses.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature giant eagle}. If there isn't enough space for the eagle, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the eagle takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Azurite",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque mottled deep blue gemstone."
  ]
},
{
  "name": "Backpack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 200,
  "entries": [
    "A backpack can hold one cubic foot or 30 pounds of gear. You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack."
  ],
  "containerCapacity": {
    "weight": [
      30
    ]
  }
},
{
  "name": "Badge of the Watch",
  "source": "WDH",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusAc": "+2",
  "entries": [
    "A badge of the Watch is given only to those who have earned the trust of the Open Lord of Waterdeep. The badge, signifying the rank of captain in Waterdeep's City Watch, bears the emblem of Waterdeep and is meant to be worn or carried.",
    "While wearing the badge, you gain a +2 bonus to AC if you aren't using a {@item shield}.",
    "If the badge is more than 5 feet away from you for more than 1 minute, it vanishes and harmlessly reappears on a surface within 5 feet of the Open Lord. While holding the badge, the Open Lord knows your location, provided the two of you are on the same plane of existence and your attunement to the badge hasn't ended.",
    "As an action, the Open Lord can touch the badge and end your attunement to it."
  ]
},
{
  "name": "Bag of Beans",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "weight": 0.5,
  "entries": [
    "Inside this heavy cloth bag are {@dice 3d4} dry beans. The bag weighs &frac14; pound for each bean it contains.",
    "If you dump the bag's contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking {@damage 5d4} fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried.",
    "If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. The DM can choose an effect from the following table, determine it randomly, or create an effect.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d100}",
        "Effect"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01",
          "{@dice 5d4} toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take {@damage 5d6} poison damage and become {@condition poisoned} for 1 hour. On an even roll, the eater gains {@dice 5d6} temporary hit points for 1 hour."
        ],
        [
          "02-10",
          "A geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (DM's choice) 30 feet into the air for {@dice 1d12} rounds."
        ],
        [
          "11-20",
          "A {@creature treant} sprouts. There's a {@chance 50} chance that the treant is chaotic evil and attacks."
        ],
        [
          "21-30",
          "An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours."
        ],
        [
          "31-40",
          "A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished)."
        ],
        [
          "41-50",
          "{@dice 1d6 + 6} {@creature shrieker||shriekers} sprout."
        ],
        [
          "51-60",
          "{@dice 1d4 + 8} bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the DM's choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke."
        ],
        [
          "61-70",
          "A hungry {@creature bulette} burrows up and attacks."
        ],
        [
          "71-80",
          "A fruit tree grows. It has {@dice 1d10 + 20} fruit, {@dice 1d8} of which act as randomly determined magic potions, while one acts as an ingested poison of the DM's choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days."
        ],
        [
          "81-90",
          "A nest of {@dice 1d4 + 3} eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes {@damage 10d6} force damage from an internal magical explosion."
        ],
        [
          "91-99",
          "A pyramid with a 60-foot-square base bursts upward. Inside is a sarcophagus containing a {@creature mummy lord}. The pyramid is treated as the {@creature mummy lord||mummy lord's} lair, and its sarcophagus contains treasure of the DM's choice."
        ],
        [
          "00",
          "A giant beanstalk sprouts, growing to a height of the DM's choice. The top leads where the DM chooses, such as to a great view, a {@creature cloud giant||cloud giant's} castle, or a different plane of existence."
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Bag of Devouring",
  "source": "DMG",
  "tier": "minor",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 15,
  "entries": [
    "This bag superficially resembles a {@item bag of holding} but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.",
    "The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a {@chance 50} chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.",
    "Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane.",
    "If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Bag of Holding",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 15,
  "entries": [
    "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.",
    "If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.",
    "Placing a bag of holding inside an extradimensional space created by a {@item Heward's handy haversack}, {@item portable hole}, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
  ],
  "containerCapacity": {
    "weight": [
      500
    ],
    "weightless": true
  },
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table A",
    "Magic Item Table B"
  ]
},
{
  "name": "Bag of Tricks, Gray",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 0.5,
  "entries": [
    "This ordinary bag, made from gray cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
    "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a {@dice d8} and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.",
    "The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
    "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d8}",
        "Creature"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "1",
          "{@creature Weasel}"
        ],
        [
          "2",
          "{@creature Giant rat}"
        ],
        [
          "3",
          "{@creature Badger}"
        ],
        [
          "4",
          "{@creature Boar}"
        ],
        [
          "5",
          "{@creature Panther}"
        ],
        [
          "6",
          "{@creature Giant badger}"
        ],
        [
          "7",
          "{@creature Dire wolf}"
        ],
        [
          "8",
          "{@creature Giant elk}"
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Bag of Tricks, Rust",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 0.5,
  "entries": [
    "This ordinary bag, made from rust cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
    "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a {@dice d8} and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.",
    "The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
    "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d8}",
        "Creature"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "1",
          "{@creature Rat}"
        ],
        [
          "2",
          "{@creature Owl}"
        ],
        [
          "3",
          "{@creature Mastiff}"
        ],
        [
          "4",
          "{@creature Goat}"
        ],
        [
          "5",
          "{@creature Giant goat}"
        ],
        [
          "6",
          "{@creature Giant boar}"
        ],
        [
          "7",
          "{@creature Lion}"
        ],
        [
          "8",
          "{@creature Brown bear}"
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Bag of Tricks, Tan",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 0.5,
  "entries": [
    "This ordinary bag, made from tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object.",
    "You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a {@dice d8} and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.",
    "The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.",
    "Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d8}",
        "Creature"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "1",
          "{@creature Jackal}"
        ],
        [
          "2",
          "{@creature Ape}"
        ],
        [
          "3",
          "{@creature Baboon}"
        ],
        [
          "4",
          "{@creature Axe beak}"
        ],
        [
          "5",
          "{@creature Black bear}"
        ],
        [
          "6",
          "{@creature Giant weasel}"
        ],
        [
          "7",
          "{@creature Giant hyena}"
        ],
        [
          "8",
          "{@creature Tiger}"
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Bagpipes",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 6,
  "value": 3000
},
{
  "name": "Balance of Harmony",
  "source": "TftYP",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This scale bears celestial symbols on one pan and fiendish symbols on the other. You can use the scale to cast {@spell detect evil and good} as a ritual. Doing so requires you to place the scale on a solid surface, then sprinkle the pans with holy water or place a transparent gem worth 100 gp in each pan. The scale remains motionless if it detects nothing, tips to one side or the other for good (consecrated) or evil (desecrated), and fluctuates slightly if it detects a creature appropriate to the spell but neither good nor evil. By touching the scales after casting the ritual, you instantly learn any information the spell can normally convey, and then the effect ends."
  ],
  "attachedSpells": [
    "detect evil and good"
  ]
},
{
  "name": "Ball Bearing",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 0.002,
  "value": 0.1,
  "entries": [
    "Most commonly found inside a {@item Ball Bearings (Bag of 1,000)|bag of ball bearings}."
  ]
},
{
  "name": "Ball Bearings (bag of 1,000)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 100,
  "entries": [
    "As an action, you can spill these tiny metal balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall {@condition prone}. A creature moving through the area at half speed doesn't need to make the saving throw."
  ],
  "packContents": [
    {
      "item": "ball bearing",
      "quantity": 1000
    }
  ],
  "atomicPackContents": true
},
{
  "name": "Balloon Pack",
  "source": "PotA",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This backpack contains the spirit of an {@creature air elemental} and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the {@spell levitate} spell for 10 minutes, targeting yourself and requiring no {@status concentration}. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the {@spell feather fall} spell for yourself.",
    "When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. If you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.",
    "After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack."
  ],
  "attachedSpells": [
    "levitate",
    "feather fall"
  ]
},
{
  "name": "Banded Agate",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "A translucent striped brown, blue, white, or red gemstone."
  ]
},
{
  "name": "Banner of the Krig Rune",
  "source": "SKT",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusWeaponAttack": "+1",
  "bonusAc": "+1",
  "entries": [
    "Crafted from a thick, red fabric, this banner measures 5 feet high and 3 feet wide. The krig (war) rune is displayed on the fabric with round, metal plates sewn into it. It can be attached to a 10-foot pole to serve as a standard. Furling or unfurling the banner requires an action. The banner has the following properties.",
    {
      "name": "Mark of Courage",
      "type": "entries",
      "entries": [
        "As a bonus action, you can touch the unfurled banner and cause it to emanate courage. You and your allies are immune to the {@condition frightened} condition while within 20 feet of it. This benefit lasts for 10 minutes or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Sentinel Standard",
      "type": "entries",
      "entries": [
        "You can see {@condition invisible} creatures while they are within 20 feet of the unfurled banner and within your line of sight."
      ]
    },
    {
      "type": "entries",
      "name": "Standard's Shield",
      "entries": [
        "As a bonus action, you can touch the unfurled banner and invoke this power. Any ranged attack roll that targets you or an ally of yours has disadvantage if the target is within 20 feet of the unfurled banner. This benefit lasts for 1 minute or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Gift of Battle",
      "type": "entries",
      "entries": [
        "You can transfer the banner's magic to a place by tracing the krig rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 500-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the banner to be within 5 feet of you and during which you choose creatures, creature types, or both that will benefit from the magic. At the end, the banner is destroyed, and the area gains the following property:",
        "While in the 500-foot-radius sphere, the creatures you chose during the transfer process are immune to the {@condition frightened} condition and gain a +1 bonus to attack rolls and AC."
      ]
    }
  ]
},
{
  "name": "Barrel",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 70,
  "value": 200,
  "entries": [
    "A barrel can hold 40 gallons of liquid or 4 cubic feet of solids."
  ]
},
{
  "name": "Barrier Peaks Trinket",
  "source": "LLK",
  "type": "G",
  "rarity": "none",
  "entries": [
    "At any point while the characters are searching through unusual equipment or detritus in the Monastery of the Distressed Body or the city of Daoine Gloine, roll on the following table to determine what they find. Each character finds one Barrier Peaks trinket over the course of the adventure.",
    {
      "type": "table",
      "caption": "Barrier Peaks Trinkets",
      "colLabels": [
        "d100",
        "Trinket"
      ],
      "colStyles": [
        "text-center col-2",
        "col-10"
      ],
      "rows": [
        [
          "01-02",
          "A handheld device containing a glowing green gem that darkens when no oxygen is present"
        ],
        [
          "03-04",
          "A foot-long, egg-shaped object made from stitched leather"
        ],
        [
          "05-06",
          "A black metal cylinder that dictates the history of an unknown plant or animal species when held"
        ],
        [
          "07-08",
          "A cylindrical jar containing a pickled crustacean of unknown origin"
        ],
        [
          "09-10",
          "A small thumb-button storage cylinder that releases a useless iron key when pressed"
        ],
        [
          "11-12",
          "An unusual heraldic cloak pin that emits a short musical fanfare when tapped"
        ],
        [
          "13-14",
          "A handheld tube that sucks in dust when squeezed and captures it in a detachable compartment"
        ],
        [
          "15-16",
          "A scintillating disk of unknown material"
        ],
        [
          "17-18",
          "A dial that can be twisted to slowly click back to its origin, whereupon it emits a loud ringing noise"
        ],
        [
          "19-20",
          "A hovering, apple-sized orb of metal that follows you around"
        ],
        [
          "21-22",
          "The {@condition petrified} cocoon of an unknown insect"
        ],
        [
          "23-24",
          "A bronze gauntlet set with many slots, and which violently expels any object pressed into those slots"
        ],
        [
          "25-26",
          "A box that plays an illusory message in an unknown language when opened"
        ],
        [
          "27-28",
          "A rod that causes you to forget the last five minutes when you press a button near its tip"
        ],
        [
          "29-30",
          "A palm-sized cylinder that emits a harmless ray of glowing blue light when squeezed"
        ],
        [
          "31-32",
          "A bead that suppresses your hearing when secreted inside either ear, causing you to be {@condition deafened}"
        ],
        [
          "33-34",
          "An amulet that displays your current health as a green bar above your head, with the bar retracting as your hit point total decreases"
        ],
        [
          "35-36",
          "A casket containing one hundred tasteless blue pills that produce no discernible effect when swallowed"
        ],
        [
          "37-38",
          "A metal mechanical puzzle with no apparent solution"
        ],
        [
          "39-40",
          "A metal spinning top that never tips over when spun"
        ],
        [
          "41-42",
          "Two strips of cloth-like material, each coated with a soft, hair-like fuzz on one side"
        ],
        [
          "43-44",
          "A simple wire pyramid that preserves any foodstuffs it is placed over"
        ],
        [
          "45-46",
          "A star chart labeled in an unknown script"
        ],
        [
          "47-48",
          "A rectangle of black glass that displays indecipherable arcane runes when you swipe your finger across it"
        ],
        [
          "49-50",
          "A schematic that shows the inner workings of an impossibly complex device"
        ],
        [
          "51-52",
          "An odd pair of comfortable shoes made from supple, multicolored material"
        ],
        [
          "53-54",
          "A mirror that makes you appear more beautiful when you tap your reflection"
        ],
        [
          "55-56",
          "A mechanical metal puppy that playfully follows you around when activated"
        ],
        [
          "57-58",
          "A talking bracelet that speaks only to correct your grammar"
        ],
        [
          "59-60",
          "A bar of soap that can remove any stain"
        ],
        [
          "61-62",
          "A journal in Common, written by someone in a world similar to but not quite the same as your own"
        ],
        [
          "63-64",
          "A tub containing one serving of disgusting but nutritious goop that refills itself slowly over the course of one week"
        ],
        [
          "65-66",
          "An instruction manual for activating a mysterious, world-destroying device"
        ],
        [
          "67-68",
          "A small supple disk that displays weird moving symbols when placed over either eye"
        ],
        [
          "69-70",
          "A tiny desk set with large, colorful buttons, each of which plays a discordant musical fanfare when pressed"
        ],
        [
          "71-72",
          "A pair of tinted spectacles that reduce the glare of the sun when worn"
        ],
        [
          "73-74",
          "An inflatable bedroll made from an unknown material, and which slowly deflates when used"
        ],
        [
          "75-76",
          "A rod tipped with a blunt metal pincer whose grip can be adjusted by turning a screw"
        ],
        [
          "77-78",
          "A battered helmet with a transparent orange visor that flips into place when donned"
        ],
        [
          "79-80",
          "An animated map of a mysterious city that appears to be tracking the movements of five creatures"
        ],
        [
          "81-82",
          "A cylinder of mist that holds your hair perfectly in shape when sprayed onto your head"
        ],
        [
          "83-84",
          "A talking wand that tells you the name of any plant you point it at"
        ],
        [
          "85-86",
          "A metal bracelet that displays the number of steps you've taken since your last long rest"
        ],
        [
          "87-88",
          "A tiny handheld device that projects a glowing dot onto whatever you point it at"
        ],
        [
          "89-90",
          "A rectangular piece of glass that displays a twelve-digit countdown on its surface"
        ],
        [
          "91-92",
          "A wall chart of mysterious formulae arranged into a color-coded grid"
        ],
        [
          "93-94",
          "A handheld device that solves any math problem you input using its buttons"
        ],
        [
          "95-96",
          "A ball of speckled brown fur that appears to be alive"
        ],
        [
          "97-98",
          "A complicated crystal board game that you don't know how to play"
        ],
        [
          "99-00",
          "A large glass rectangle that displays a storm of black and white patterns when you press a button on its underside"
        ]
      ]
    }
  ]
},
{
  "name": "Barrier Tattoo (Large)",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo depicts protective imagery and uses ink that resembles liquid metal.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Protection",
      "entries": [
        "While you aren't wearing armor, the tattoo grants you an Armor Class of 18. You can use a shield and still gain this benefit."
      ]
    }
  ]
},
{
  "name": "Barrier Tattoo (Medium)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo depicts protective imagery and uses ink that resembles liquid metal.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Protection",
      "entries": [
        "While you aren't wearing armor, the tattoo grants you an Armor Class of 15 + your Dexterity modifier (maximum of +2). You can use a shield and still gain this benefit."
      ]
    }
  ]
},
{
  "name": "Barrier Tattoo (Small)",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo depicts protective imagery and uses ink that resembles liquid metal.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Protection",
      "entries": [
        "While you aren't wearing armor, the tattoo grants you an Armor Class of 12 + your dexterity bonus. You can use a shield and still gain this benefit."
      ]
    }
  ]
},
{
  "name": "Basic Fishing Equipment",
  "source": "AAG",
  "type": "G",
  "rarity": "none",
  "value": 10,
  "entries": [
    "Basic Fishing Equipment includes a pole, a line, a hook, and either a lure or some bait.",
    "Fishing is a popular pastime in Wildspace and the Astral Sea, though this activity isn't possible aboard a ship that is moving faster than its flying speed. At the end of each hour spent fishing, a character can make a DC 15 Wisdom ({@skill Survival}) check. A failed check indicates no fish is caught during that hour. On a successful check, roll a {@dice d10} and consult the Fishing table to determine the catch.",
    {
      "type": "table",
      "caption": "",
      "colLabels": [
        "d10",
        "Catch"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1-2",
          "Tiny, inedible fish (a creature that consumes it is poisoned for 1 hour)"
        ],
        [
          "3-5",
          "Tiny, edible fish (feeds one person)"
        ],
        [
          "6-8",
          "Small, edible fish (feeds up to four people)"
        ],
        [
          "9",
          "Hostile {@creature space eel|BAM} (see {@book Boo's Astral Menagerie|BAM}; feeds up to twelve people)"
        ],
        [
          "10",
          "Hostile {@creature gray scavver|BAM} (see {@book Boo's Astral Menagerie|BAM}; feeds up to twenty people), some other creature of the DM's choosing, or an Tiny object of the DM's choosing"
        ]
      ]
    }
  ]
},
{
  "name": "Basic Poison (vial)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 10000,
  "poison": true,
  "entries": [
    "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take {@damage 1d4} poison damage. Once applied, the poison retains potency for 1 minute before drying."
  ]
},
{
  "name": "Basket",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 40,
  "entries": [
    "A basket holds 2 cubic feet or 40 pounds of gear."
  ],
  "containerCapacity": {
    "weight": [
      40
    ]
  }
},
{
  "name": "Battering Shield",
  "source": "EGW",
  "baseItem": "shield",
  "type": "S",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "bonusAc": "+1",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "While holding this iron tower shield, you gain a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
    "Additionally, the shield has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you are holding the shield and push a creature within your reach at least 5 feet away, you can expend 1 charge to push that creature an additional 10 feet, knock it {@condition prone}, or both."
  ]
},
{
  "name": "Battle Standard of Infernal Power",
  "source": "BGDIA",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This hell-forged battle standard is made of infernal iron and fitted with a small, unopenable cage containing a {@creature quasit}. The trapped {@creature quasit} is {@condition incapacitated}, and its cage has AC 19, 10 hit points, and immunity to all types of damage except force damage. If killed or somehow released, the {@creature quasit} disappears in a cloud of smoke, and a new one appears in the cage, provided the cage is intact.",
    "While you hold the banner, your weapon attacks and those of all allied creatures within 300 feet of you count as magical for the purposes of overcoming damage immunities and resistances."
  ]
},
{
  "name": "Bead of Force",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "weight": 0.0625,
  "entries": [
    "This small black sphere measures &frac34; of an inch in diameter and weighs an ounce. Typically, {@dice 1d4 + 4} {@italic beads of force} are found together.",
    "You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take {@damage 5d4} force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No attack or other effect can.",
    "An enclosed creature can use its action to push against the sphere's wall, moving the sphere up to half the creature's walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Bead of Nourishment",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This spongy, flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of rations."
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Bead of Refreshment",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This spongy, flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
  ]
},
{
  "name": "Bedroll",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 7,
  "value": 100
},
{
  "name": "Bejeweled ivory drinking horn with gold filigree",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Bejeweled ivory drinking horn with gold inlay (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Bell",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 100
},
{
  "name": "Bell Branch",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a druid or warlock",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "warlock"
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Druid",
    "Warlock"
  ],
  "entries": [
    "This silver implement is shaped like a tree branch and is strung with small golden bells. The branch is a spellcasting focus for your spells while you hold it.",
    "The branch has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "As a bonus action, you can expend 1 charge to detect the presence of aberrations, celestials, constructs, elementals, fey, fiends, or undead within 60 feet of you. If such creatures are present and don't have total cover from you, the bells ring softly, their tone indicating the creature types present.",
        "As an action, you can expend 1 charge to cast {@spell protection from evil and good}."
      ]
    }
  ],
  "attachedSpells": [
    "protection from evil and good"
  ]
},
{
  "name": "Belt of Dwarvenkind",
  "source": "DMG",
  "resist": [
    "poison"
  ],
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "con": 2
  },
  "entries": [
    "While wearing this belt, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "Your Constitution score increases by 2, to a maximum of 20.",
        "You have advantage on Charisma ({@skill Persuasion}) checks made to interact with dwarves."
      ]
    },
    "In addition, while attuned to the belt, you have a {@chance 50} chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.",
    "If you aren't a dwarf, you gain the following additional benefits while wearing the belt:",
    {
      "type": "list",
      "items": [
        "You have advantage on saving throws against poison, and you have resistance against poison damage.",
        "You have {@sense darkvision} out to a range of 60 feet.",
        "You can speak, read, and write Dwarvish."
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Belt of Fire Giant Strength",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "static": {
      "str": 25
    }
  },
  "entries": [
    "While wearing this belt, your Strength score changes to 25. The item has no effect on you if your Strength without the belt is equal to or greater than the belt's score."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Belt of Frost Giant Strength",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "static": {
      "str": 23
    }
  },
  "entries": [
    "While wearing this belt, your Strength score changes to 23. The item has no effect on you if your Strength without the belt is equal to or greater than the belt's score."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Belt of Hill Giant Strength",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "static": {
      "str": 21
    }
  },
  "entries": [
    "While wearing this belt, your Strength score changes to 21. The item has no effect on you if your Strength without the belt is equal to or greater than the belt's score."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Belt of Stone Giant Strength",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "static": {
      "str": 23
    }
  },
  "entries": [
    "While wearing this belt, your Strength score changes to 23. The item has no effect on you if your Strength without the belt is equal to or greater than the belt's score."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Birdpipes",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "Pan pipes or satyr pipes, also known as the shalm, these are sacred to {@deity Lliira|Faer&ucirc;nian|scag} and popular with wood elf and wild elf bards."
  ]
},
{
  "name": "Bit and bridle",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 1,
  "value": 200
},
{
  "name": "Biza's Breath",
  "source": "JttRC",
  "type": "G",
  "rarity": "none",
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 16 Constitution saving throw or become {@condition poisoned} for 1 minute. The {@condition poisoned} creature must use its action to make a melee attack against a randomly determined creature within its reach. If there is no other creature within its reach, the {@condition poisoned} creature does nothing on its turn. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  ],
  "poisonTypes": [
    "inhaled"
  ]
},
{
  "name": "Black Chromatic Rose",
  "source": "WBtW",
  "resist": [
    "acid"
  ],
  "detail1": "drips acid",
  "rarity": "rare",
  "wondrous": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Chromatic Rose}"
  ]
},
{
  "name": "Black Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "acid"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to acid damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest black dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Black Ghost Orchid Seed",
  "source": "JttRC",
  "type": "G",
  "rarity": "none",
  "entries": [
    "Every few years, a ghost orchid colony grows a black pod as thick as a human fist that holds three soft, black seeds. A creature that consumes one of these black seeds is affected by the spell {@spell feign death}. If the creature is unaware of the pod's effects or does not wish to be affected, it can resist the effect by succeeding on a DC 16 Constitution saving throw. Otherwise, it is considered to be a willing recipient of the spell."
  ]
},
{
  "name": "Black Opal",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A translucent dark green with black mottling and golden flecks gemstone."
  ]
},
{
  "name": "Black Pearl",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 50000,
  "entries": [
    "An opaque pure black gemstone."
  ]
},
{
  "name": "Black Sap",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "value": 30000,
  "entries": [
    "This tarry substance harvested from the dark boughs of the death's head willow is a powerful intoxicant. It can be smoked as a concentrate or injected directly into the bloodstream. A creature subjected to a dose of black sap cannot be {@condition charmed} or {@condition frightened} for {@dice 1d6} hours.",
    "For each dose of black sap consumed, a creature must succeed on a DC 15 Constitution saving throw or become {@condition poisoned} for {@dice 2d4} hours-an effect that is cumulative with multiple doses."
  ]
},
{
  "name": "Black Sapphire",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 500000,
  "entries": [
    "A translucent lustrous black with glowing highlights gemstone."
  ]
},
{
  "name": "Black velvet mask stitched with silver thread",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Blanket",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 3,
  "value": 50
},
{
  "name": "Blast Scepter",
  "source": "WDMM",
  "type": "RD",
  "scfType": "arcane",
  "rarity": "very rare",
  "reqAttune": true,
  "focus": [
    "Sorcerer",
    "Warlock",
    "Wizard"
  ],
  "entries": [
    "The Blast Scepter can be used as an arcane focus.",
    "Whoever is attuned to the Blast Scepter gains resistance to fire and lightning damage and can, as an action, use it to cast {@spell thunderwave} as a 4th-level spell (save DC 16) without expending a spell slot."
  ],
  "attachedSpells": [
    "thunderwave"
  ]
},
{
  "name": "Blasting Powder",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "entries": [
    "This volatile alchemical powder comes in a small pouch. When ignited by an open flame or a fuse, the powder explodes. Each creature within 5 feet of the exploding pouch must make a DC 13 Dexterity saving throw, taking {@damage 3d6} bludgeoning damage on a failed save, or half as much damage on a successful one.",
    "A character can bind multiple pouches of blasting powder together so they explode at the same time. Each additional pouch increases the damage by {@dice 1d6} (maximum of {@dice 10d6}) and the blast radius by 5 feet (maximum of 20 feet)."
  ]
},
{
  "name": "Blight Ichor",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "value": 20000,
  "entries": [
    "This bitter chartreuse concoction is distilled from a fungus native to the Blightshore badlands. The sickly green liqueur harbors potent psychedelic properties. Provided it is neither a construct nor undead, a creature subjected to a dose of blight ichor gains advantage on Intelligence and Wisdom checks, as well as vulnerability to psychic damage, for 1 hour. For each dose of blight ichor consumed, the creature must succeed on a DC 15 Constitution saving throw or become {@condition poisoned} for {@dice 1d6} hours and suffer the effects of a {@spell confusion} spell for 1 minute. An undead creature subjected to a dose of blight ichor gains advantage on all Dexterity checks and is immune to the {@condition frightened} condition for 1 hour."
  ]
},
{
  "name": "Block and Tackle",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 100,
  "entries": [
    "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."
  ]
},
{
  "name": "Blod Stone",
  "source": "SKT",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This diamond contains the blood of a creature-blood that appears in the form of the blod (blood) rune. While the item is on your person, you can use your action to divine the location of the creature nearest to you that is related to the blood in the item and that isn't undead. You sense the distance and direction of the creature relative to your location. The creature is either the one whose blood is in the item or a blood relative.",
    "This item is made from a large diamond worth at least 5,000 gp. When the blood of a creature is poured onto it during the creation process, the blood seeps into the heart of the gem. If the gem is destroyed, the blood evaporates and is gone forever. A vengeful being might use a blod stone to hunt down an entire bloodline. Such stones are sometimes given as gifts to siblings or handed down from parent to child."
  ]
},
{
  "name": "Blood Spear",
  "source": "CoS",
  "baseItem": "spear",
  "type": "M",
  "rarity": "uncommon",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "simple",
  "property": [
    "T",
    "V"
  ],
  "range": "20/60",
  "dmg1": "1d6",
  "dmgType": "P",
  "dmg2": "1d8",
  "bonusWeapon": "+2",
  "entries": [
    "Kavan was a ruthless chieftain whose tribe lived in the Balinok Mountains centuries before the arrival of {@creature Strahd von Zarovich|CoS}. Although he was very much alive, Kavan had some traits in common with vampires: he slept during the day and hunted at night, he drank the blood of his prey, and he lived underground. In battle, he wielded a spear stained with blood. His was the first blood spear, a weapon that drains life from those it kills and transfers that life to its wielder, imbuing that individual with the stamina to keep fighting.",
    "When you hit with a melee attack using this magic spear and reduce the target to 0 hit points, you gain {@dice 2d6} temporary hit points.",
    "Any creature can wield the spear, but only the character {@adventure chosen by Kavan|CoS|14|Blood Spear of Kavan} to wield it gains a +2 bonus to attack and damage rolls made with this magic weapon."
  ]
},
{
  "name": "Blood of the Lycanthrope",
  "source": "IMR",
  "rarity": "none",
  "poison": true,
  "entries": [
    "This poison is created from blood harvested from a dead or {@condition incapacitated} lycanthrope in its animal or hybrid form. A creature subjected to this poison must succeed on a DC 12 Constitution saving throw or be cursed with lycanthropy (see the Monster Manual). The curse lasts until removed by the {@spell remove curse} spell or similar magic.",
    "The type of lycanthropy depends on the lycanthrope used to create the poison. To determine the type of lycanthropy randomly, roll a {@dice d6}:",
    {
      "type": "table",
      "colLabels": [
        "d6",
        "Lycanthropy"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1-3",
          "{@creature Wererat}"
        ],
        [
          "4-5",
          "{@creature Werewolf}"
        ],
        [
          "6",
          "{@creature Wereboar}"
        ]
      ]
    }
  ],
  "poisonTypes": [
    "injury"
  ]
},
{
  "name": "Blood of the Lycanthrope Antidote",
  "source": "IMR",
  "type": "P",
  "rarity": "uncommon",
  "entries": [
    "This clear potion has dark red flecks within, resembling clotted blood. When you drink this potion, it removes the curse of lycanthropy from you if that curse was imposed by a lycanthrope's bite or similar effect."
  ]
},
{
  "name": "Bloodaxe",
  "source": "EGW",
  "baseItem": "greataxe",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 7,
  "weaponCategory": "martial",
  "property": [
    "H",
    "2H"
  ],
  "dmg1": "1d12",
  "dmgType": "S",
  "bonusWeapon": "+2",
  "axe": true,
  "weapon": true,
  "entries": [
    "You gain a +2 bonus to attack and damage rolls made with this magic axe. The axe deals an extra {@damage 1d6} necrotic damage to creatures that aren't constructs or undead. If you reduce such a creature to 0 hit points with an attack using this axe, you gain 10 temporary hit points.",
    "This axe is forged from a dark, rust-colored metal and once belonged to the goliath barbarian Grog Strongjaw of Vox Machina."
  ]
},
{
  "name": "Bloodstone",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An opaque dark gray with red flecks gemstone."
  ]
},
{
  "name": "Blue Chromatic Rose",
  "source": "WBtW",
  "resist": [
    "lightning"
  ],
  "detail1": "crackles with lightning",
  "rarity": "rare",
  "wondrous": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Chromatic Rose}"
  ]
},
{
  "name": "Blue Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "lightning"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to lightning damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest blue dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Blue Quartz",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "A transparent pale blue gemstone."
  ]
},
{
  "name": "Blue Sapphire",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A transparent blue-white to medium blue gemstone."
  ]
},
{
  "name": "Blue Spinel",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 50000,
  "entries": [
    "A transparent deep blue gemstone."
  ]
},
{
  "name": "Bobbing Lily Pad",
  "source": "WBtW",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This magic vehicle is a 10-foot-diameter leaf that floats on water. It has tendrils that propel it across land and across the water's surface (but not underwater), as well as through the air. It has a walking, flying, and swimming speed of 20 feet, and it can hover. It moves according to your spoken directions while you are riding it.",
    "The lily pad can transport up to 300 pounds without hindrance. It can carry up to twice this weight, but it moves at half speed if it carries more than its normal capacity."
  ]
},
{
  "name": "Bomb",
  "source": "DMG",
  "type": "EXP",
  "rarity": "none",
  "weight": 1,
  "value": 15000,
  "age": "renaissance",
  "entries": [
    "As an action, a character can light this bomb and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must succeed on a DC 12 Dexterity saving throw or take {@damage 3d6} fire damage."
  ]
},
{
  "name": "Bombard",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 5000000,
  "crew": 12,
  "vehAc": 15,
  "vehHp": 300,
  "vehDmgThresh": 20,
  "vehSpeed": 4,
  "capCargo": 150,
  "entries": [
    "Bombards are built by giff. The major feature of each ship is an enormous cannon that fires massive cannon balls capable of blowing other ships to smithereens. (The cannon is included in the cost of the ship.) A bombard can carry up to fourteen giant cannon balls, each of which weighs 10 tons. These cannon balls make up most of the weight of the ship's cargo. A winch mounted on the aft deck is used to load the cannon balls on board.",
    "A bombard can float and sail on water, but it can't land safely on the ground (its keel would cause it to roll on its side)."
  ],
  "seeAlsoVehicle": [
    "Bombard|AAG"
  ]
},
{
  "name": "Bonecounter",
  "source": "SDW",
  "baseItem": "mace",
  "type": "M",
  "rarity": "rare",
  "weight": 4,
  "weaponCategory": "simple",
  "dmg1": "1d6",
  "dmgType": "B",
  "bonusWeapon": "+2",
  "entries": [
    "This weapon is a magical +2 mace called Bonecounter. Whenever this weapon is used to destroy an undead creature, a single silver piece appears in the wielder's pocket."
  ]
},
{
  "name": "Book",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 2500,
  "entries": [
    "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a {@item spellbook}."
  ]
},
{
  "name": "Boots of Elvenkind",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity ({@skill Stealth}) checks that rely on moving silently."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Boots of False Tracks",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
  ]
},
{
  "name": "Boots of Levitation",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While you wear these boots, you can use an action to cast the {@spell levitate} spell on yourself at will."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "levitate"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Boots of Speed",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "multiply": {
      "walk": 2
    }
  },
  "entries": [
    "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.",
    "When the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Boots of Striding and Springing",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "static": {
      "walk": 30
    }
  },
  "entries": [
    "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Boots of the Winterlands",
  "source": "DMG",
  "resist": [
    "cold"
  ],
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "You have resistance to cold damage.",
        "You ignore {@quickref difficult terrain||3} created by ice or snow.",
        "You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit."
      ]
    }
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Boros Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Boros, allows you to cast {@spell heroism}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Boros' recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "heroism"
  ]
},
{
  "name": "Boros Keyrune",
  "source": "GGR",
  "rarity": "rare",
  "reqAttune": "by a member of the Boros guild",
  "reqAttuneTags": [
    {
      "background": "boros legionnaire|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "Carved from red sandstone with white granite elements to resemble a member of the Boros Legion, this keyrune can become a {@creature veteran} (human) for up to 8 hours. In addition to fighting on your behalf, this {@creature veteran} cheerfully offers tactical advice, which is usually sound. Anyone who talks with the transformed keyrune or examines it closely can easily recognize that it is an artificial human.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature veteran} (human). If there isn't enough space for the {@creature veteran}, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Bottle of Boundless Coffee",
  "source": "SCC",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This metal bottle carries delicious, warm coffee. The bottle comes with a stopper, which is attached to the bottle by a little chain. Even when open, the bottle won't accept any liquid other than the coffee it produces. The coffee inside is always comfortably warm, and none of the heat can be felt through the bottle.",
    "Each time you drink the coffee, roll a {@dice d20}. On a 1, the bottle refuses to dispense coffee for the next hour. If you pour coffee from the bottle, rather than drinking from it, the coffee vanishes the moment it leaves the bottle."
  ]
},
{
  "name": "Bottle stopper cork embossed with gold leaf and set with amethysts",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Bottled Breath",
  "source": "PotA",
  "type": "P",
  "rarity": "uncommon",
  "entries": [
    "This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.",
    "If you exhale the breath, you gain the effect of the {@spell gust of wind} spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath."
  ],
  "attachedSpells": [
    "gust of wind"
  ]
},
{
  "name": "Bowl of Commanding Water Elementals",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a {@creature water elemental}, as if you had cast the {@spell conjure elemental} spell. The bowl can't be used this way again until the next dawn.",
    "The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons."
  ],
  "attachedSpells": [
    "conjure elemental"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Box of turquoise animal figurines",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Bracelet of Rock Magic",
  "source": "TftYP",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "weight": 1,
  "entries": [
    "While you wear this gold bracelet, it grants you immunity to being {@condition petrified}, and it allows you to cast {@spell flesh to stone} (save DC 15) as an action. Once the spell has been cast three times, the bracelet can no longer cast it. Thereafter, you can cast {@spell stone shape} as an action. After you have done this thirteen times, the bracelet loses its magic and turns from gold to lead.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "The bracelet's affinity with earth manifests as an unusual curse. Creatures of flesh that are strongly related to earth and stone, such as stone giants and dwarves, have advantage on the saving throw against {@spell flesh to stone} cast from the bracelet. If such a creature's save is successful, the bracelet breaks your attunement to it and casts the spell on you. You make your saving throw with disadvantage, and on a failed save you are {@condition petrified} instantly."
      ]
    }
  ],
  "attachedSpells": [
    "flesh to stone",
    "stone shape"
  ]
},
{
  "name": "Bracer of Flying Daggers",
  "source": "WDH",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This armband appears to have thin {@item dagger|daggers} strapped to it. As an action, you can pull up to two magic daggers from the bracer and immediately hurl them, making a ranged attack with each dagger. A dagger vanishes if you don't hurl it right away, and the daggers disappear right after they hit or miss. The bracer never runs out of daggers."
  ]
},
{
  "name": "Bracers of Archery",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "grantsProficiency": true,
  "bonusWeaponDamage": "+2",
  "entries": [
    "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Bracers of Defense",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusAc": "+2",
  "entries": [
    "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Brass Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "fire"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest brass dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Brass mug with jade inlay",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Brazier of Commanding Fire Elementals",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a {@creature fire elemental}, as if you had cast the {@spell conjure elemental} spell. The brazier can't be used this way again until the next dawn.",
    "The brazier weighs 5 pounds."
  ],
  "attachedSpells": [
    "conjure elemental"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Breathing Bubble",
  "source": "EGW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet.",
    "The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn."
  ]
},
{
  "name": "Brewer's Supplies",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 79
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 9,
  "value": 2000,
  "additionalEntries": [
    "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "Proficiency with brewer's supplies gives you additional insight on Intelligence ({@skill History}) checks concerning events that involve alcohol as a significant element."
      ]
    },
    {
      "type": "entries",
      "name": "Medicine",
      "entries": [
        "This tool proficiency grants additional insight when you treat anyone suffering from alcohol poisoning or when you can use alcohol to dull pain."
      ]
    },
    {
      "type": "entries",
      "name": "Persuasion",
      "entries": [
        "A stiff drink can help soften the hardest heart. Your proficiency with brewer's supplies can help you ply someone with drink, giving them just enough alcohol to mellow their mood."
      ]
    },
    {
      "type": "entries",
      "name": "Potable Water",
      "entries": [
        "Your knowledge of brewing enables you to purify water that would otherwise be undrinkable. As part of a long rest, you can purify up to 6 gallons of water, or 1 gallon as part of a short rest."
      ]
    },
    {
      "type": "table",
      "caption": "Brewer's Supplies",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Detect poison or impurities in a drink",
          "10"
        ],
        [
          "Identify alcohol",
          "15"
        ],
        [
          "Ignore effects of alcohol",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Bridle of Capturing",
  "source": "IMR",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This fine leather bridle tugs at the hand when first held, as though it longs to reach out for a beast nearby. When you hold one end of the bridle, you can use an action to speak its command word, causing the other end to lash out at a beast you can see within 20 feet of you. The target must succeed on a DC 17 Charisma saving throw or have the bridle tie itself around its neck, then fall under your command as if subjected to the {@spell dominate beast} spell. Once the targeted is affected, you do not need to hold the other end of the bridle to command it. With a successful saving throw, the target becomes immune to the bridle's power until the next dawn.",
    "A creature controlled by the bridle can be released by the creature that bound it as a bonus action. A creature controlled by the bridle can make a DC 17 Charisma check each day at dawn. On a success, the creature is no longer affected by the bridle."
  ],
  "attachedSpells": [
    "dominate beast"
  ]
},
{
  "name": "Bronze Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "lightning"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to lightning damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest bronze dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Bronze crown",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Bronze spyglass (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Brooch of Living Essence",
  "source": "EGW",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing this nondescript brooch, spells and anything else that would detect or reveal your creature type treat you as humanoid, and those that would reveal your alignment treat it as neutral."
  ]
},
{
  "name": "Brooch of Shielding",
  "source": "DMG",
  "resist": [
    "force"
  ],
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the {@spell magic missile} spell."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Broom of Flying",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.",
    "You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Bucket",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 5,
  "entries": [
    "A bucket holds 3 gallons of liquid or &frac12; cubic foot of solids."
  ]
},
{
  "name": "Bullseye Lantern",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 1000,
  "entries": [
    "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
  ]
},
{
  "name": "Burglar's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 44.5,
  "value": 1600,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item backpack}",
        "a {@item Ball Bearings (Bag of 1,000)|bag of 1,000 ball bearings}",
        "10 feet of string",
        "a {@item bell}",
        "5 {@item candle|candles}",
        "a {@item crowbar}",
        "a {@item hammer}",
        "10 {@item piton|pitons}",
        "a {@item hooded lantern}",
        "2 {@item Oil (flask)|flasks of oil}",
        "5 days {@item Rations (1 day)|rations}",
        "a {@item tinderbox}",
        "a {@item waterskin}",
        "{@item Hempen Rope (50 feet)|50 feet of hempen rope}"
      ]
    }
  ],
  "packContents": [
    "backpack",
    "ball bearings (bag of 1,000)",
    {
      "special": "10 feet of string"
    },
    "bell",
    {
      "item": "candle",
      "quantity": 5
    },
    "crowbar",
    "hammer",
    {
      "item": "piton",
      "quantity": 10
    },
    "hooded lantern",
    {
      "item": "oil (flask)",
      "quantity": 2
    },
    {
      "item": "rations (1 day)",
      "quantity": 5
    },
    "tinderbox",
    "waterskin",
    "hempen rope (50 feet)"
  ]
},
{
  "name": "Burnt Othur Fumes",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 50000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or take 10 ({@damage 3d6}) poison damage, and must repeat the saving throw at the start of each of its turns. On each successive failed save, the character takes 3 ({@damage 1d6}) poison damage. After three successful saves, the poison ends."
  ],
  "poisonTypes": [
    "inhaled"
  ]
},
{
  "name": "Butcher's Bib",
  "source": "EGW",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This black leather apron is perpetually covered by blood, even after being washed off. You gain the following benefits while wearing the apron:",
    {
      "type": "list",
      "items": [
        "Once per turn when you roll damage for a melee attack with a weapon, you can reroll the weapon's damage dice. If you do so, you must use the second total.",
        "Your weapon attacks that deal slashing damage score a critical hit on a roll of 19 or 20 on the {@dice d20}."
      ]
    }
  ]
},
{
  "name": "Calligrapher's Supplies",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 79
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 1000,
  "additionalEntries": [
    "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Calligrapher's supplies include ink, a dozen sheets of parchment, and three quills."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana",
      "entries": [
        "Although calligraphy is of little help in deciphering the content of magical writings, proficiency with these supplies can aid in identifying who wrote a script of a magical nature."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "This tool proficiency can augment the benefit of successful checks made to analyze or investigate ancient writings, scrolls, or other texts, including runes etched in stone or messages in frescoes or other displays."
      ]
    },
    {
      "type": "entries",
      "name": "Decipher Treasure Map",
      "entries": [
        "This tool proficiency grants you expertise in examining maps. You can make an Intelligence check to determine a map's age, whether a map includes any hidden messages, or similar facts."
      ]
    },
    {
      "type": "table",
      "caption": "Calligrapher's Supplies",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-6",
        "col-6"
      ],
      "rows": [
        [
          "Identify writer of nonmagical script",
          "10"
        ],
        [
          "Determine writer's state of mind",
          "15"
        ],
        [
          "Spot forged text",
          "15"
        ],
        [
          "Forge a signature",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Caltrop",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 0.1,
  "value": 5,
  "entries": [
    "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw."
  ]
},
{
  "name": "Caltrops (bag of 20)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 100,
  "entries": [
    "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw."
  ],
  "packContents": [
    {
      "item": "caltrop",
      "quantity": 20
    }
  ],
  "atomicPackContents": true
},
{
  "name": "Camel",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 5000,
  "carryingCapacity": 480,
  "speed": 50
},
{
  "name": "Candle",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 1,
  "entries": [
    "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
  ]
},
{
  "name": "Candle of Invocation",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This slender taper is dedicated to a deity and shares that deity's alignment. The candle's alignment can be detected with the {@spell detect evil and good} spell. The DM chooses the god and associated alignment or determines the alignment randomly.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d20}",
        "Alignment"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "1-2",
          "Chaotic evil"
        ],
        [
          "3-4",
          "Chaotic neutral"
        ],
        [
          "5-7",
          "Chaotic good"
        ],
        [
          "8-9",
          "Neutral evil"
        ],
        [
          "10-11",
          "Neutral"
        ],
        [
          "12-13",
          "Neutral good"
        ],
        [
          "14-15",
          "Lawful evil"
        ],
        [
          "16-17",
          "Lawful neutral"
        ],
        [
          "18-20",
          "Lawful good"
        ]
      ]
    },
    "The candle's magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle's total burn time.",
    "While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle's can cast 1st-level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot.",
    "Alternatively, when you light the candle for the first time, you can cast the {@spell gate} spell with it. Doing so destroys the candle."
  ],
  "attachedSpells": [
    "gate"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Candle of the Deep",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
  ]
},
{
  "name": "Canoe",
  "source": "ToA",
  "type": "SHP",
  "rarity": "none",
  "weight": 100,
  "value": 5000,
  "crew": 1,
  "vehAc": 11,
  "vehHp": 50,
  "vehSpeed": 2,
  "capPassenger": 6,
  "entries": [
    "A canoe can be purchased in Port Nyanzaru for 50 gp. It holds up to six Medium creatures and has a maximum speed of 2 mph. It is otherwise identical to a {@item rowboat}."
  ]
},
{
  "name": "Canvas (1 sq. yd.)",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 10
},
{
  "name": "Cap of Water Breathing",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Cape of the Mountebank",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This cape smells faintly of brimstone. While wearing it, you can use it to cast the {@spell dimension door} spell as an action. This property of the cape can't be used again until the next dawn.",
    "When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke."
  ],
  "attachedSpells": [
    "dimension door"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Carnelian",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An opaque orange to red-brown gemstone."
  ]
},
{
  "name": "Carpenter's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 80
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 6,
  "value": 800,
  "additionalEntries": [
    "Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Carpenter's tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "This tool proficiency aids you in identifying the use and the origin of wooden buildings and other large wooden objects."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "You gain additional insight when inspecting areas within wooden structures, because you know tricks of construction that can conceal areas from discovery."
      ]
    },
    {
      "type": "entries",
      "name": "Perception",
      "entries": [
        "You can spot irregularities in wooden walls or floors, making it easier to find trap doors and secret passages."
      ]
    },
    {
      "type": "entries",
      "name": "Stealth",
      "entries": [
        "You can quickly assess the weak spots in a wooden floor, making it easier to avoid the places that creak and groan when they're stepped on."
      ]
    },
    {
      "type": "entries",
      "name": "Fortify",
      "entries": [
        "With 1 minute of work and raw materials, you can make a door or window harder to force open. Increase the DC needed to open it by 5."
      ]
    },
    {
      "type": "entries",
      "name": "Temporary Shelter",
      "entries": [
        "As part of a long rest, you can construct a lean-to or a similar shelter to keep your group dry and in the shade for the duration of the rest. Because it was fashioned quickly from whatever wood was available, the shelter collapses {@dice 1d3} days after being assembled."
      ]
    },
    {
      "type": "table",
      "caption": "Carpenter's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Build a simple wooden structure",
          "10"
        ],
        [
          "Design a complex wooden structure",
          "15"
        ],
        [
          "Find a weak point in a wooden wall",
          "15"
        ],
        [
          "Pry apart a door",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Carpet of Flying, 3 ft. &times; 5 ft.",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.",
    "A 3 ft. &times; 5 ft. carpet can carry up to 200 lb. at a fly speed of 80 feet. A carpet can carry up to twice this weight, but it flies at half speed if it carries more than its normal capacity."
  ]
},
{
  "name": "Carpet of Flying, 4 ft. &times; 6 ft.",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.",
    "A 4 ft. &times; 6 ft. carpet can carry up to 400 lb. at a fly speed of 60 feet. A carpet can carry up to twice this weight, but it flies at half speed if it carries more than its normal capacity."
  ]
},
{
  "name": "Carpet of Flying, 5 ft. &times; 7 ft.",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.",
    "A 5 ft. &times; 7 ft. carpet can carry up to 600 lb. at a fly speed of 40 feet. A carpet can carry up to twice this weight, but it flies at half speed if it carries more than its normal capacity."
  ]
},
{
  "name": "Carpet of Flying, 6 ft. &times; 9 ft.",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.",
    "A 6 ft. &times; 9 ft. carpet can carry up to 800 lb. at a fly speed of 30 feet. A carpet can carry up to twice this weight, but it flies at half speed if it carries more than its normal capacity."
  ]
},
{
  "name": "Carriage",
  "source": "PHB",
  "type": "VEH",
  "rarity": "none",
  "weight": 600,
  "value": 10000
},
{
  "name": "Carrion Crawler Mucus",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 20000,
  "poison": true,
  "entries": [
    "This poison must be harvested from a dead or {@condition incapacitated} {@creature carrion crawler}. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be {@condition poisoned} for 1 minute. The {@condition poisoned} creature is {@condition paralyzed}. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  ],
  "poisonTypes": [
    "contact"
  ]
},
{
  "name": "Cart",
  "source": "PHB",
  "type": "VEH",
  "rarity": "none",
  "weight": 200,
  "value": 1500
},
{
  "name": "Cartographer's Map Case",
  "source": "AI",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    {
      "type": "entries",
      "name": "Map of Shortcuts",
      "entries": [
        "At rank 3, your map case becomes a common magic item. In addition to storing normal maps, your cartographer's map case can be used to generate a special map identifying a shortcut. You can use your action to make a DC 15 Wisdom ({@skill Perception}) check, with a success revealing a map buried in your cartographer's map case noting a relevant shortcut. Your travel time is reduced by half while you follow that route. If you succeed at the check by 5 or more, the map includes notes on the terrain, granting you advantage on the next ability check you make to travel through the mapped area in the next hour. Once you use this feature, you cannot use it again until you finish a long rest."
      ]
    },
    {
      "type": "entries",
      "name": "Map of the Moment",
      "entries": [
        "Starting at rank 3, you can use an action to make a DC 15 Wisdom ({@skill Perception}) check and search your cartographer's map case to find a map either related to your current mission or inspiring a new one. On a success, you find a map with a prominent landmark. The map has information on the natural terrain within one mile of the landmark. Once you use this feature, you cannot use it again until dawn seven days later.",
        {
          "type": "table",
          "caption": "Possible Map Mission Landmarks",
          "colLabels": [
            "d8",
            "Landmark"
          ],
          "colStyles": [
            "col-2 text-center",
            "col-10"
          ],
          "rows": [
            [
              "1",
              "The Ancient Sarcophagus of Gerald Smith"
            ],
            [
              "2",
              "A tree labeled \"This tree\""
            ],
            [
              "3",
              "\"The Last Resting Place of My Rich Brother that is Also a Bear Cave\""
            ],
            [
              "4",
              "A range of peaks known as the Slightly Wobbly Spires"
            ],
            [
              "5",
              "An ever-flowing, nonmagical spigot of pure, clear water in the middle of nowhere"
            ],
            [
              "6",
              "A cave filled with screaming bioluminescent worms"
            ],
            [
              "7",
              "The most haunted forest for ten miles in any direction"
            ],
            [
              "8",
              "A huge pile of rocks with no other rocks within sight"
            ]
          ]
        }
      ]
    }
  ]
},
{
  "name": "Cartographer's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 80
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 6,
  "value": 1500,
  "additionalEntries": [
    "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Cartographer's tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana, History, Religion",
      "entries": [
        "You can use your knowledge of maps and locations to unearth more detailed information when you use these skills. For instance, you might spot hidden messages in a map, identify when the map was made to determine if geographical features have changed since then, and so forth."
      ]
    },
    {
      "type": "entries",
      "name": "Nature",
      "entries": [
        "Your familiarity with physical geography makes it easier for you to answer questions or solve issues relating to the terrain around you."
      ]
    },
    {
      "type": "entries",
      "name": "Survival",
      "entries": [
        "Your understanding of geography makes it easier to find paths to civilization, to predict areas where villages or towns might be found, and to avoid becoming lost. You have studied so many maps that common patterns, such as how trade routes evolve and where settlements arise in relation to geographic locations, are familiar to you."
      ]
    },
    {
      "type": "entries",
      "name": "Craft a Map",
      "entries": [
        "While traveling, you can draw a map as you go in addition to engaging in other activity."
      ]
    },
    {
      "type": "table",
      "caption": "Cartographer's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Determine a map's age and origin",
          "10"
        ],
        [
          "Estimate direction and distance to a landmark",
          "15"
        ],
        [
          "Discern that a map is fake",
          "15"
        ],
        [
          "Fill in a missing part of a map",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Carved bone statuette",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Carved harp of exotic wood with ivory inlay and zircon gems",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Carved ivory statuette",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Carved jade statuette (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Cauldron of Plenty",
  "source": "IDRotF",
  "rarity": "rare",
  "wondrous": true,
  "weight": 50,
  "entries": [
    "This cauldron is made of thick copper that has turned green with age. It is 4 feet wide, has a mouth 3&frac12; feet in diameter, weighs 50 pounds, and can hold up to 30 gallons of liquid. Embossed on its bulging sides are images of satyrs and nymphs in repose, holding ladles. The cauldron comes with a lid and has side handles. It sits on five little clawed feet that keep it from tipping.",
    "If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew, which can provide one nourishing meal for up to four people per gallon. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew.",
    "The cauldron can create stew three times. It then ceases to function until the next dawn, when it regains all its uses."
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Cauldron of Rebirth",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": "by a druid or warlock",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "warlock"
    }
  ],
  "wondrous": true,
  "entries": [
    "This Tiny pot bears relief scenes of heroes on its cast iron sides. You can use the cauldron as a spellcasting focus for your spells, and it functions as a suitable component for the {@spell scrying} spell. When you finish a long rest, you can use the cauldron to create a {@item potion of greater healing}. The potion lasts for 24 hours, then loses its magic if not consumed.",
    "As an action, you can cause the cauldron to grow large enough for a Medium creature to crouch within. You can revert the cauldron to its normal size as an action, harmlessly shunting anything that can't fit inside to the nearest unoccupied space.",
    "If you place the corpse of a humanoid into the cauldron and cover the corpse with 200 pounds of salt (which costs 10 gp) for at least 8 hours, the salt is consumed and the creature returns to life as if by {@spell raise dead} at the next dawn. Once used, this property can't be used again for 7 days."
  ],
  "attachedSpells": [
    "raise dead",
    "scrying"
  ]
},
{
  "name": "Censer of Controlling Air Elementals",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "While incense is burning in this censer, you can use an action to speak the censer's command word and summon an {@creature air elemental}, as if you had cast the {@spell conjure elemental} spell. The censer can't be used this way again until the next dawn.",
    "This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound."
  ],
  "attachedSpells": [
    "conjure elemental"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ceremonial electrum dagger with a black pearl in the pommel",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Ceremonial silver dagger with gold pommel and black pearl (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Chain (10 feet)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 10,
  "value": 500,
  "entries": [
    "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."
  ]
},
{
  "name": "Chalcedony",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An opaque white gemstone."
  ]
},
{
  "name": "Chalk (1 piece)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 1
},
{
  "name": "Chariot",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "MOT",
      "page": 196
    }
  ],
  "type": "VEH",
  "rarity": "none",
  "weight": 100,
  "value": 25000,
  "additionalEntries": [
    {
      "type": "inset",
      "name": "Chariots",
      "source": "MOT",
      "page": 196,
      "entries": [
        "Chariots and the creatures pulling them work like controlled mounts, as described in the mounted combat rules in the {@book Player's Handbook|9|Mounted Combat}, but with the following differences:",
        {
          "type": "list",
          "items": [
            "Mounting or dismounting a chariot costs you 5 feet of movement, rather than a number of feet equal to half your speed.",
            "Being mounted on a chariot grants you half cover.",
            "A chariot's speed is equal to the speed of the slowest creature pulling it.",
            "If multiple creatures are pulling the chariot, they all act on the same initiative, and they must take the same action on their turn."
          ]
        }
      ]
    }
  ]
},
{
  "name": "Charlatan's Die",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "Whenever you roll this six-sided die, you can control which number it rolls."
  ]
},
{
  "name": "Charm of Plant Command",
  "source": "GoS",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This fist-sized charm is made from a bundle of dried plant stems wrapped in silver thread. Hung on a leather thong, it is typically worn around the neck or attached to a belt.",
    "This charm has 3 charges. While you bear the charm, you can expend 1 charge as an action to cast the {@spell speak with plants} spell. For the duration of the spell, you also have advantage on Charisma checks made to influence the behavior, demeanor, and attitude of plants. The charm regains all expended charges at dawn each day."
  ],
  "attachedSpells": [
    "speak with plants"
  ]
},
{
  "name": "Chest",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 25,
  "value": 500,
  "entries": [
    "A chest holds 12 cubic feet or 300 pounds of gear."
  ],
  "containerCapacity": {
    "weight": [
      300
    ]
  }
},
{
  "name": "Chest of Preserving",
  "source": "WDMM",
  "rarity": "common",
  "wondrous": true,
  "weight": 25,
  "entries": [
    "Food and other perishable items do not age or decay while inside a Chest of Preserving. The chest is 2&frac12; feet long, 1&frac12; feet wide, and 1 foot tall with a half-barrel lid. The chest has a lock, which can be picked with {@item thieves' tools} and a successful DC 15 Dexterity check. Smashing the lock or any other part of the chest renders it nonmagical."
  ]
},
{
  "name": "Chicken",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 2
},
{
  "name": "Chime of Opening",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens.",
    "The chime can be used ten times. After the tenth time it cracks and becomes useless."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Chronolometer",
  "source": "AI",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "While attuned to this device, you have a +1 bonus to Intelligence saving throws. The first time you attune to the chronolometer, you choose one language you don't know. You subsequently know that language while attuned to the device.",
    {
      "type": "entries",
      "name": "Time Bandit",
      "entries": [
        "At the start of your turn, roll a {@dice d6} (no action required). On a 1-3, you slow down time, gaining an additional action on your turn and doubling your speed until the end of the turn. On a 4-6, you go forward in time to warn yourself of what is to come. The next time you fail a saving throw, attack roll, or ability check, you can reroll the check and take either result. Once you use this feature of the chronolometer, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Fate Swap",
      "entries": [
        "As a reaction when a creature you can see within 30 feet of you takes damage, that creature gains an additional action if it is the creature's turn, or can take an action immediately even though it isn't the creature's turn. Once you use this feature of the chronolometer, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Part of a Whole",
      "entries": [
        "While this component is not installed in the {@item Orrery of the Wanderer|AI}, its magic might function sporadically or with unpredictable side effects, as determined by the DM."
      ]
    }
  ]
},
{
  "name": "Chrysoberyl",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A transparent yellow-green to pale green gemstone."
  ]
},
{
  "name": "Chrysoprase",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A translucent green gemstone."
  ]
},
{
  "name": "Chunk of Meat",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 30
},
{
  "name": "Cinnamon",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 200
},
{
  "name": "Circlet of Blasting",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While wearing this circlet, you can use an action to cast the {@spell scorching ray} spell with it. When you make the spell's attacks, you do so with an attack bonus of {@hit 5}. The circlet can't be used this way again until the next dawn."
  ],
  "attachedSpells": [
    "scorching ray"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Circlet of Human Perfection",
  "source": "WDMM",
  "type": "OTH",
  "rarity": "uncommon",
  "reqAttune": "by a humanoid",
  "reqAttuneTags": [
    {
      "creatureType": "humanoid"
    }
  ],
  "entries": [
    "The Circlet of Human Perfection transforms its attuned wearer into an attractive human of average height and weight. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Except for size, the wearer's statistics and racial traits don't change, nor do items worn or carried by the wearer. Removing the circlet ends the effect."
  ]
},
{
  "name": "Citrine",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A transparent pale yellow-brown gemstone."
  ]
},
{
  "name": "Claw of the Wyrm Rune",
  "source": "SKT",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This dragon's claw has been covered with a coat of molten silver, upon which has been inscribed the wyrm (dragon) rune. The claw has the following properties.",
    {
      "name": "Wyrmslayer",
      "type": "entries",
      "entries": [
        "As an action, you can point the claw at a dragon within 30 feet of you. The dragon must then succeed on a DC 15 Constitution saving throw or gain vulnerability to all damage types until the end of your next turn. This property can be used three times. The claw regains all expended uses at the next dawn."
      ]
    },
    {
      "name": "Wyrm Shield",
      "type": "entries",
      "entries": [
        "While the claw is displayed on your person, you have resistance to the damage caused by any dragon's breath weapon."
      ]
    },
    {
      "name": "Wyrm Ward",
      "type": "entries",
      "entries": [
        "You can transfer the claw's magic to a place by tracing the wyrm rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 100-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the claw to be within 5 feet of you. At the end, the claw is destroyed, and the area gains the following property:",
        "While in the 100-foot-radius sphere, any dragon has disadvantage on saving throws and can have a flying speed no higher than 10 feet."
      ]
    }
  ]
},
{
  "name": "Claws of the Umber Hulk",
  "source": "PotA",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "grantsProficiency": true,
  "modifySpeed": {
    "static": {
      "burrow": 20
    }
  },
  "entries": [
    "These heavy gauntlets of brown iron are forged in the shape of an {@creature umber hulk||umber hulk's} claws, and they fit the wearer's hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.",
    "You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals {@damage 1d8} slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal).",
    "While wearing the claws, you can't manipulate objects or cast spells with somatic components."
  ]
},
{
  "name": "Cleansing Stone",
  "source": "ERLW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "A cleansing stone is a sphere 1 foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person.",
    "Such stones are often embedded in pedestals in public squares in Aundair or in high-end Ghallanda inns."
  ]
},
{
  "name": "Climber's Kit",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 12,
  "value": 2500,
  "entries": [
    "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
  ]
},
{
  "name": "Cloak of Arachnida",
  "source": "DMG",
  "resist": [
    "poison"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "equal": {
      "climb": "walk"
    }
  },
  "entries": [
    "This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "You have resistance to poison damage.",
        "You have a climbing speed equal to your walking speed.",
        "You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.",
        "You can't be caught in webs of any sort and can move through webs as if they were {@quickref difficult terrain||3}.",
        "You can use an action to cast the {@spell web} spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can't be used again until the next dawn."
      ]
    }
  ],
  "attachedSpells": [
    "web"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Cloak of Billowing",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "While wearing this cloak, you can use a bonus action to make it billow dramatically."
  ]
},
{
  "name": "Cloak of Displacement",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are {@condition incapacitated}, {@condition restrained}, or otherwise unable to move."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Cloak of Elvenkind",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While you wear this cloak with its hood up, Wisdom ({@skill Perception}) checks made to see you have disadvantage, and you have advantage on Dexterity ({@skill Stealth}) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Cloak of Many Fashions",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties."
  ]
},
{
  "name": "Cloak of Protection",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "entries": [
    "You gain a +1 bonus to AC and saving throws while you wear this cloak."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Cloak of the Bat",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing this cloak, you have advantage on Dexterity ({@skill Stealth}) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.",
    "While wearing the cloak in an area of dim light or darkness, you can use your action to cast {@spell polymorph} on yourself, transforming into a {@creature bat}. While you are in the form of the {@creature bat}, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "polymorph"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Cloak of the Manta Ray",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "modifySpeed": {
    "static": {
      "swim": 60
    }
  },
  "entries": [
    "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Clockwork Amulet",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.",
    "When you make an attack roll while wearing the amulet, you can forgo rolling the {@dice d20} to get a 10 on the die. Once used, this property can't be used again until the next dawn."
  ]
},
{
  "name": "Cloth-of-gold vestments",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Cloth-of-gold vestments (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Clothes of Mending",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This elegant outfit of traveler's clothes magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way."
  ]
},
{
  "name": "Clothing, cold weather",
  "source": "IDRotF",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 1000,
  "entries": [
    "This outfit consists of a heavy fur coat or cloak over layers of wool clothing, as well as a fur-lined hat or hood, goggles, and fur-lined leather boots and gloves.",
    "As long as cold weather clothing remains dry, its wearer automatically succeeds on saving throws against the effects of {@hazard extreme cold}."
  ]
},
{
  "name": "Cloves",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 300
},
{
  "name": "Cobbler's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 80
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 500,
  "additionalEntries": [
    "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana, History",
      "entries": [
        "Your knowledge of shoes aids you in identifying the magical properties of enchanted boots or the history of such items."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "Footwear holds a surprising number of secrets. You can learn where someone has recently visited by examining the wear and the dirt that has accumulated on their shoes. Your experience in repairing shoes makes it easier for you to identify where damage might come from."
      ]
    },
    {
      "type": "entries",
      "name": "Maintain Shoes",
      "entries": [
        "As part of a long rest, you can repair your companions' shoes. For the next 24 hours, up to six creatures of your choice who wear shoes you worked on can travel up to 10 hours a day without making saving throws to avoid {@condition exhaustion}."
      ]
    },
    {
      "type": "entries",
      "name": "Craft Hidden Compartment",
      "entries": [
        "With 8 hours of work, you can add a hidden compartment to a pair of shoes. The compartment can hold an object up to 3 inches long and 1 inch wide and deep. You make an Intelligence check using your tool proficiency to determine the Intelligence ({@skill Investigation}) check DC needed to find the compartment."
      ]
    },
    {
      "type": "table",
      "caption": "Cobbler's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Determine a shoe's age and origin",
          "10"
        ],
        [
          "Find a hidden compartment in a boot heel",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Coiling Grasp Tattoo",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo has long intertwining designs.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Grasping Tendrils",
      "entries": [
        "While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a DC 14 Strength saving throw or take {@damage 3d6} force damage and be {@condition grappled} by you. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength ({@skill Athletics}) or Dexterity ({@skill Acrobatics}) check. The grapple also ends if you halt it (no action required), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature."
      ]
    }
  ]
},
{
  "name": "Coin of Delving",
  "source": "EGW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This scintillating copper coin sheds dim light in a 5-foot radius. If dropped a distance greater than 5 feet, the coin issues a melodious ringing sound when it hits a surface. Any creature that can hear the chime can determine the distance the coin dropped based on the tone."
  ]
},
{
  "name": "Cold Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "cold"
  ],
  "detail1": "blue",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Common Clothes",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 3,
  "value": 50
},
{
  "name": "Common Glamerweave",
  "source": "ERLW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "Glamerweave is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth."
  ]
},
{
  "name": "Common Wine (Pitcher)",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 20
},
{
  "name": "Component Pouch",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 2500,
  "entries": [
    "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
  ]
},
{
  "name": "Concertina",
  "source": "RMBRE",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A concertina is a less charming kind of accordion.",
    "In addition to knocking out a killer polka, a creature playing the concertina can use an action to cause an area of mist or water up to 30 feet in diameter and 6 inches deep to freeze solid.",
    "Once used, this feature of the concertina can't be used again until the next dawn.",
    "Any creatures touching the floor must succeed on a DC 20 Dexterity saving throw or be {@condition restrained} by the ice. As an action, a {@condition restrained} creature can attempt to free itself or another creature within its reach from the ice, doing so with a successful DC 20 Strength ({@skill Athletics}) check. A character freed from the ice is no longer {@condition restrained} by it. The ice melts in an hour."
  ]
},
{
  "name": "Conch of Teleportation",
  "source": "SKT",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This item is an ordinary, albeit rather large, conch shell that has been inscribed with the uvar rune. The conch measures 2&frac12; feet long and weighs 20 pounds.",
    "As an action, you can cast the {@spell teleport} spell by blowing into the shell. The destination is fixed, and there is no chance of either a mishap or the spell being off target. Anyone teleported by the conch appears in a specific location designated by the item's creator at the time the uvar rune is inscribed on the conch. It doesn't allow teleportation to any other destination. Once its spell is cast, the conch can't be used again until the next dawn."
  ],
  "attachedSpells": [
    "teleport"
  ]
},
{
  "name": "Constantori's Portrait",
  "source": "KftGV",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "sentient": true,
  "weight": 15,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This painting by famed artist Dkesii Kwan depicts Constantori, a beautiful courtier, who was paid a staggering sum to be Dkesii's model. Whether Constantori's actual appearance matches the painting remains a subject of debate. The portrait is one of several paintings commissioned by the late Daiyani Grysthorn, a crime lord who frequently gave magical paintings as gifts to her most esteemed associates.",
    {
      "type": "entries",
      "name": "Sentience",
      "entries": [
        "Constantori's Portrait is a sentient, lawful evil item with an Intelligence score of 14, a Wisdom score of 12, and a Charisma score of 8. It can hear within a range of 120 feet and has {@sense darkvision} within a range of 60 feet, but it can't see anything behind itself.",
        "The painting can converse in Common, Draconic, and Elvish as if it were a living person, though Constantori's mouth doesn't move. Whenever conversation occurs within the portrait's auditory range, the painting eagerly gathers secrets, the names of secret tellers, significant events, or any political conversations."
      ]
    },
    {
      "type": "entries",
      "name": "Personality",
      "entries": [
        "Constantori's Portrait is demanding, condescending, and vain. It doesn't like being covered or placed out of sight, and it loudly condemns anyone who tries to remove it from its gold-leaf frame."
      ]
    },
    {
      "type": "entries",
      "name": "Wealth of Information",
      "entries": [
        "The painting's primary purpose is to observe and recall conversations. Over the past few decades, Constantori's Portrait has quietly observed countless conversations and now possesses an unquantifiable amount of lore-everything from criminal conspiracies to secret passwords. The DM decides what the painting knows and what it doesn't.",
        "While attuned to the painting, you can take an action to telepathically contact it over any distance, provided you and the painting are on the same plane of existence. The painting can't telepathically contact you, however. Maintaining telepathic contact with the painting requires your {@status concentration} (as if {@status concentration||concentrating} on a spell)."
      ]
    },
    {
      "type": "entries",
      "name": "Guardian Portrait",
      "entries": [
        "While you are attuned to the painting, you can command it to guard its location against one or more creatures you identify as the painting's enemies. The painting performs this function until you command it to stop or until your attunement to the painting ends.",
        "The painting has 3 charges. When a creature the painting identifies as its enemy starts its turn in a space the painting can see, the painting expends 1 of its charges to cast {@spell magic missile} (3 missiles), targeting that creature. The painting regains all expended charges daily at dawn.",
        "The painting is a Small object with AC 12, 20 hit points, and immunity to poison damage. In its gold-leaf frame, the painting weighs 15 pounds. If the painting has at least 1 hit point and is targeted by a {@spell mending} spell, it regains {@dice 2d6} hit points."
      ]
    }
  ],
  "attachedSpells": [
    "magic missile"
  ]
},
{
  "name": "Cook's Utensils",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 80
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 8,
  "value": 100,
  "additionalEntries": [
    "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "Your knowledge of cooking techniques allows you to assess the social patterns involved in a culture's eating habits."
      ]
    },
    {
      "type": "entries",
      "name": "Medicine",
      "entries": [
        "When administering treatment, you can transform medicine that is bitter or sour into a pleasing concoction."
      ]
    },
    {
      "type": "entries",
      "name": "Survival",
      "entries": [
        "When foraging for food, you can make do with ingredients you scavenge that others would be unable to transform into nourishing meals."
      ]
    },
    {
      "type": "entries",
      "name": "Prepare Meals",
      "entries": [
        "As part of a short rest, you can prepare a tasty meal that helps your companions regain their strength. You and up to five creatures of your choice regain 1 extra hit point per Hit Die spent during a short rest, provided you have access to your cook's utensils and sufficient food."
      ]
    },
    {
      "type": "table",
      "caption": "Cook's Utensils",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Create a typical meal",
          "10"
        ],
        [
          "Duplicate a meal",
          "10"
        ],
        [
          "Spot poison or impurities in food",
          "15"
        ],
        [
          "Create a gourmet meal",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Copper",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 50
},
{
  "name": "Copper (cp)",
  "source": "PHB",
  "type": "$",
  "rarity": "none",
  "weight": 0.02,
  "value": 1,
  "entries": [
    "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
    "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
    "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
    "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
    "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
    "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
  ]
},
{
  "name": "Copper Alms-Coin",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 1
},
{
  "name": "Copper Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "acid"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to acid damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest copper dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Copper Zib",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 1
},
{
  "name": "Copper chalice with silver filigree",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Copper stein with silver filigree (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Coral",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "An opaque crimson gemstone."
  ]
},
{
  "name": "Costume Clothes",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 500
},
{
  "name": "Cotton Cloth (1 sq. yd.)",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 50
},
{
  "name": "Cow",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 1000
},
{
  "name": "Cracked Driftglobe",
  "source": "CM",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the {@spell light} spell."
  ],
  "attachedSpells": [
    "light"
  ]
},
{
  "name": "Crampons",
  "source": "IDRotF",
  "type": "G",
  "rarity": "none",
  "weight": 0.25,
  "value": 200,
  "entries": [
    "A crampon is a metal plate with spikes that is strapped to the sole of a boot. A creature wearing crampons can't fall {@condition prone} while moving across {@hazard slippery ice}."
  ]
},
{
  "name": "Crossbow Bolt Case",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 100,
  "entries": [
    "This wooden case can hold up to twenty {@item crossbow bolt|crossbow bolts}."
  ],
  "containerCapacity": {
    "item": [
      {
        "crossbow bolt": 20
      }
    ]
  }
},
{
  "name": "Crowbar",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 200,
  "entries": [
    "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
  ]
},
{
  "name": "Crown of the Forest",
  "source": "IMR",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While wearing this crown, a character automatically fails any Intelligence ({@skill Investigation}) check made to see through an illusion. An illusion that is touched still has its true nature revealed. However, a character wearing a crown has such a strong sense that the illusion is real that they might not know which of their senses to believe.",
    "If this crown is closely examined by a character who succeeds on a DC 20 Intelligence ({@skill Nature}) or Wisdom ({@skill Perception}) check, or with a {@spell detect magic} spell cast using a 3rd-level or higher spell slot, the nature of its magic is discovered."
  ]
},
{
  "name": "Crystal Ball",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 3,
  "entries": [
    "This crystal ball is about 6 inches in diameter. While touching it, you can cast the {@spell scrying} spell (save DC 17) with it."
  ],
  "attachedSpells": [
    "scrying"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Crystalline Chronicle",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "An etched crystal sphere the size of a grapefruit hums faintly and pulses with irregular flares of inner light. While you are touching the crystal, you can retrieve and store information and spells within the crystal at the same rate as reading and writing. When found, the crystal contains the following spells: {@spell detect thoughts}, {@spell intellect fortress|TCE}, {@spell Rary's telepathic bond}, {@spell sending}, {@spell telekinesis}, {@spell Tasha's mind whip|TCE}, and {@spell Tenser's floating disk}. It functions as a spellbook for you, with its spells and other writing psychically encoded within it.",
    "While you are holding the crystal, you can use it as a spellcasting focus for your wizard spells, and you know the {@spell mage hand}, {@spell mind sliver|TCE} (appears in this book), and {@spell message} cantrips if you don't already know them.",
    "The crystal has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the information within the crystal, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book.",
        "When you cast a wizard spell, you can expend 1 charge to cast the spell without verbal, somatic, or material components of up to 100 gp value."
      ]
    }
  ],
  "attachedSpells": [
    "detect thoughts",
    "intellect fortress",
    "mage hand",
    "message",
    "mind sliver",
    "rary's telepathic bond",
    "sending",
    "tasha's mind whip",
    "telekinesis",
    "tenser's floating disk"
  ]
},
{
  "name": "Cube of Force",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d20}",
  "charges": 36,
  "entries": [
    "This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains {@dice 1d20} expended charges daily at dawn.",
    "You can use an action to press one of the cube's faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of {@condition invisible} force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube's sixth face, or the cube runs out of charges. You can change the barrier's effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration. If your movement causes the barrier to come into contact with a solid object that can't pass through the cube, you can't move any closer to that object as long as the barrier remains.",
    {
      "type": "table",
      "caption": "Cube of Force Faces",
      "colLabels": [
        "Face",
        "Charges",
        "Effect"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-1 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "1",
          "Gases, wind, and fog can't pass through the barrier."
        ],
        [
          "2",
          "2",
          "Nonliving matter can't pass through the barrier. Walls, floors, and ceilings can pass through at your discretion."
        ],
        [
          "3",
          "3",
          "Living matter can't pass through the barrier."
        ],
        [
          "4",
          "4",
          "Spell effects can't pass through the barrier."
        ],
        [
          "5",
          "5",
          "Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion."
        ],
        [
          "6",
          "0",
          "The barrier deactivates."
        ]
      ]
    },
    "The cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.",
    {
      "type": "table",
      "colLabels": [
        "Spell or item",
        "Charges Lost"
      ],
      "colStyles": [
        "col-3",
        "col-9"
      ],
      "rows": [
        [
          "{@spell Disintegrate}",
          "{@dice 1d12}"
        ],
        [
          "{@item Horn of blasting}",
          "{@dice 1d10}"
        ],
        [
          "{@spell Passwall}",
          "{@dice 1d6}"
        ],
        [
          "{@spell Prismatic spray}",
          "{@dice 1d20}"
        ],
        [
          "{@spell Wall of fire}",
          "{@dice 1d4}"
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Cuddly Strixhaven Mascot",
  "source": "SCC",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "Representing one of the mascots of Strixhaven, this soft, Tiny, magic toy is perfect for cuddling. If you press it to your arm, shoulder, or leg as an action, the toy stays attached there for 1 hour or until you use an action to remove it.",
    "The toy can also be used to fight off fear. When you make a saving throw to avoid or end the {@condition frightened} condition on yourself, you can give yourself advantage on the roll if the toy is on your person. You must decide to do so before rolling the {@dice d20}. If the save succeeds, you can't use the toy in this way until you finish a long rest."
  ]
},
{
  "name": "Cursed Luckstone",
  "source": "GoS",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "entries": [
    "This flat, gray-and-black river stone is inscribed with an unknown arcane symbol and feels cool to the touch. While carrying the stone, you can gain advantage on one ability check of your choice. The stone can't be used this way again until the next dawn.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This item is cursed. Attuning to it curses you until you are targeted by a {@spell remove curse} spell or similar magic. As long as you remain cursed, you cannot discard the stone, which immediately teleports back into your pocket or pack. After you use the stone's magic, your next two ability checks are made with disadvantage."
      ]
    }
  ]
},
{
  "name": "Daern's Instant Fortress",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.",
    "The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the {@spell knock} spell and similar magic, such as that of a {@item chime of opening}.",
    "Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking {@damage 10d10} bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.",
    "The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a {@spell wish} spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of {@spell wish} causes the roof, the door, or one wall to regain 50 hit points."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Dagger of Blindsight",
  "source": "WDMM",
  "baseItem": "dagger",
  "type": "M",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 1,
  "weaponCategory": "simple",
  "property": [
    "F",
    "L",
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d4",
  "dmgType": "P",
  "entries": [
    "This rare magic item requires attunement. A creature attuned to it gains {@sense blindsight} out to a range of 30 feet. The dagger has a saw-toothed edge and a black pearl nested in its pommel."
  ]
},
{
  "name": "Dagger of Venom",
  "source": "DMG",
  "baseItem": "dagger",
  "type": "M",
  "tier": "major",
  "rarity": "rare",
  "weight": 1,
  "weaponCategory": "simple",
  "property": [
    "F",
    "L",
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d4",
  "dmgType": "P",
  "bonusWeapon": "+1",
  "entries": [
    "You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    "You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take {@damage 2d10} poison damage and become {@condition poisoned} for 1 minute. The dagger can't be used this way again until the next dawn."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Damselfly Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2000000,
  "crew": 9,
  "vehAc": 19,
  "vehHp": 200,
  "vehDmgThresh": 15,
  "vehSpeed": 8,
  "capCargo": 5,
  "entries": [
    "This swift but cramped ship is made mostly of metal. It can't float on water, but its legs enable it to land safely on the ground. A sliding hatch just behind the wings allows access to the ship's mangonel turret. The ship's cargo hold can easily be turned into crew cabins or another weapon deck.",
    "Damselfly ships are often used as courier vessels and armored transports. Explorers and pirates like them because they're fast and sturdy. Military leaders use them as command ships for the same reasons.",
    "Damselfly ship owners are a proud lot, fond of painting their ships in colorful patterns as well as customizing their vessels with special equipment. Large, private gatherings of damselfly ship owners are not uncommon; they use these get-togethers to show off their ships and to race one another through asteroid belts and other obstacle courses, either for rewards or bragging rights."
  ],
  "seeAlsoVehicle": [
    "Damselfly Ship|AAG"
  ]
},
{
  "name": "Dark Shard Amulet",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": "by a warlock",
  "reqAttuneTags": [
    {
      "class": "warlock"
    }
  ],
  "wondrous": true,
  "focus": [
    "Warlock"
  ],
  "entries": [
    "This amulet is fashioned from a single shard of resilient extraplanar material originating from the realm of your warlock patron. While you are wearing it, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "You can use the amulet as a spellcasting focus for your warlock spells.",
        "You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence ({@skill Arcana}) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Decanter of Endless Water",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.",
    "You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:",
    {
      "type": "list",
      "items": [
        "\"Stream\" produces 1 gallon of water.",
        "\"Fountain\" produces 5 gallons of water.",
        "\"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take {@damage 1d4} bludgeoning damage and fall {@condition prone}. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you."
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table C"
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Deck of Illusions",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing {@dice 1d20 - 1} cards.",
    "The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.",
    "An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature, except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence ({@skill Investigation}) check. The creature then appears translucent.",
    "The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can't be used again.",
    {
      "type": "table",
      "colLabels": [
        "{@dice 1d33|Playing Card}",
        "Illusion"
      ],
      "colStyles": [
        "col-3",
        "col-9"
      ],
      "rows": [
        [
          {
            "type": "cell",
            "roll": {
              "exact": 1
            },
            "entry": "Ace of hearts"
          },
          "{@creature adult red dragon||Red dragon}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 2
            },
            "entry": "King of hearts"
          },
          "{@creature Knight} and four {@creature guard||guards}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 3
            },
            "entry": "Queen of hearts"
          },
          "{@creature Succubus||Succubus/Incubus}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 4
            },
            "entry": "Jack of hearts"
          },
          "{@creature Druid}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 5
            },
            "entry": "Ten of hearts"
          },
          "{@creature Cloud giant}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 6
            },
            "entry": "Nine of hearts"
          },
          "{@creature Ettin}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 7
            },
            "entry": "Eight of hearts"
          },
          "{@creature Bugbear}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 8
            },
            "entry": "Two of hearts"
          },
          "{@creature Goblin}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 9
            },
            "entry": "Ace of diamonds"
          },
          "{@creature Beholder}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 10
            },
            "entry": "King of diamonds"
          },
          "{@creature Archmage} and {@creature mage} apprentice"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 11
            },
            "entry": "Queen of diamonds"
          },
          "{@creature Night hag}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 12
            },
            "entry": "Jack of diamonds"
          },
          "{@creature Assassin}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 13
            },
            "entry": "Ten of diamonds"
          },
          "{@creature Fire giant}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 14
            },
            "entry": "Nine of diamonds"
          },
          "{@creature oni||Ogre mage}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 15
            },
            "entry": "Eight of diamonds"
          },
          "{@creature Gnoll}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 16
            },
            "entry": "Two of diamonds"
          },
          "{@creature Kobold}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 17
            },
            "entry": "Ace of spades"
          },
          "{@creature Lich}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 18
            },
            "entry": "King of spades"
          },
          "{@creature Priest} and two {@creature acolyte||acolytes}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 19
            },
            "entry": "Queen of spades"
          },
          "{@creature Medusa}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 20
            },
            "entry": "Jack of spades"
          },
          "{@creature Veteran}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 21
            },
            "entry": "Ten of spades"
          },
          "{@creature Frost giant}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 22
            },
            "entry": "Nine of spades"
          },
          "{@creature Troll}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 23
            },
            "entry": "Eight of spades"
          },
          "{@creature Hobgoblin}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 24
            },
            "entry": "Two of spades"
          },
          "{@creature Goblin}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 25
            },
            "entry": "Ace of clubs"
          },
          "{@creature Iron golem}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 26
            },
            "entry": "King of clubs"
          },
          "{@creature Bandit captain} and three {@creature bandit||bandits}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 27
            },
            "entry": "Queen of clubs"
          },
          "{@creature Erinyes}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 28
            },
            "entry": "Jack of clubs"
          },
          "{@creature Berserker}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 29
            },
            "entry": "Ten of clubs"
          },
          "{@creature Hill giant}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 30
            },
            "entry": "Nine of clubs"
          },
          "{@creature Ogre}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 31
            },
            "entry": "Eight of clubs"
          },
          "{@creature Orc}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "exact": 32
            },
            "entry": "Two of clubs"
          },
          "{@creature Kobold}"
        ],
        [
          {
            "type": "cell",
            "roll": {
              "min": 33,
              "max": 34
            },
            "entry": "jokers (2)"
          },
          "You (the deck's owner)"
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table F"
  ],
  "seeAlsoDeck": [
    "Deck of Illusions"
  ]
},
{
  "name": "Demon Armor",
  "source": "DMG",
  "type": "HA",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "curse": true,
  "weight": 65,
  "ac": 18,
  "strength": "15",
  "bonusWeapon": "+1",
  "bonusAc": "+1",
  "stealth": true,
  "entries": [
    "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack and damage rolls and a damage die of {@dice 1d8}.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "Once you don this cursed armor, you can't doff it unless you are targeted by the {@spell remove curse} spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities."
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Devastation Orb of Air",
  "source": "PotA",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
    "A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates {@dice 1d100} hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as {@spell identify} and {@spell divination} can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.",
    "A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes {@dice 1d6} rounds later, unless it is returned to the container.",
    "Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
    {
      "name": "Air Orb",
      "type": "entries",
      "entries": [
        "When this orb detonates, it creates a powerful windstorm that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take {@damage 1d4} bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for {@hazard strong wind} apply, as detailed in chapter 5 of the Dungeon Master's Guide."
      ]
    }
  ]
},
{
  "name": "Devastation Orb of Earth",
  "source": "PotA",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a {@item devastation orb of air|PotA}. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
    "A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates {@dice 1d100} hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as {@spell identify} and {@spell divination} can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.",
    "A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a {@item devastation orb of air|PotA} and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes {@dice 1d6} rounds later, unless it is returned to the container.",
    "Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
    {
      "name": "Earth Orb",
      "type": "entries",
      "entries": [
        "When this orb detonates, it subjects the area to the effects of the {@spell earthquake} spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes."
      ]
    }
  ]
},
{
  "name": "Devastation Orb of Fire",
  "source": "PotA",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a {@item devastation orb of air|PotA}. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
    "A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates {@dice 1d100} hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as {@spell identify} and {@spell divination} can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.",
    "A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a {@item devastation orb of air|PotA} and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes {@dice 1d6} rounds later, unless it is returned to the container.",
    "Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
    {
      "name": "Fire Orb",
      "type": "entries",
      "entries": [
        "When this orb detonates, it creates a dry heat wave that lasts for 24 hours. Within the area of effect, the rules for {@hazard extreme heat} apply, as detailed in chapter 5 of the Dungeon Master's Guide. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes {@damage 3d6} fire damage."
      ]
    }
  ]
},
{
  "name": "Devastation Orb of Water",
  "source": "PotA",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a {@item devastation orb of air|PotA}. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
    "A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates {@dice 1d100} hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as {@spell identify} and {@spell divination} can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.",
    "A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a {@item devastation orb of air|PotA} and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes {@dice 1d6} rounds later, unless it is returned to the container.",
    "Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
    {
      "name": "Water Orb",
      "type": "entries",
      "entries": [
        "When this orb detonates, it creates a torrential rainstorm that lasts for 24 hours. Within the area of effect, the rules for {@hazard heavy precipitation} apply, as detailed in chapter 5 of the Dungeon Master's Guide. If there is a substantial body of water in the area, it floods after {@dice 2d10} hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain."
      ]
    }
  ]
},
{
  "name": "Devotee's Censer",
  "source": "TCE",
  "baseItem": "flail",
  "type": "M",
  "rarity": "rare",
  "reqAttune": "by a cleric or paladin",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "paladin"
    }
  ],
  "weight": 2,
  "weaponCategory": "martial",
  "dmg1": "1d8",
  "dmgType": "B",
  "weapon": true,
  "entries": [
    "The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail counts as a holy symbol for you. When you hit with an attack using this magic flail, the target takes an extra {@damage 1d8} radiant damage.",
    "As a bonus action, you can speak the command word to cause the flail to emanate a thin cloud of incense out to 10 feet for 1 minute. At the start of each of your turns, you and any other creatures in the incense each regain {@dice 1d4} hit points. This property can't be used again until the next dawn."
  ]
},
{
  "name": "Diamond",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 500000,
  "entries": [
    "A transparent blue-white, canary, pink, brown, or blue gemstone."
  ]
},
{
  "name": "Dice Set",
  "source": "PHB",
  "type": "GS",
  "rarity": "none",
  "value": 10
},
{
  "name": "Dimensional Loop",
  "source": "AI",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "While attuned to this device, you have a +1 bonus to Strength saving throws, and you have {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision}, its range increases by 30 feet.",
    {
      "type": "entries",
      "name": "Dimensional Cloak",
      "entries": [
        "As a bonus action, you send your body out of phase with the material world for 1 minute, granting you advantage on Dexterity ({@skill Stealth}) checks made to hide, and imposing disadvantage on attack rolls against you. Once you use this feature of the dimensional loop, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Fold Space",
      "entries": [
        "Choose a space you can see within 60 feet of you (no action required). You treat that space as if it were within 5 feet of you until the end of your turn. This allows you to move immediately to that space without provoking opportunity attacks, or to interact with objects or creatures in that space as though they were next to you (including allowing you to make melee attacks into that space). Once you use this feature of the dimensional loop, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Part of a Whole",
      "entries": [
        "While this component is not installed in the {@item Orrery of the Wanderer|AI}, its magic might function sporadically or with unpredictable side effects, as determined by the DM."
      ]
    }
  ]
},
{
  "name": "Dimensional Shackles",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "You can use an action to place these shackles on an {@condition incapacitated} creature. The shackles adjust to fit a creature of Small to Large size. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don't prevent the creature from passing-through an interdimensional portal.",
    "You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength ({@skill Athletics}) check. On a success, the creature breaks free and destroys the shackles."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Dimir Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Dimir, allows you to cast {@spell disguise self}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Dimir's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "disguise self"
  ]
},
{
  "name": "Dimir Keyrune",
  "source": "GGR",
  "rarity": "very rare",
  "reqAttune": "by a member of the Dimir guild",
  "reqAttuneTags": [
    {
      "background": "dimir operative|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "This keyrune, carved from black stone accented with steel, resembles a stylized horror. On command, it transforms into an {@creature intellect devourer} that resembles the Dimir guild symbol, with six bladelike legs. The creature exists for up to 24 hours. During that time, it pursues only a single mission you give it-usually an assignment to take over someone's body, either to impersonate that person for a brief time or to extract secrets from their mind. When the mission is complete, the creature returns to you, reports its success, and reverts to its keyrune form.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature intellect devourer}. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Diplomat's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 36,
  "value": 3900,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item chest}",
        "2 {@item Map or Scroll Case|cases for maps and scrolls}",
        "a set of {@item fine clothes}",
        "a {@item Ink (1-ounce bottle)|bottle of ink}",
        "an {@item ink pen}",
        "a {@item lamp}",
        "2 {@item Oil (flask)|flasks of oil}",
        "5 {@item Paper (one sheet)|sheets of paper}",
        "a {@item Perfume (vial)|vial of perfume}",
        "{@item sealing wax}",
        "{@item soap}"
      ]
    }
  ],
  "packContents": [
    "chest",
    {
      "item": "map or scroll case",
      "quantity": 2
    },
    "fine clothes",
    "ink (1-ounce bottle)",
    "ink pen",
    "lamp",
    {
      "item": "oil (flask)",
      "quantity": 2
    },
    {
      "item": "paper (one sheet)",
      "quantity": 5
    },
    "perfume (vial)",
    "sealing wax",
    "soap"
  ]
},
{
  "name": "Disguise Kit",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 81
    }
  ],
  "type": "T",
  "rarity": "none",
  "weight": 3,
  "value": 2500,
  "entries": [
    "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."
  ],
  "additionalEntries": [
    "The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing."
      ]
    },
    {
      "type": "entries",
      "name": "Deception",
      "entries": [
        "In certain cases, a disguise can improve your ability to weave convincing lies."
      ]
    },
    {
      "type": "entries",
      "name": "Intimidation",
      "entries": [
        "The right disguise can make you look more fearsome, whether you want to scare someone away by posing as a plague victim or intimidate a gang of thugs by taking the appearance of a bully."
      ]
    },
    {
      "type": "entries",
      "name": "Performance",
      "entries": [
        "A cunning disguise can enhance an audience's enjoyment of a performance, provided the disguise is properly designed to evoke the desired reaction."
      ]
    },
    {
      "type": "entries",
      "name": "Persuasion",
      "entries": [
        "Folk tend to trust a person in uniform. If you disguise yourself as an authority figure, your efforts to persuade others are often more effective."
      ]
    },
    {
      "type": "entries",
      "name": "Create Disguise",
      "entries": [
        "As part of a long rest, you can create a disguise. It takes you 1 minute to don such a disguise once you have created it. You can carry only one such disguise on you at a time without drawing undue attention, unless you have a bag of holding or a similar method to keep them hidden. Each disguise weighs 1 pound.",
        "At other times, it takes 10 minutes to craft a disguise that involves moderate changes to your appearance, and 30 minutes for one that requires more extensive changes."
      ]
    },
    {
      "type": "table",
      "caption": "Disguise Kit",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Cover injuries or distinguishing marks",
          "10"
        ],
        [
          "Spot a disguise being used by someone else",
          "15"
        ],
        [
          "Copy a humanoid's appearance",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Dispelling Stone",
  "source": "EGW",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "This smooth, rainbow-colored, egg-shaped stone can be thrown up to 30 feet and explodes in a 10-foot-radius sphere of magical energy on impact, destroying the stone. Any active spell of 5th level or lower in the sphere ends."
  ]
},
{
  "name": "Docent",
  "source": "ERLW",
  "rarity": "rare",
  "reqAttune": "by a warforged",
  "reqAttuneTags": [
    {
      "race": "warforged|erlw"
    }
  ],
  "wondrous": true,
  "sentient": true,
  "entries": [
    "A docent is a small metal sphere, about 2 inches across, studded with dragonshards. To attune to a docent, you must embed the item somewhere on your body, such as your chest or your eye socket.",
    {
      "type": "entries",
      "name": "Sentience",
      "entries": [
        "A docent is a sentient item of any alignment with an Intelligence of 16, a Wisdom of 14, and a Charisma of 14. It perceives the world through your senses. It communicates telepathically with you and can speak, read, and understand any language it knows (see \"Random Properties\" below)."
      ]
    },
    {
      "type": "entries",
      "name": "Life Support",
      "entries": [
        "Whenever you end your turn with 0 hit points, the docent can make a Wisdom ({@skill Medicine}) check with a +6 bonus. If this check succeeds, the docent stabilizes you."
      ]
    },
    {
      "type": "entries",
      "name": "Random Properties",
      "entries": [
        "A docent has the following properties:",
        "{@b Languages}. The docent knows Common, Giant, and {@dice 1d4} additional languages chosen by the DM. If a docent knows fewer than six languages, it can learn a new language after it hears or reads the language through your senses.",
        "{@b Skills}. The docent has a +7 bonus to one of the following skills (roll a {@dice d4}): (1) {@skill Arcana}, (2) {@skill History}, (3) {@skill Investigation}, or (4) {@skill Nature}.",
        "{@b Spells}. The docent knows one of the following spells and can cast it at will, requiring no components (roll a {@dice d6}): (1-2) {@spell detect evil and good} or (3-6) {@spell detect magic}. The docent decides when to cast the spell."
      ]
    },
    {
      "type": "entries",
      "name": "Personality",
      "entries": [
        "A docent is designed to advise and assist the warforged it's attached to. One of the simple functions of a docent is to serve as a translator. The docent's properties are under its control, and if you have a bad relationship with your docent, it might refuse to assist you."
      ]
    }
  ],
  "attachedSpells": [
    "detect evil and good",
    "detect magic"
  ]
},
{
  "name": "Dodecahedron of Doom",
  "source": "WDMM",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This twelve-sided metal die is 12 inches across and bears the numbers 1 through 12 engraved on its pentagonal sides. The dodecahedron contains arcane clockwork mechanisms that whir and click whenever the die is cast.",
    "The dodecahedron can be hurled up to 60 feet as an action. A random magical effect occurs when the die comes to rest after rolling across the ground for at least 10 feet. If an effect requires a target and no eligible target is within range, nothing happens. Spells cast by the dodecahedron require no components. Roll a {@dice d12} and consult the following table to determine the effect:",
    {
      "type": "table",
      "colLabels": [
        "d12",
        "effect"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1-2",
          "The dodecahedron explodes and is destroyed. Each creature within 20 feet of the exploding die must make a DC 13 Dexterity saving throw, taking 40 ({@damage 9d8}) force damage on a failed save, or half as much damage on a successful one."
        ],
        [
          "3-4",
          "The dodecahedron casts {@spell light} on itself. The effect lasts until a creature touches the die."
        ],
        [
          "5-6",
          "The dodecahedron casts {@spell ray of frost} (+5 to hit), targeting a random creature within 60 feet of it that doesn't have total cover against the attack."
        ],
        [
          "7-8",
          "The dodecahedron casts {@spell shocking grasp} (+5 to hit) on the next creature that touches it."
        ],
        [
          "9-10",
          "The dodecahedron casts {@spell darkness} on itself. The effect has a duration of 10 minutes."
        ],
        [
          "11-12",
          "The next creature to touch the dodecahedron gains {@dice 1d10} temporary hit points that last for 1 hour."
        ]
      ]
    }
  ],
  "attachedSpells": [
    "light",
    "ray of frost",
    "shocking grasp",
    "darkness"
  ]
},
{
  "name": "Dogsled",
  "source": "IDRotF",
  "type": "VEH",
  "rarity": "none",
  "weight": 300,
  "value": 2000,
  "entries": [
    "An empty sled costs 20 gp, weighs 300 pounds, and has room at the back for one driver."
  ]
},
{
  "name": "Donkey",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 800,
  "carryingCapacity": 420,
  "speed": 40
},
{
  "name": "Draft Horse",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 5000,
  "carryingCapacity": 540,
  "speed": 40
},
{
  "name": "Dragon",
  "source": "WDH",
  "type": "$",
  "rarity": "none",
  "value": 100,
  "entries": [
    "Gold coin, half again as large as a {@item nib|wdh} (1 dragon = 100 {@item nib|wdh|nibs})"
  ]
},
{
  "name": "Dragon's Blood",
  "source": "ERLW",
  "type": "OTH",
  "rarity": "none",
  "entries": [
    "Introduced into Sharn by Daask, dragon's blood is a potent and highly addictive stimulant. In addition to inducing euphoria, it can enhance spellcasting ability or even temporarily imbue a user with the ability to cast sorcerer spells. The drug's effects are potentially dangerous and always unpredictable. This isn't something a player character should want to use; adventurers are more likely to interfere with Daask smugglers or deal with an addict who accidentally casts a {@spell fireball} in a crowded street. The specific effects of dragon's blood are up to you, but you can take inspiration from the {@table Wild Magic Surge} table in the {@book Player's Handbook}."
  ]
},
{
  "name": "Dragonchess Set",
  "source": "PHB",
  "type": "GS",
  "rarity": "none",
  "weight": 0.5,
  "value": 100
},
{
  "name": "Dragonguard",
  "source": "LMoP",
  "type": "MA",
  "rarity": "rare",
  "weight": 20,
  "ac": 14,
  "bonusAc": "+1",
  "entries": [
    "You have a +1 bonus to AC while wearing this armor.",
    "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type."
  ]
},
{
  "name": "Dragontooth Dagger",
  "source": "RoT",
  "baseItem": "dagger",
  "type": "M",
  "rarity": "rare",
  "weight": 1,
  "weaponCategory": "simple",
  "property": [
    "F",
    "L",
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d4",
  "dmgType": "P",
  "bonusWeapon": "+1",
  "entries": [
    "A dagger fashioned from the tooth of a dragon. While the blade is obviously a fang or predator's tooth, the handle is leather wrapped around the root of the tooth, and there is no crossguard.",
    "You gain a +1 bonus to attack and damage rolls made with this weapon. On a hit with this weapon, the target takes an extra {@damage 1d6} acid damage.",
    {
      "name": "Draconic Potency",
      "type": "entries",
      "entries": [
        "Against enemies of the Cult of the Dragon, the dagger's bonus to attack and damage rolls increases to 2, and the extra acid damage increases to {@dice 2d6}."
      ]
    }
  ]
},
{
  "name": "Dread Helm",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This fearsome steel helm makes your eyes glow red while you wear it."
  ]
},
{
  "name": "Dreamlily",
  "source": "ERLW",
  "type": "OTH",
  "rarity": "none",
  "entries": [
    "A psychoactive liquid that smells and tastes like your favorite beverage, essence of dreamlily is a Sarlonan opiate. First imported to help manage pain during the Last War, it's now the most commonly abused substance in Sharn. Though dreamlily isn't illegal if used for medicinal purposes, it's heavily taxed, and thus most dreamlily is smuggled in and sold on the black market. Dreamlily dens can be found across the lower wards. Consuming dreamlily causes disorienting euphoria and brings about remarkable resistance to pain. A creature under the effects of dreamlily is {@condition poisoned} for 1 hour. While {@condition poisoned} in this way, the creature is immune to fear, and the first time it drops to 0 hit points without being killed outright, it drops to 1 hit point instead. A dose of dreamlily costs around 1 gp, or up to ten times that if purchased through legal channels. There are many varieties of the drug, however, and the duration or the price might vary accordingly."
  ]
},
{
  "name": "Driftglobe",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the {@spell light} or {@spell daylight} spell. Once used, the {@spell daylight} effect can't be used again until the next dawn.",
    "You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out."
  ],
  "attachedSpells": [
    "light",
    "daylight"
  ],
  "lootTables": [
    "Magic Item Table A",
    "Magic Item Table B"
  ]
},
{
  "name": "Drow Poison",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 20000,
  "poison": true,
  "entries": [
    "This poison is typically made only by the {@creature drow}, and only in a place far removed from sunlight. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be {@condition poisoned} for 1 hour. If the saving throw fails by 5 or more, the creature is also {@condition unconscious} while {@condition poisoned} in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake."
  ],
  "poisonTypes": [
    "injury"
  ]
},
{
  "name": "Drum",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 3,
  "value": 600
},
{
  "name": "Dulcimer",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 10,
  "value": 2500
},
{
  "name": "Dungeoneer's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 61.5,
  "value": 1200,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item backpack}",
        "a {@item crowbar}",
        "a {@item hammer}",
        "10 {@item piton|pitons}",
        "10 {@item torch|torches}",
        "a {@item tinderbox}",
        "10 days of {@item Rations (1 day)|rations}",
        "a {@item waterskin}",
        "{@item Hempen Rope (50 feet)|50 feet of hempen rope}"
      ]
    }
  ],
  "packContents": [
    "backpack",
    "crowbar",
    "hammer",
    {
      "item": "piton",
      "quantity": 10
    },
    {
      "item": "torch",
      "quantity": 10
    },
    "tinderbox",
    {
      "item": "rations (1 day)",
      "quantity": 10
    },
    "waterskin",
    "hempen rope (50 feet)"
  ]
},
{
  "name": "Duplicitous Manuscript",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "To you, this book is a magical spellbook. To anyone else, the book appears to be a volume of verbose romance fiction. As an action, you can change the book's appearance and alter the plot of the romance.",
    "When found, the book contains the following spells: {@spell hallucinatory terrain}, {@spell major image}, {@spell mirror image}, {@spell mislead}, {@spell Nystul's magic aura}, {@spell phantasmal force}, and {@spell silent image}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the illusion school.",
        "When a creature you can see makes an Intelligence ({@skill Investigation}) check to discern the true nature of an illusion spell you cast, or makes a saving throw against an illusion spell you cast, you can use your reaction and expend 1 charge to impose disadvantage on the roll."
      ]
    }
  ],
  "attachedSpells": [
    "hallucinatory terrain",
    "major image",
    "mirror image",
    "mislead",
    "nystul's magic aura",
    "phantasmal force",
    "silent image"
  ]
},
{
  "name": "Duskcrusher",
  "source": "EGW",
  "baseItem": "warhammer",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 2,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "R",
  "dmg2": "1d10",
  "bonusWeapon": "+2",
  "weapon": true,
  "entries": [
    "This item takes the form of a leather-wrapped metal rod emblazoned with the symbol of Pelor, the Dawn Father. While grasping the rod, you can use a bonus action to cause a warhammer head of crackling radiance to spring into existence. The warhammer's radiant head emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. You can use an action to make the radiant head disappear.",
    "While the radiant head is active, you gain a +2 bonus to attack and damage rolls made with this magic weapon, and attacks with the weapon deal radiant damage instead of bludgeoning damage. An undead creature hit by the weapon takes an extra {@damage 1d8} radiant damage.",
    "While you are holding Duskcrusher and its radiant head is active, you can use an action to cast the {@spell sunbeam} spell (save DC 15) from the weapon, and this action can't be used again until the next dawn."
  ],
  "attachedSpells": [
    "sunbeam"
  ]
},
{
  "name": "Dust of Corrosion",
  "source": "WBtW",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "As an action, you can throw this dust into the air, filling a 10-foot cube that extends out from you. Surfaces and objects made of nonmagical ferrous metal in the area instantly corrode and turn to dust, becoming useless and unsalvageable. Any creature in the area that is made wholly or partly out of ferrous metal must make a DC 13 Constitution saving throw, taking {@damage 4d8} necrotic damage on a failed save, or half as much damage on a successful one.",
    "Found in a small packet, this dust is made from finely ground rust monster antennae. There is enough dust in each packet for one use."
  ]
},
{
  "name": "Dust of Deliciousness",
  "source": "EGW",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This reddish brown dust can be sprinkled over any edible substance to greatly improve the flavor. The dust also dulls the eater's senses: anyone eating food treated with this dust has disadvantage on Wisdom ability checks and Wisdom saving throws for 1 hour. There is enough dust to flavor six servings."
  ]
},
{
  "name": "Dust of Disappearance",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become {@condition invisible} for {@dice 2d4} minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Dust of Dryness",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This small packet contains {@dice 1d6 + 4} pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible.",
    "Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet's magic.",
    "An elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 Constitution saving throw, taking {@damage 10d6} necrotic damage on a failed save, or half as much damage on a successful one."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Dust of Sneezing and Choking",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Found in a small container, this powder resembles very fine sand. It appears to be {@item dust of disappearance}, and an {@spell identify} spell reveals it to be such. There is enough of it for one use.",
    "When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe while sneezing uncontrollably. A creature affected in this way is {@condition incapacitated} and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The {@spell lesser restoration} spell can also end the effect on a creature."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Dust of the Mummy",
  "source": "IMR",
  "rarity": "none",
  "poison": true,
  "entries": [
    "This poison is created during a mummy's embalming process, distilled from the dead creature's removed organs. A creature subjected to this poison must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed creature can't regain hit points, and its hit point maximum decreases by 10 ({@dice 3d6}) for every 24 hours that elapse. If the curse reduces the creature's hit point maximum to 0, the creature dies, and its body turns to dust. The curse lasts until removed by the {@spell remove curse} spell or similar magic."
  ],
  "poisonTypes": [
    "inhaled"
  ]
},
{
  "name": "Dwarven Plate",
  "source": "DMG",
  "type": "HA",
  "tier": "major",
  "rarity": "very rare",
  "weight": 65,
  "ac": 18,
  "strength": "15",
  "bonusAc": "+2",
  "stealth": true,
  "entries": [
    "While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Dwarven Thrower",
  "source": "DMG",
  "baseItem": "warhammer",
  "type": "M",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a dwarf",
  "reqAttuneTags": [
    {
      "race": "dwarf"
    }
  ],
  "weight": 2,
  "weaponCategory": "martial",
  "property": [
    "T",
    "V"
  ],
  "range": "20/60",
  "dmg1": "1d8",
  "dmgType": "B",
  "dmg2": "1d10",
  "bonusWeapon": "+3",
  "entries": [
    "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra {@damage 1d8} damage or, if the target is a giant, {@damage 2d8} damage. Immediately after the attack, the weapon flies back to your hand."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Dynamite (stick)",
  "source": "DMG",
  "type": "EXP",
  "rarity": "none",
  "weight": 1,
  "age": "modern",
  "entries": [
    "As an action, a creature can light a stick of dynamite and throw it at a point up to 60 feet away. Each creature within 5 feet of that point must make a DC 12 Dexterity saving throw, taking {@damage 3d6} bludgeoning damage on a failed save, or half as much damage on a successful one.",
    "A character can bind sticks of dynamite together so they explode at the same time. Each additional stick increases the damage by {@damage 1d6} (to a maximum of {@damage 10d6}) and the burst radius by 5 feet (to a maximum of 20 feet).",
    "Dynamite can be rigged with a longer fuse to explode after a set amount of time, usually 1 to 6 rounds. Roll initiative for the dynamite. After the set number of rounds goes by, the dynamite explodes on that initiative."
  ]
},
{
  "name": "Dyrrn's Tentacle Whip",
  "source": "ERLW",
  "baseItem": "whip",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "F",
    "R"
  ],
  "dmg1": "1d4",
  "dmgType": "S",
  "bonusWeapon": "+2",
  "weapon": true,
  "entries": [
    "This long, whip-like strand of tough muscle bears a sharp stinger at one end. To attune to this symbiotic weapon, you wrap the whip around your wrist for the entire attunement period, during which time the whip painfully embeds its tendrils into your arm.",
    "You gain a +2 bonus to attack and damage rolls made with this magic whip, but attack rolls made against aberrations with this weapon have disadvantage. A creature hit by this weapon takes an extra {@damage 1d6} psychic damage. When you roll a 20 on the {@dice d20} for an attack roll with this weapon, the target is {@condition stunned} until the end of its next turn.",
    "As a bonus action, you can sheathe the whip by causing it to retract into your arm, or draw the whip out of your arm again.",
    {
      "type": "entries",
      "name": "Symbiotic Nature",
      "entries": [
        "The whip can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the whip ends, and it detaches from you."
      ]
    }
  ]
},
{
  "name": "Eagle Whistle",
  "source": "TftYP",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "modifySpeed": {
    "equal": {
      "fly": "walk"
    },
    "multiply": {
      "fly": 2
    }
  },
  "entries": [
    "While you blow an eagle whistle continuously, you can fly twice as fast as your walking speed. You can blow the whistle continuously for a number of rounds equal to 5 + five times your Constitution modifier (minimum of 1 round) or until you talk, hold your breath, or start suffocating. A use of the whistle also ends if you land. If you are aloft when you stop blowing the whistle, you fall. The whistle has three uses. It regains expended uses daily at dawn."
  ]
},
{
  "name": "Ear Horn of Hearing",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "While held up to your ear, this horn suppresses the effects of the {@condition deafened} condition on you, allowing you to hear normally."
  ]
},
{
  "name": "Earring of Message",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d4 + 1}",
  "charges": 5,
  "entries": [
    "The blue crystal of this earring is wrapped with delicate copper wire. The earring has 5 charges. While wearing it, you can use an action to expend 1 charge and cast the {@spell message} spell. The earring regains {@dice 1d4 + 1} expended charges daily at dawn."
  ],
  "attachedSpells": [
    "message"
  ]
},
{
  "name": "Earworm",
  "source": "ERLW",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d4}",
  "charges": 4,
  "entries": [
    "To attune to this symbiont, you must hold it against the skin behind your ear for the entire attunement period, whereupon it burrows into your head and bonds to your skull. While the earworm is inside you, you can speak, read, and write Deep Speech.",
    {
      "type": "entries",
      "name": "Spells",
      "entries": [
        "The earworm has 4 charges. You can cast the following spells from it, expending the necessary number of charges (spell save DC 15): {@spell detect thoughts} (2 charges) or {@spell dissonant whispers} (1 charge). Each time you use the earworm to cast the {@spell detect thoughts} spell, it sends the information gleaned to the nearest daelkyr, or to the next nearest earworm until it reaches a daelkyr.",
        "The earworm regains {@dice 1d4} expended charges daily at dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Symbiotic Nature",
      "entries": [
        "The earworm can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the earworm ends, and it exits your body."
      ]
    }
  ],
  "attachedSpells": [
    "dissonant whispers",
    "detect thoughts"
  ]
},
{
  "name": "Efreeti Bottle",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an {@creature efreeti} appears in an unoccupied space within 30 feet of you.",
    "The first time the bottle is opened, the DM rolls to determine what happens.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d100}",
        "Effect"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01-10",
          "The {@creature efreeti} attacks you. After fighting for 5 rounds, the {@creature efreeti} disappears, and the bottle loses its magic."
        ],
        [
          "11-90",
          "The {@creature efreeti} serves you for 1 hour, doing as you command. Then the {@creature efreeti} returns to the bottle, and a new stopper contains it. The stopper can't be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the {@creature efreeti} escapes and disappears, and the bottle loses its magic."
        ],
        [
          "91-00",
          "The {@creature efreeti} can cast the {@spell wish} spell three times for you. It disappears when it grants the final wish or after 1 hour, and the bottle loses its magic."
        ]
      ]
    }
  ],
  "attachedSpells": [
    "wish"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Elder Cartographer's Glossography",
  "source": "AI",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "When you attain rank 4, you gain a small tome that is an uncommon magic item. The elder cartographer's glossography grants advantage on Intelligence or Wisdom checks related to geographical features or locations."
  ]
},
{
  "name": "Eldritch Claw Tattoo",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "bonusWeapon": "+1",
  "entries": [
    "Produced by a special needle, this magic tattoo depicts clawlike forms and other jagged shapes.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Magical Strikes",
      "entries": [
        "While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes."
      ]
    },
    {
      "type": "entries",
      "name": "Eldritch Maul",
      "entries": [
        "As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee attacks with a weapon or an unarmed strike can reach a target up to 15 feet away from you, as inky tendrils launch toward the target. In addition, your melee attacks deal an extra {@damage 1d6} force damage on a hit. Once used, this bonus action can't be used again until the next dawn."
      ]
    }
  ]
},
{
  "name": "Eldritch Staff",
  "source": "WBtW",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+1",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This staff can be wielded as a magic quarterstaff that grants a +1 bonus to attack and damage rolls made with it.",
    "The staff has 10 charges and regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff is destroyed in an otherwise harmless burst of eldritch energy.",
    {
      "type": "entries",
      "name": "Eldritch Attack",
      "entries": [
        "When you hit with a melee attack using the staff, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra {@damage 1d8} lightning damage."
      ]
    },
    {
      "type": "entries",
      "name": "Eldritch Escape",
      "entries": [
        "If you take damage while holding the staff, you can use your reaction to expend 3 of the staff's charges, whereupon you turn {@condition invisible} and teleport yourself, along with any equipment you are wearing or carrying, up to 60 feet to an unoccupied space that you can see. You remain {@condition invisible} until the start of your next turn or until you attack, cast a spell, or deal damage."
      ]
    }
  ]
},
{
  "name": "Electrum (ep)",
  "source": "PHB",
  "type": "$",
  "rarity": "none",
  "weight": 0.02,
  "value": 50,
  "entries": [
    "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
    "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
    "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
    "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
    "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
    "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
  ]
},
{
  "name": "Electrum 50-Zib Coin",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 50
},
{
  "name": "Elemental Essence Shard",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "Roll a {@dice d4} and consult the Elemental Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
    {
      "type": "table",
      "caption": "Elemental Essence Shards",
      "colLabels": [
        "d4",
        "Element",
        "Shard"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-2 text-center",
        "col-8"
      ],
      "rows": [
        [
          "1",
          "Air",
          "{@item Elemental Essence Shard (Air)|TCE}"
        ],
        [
          "2",
          "Earth",
          "{@item Elemental Essence Shard (Earth)|TCE}"
        ],
        [
          "3",
          "Fire",
          "{@item Elemental Essence Shard (Fire)|TCE}"
        ],
        [
          "4",
          "Water",
          "{@item Elemental Essence Shard (Water)|TCE}"
        ]
      ]
    }
  ]
},
{
  "name": "Elemental Essence Shard (Air)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use the following property:",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "You can immediately fly up to 60 feet without provoking opportunity attacks."
      ]
    }
  ]
},
{
  "name": "Elemental Essence Shard (Earth)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use the following property:",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "You gain resistance to a damage type of your choice until the start of your next turn."
      ]
    }
  ]
},
{
  "name": "Elemental Essence Shard (Fire)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use the following property:",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "One target of the spell that you can see catches fire. The burning target takes {@damage 2d10} fire damage at the start of its next turn, and then the flames go out."
      ]
    }
  ]
},
{
  "name": "Elemental Essence Shard (Water)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use the following property:",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "You create a wave of water that bursts out from you in a 10-foot radius. Each creature of your choice that you can see in that area takes {@damage 2d6} cold damage and must succeed on a Strength saving throw against your spell save DC or be pushed 10 feet away from you and fall {@condition prone}."
      ]
    }
  ]
},
{
  "name": "Elemental Gem, Blue Sapphire",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This gem contains a mote of elemental energy. When you use an action to break the gem, an {@creature air elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
  ],
  "attachedSpells": [
    "conjure elemental"
  ]
},
{
  "name": "Elemental Gem, Emerald",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This gem contains a mote of elemental energy. When you use an action to break the gem, a {@creature water elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
  ],
  "attachedSpells": [
    "conjure elemental"
  ]
},
{
  "name": "Elemental Gem, Red Corundum",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This gem contains a mote of elemental energy. When you use an action to break the gem, a {@creature fire elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
  ],
  "attachedSpells": [
    "conjure elemental"
  ]
},
{
  "name": "Elemental Gem, Yellow Diamond",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This gem contains a mote of elemental energy. When you use an action to break the gem, an {@creature earth elemental} is summoned as if you had cast the {@spell conjure elemental} spell, and the gem's magic is lost."
  ],
  "attachedSpells": [
    "conjure elemental"
  ]
},
{
  "name": "Elephant",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 20000,
  "carryingCapacity": 1320,
  "speed": 40
},
{
  "name": "Elixir of Health",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "When you drink this potion, it cures any disease afflicting you, and it removes the {@condition blinded}, {@condition deafened}, {@condition paralyzed}, and {@condition poisoned} conditions. The clear red liquid has tiny bubbles of light in it."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Elven Chain",
  "source": "DMG",
  "type": "MA",
  "tier": "major",
  "rarity": "rare",
  "weight": 20,
  "ac": 13,
  "grantsProficiency": true,
  "bonusAc": "+1",
  "entries": [
    "You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Elven Trinket",
  "source": "MTF",
  "type": "G",
  "rarity": "none",
  "entries": [
    {
      "type": "table",
      "colLabels": [
        "d8",
        "Trinket"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "A small notebook that causes anything written in it to disappear after 1 hour"
        ],
        [
          "2",
          "A crystal lens made of ivory and gold that causes anything observed through it to appear to be surrounded by motes of multicolored light"
        ],
        [
          "3",
          "A small golden pyramid inscribed with elven symbols and about the size of a walnut"
        ],
        [
          "4",
          "A cloak pin made from enamel in the shape of a butterfly; when you take the pin off, it turns into a real butterfly, and returns when you are ready to put your cloak back on again"
        ],
        [
          "5",
          "A golden compass that points toward the nearest portal to the Feywild within 10 miles"
        ],
        [
          "6",
          "A small silver spinning top that, when spun, endlessly spins until interrupted"
        ],
        [
          "7",
          "A small songbird made of enamel, gold wire, and precious stone; uttering the songbird's name in Elvish causes the trinket to emit that bird's birdsong"
        ],
        [
          "8",
          "A small enamel flower that, when put in one's hair, animates, tying back the wearer's hair with a living vine with flowers; plucking a single flower from this vine returns it to its inanimate form"
        ]
      ]
    }
  ]
},
{
  "name": "Emblem",
  "source": "PHB",
  "type": "SCF",
  "scfType": "holy",
  "rarity": "none",
  "value": 500
},
{
  "name": "Embroidered glove set with jewel chips",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Embroidered silk and velvet mantle set with numerous moonstones",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Embroidered silk handkerchief",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Emerald",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A transparent deep bright green gemstone."
  ]
},
{
  "name": "Emerald Pen",
  "source": "FTD",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This pen is tipped with an emerald nib and requires no ink to write. While holding this pen, you can cast {@spell illusory script} at will, requiring no material components."
  ],
  "attachedSpells": [
    "illusory script"
  ]
},
{
  "name": "Enduring Spellbook",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age."
  ]
},
{
  "name": "Entertainer's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 38,
  "value": 4000,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item backpack}",
        "a {@item bedroll}",
        "2 {@item Costume Clothes|costumes}",
        "5 {@item candle|candles}",
        "5 days of {@item Rations (1 day)|rations}",
        "a {@item waterskin}",
        "a {@item disguise kit}"
      ]
    }
  ],
  "packContents": [
    "backpack",
    "bedroll",
    {
      "item": "costume clothes",
      "quantity": 2
    },
    {
      "item": "candle",
      "quantity": 5
    },
    {
      "item": "rations (1 day)",
      "quantity": 5
    },
    "waterskin",
    "disguise kit"
  ]
},
{
  "name": "Ersatz Eye",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye."
  ]
},
{
  "name": "Essence of Ether",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 30000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become {@condition poisoned} for 8 hours. The {@condition poisoned} creature is {@condition unconscious}. The creature wakes up if it takes damage or if another creature takes an action to shake it awake."
  ],
  "poisonTypes": [
    "inhaled"
  ]
},
{
  "name": "Everbright Lantern",
  "source": "ERLW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This bullseye lantern contains an Eberron dragonshard that sheds light comparable to that produced by a {@spell continual flame} spell. An everbright lantern sheds light in a 120-foot cone; the closest 60 feet is bright light, and the farthest 60 feet is dim light."
  ]
},
{
  "name": "Eversmoking Bottle",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.",
    "The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Exotic Saddle",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 40,
  "value": 6000,
  "entries": [
    "An exotic saddle is required for riding any aquatic or flying mount."
  ]
},
{
  "name": "Explorer's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 59,
  "value": 1000,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item backpack}",
        "a {@item bedroll}",
        "a {@item mess kit}",
        "a {@item tinderbox}",
        "10 {@item torch|torches}",
        "10 days of {@item Rations (1 day)|rations}",
        "a {@item waterskin}",
        "{@item Hempen Rope (50 feet)|50 feet of hempen rope}"
      ]
    }
  ],
  "packContents": [
    "backpack",
    "bedroll",
    "mess kit",
    "tinderbox",
    {
      "item": "torch",
      "quantity": 10
    },
    {
      "item": "rations (1 day)",
      "quantity": 10
    },
    "waterskin",
    "hempen rope (50 feet)"
  ]
},
{
  "name": "Explosive Seed",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "entries": [
    "This acorn-sized sphere of brass contains a small amount of blasting powder and a clockwork trigger. An explosive seed can be thrown up to 30 feet as an action, detonating on impact. Each creature within 5 feet of the exploding seed must make a DC 10 Dexterity saving throw, taking {@damage 1d8} bludgeoning damage on a failed save, or half as much damage on a successful one."
  ]
},
{
  "name": "Eye Agate",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "A translucent circles of gray, white, brown, blue, or green gemstone."
  ]
},
{
  "name": "Eye patch with a mock eye set in blue sapphire and moonstone",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Eye patch with a mock eye set in blue sapphire and moonstone (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Eyes of Charming",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the {@spell charm person} spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "charm person"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Eyes of Minute Seeing",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence ({@skill Investigation}) checks that rely on sight while searching an area or studying an object within that range."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Eyes of the Eagle",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom ({@skill Perception}) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Failed Experiment Wand",
  "source": "AI",
  "type": "WD",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 2,
  "entries": [
    "This wand has 2 charges. While holding it, you can use an action to expend 1 or more of its charges to cast either a green-flamed {@spell fireball} or a blue {@spell lightning bolt} at random from it (save DC 15).",
    "For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "fireball",
    "lightning bolt"
  ]
},
{
  "name": "Far Gear",
  "source": "AI",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "While attuned to this device, you have a +1 bonus to Charisma saving throws, and you have advantage on Charisma ({@skill Intimidation}) checks.",
    {
      "type": "entries",
      "name": "Aberrant Ally",
      "entries": [
        "You can conjure an aberrant creature from the chaos of the multiverse to serve you. This functions as the {@spell conjure celestial} spell (no {@status concentration} required), except the creature you summon is an aberration of challenge rating 4 or lower. Once you use this feature of the far gear, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Unnatural Bane",
      "entries": [
        "You can cast the {@spell bane} spell (save DC 15), which affects any number of creatures within range for 1 minute. Once you use this feature of the far gear, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Part of a Whole",
      "entries": [
        "While this component is not installed in the {@item Orrery of the Wanderer|AI}, its magic might function sporadically or with unpredictable side effects, as determined by the DM."
      ]
    }
  ],
  "attachedSpells": [
    "conjure celestial",
    "bane"
  ]
},
{
  "name": "Far Realm Shard",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This writhing crystal is steeped in the warped essence of the Far Realm. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can cause a slimy tentacle to rip through the fabric of reality and strike one creature you can see within 30 feet of you. The creature must succeed on a Charisma saving throw against your spell save DC or take {@damage 3d6} psychic damage and become {@condition frightened} of you until the start of your next turn."
  ]
},
{
  "name": "Fargab",
  "source": "DSotDQ",
  "type": "G",
  "rarity": "none",
  "entries": [
    "These backpack-sized devices are created in pairs, with matching numbers engraved on them, and allow communication over a long distance using radio frequencies. While wearing a fargab, you can use an action to speak into the device's mouthpiece and send a short message of twenty-five words or less to another creature wearing the matched fargab while it is within 18 miles of you. The message emits from the speakers of the device and can be heard up to 10 feet away from the device. If no creature is wearing the fargab, the speakers make static noises instead."
  ]
},
{
  "name": "Feather Token",
  "source": "ERLW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This small metal disk is inscribed with the image of a feather. When you fall at least 20 feet while the token is on your person, you descend 60 feet per round and take no damage from falling. The token's magic is expended after you land, whereupon the disk becomes nonmagical."
  ]
},
{
  "name": "Feather of Diatryma Summoning",
  "source": "WDH",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This bright plume is made from the feather of a {@creature diatryma|wdh} (pronounced dee-ah-TRY-mah), a Large, colorful, flightless bird native to the Underdark. If you use an action to speak the command word and throw the feather into a Large unoccupied space on the ground within 5 feet of you, the feather becomes a living diatryma for up to 6 hours, after which it reverts to its feather form. It reverts to feather form early if it drops to 0 hit points or if you use an action to speak the command word again while touching the bird.",
    "When the diatryma reverts to feather form, the magic of the feather can't be used again until 7 days have passed.",
    "The diatryma uses the statistics of an {@creature axe beak}, except that its beak deals piercing damage instead of slashing damage. The creature is friendly to you and your companions, and it can be used as a mount. It understands your languages and obeys your spoken commands. If you issue no commands, the diatryma defends itself but takes no other actions."
  ]
},
{
  "name": "Feathered mantle with emerald clasp (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Feed (per day)",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 10,
  "value": 5
},
{
  "name": "Feywild Shard",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This warm crystal glints with the sunset colors of the Feywild sky and evokes whispers of emotional memory. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can roll on the {@table Wild Magic Surge} table in the {@book Player's Handbook}. If the result is a spell, it is too wild to be affected by your Metamagic, and if it normally requires {@status concentration}, it doesn't require {@status concentration} in this case; the spell lasts for its full duration.",
    "If you don't have the Wild Magic Sorcerous Origin, once this property is used to roll on the {@table Wild Magic Surge} table, it can't be used again until the next dawn."
  ]
},
{
  "name": "Feywild Trinket",
  "source": "WBtW",
  "type": "G",
  "rarity": "none",
  "entries": [
    "The Feywild Trinkets table that follows offers a selection of trinkets appropriate for Feywild-themed adventures such as this one. Players whose characters have the feylost or Witchlight hand background can roll on this table instead of the {@book Trinkets|5|Trinkets} table in the {@book Player's Handbook} to determine what trinkets their characters possess. The adventure includes a few encounters that require you to roll on the table to determine what random trinkets the characters find in key locations.",
    {
      "type": "table",
      "caption": "Feywild Trinkets",
      "colLabels": [
        "d100",
        "Trinket"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "01",
          "Cookie cutter shaped like a unicorn"
        ],
        [
          "02",
          "Two yew rings linked together"
        ],
        [
          "03",
          "Silver hand mirror with a nymph-shaped handle"
        ],
        [
          "04",
          "Painted wooden key whose teeth change configuration every day at dawn"
        ],
        [
          "05",
          "Delicate silver cameo with pictures of twin children opposite one another"
        ],
        [
          "06",
          "Golden pendant charm shaped like a leprechaun"
        ],
        [
          "07",
          "Tiny wooden box containing a croquet set sized for pixies or sprites"
        ],
        [
          "08",
          "Tiny pair of sharp, iron scissors"
        ],
        [
          "09",
          "Chess piece shaped like a dancing satyr wearing a bishop's hat and clutching a gnarled staff"
        ],
        [
          "10",
          "Saltshaker shaped like a wizard's tower"
        ],
        [
          "11",
          "Crystal orb that allows an elf who holds it to sleep"
        ],
        [
          "12",
          "Pendant that shows the phases of the moon"
        ],
        [
          "13",
          "Large iron fingernail"
        ],
        [
          "14",
          "Tiny electrum whistle that only Fey can hear"
        ],
        [
          "15",
          "Wooden jigsaw puzzle piece as big as a saucer, with a painted image of a jug on it"
        ],
        [
          "16",
          "Spool of glistening silver thread"
        ],
        [
          "17",
          "Sheet of music that goblins find upsetting when they hear it played or sung"
        ],
        [
          "18",
          "Rotten ogre's tooth with the Elvish glyph for \"moon\" etched into it"
        ],
        [
          "19",
          "Vitrified eye of a displacer beast"
        ],
        [
          "20",
          "Tiny duskwood coffin containing the ashes of a troll"
        ],
        [
          "21",
          "Old invitation to a banquet in the Summer Court, written in ink on vellum in Sylvan"
        ],
        [
          "22",
          "Gossamer shawl that glows faintly in moonlight"
        ],
        [
          "23",
          "Ball-and-cup toy that plays a short, victorious jingle whenever the ball lands in the cup"
        ],
        [
          "24",
          "Sprite's skull covered in ink fingerprints"
        ],
        [
          "25",
          "Silver fork with the outer tines bent sideways"
        ],
        [
          "26",
          "A soot-stained sock in which a nugget of coal magically appears each day at dawn"
        ],
        [
          "27",
          "Tiny wooden stool (sized for a pixie or sprite) that gives splinters to those who hold it"
        ],
        [
          "28",
          "Tiny clockwork dragonfly that slowly beats its wings (but can't fly) when wound up"
        ],
        [
          "29",
          "Toy unicorn made of wood, painted with bright colors"
        ],
        [
          "30",
          "Pixie plushie that sings when you squeeze it"
        ],
        [
          "31",
          "1-inch-square painting of a sleeping elf"
        ],
        [
          "32",
          "Thimble that helps you daydream when worn"
        ],
        [
          "33",
          "Pumpkin cupcake that magically regenerates itself in its paper cup each day at dawn"
        ],
        [
          "34",
          "Fake Three-Dragon Ante card depicting a faerie dragon"
        ],
        [
          "35",
          "Teacup made from a varnished mushroom cap that magically keeps its liquid contents lukewarm"
        ],
        [
          "36",
          "Rock that floats and is small enough to hide in your closed fist"
        ],
        [
          "37",
          "Tiny bottle filled with rainwater collected from the Feywild"
        ],
        [
          "38",
          "Opalescent conch shell that laughs when you hold it to your ear"
        ],
        [
          "39",
          "Vial of viscous liquid labeled \"Fomorian spit. Do not drink!\""
        ],
        [
          "40",
          "Wax candle that roars and crackles like a bonfire while lit"
        ],
        [
          "41",
          "Potted daffodil that sways when near a source of music"
        ],
        [
          "42",
          "8-ounce, glass wine bottle that magically reassembles itself 1 minute after being broken"
        ],
        [
          "43",
          "Tiny wooden sylph figurehead from a model ship"
        ],
        [
          "44",
          "Tiny pumpkin-shaped cauldron carved out of bog oak"
        ],
        [
          "45",
          "Bar of soap that smells like something memorable from your childhood"
        ],
        [
          "46",
          "Piece of orange parchment folded to look like a knight astride a unicorn"
        ],
        [
          "47",
          "Tinted glasses so dark that they can't be seen through"
        ],
        [
          "48",
          "8-inch-long glass ant figurine"
        ],
        [
          "49",
          "Piece of parchment bearing a child's drawing of an oni"
        ],
        [
          "50",
          "Tiny hourglass without sand in it"
        ],
        [
          "51",
          "Empty vial with corked ends at the top and bottom"
        ],
        [
          "52",
          "Pair of green leprechaun boots tied together by their laces"
        ],
        [
          "53",
          "Smoking pipe made from a tree root"
        ],
        [
          "54",
          "Red cap that droops down to one's shoulders when worn"
        ],
        [
          "55",
          "Mask that helps you remember your dreams if you wear it while you sleep"
        ],
        [
          "56",
          "Notebook that shows what's written on it only when held upside down"
        ],
        [
          "57",
          "Wooden top with four sides, each bearing the image of child enjoying a different season"
        ],
        [
          "58",
          "Tiny beehive wig made for sprites or pixies"
        ],
        [
          "59",
          "Wooden mouse figurine that squeaks when held"
        ],
        [
          "60",
          "Stuffed oni doll with a creepy smile and one missing eye"
        ],
        [
          "61",
          "Empty bag labeled \"Candy\""
        ],
        [
          "62",
          "Tinted glass monocle that makes things look green"
        ],
        [
          "63",
          "Black executioner's hood sized for a pixie or sprite"
        ],
        [
          "64",
          "Piano key carved from a satyr's horn"
        ],
        [
          "65",
          "Tiny wooden lute with cat hairs for strings"
        ],
        [
          "66",
          "Iron needle with an eye that refuses to let thread pass through it"
        ],
        [
          "67",
          "Tiny sundial that casts a shadow only in moonlight"
        ],
        [
          "68",
          "Wooden pan flute that attracts harmless local fauna when played"
        ],
        [
          "69",
          "Silvered pinecone"
        ],
        [
          "70",
          "Flask of spectral glowworms that change color to reflect the mood of the flask's holder"
        ],
        [
          "71",
          "Wooden apple painted blue"
        ],
        [
          "72",
          "Tuning fork that sounds the tone for the F key"
        ],
        [
          "73",
          "Nunchaku sized for a pixie or sprite"
        ],
        [
          "74",
          "Copper coin with a smiling satyr's face on one side and a satyr's skull on the other"
        ],
        [
          "75",
          "Severed chicken's foot attached to a leather cord"
        ],
        [
          "76",
          "Collection of baby teeth in a tiny wooden box"
        ],
        [
          "77",
          "Pinwheel whirligig that spins even when there's no wind"
        ],
        [
          "78",
          "Child's parasol covered in moss and leaves"
        ],
        [
          "79",
          "Wooden magnifying glass missing its lens"
        ],
        [
          "80",
          "Glossy mushroom with a red, bell-shaped cap that jingles when shook"
        ],
        [
          "81",
          "Pouch of seeds that smell like home"
        ],
        [
          "82",
          "Petrified robin's egg"
        ],
        [
          "83",
          "Wooden spoon with a hole in the center"
        ],
        [
          "84",
          "Paper wasp nest in a jar"
        ],
        [
          "85",
          "Sprig of rosemary wrapped with ribbon at one end"
        ],
        [
          "86",
          "Tiny, unfurnished dollhouse sized for a pixie child"
        ],
        [
          "87",
          "Paintbrush made entirely of ceramic-even the bristles"
        ],
        [
          "88",
          "Candlestick whose candlelight looks like a tiny, dancing fairy made of fire"
        ],
        [
          "89",
          "Spectacle frames in the shape of butterfly wings"
        ],
        [
          "90",
          "Set of false wooden teeth"
        ],
        [
          "91",
          "Tiny book of fairytales"
        ],
        [
          "92",
          "Rucksack in which one potato magically appears each day at dawn"
        ],
        [
          "93",
          "Pixie's winter jacket lined with fox fur"
        ],
        [
          "94",
          "Tasseled wine charm shaped like a sprite"
        ],
        [
          "95",
          "Weak magnetic wand"
        ],
        [
          "96",
          "100-sided die the size of a plum, cut from coal"
        ],
        [
          "97",
          "Glass slipper, missing its mate"
        ],
        [
          "98",
          "Tiny dreamcatcher"
        ],
        [
          "99",
          "Barbell sized for a pixie or sprite"
        ],
        [
          "100",
          "Music box that plays a sprightly tune you remember from your childhood"
        ]
      ]
    }
  ]
},
{
  "name": "Figurine of Wondrous Power, Bronze Griffon",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature griffon||Bronze Griffon}.",
    "This bronze statuette is of a {@creature griffon} rampant. It can become a {@creature griffon} for up to 6 hours. Once it has been used, it can't be used again until 5 days have passed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Ebony Fly",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature giant fly|dmg|Ebony Fly}.",
    "This ebony statuette is carved in the likeness of a horsefly. It can become a {@creature giant fly|dmg} for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 2 days have passed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Golden Lions",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature lion||Golden Lions}.",
    "These gold statuettes of lions are always created in pairs. You can use one figurine or both simultaneously. Each can become a {@creature lion} for up to 1 hour. Once a {@creature lion} has been used, it can't be used again until 7 days have passed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Ivory Goats",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "bonusWeapon": "+1",
  "charges": 24,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature riding horse||Ivory Goats}.",
    "These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. Their properties are as follows:",
    {
      "type": "list",
      "items": [
        "The goat of traveling can become a Large goat with the same statistics as a {@creature riding horse}. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
        "The goat of travail becomes a {@creature giant goat} for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.",
        "The goat of terror becomes a {@creature giant goat} for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be {@condition frightened} of the goat for 1 minute, or until the goat reverts to figurine form. The {@condition frightened} creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed."
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Marble Elephant",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature elephant||Marble Elephant}.",
    "This marble statuette is about 4 inches high and long. It can become an {@creature elephant} for up to 24 hours. Once it has been used, it can't be used again until 7 days have passed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Obsidian Steed",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature nightmare||Obsidian Steed}.",
    "This polished obsidian horse can become a {@creature nightmare} for up to 24 hours. The {@creature nightmare} fights only to defend itself. Once it has been used, it can't be used again until 5 days have passed.",
    "If you have a good alignment, the figurine has a {@chance 10} chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the {@creature nightmare} while it is ignoring your orders, you and the {@creature nightmare} are instantly transported to a random location on the plane of Hades, where the {@creature nightmare} reverts to figurine form."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Figurine of Wondrous Power, Onyx Dog",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature mastiff||Onyx Dog}.",
    "This onyx statuette of a dog can become a {@creature mastiff} for up to 6 hours. The {@creature mastiff} has an Intelligence of 8 and can speak Common. It also has {@sense darkvision} out to a range of 60 feet and can see {@condition invisible} creatures and objects within that range. Once it has been used, it can't be used again until 7 days have passed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Serpentine Owl",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature giant owl||Serpentine Owl}.",
    "This serpentine statuette of an owl can become a {@creature giant owl} for up to 8 hours. Once it has been used, it can't be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Figurine of Wondrous Power, Silver Raven",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.",
    "The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    "The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
    "{@creature raven||Silver Raven}.",
    "This silver statuette of a raven can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the {@spell animal messenger} spell on it at will."
  ],
  "attachedSpells": [
    "animal messenger"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Finder's Goggles",
  "source": "ERLW",
  "rarity": "uncommon",
  "reqAttune": "by a creature with the Mark of Finding",
  "reqAttuneTags": [
    {
      "race": "half-orc (variant; mark of finding)|erlw"
    },
    {
      "race": "human (variant; mark of finding)|erlw"
    }
  ],
  "wondrous": true,
  "entries": [
    "The lenses of these garish goggles are carved from Siberys dragonshards. While wearing these lenses, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "When you make a Wisdom ({@skill Insight}) check, you can roll a {@dice d4} and add the number rolled to the check.",
        "As an action, you can use the goggles to examine an object to identify the aura of the last creature that touched it. Make a Wisdom ({@skill Insight}) check against a DC of 13 + the number of days since the last contact occurred. On a success, you learn the creature's type and can immediately use the goggles to cast {@spell locate creature} to find that creature. This property can't be used again until the next dawn."
      ]
    }
  ],
  "attachedSpells": [
    "locate creature"
  ]
},
{
  "name": "Fine Clothes",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 6,
  "value": 1500
},
{
  "name": "Fine Wine (Bottle)",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 1000
},
{
  "name": "Fine gold chain set with a fire opal",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Fine gold chain with fire opals (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Fine robe with dinosaur feathers and silver embroidery (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Fine steel rapier with gold filigree hilt (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Finely articulated jade glove (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Fire Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "fire"
  ],
  "detail1": "red",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Fire Opal",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A translucent fiery red gemstone."
  ]
},
{
  "name": "Fish Suit",
  "source": "AAG",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "This bulky suit, which fully encases your head and body, takes 1 minute to don or doff. While worn, it enables you to breathe in an airless environment and renders you immune to the harmful effects of any gas that surrounds you. The suit also grants you a swimming speed equal to your walking speed while underwater, or a flying speed equal to your walking speed in an environment with no gravity."
  ]
},
{
  "name": "Fishing Tackle",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 100,
  "entries": [
    "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
  ]
},
{
  "name": "Flask",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 2,
  "entries": [
    "A flask holds 1 pint of liquid."
  ]
},
{
  "name": "Flour",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 2
},
{
  "name": "Flute",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 1,
  "value": 200
},
{
  "name": "Flying Chariot",
  "source": "MOT",
  "rarity": "rare",
  "wondrous": true,
  "bonusAc": "+1",
  "entries": [
    "The chariot's riders and creatures pulling the chariot gain a +1 bonus to their AC.",
    "If this magic chariot is pulled by one or more flying creatures, it too can fly.",
    {
      "type": "inset",
      "name": "Chariots",
      "entries": [
        "Chariots and the creatures pulling them work like controlled mounts, as described in the mounted combat rules in the {@book Player's Handbook|9|Mounted Combat}, but with the following differences:",
        {
          "type": "list",
          "items": [
            "Mounting or dismounting a chariot costs you 5 feet of movement, rather than a number of feet equal to half your speed.",
            "Being mounted on a chariot grants you half cover.",
            "A chariot's speed is equal to the speed of the slowest creature pulling it.",
            "If multiple creatures are pulling the chariot, they all act on the same initiative, and they must take the same action on their turn."
          ]
        }
      ]
    }
  ]
},
{
  "name": "Flying Citadel Helm",
  "source": "DSotDQ",
  "rarity": "very rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "entries": [
    "The function of this ornate chair is to propel and maneuver a flying citadel on which it has been installed. The chair has AC 15, 18 hit points, and immunity to poison and psychic damage. It is destroyed if reduced to 0 hit points.",
    "The sensation of being attuned to a flying citadel helm is akin to the pins-and-needles effect one experiences after one's arm or leg falls asleep, but not as intense.",
    "While attuned to a flying citadel helm and sitting in it, you gain the following abilities for as long as you maintain {@status concentration} (as if {@status concentration||concentrating} on a spell):",
    {
      "type": "list",
      "items": [
        "You can use the flying citadel helm to move the citadel through the air, up to 80 feet per round, or up to 8 miles per hour.",
        "You can steer the citadel, albeit in a somewhat clumsy fashion, in much the way that a rudder or oars can be used to maneuver a seafaring ship.",
        "At any time, you can see and hear from the highest point outside the citadel as though you were at that location."
      ]
    },
    "If no creature attuned to the helm is maintaining {@status concentration}, the citadel remains motionless in its space.",
    {
      "type": "entries",
      "name": "Transfer Attunement",
      "entries": [
        "You can use an action or a bonus action to touch a willing spellcaster, whereupon that creature attunes to the flying citadel helm immediately, and your attunement to the flying citadel helm ends."
      ]
    },
    {
      "type": "entries",
      "name": "Crash",
      "entries": [
        "Should the flying citadel helm be destroyed, the citadel it is installed on loses power and begins to crumble. If the crumbling citadel is in the air, it descends at a rate of 30 feet per round, or 300 feet per minute. Any creature on the citadel or on the ground within 120 feet of the citadel when it lands must make a DC 20 Dexterity saving throw, taking 39 ({@damage 6d12}) bludgeoning damage on a failed save, or half as much damage on a successful one."
      ]
    }
  ]
},
{
  "name": "Flying Fish Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2000000,
  "crew": 10,
  "vehAc": 15,
  "vehHp": 250,
  "vehDmgThresh": 15,
  "vehSpeed": 4.5,
  "capCargo": 13,
  "entries": [
    "Aside from space galleons, flying fish ships are the most common vessels in Wildspace, favorites among merchants and adventurers alike.",
    "A flying fish ship can float and sail on water, but it isn't built to land on the ground (the ventral fins would snap under the weight of the ship during landing, and the keel would cause the ship to roll to one side).",
    "Typical weapons on a flying fish ship include a forward-mounted mangonel and an aftmounted ballista."
  ],
  "seeAlsoVehicle": [
    "Flying Fish Ship|AAG"
  ]
},
{
  "name": "Folding Boat",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "weight": 4,
  "entries": [
    "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.",
    "One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.",
    "The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide; and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably.",
    "When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.",
    "The third command word causes the folding boat to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Force Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "force"
  ],
  "detail1": "white",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Forgery Kit",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 81
    }
  ],
  "type": "T",
  "rarity": "none",
  "weight": 5,
  "value": 1500,
  "entries": [
    "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."
  ],
  "additionalEntries": [
    "A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana",
      "entries": [
        "A forgery kit can be used in conjunction with the Arcana skill to determine if a magic item is real or fake."
      ]
    },
    {
      "type": "entries",
      "name": "Deception",
      "entries": [
        "A well-crafted forgery, such as papers proclaiming you to be a noble or a writ that grants you safe passage, can lend credence to a lie."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "A forgery kit combined with your knowledge of history improves your ability to create fake historical documents or to tell if an old document is authentic."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "When you examine objects, proficiency with a forgery kit is useful for determining how an object was made and whether it is genuine."
      ]
    },
    {
      "type": "entries",
      "name": "Other Tools",
      "entries": [
        "Knowledge of other tools makes your forgeries that much more believable. For example, you could combine proficiency with a forgery kit and proficiency with cartographer's tools to make a fake map."
      ]
    },
    {
      "type": "entries",
      "name": "Quick Fake",
      "entries": [
        "As part of a short rest, you can produce a forged document no more than one page in length. As part of a long rest, you can produce a document that is up to four pages long. Your Intelligence check using a forgery kit determines the DC for someone else's Intelligence ({@skill Investigation}) check to spot the fake."
      ]
    },
    {
      "type": "table",
      "caption": "Forgery Kit",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Mimic handwriting",
          "15"
        ],
        [
          "Duplicate a wax seal",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Fragmentation Grenade",
  "source": "DMG",
  "type": "EXP",
  "rarity": "none",
  "weight": 1,
  "age": "modern",
  "entries": [
    "As an action, a character can throw a grenade at a point up to 60 feet away. With a grenade launcher, the character can propel the grenade up to 120 feet away.",
    "Each creature within 20 feet of an exploding fragmentation grenade must make a DC 15 Dexterity saving throw, taking {@damage 5d6} piercing damage on a failed save, or half as much damage on a successful one."
  ]
},
{
  "name": "Fulminating Treatise",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "This thick, scorched spellbook reeks of smoke and ozone, and sparks of energy crackles along the edges of its pages. When found, the book contains the following spells: {@spell contingency}, {@spell fireball}, {@spell gust of wind}, {@spell Leomund's tiny hut}, {@spell magic missile}, {@spell thunderwave}, and {@spell wall of force}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the evocation school.",
        "When one creature you can see takes damage from an evocation spell you cast, you can use your reaction and expend 1 charge to deal an extra {@damage 2d6} force damage to the creature and knock the creature {@condition prone} if it is Large or smaller."
      ]
    }
  ],
  "attachedSpells": [
    "contingency",
    "fireball",
    "gust of wind",
    "leomund's tiny hut",
    "magic missile",
    "thunderwave",
    "wall of force"
  ]
},
{
  "name": "Galder's Bubble Pipe",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This finely carved pipe blows odorless bubbles instead of smoke when used. The pipe has 3 charges, and it regains all spent charges daily at dawn. While you hold the pipe, you can expend charges to gain access to the following properties:",
    {
      "type": "list",
      "items": [
        "You can cast {@spell fog cloud} as an action (1 charge).",
        "You can cast {@spell misty step} as a bonus action (2 charges).",
        "You can summon a {@creature steam mephit} as an action (3 charges). The mephit is friendly to you, obeys your verbal commands, and acts on its own turn in the initiative order. It disappears in a harmless puff of steam after 1 minute or if it ends its turn more than 60 feet from the pipe."
      ]
    }
  ],
  "attachedSpells": [
    "fog cloud",
    "misty step"
  ]
},
{
  "name": "Galley",
  "source": "DMG",
  "type": "SHP",
  "rarity": "none",
  "value": 3000000,
  "crew": 80,
  "vehAc": 15,
  "vehHp": 500,
  "vehDmgThresh": 20,
  "vehSpeed": 4,
  "capCargo": 150,
  "seeAlsoVehicle": [
    "Galley"
  ]
},
{
  "name": "Garnet",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A transparent red, brown-green, or violet gemstone."
  ]
},
{
  "name": "Gauntlets of Flaming Fury",
  "source": "BGDIA",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While you wear both of these steel gauntlets, any non-magical weapon you grasp with either gauntlet is treated as a magic weapon. As a bonus action, you can use the gauntlets to cause magical flames to envelop one or two melee weapons in your grasp. Each flaming weapon deals an extra {@damage 1d6} fire damage on a hit. The flames last until you sheath or let go of either weapon. Once used, this property can't be used again until the next dawn."
  ]
},
{
  "name": "Gauntlets of Ogre Power",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "static": {
      "str": 19
    }
  },
  "entries": [
    "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Gavel of the Venn Rune",
  "source": "SKT",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This wooden gavel is small by giant reckoning but nearly the size of a warhammer in human hands. The venn (friend) rune is inscribed in mithral in the base of the haft. Among giants, this item is used as part of rituals to resolve disputes. The gavel has the following properties.",
    {
      "name": "Arbiters Shield",
      "type": "entries",
      "entries": [
        "At the start of every combat, attack rolls against you have disadvantage before the start of your first turn, provided that the gavel is on your person."
      ]
    },
    {
      "name": "Bond of Amity",
      "type": "entries",
      "entries": [
        "As an action, you can use the gavel to strike a point on a hard surface. The first time in the next minute that a creature within 60 feet of that point deals damage to another creature with an attack that hits, the attacker takes psychic damage equal to half the damage it dealt to the target. Once you use this property, you can't use it again until you finish a long rest."
      ]
    },
    {
      "name": "Gift of Truth",
      "type": "entries",
      "entries": [
        "You can transfer the gavel's magic to a place by tracing the venn rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 30-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the gavel to be within 5 feet of you. At the end, the gavel is destroyed, and the area gains the following property:",
        "Whenever a creature utters a lie while within the 30-foot-radius sphere, that creature takes 5 psychic damage and flinches visibly."
      ]
    }
  ]
},
{
  "name": "Gem of Brightness",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "charges": 50,
  "entries": [
    "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:",
    {
      "type": "list",
      "items": [
        "The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.",
        "The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become {@condition blinded} for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        "The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word."
      ]
    },
    "When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Gem of Seeing",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For the next 10 minutes, you have {@sense truesight} out to 120 feet when you peer through the gem.",
    "The gem regains {@dice 1d3} expended charges daily at dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ghost Lantern",
  "source": "ToA",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "A restless spirit is trapped inside this lantern. While holding the lantern, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet.",
    "While holding the lantern, you can use an action to order the spirit to leave the lantern and duplicate the effect of the {@spell mage hand} spell. The spirit returns to the lantern when the spell ends.",
    "If you fall {@condition unconscious} within 10 feet of the lantern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern.",
    "The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead.",
    "Casting a {@spell dispel evil and good} spell on the lantern releases the spirit to the afterlife and renders the lantern nonmagical."
  ],
  "attachedSpells": [
    "mage hand"
  ]
},
{
  "name": "Ghost Step Tattoo",
  "source": "TCE",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "Produced by a special needle, this tattoo shifts and wavers on the skin, parts of it appearing blurred.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Ghostly Form",
      "entries": [
        "The tattoo has 3 charges, and it regains all expended charges daily at dawn. As a bonus action while the tattoo is on your skin, you can expend 1 of the tattoo's charges to become incorporeal until the end of your next turn. For the duration, you gain the following benefits:",
        {
          "type": "list",
          "items": [
            "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
            "You can't be {@condition grappled} or {@condition restrained}.",
            "You can move through creatures and solid objects as if they were {@quickref difficult terrain||3}. If you end your turn in a solid object, you take {@damage 1d10} force damage. If the effect ends while you are inside a solid object, you instead are shunted to the nearest unoccupied space, and you take {@damage 1d10} force damage for every 5 feet traveled."
          ]
        }
      ]
    }
  ]
},
{
  "name": "Ginger",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 100
},
{
  "name": "Glamoured Studded Leather",
  "source": "DMG",
  "type": "LA",
  "tier": "major",
  "rarity": "rare",
  "weight": 13,
  "ac": 12,
  "bonusAc": "+1",
  "entries": [
    "While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or remove the armor."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Glass Bottle",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 200,
  "entries": [
    "A bottle holds 1&frac12; pints of liquid."
  ]
},
{
  "name": "Glassblower's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 82
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 3000,
  "additionalEntries": [
    "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana, History",
      "entries": [
        "Your knowledge of glassmaking techniques aids you when you examine glass objects, such as potion bottles or glass items found in a treasure hoard. For instance, you can study how a glass potion bottle has been changed by its contents to help determine a potion's effects. (A potion might leave behind a residue, deform the glass, or stain it.)"
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "When you study an area, your knowledge can aid you if the clues include broken glass or glass objects."
      ]
    },
    {
      "type": "entries",
      "name": "Identify Weakness",
      "entries": [
        "With 1 minute of study, you can identify the weak points in a glass object. Any damage dealt to the object by striking a weak spot is doubled."
      ]
    },
    {
      "type": "table",
      "caption": "Glassblower's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Identify source of glass",
          "10"
        ],
        [
          "Determine what a glass object once held",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Glaur",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "Short, curved horns like a cornucopia. Played with valves, glaur sound like trumpets, while those without valves, known as gloon, have a more mournful sound."
  ]
},
{
  "name": "Gloves of Missile Snaring",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by {@dice 1d10} + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Gloves of Swimming and Climbing",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength ({@skill Athletics}) checks made to climb or swim."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Gloves of Thievery",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "These gloves are {@condition invisible} while worn. While wearing them, you gain a +5 bonus to Dexterity ({@skill Sleight of Hand}) checks and Dexterity checks made to pick locks."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Goat",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 100
},
{
  "name": "Goggles of Night",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While wearing these dark lenses, you have {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision}, wearing the goggles increases its range by 60 feet."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Goggles of Object Reading",
  "source": "EGW",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "These leather-framed goggles feature purple crystal lenses. While wearing the goggles, you have advantage on Intelligence ({@skill Arcana}) checks made to reveal information about a creature or object you can see.",
    "In addition, you can cast the {@spell identify} spell using the googles. Once you do so, you can't do so again until the next dawn."
  ],
  "attachedSpells": [
    "identify"
  ]
},
{
  "name": "Gold",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 5000
},
{
  "name": "Gold (gp)",
  "source": "PHB",
  "type": "$",
  "rarity": "none",
  "weight": 0.02,
  "value": 100,
  "entries": [
    "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
    "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
    "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
    "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
    "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
    "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
  ]
},
{
  "name": "Gold 5-Zino Coin",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 500
},
{
  "name": "Gold Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "fire"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest gold dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Gold Zino",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 100
},
{
  "name": "Gold basin with rubies (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Gold bird cage with electrum filigree",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Gold chalice (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Gold chalice set with emeralds (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Gold circlet set with four aquamarines",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Gold cup set with emeralds",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Gold dragon comb set with red garnets as eyes",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Gold jewelry box with platinum filigree",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Gold jewelry box with platinum filigree (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Gold locket with a painted portrait inside",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Gold locket with a painted portrait inside (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Gold music box",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Gold music box (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Gold pendant with black onyx (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Gold ring set with bloodstones",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Gold ring with turquoise (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Gold-plated ceremonial helmet and pauldrons (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Gold-plated sextant with topaz (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Golgari Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Golgari, allows you to cast {@spell entangle}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Golgari's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "entangle"
  ]
},
{
  "name": "Golgari Keyrune",
  "source": "GGR",
  "rarity": "very rare",
  "reqAttune": "by a member of the Golgari guild",
  "reqAttuneTags": [
    {
      "background": "golgari agent|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "Made from deep green jade with black veins, this keyrune has an insectile shape. It can transform into a {@creature giant scorpion} for up to 6 hours. The scorpion has an Intelligence of 4 and can communicate with you telepathically while it is within 60 feet of you, though its messages are largely limited to describing the passage of potential prey.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature giant scorpion}. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Grappling Hook",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 200
},
{
  "name": "Green Chromatic Rose",
  "source": "WBtW",
  "resist": [
    "poison"
  ],
  "detail1": "issues green gas",
  "rarity": "rare",
  "wondrous": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Chromatic Rose}"
  ]
},
{
  "name": "Green Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "poison"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to poison damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest green dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Grenade Launcher",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "weight": 7,
  "age": "modern",
  "entries": [
    "As an action, a character can throw a grenade at a point up to 60 feet away. With a grenade launcher, the character can propel the grenade up to 120 feet away."
  ]
},
{
  "name": "Gruul Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Gruul, allows you to cast {@spell compelled duel}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Gruul's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "compelled duel"
  ]
},
{
  "name": "Gruul Keyrune",
  "source": "GGR",
  "rarity": "rare",
  "reqAttune": "by a member of the Gruul guild",
  "reqAttuneTags": [
    {
      "background": "gruul anarch|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "This crude keyrune is cobbled together from bits of rubble, broken glass, bone, and animal hair. One end resembles a horned beast. On command, the keyrune transforms into a ceratok, a horned creature much like a {@creature rhinoceros} (and with the same statistics). It remains in its ceratok form for 1 hour.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a ceratok. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Guardian Emblem",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by a cleric or paladin",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "paladin"
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This emblem is the symbol of a deity or a spiritual tradition. As an action, you can attach the emblem to a suit of armor or a shield or remove it.",
    "The emblem has 3 charges. When you or a creature you can see within 30 feet of you suffers a critical hit while you're wearing the armor or wielding the shield that bears the emblem, you can use your reaction to expend 1 charge to turn the critical hit into a normal hit instead.",
    "The emblem regains all expended charges daily at dawn."
  ]
},
{
  "name": "Gulthias Staff",
  "source": "CoS",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dusk",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "Made from the branch of a Gulthias tree (see the {@creature twig blight||blights} entry of the Monster Manual), a Gulthias staff is a spongy, black length of wood. Its evil makes beasts visibly uncomfortable while within 30 feet of it. The staff has 10 charges and regains {@dice 1d6 + 4} of its expended charges daily at dusk.",
    "If the staff is broken or burned to ashes, its wood releases a terrible, inhuman scream that can be heard out to a range of 300 feet. All blights that can hear the scream immediately wither and die.",
    {
      "name": "Vampiric Strike",
      "type": "entries",
      "entries": [
        "The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to regain a number of hit points equal to the damage dealt by the weapon. Each time a charge is spent, red blood oozes from the staff's pores, and you must succeed on a DC 12 Wisdom saving throw or be afflicted with {@table Short-Term Madness|DMG|short term madness} (see \"{@variantrule Madness|DMG}\" in chapter 8 of the Dungeon Master's Guide)."
      ]
    },
    {
      "name": "Blight Bane",
      "type": "entries",
      "entries": [
        "While you are attuned to the staff, blights and other evil plant creatures don't regard you as hostile unless you harm them."
      ]
    }
  ]
},
{
  "name": "Gunpowder Horn",
  "source": "DMG",
  "type": "EXP",
  "rarity": "none",
  "weight": 2,
  "value": 3500,
  "age": "renaissance",
  "entries": [
    "Gunpowder is chiefly used to propel a bullet out of the barrel of a pistol or rifle, or it is formed into a bomb. Gunpowder is sold in small wooden kegs or in water-resistant powder horns.",
    "Setting fire to a container full of gunpowder can cause it to explode, dealing fire damage to creatures within 10 feet of it ({@damage 3d6} for a powder horn). A successful DC 12 Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet."
  ]
},
{
  "name": "Gunpowder Keg",
  "source": "DMG",
  "type": "EXP",
  "rarity": "none",
  "weight": 20,
  "value": 25000,
  "age": "renaissance",
  "entries": [
    "Gunpowder is chiefly used to propel a bullet out of the barrel of a pistol or rifle, or it is formed into a bomb. Gunpowder is sold in small wooden kegs or in water-resistant powder horns.",
    "Setting fire to a container full of gunpowder can cause it to explode, dealing fire damage to creatures within 10 feet of it ({@damage 7d6} for a keg). A successful DC 12 Dexterity saving throw halves the damage. Setting fire to an ounce of gunpowder causes it to flare for 1 round, shedding bright light in a 30-foot radius and dim light for an additional 30 feet."
  ]
},
{
  "name": "Hammer",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 3,
  "value": 100
},
{
  "name": "Hammerhead Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 4000000,
  "crew": 15,
  "vehAc": 15,
  "vehHp": 400,
  "vehDmgThresh": 15,
  "vehSpeed": 4,
  "capCargo": 30,
  "entries": [
    "Hammerhead ships are popular craft, especially among pirates and merchants carrying heavy cargo. They can float on water and sail across it, but they aren't built to land on the ground (their keels would cause them to tip to one side). Standard weapons on a hammerhead ship include fore and aft mangonels, a ballista, and a reinforced bow for ramming."
  ],
  "seeAlsoVehicle": [
    "Hammerhead Ship|AAG"
  ]
},
{
  "name": "Hand Drum",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A double-headed skin drum fitted with handles along its side."
  ]
},
{
  "name": "Harbor Moon",
  "source": "WDH",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "Platinum crescent inset with electrum, about three inches long with a hole large enough for a {@item nib|wdh} to fit in (1 harbor moon = 5,000 {@item nib|wdh|nibs})"
  ]
},
{
  "name": "Harkon's Bite",
  "source": "VRGR",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "A dire wolf tooth dangles from this simple cord necklace. While you wear it, the necklace grants you a +1 bonus to ability checks and saving throws.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "Attuning to Harkon's Bite curses you until either Harkon Lukas removes the necklace from you or you are targeted by a {@spell remove curse} spell or similar magic. As long as you remain cursed, you cannot remove the necklace.",
        "Upon donning or removing the necklace, whether you are attuned to it or not, you are afflicted with {@variantrule Player Characters as Lycanthropes|mm|werewolf lycanthropy} as detailed in the Monster Manual. The curse lasts until the dawn after the next full moon. If you are still wearing the necklace at this time, you are afflicted with the lycanthropy again."
      ]
    }
  ]
},
{
  "name": "Hat of Disguise",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing this hat, you can use an action to cast the {@spell disguise self} spell from it at will. The spell ends if the hat is removed."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "disguise self"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Hat of Vermin",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a {@creature bat}, a {@creature frog}, or a {@creature rat}. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn."
  ]
},
{
  "name": "Hat of Wizardry",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "This antiquated, cone-shaped hat is adorned with gold crescent moons and stars. While you are wearing it, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "You can use the hat as a spellcasting focus for your wizard spells.",
        "You can try to cast a cantrip that you don't know. The cantrip must be on the wizard spell list, and you must make a DC 10 Intelligence ({@skill Arcana}) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest."
      ]
    }
  ]
},
{
  "name": "Headband of Intellect",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "static": {
      "int": 19
    }
  },
  "entries": [
    "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Healer's Kit",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 3,
  "value": 500,
  "entries": [
    "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom ({@skill Medicine}) check."
  ]
},
{
  "name": "Heart Weaver's Primer",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "This pristine book smells faintly of a random scent you find pleasing. When found, the book contains the following spells: {@spell antipathy/sympathy}, {@spell charm person}, {@spell dominate person}, {@spell enthrall}, {@spell hypnotic pattern}, {@spell modify memory}, and {@spell suggestion}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the enchantment school.",
        "When you cast an enchantment spell, you can expend 1 charge to impose disadvantage on the first saving throw one target makes against the spell."
      ]
    }
  ],
  "attachedSpells": [
    "antipathy/sympathy",
    "charm person",
    "dominate person",
    "enthrall",
    "hypnotic pattern",
    "modify memory",
    "suggestion"
  ]
},
{
  "name": "Heartstone",
  "source": "MM",
  "type": "OTH",
  "rarity": "very rare",
  "entries": [
    "This lustrous black gem allows a {@creature night hag} to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days."
  ]
},
{
  "name": "Hell Hound Cloak",
  "source": "TftYP",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "weight": 1,
  "entries": [
    "This dark cloak is made of cured {@creature hell hound} hide. As an action, you can command the cloak to transform you into a {@creature hell hound} for up to 1 hour. The transformation otherwise functions as the {@spell polymorph} spell, but you can use a bonus action to revert to your normal form.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This cloak is cursed with the essence of a {@creature hell hound}, and becoming attuned to it extends the curse to you. Until the curse is broken with {@spell remove curse} or similar magic, you are unwilling to part with the cloak, keeping it within reach at all times."
      ]
    },
    "The sixth time you use the cloak, and each time thereafter, you must make a DC 15 Charisma saving throw. On a failed save, the transformation lasts until dispelled or until you drop to 0 hit points, and you can't willingly return to normal form. If you ever remain in {@creature hell hound} form for 6 hours, the transformation becomes permanent and you lose your sense of self. All your statistics are then replaced by those of a {@creature hell hound}. Thereafter, only {@spell remove curse} or similar magic allows you to regain your identity and return to normal. If you remain in this permanent form for 6 days, only a {@spell wish} spell can reverse the transformation."
  ],
  "attachedSpells": [
    "polymorph"
  ]
},
{
  "name": "Helm of Brilliance",
  "source": "DMG",
  "resist": [
    "fire"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This dazzling helm is set with {@dice 1d10} diamonds, {@dice 2d10} rubies, {@dice 3d10} fire opals, and {@dice 4d10} opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.",
    "You gain the following benefits while wearing it:",
    {
      "type": "list",
      "items": [
        "You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: {@spell daylight} (opal), {@spell fireball} (fire opal), {@spell prismatic spray} (diamond), or {@spell wall of fire} (ruby). The gem is destroyed when the spell is cast and disappears from the helm.",
        "As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes {@damage 1d6} radiant damage.",
        "As long as the helm has at least one ruby, you have resistance to fire damage.",
        "As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra {@damage 1d6} fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon."
      ]
    },
    "Roll a {@dice d20} if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed."
  ],
  "attachedSpells": [
    "daylight",
    "fireball",
    "prismatic spray",
    "wall of fire"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Helm of Comprehending Languages",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While wearing this helm, you can use an action to cast the {@spell comprehend languages} spell from it at will."
  ],
  "attachedSpells": [
    "comprehend languages"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Helm of Devil Command",
  "source": "BGDIA",
  "rarity": "very rare",
  "reqAttune": "by a creature that can speak Infernal",
  "reqAttuneTags": [
    {
      "languageProficiency": "infernal"
    }
  ],
  "wondrous": true,
  "charges": 3,
  "entries": [
    "This bulky, eyeless helmet is made for a {@creature pit fiend} but magically resizes to fit the heads of other wearers.",
    "While wearing the helm, you can see out of it as though you weren't wearing it. In addition, you know the exact location and type of all devils within 1,000 feet of you. You can telepathically communicate with a devil within range, or you can broadcast your thoughts to all devils within range. The devils receiving your broadcasted thoughts have no special means of replying to them.",
    "The helm has 3 charges. As an action, you can expend 1 charge to cast {@spell dominate monster} (save DC 21), which affects devils only. (The spell fails and the charge is wasted if you target any creature that's not a devil.) If a devil can see you when you cast this spell on it, the devil knows you tried to charm it. The helm regains all its charges 24 hours after its last charge is expended.",
    "If you are not a devil, using the helm's {@spell dominate monster} property in the Nine Hells has a {@chance 20|20 percent} chance of attracting a {@creature narzugon|MTF}, which arrives on the back of a {@creature nightmare} mount in {@dice 1d4} hours. The narzugon tries to recover the helm, killing you if necessary to obtain it. If it gets the helm, the narzugon tries to deliver it to its infernal master."
  ],
  "attachedSpells": [
    "dominate monster"
  ]
},
{
  "name": "Helm of Telepathy",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing this helm, you can use an action to cast the {@spell detect thoughts} spell (save DC 13) from it. As long as you maintain {@status concentration} on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply-using a bonus action to do so-while your focus on it continues.",
    "While focusing on a creature with {@spell detect thoughts}, you can use an action to cast the {@spell suggestion} spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "detect thoughts",
    "suggestion"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Helm of Teleportation",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the {@spell teleport} spell from it. The helm regains {@dice 1d3} expended charges daily at dawn."
  ],
  "attachedSpells": [
    "teleport"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Helm of Underwater Action",
  "source": "GoS",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "static": {
      "swim": 30
    }
  },
  "entries": [
    "While wearing this brass helmet, you can breathe underwater, you gain {@sense darkvision} with a range of 60 feet, and you gain a swimming speed of 30 feet."
  ]
},
{
  "name": "Helm of the Gods",
  "source": "MOT",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "While wearing this helm, you know whether there is a celestial or fiend within 30 feet of you, as well as where the creature is located, provided the creature isn't behind total cover.",
    "Whenever you finish a long rest while wearing the helm, you can pray to one of the gods listed on the Helm of the Gods table and store the listed spell in the helm, replacing any spell that is already stored there. The save DC for the spell is 13.",
    "The helm has 3 charges. To cast a spell from the helm, you must expend 1 charge, and the helm regains {@dice 1d3} charges daily at dawn.",
    {
      "type": "table",
      "colStyles": [
        "col-2 text-center",
        "col-10 text-center"
      ],
      "colLabels": [
        "God",
        "Spell"
      ],
      "rows": [
        [
          "Athreos",
          "{@spell protection from evil and good}"
        ],
        [
          "Ephara",
          "{@spell sanctuary}"
        ],
        [
          "Erebos",
          "{@spell inflict wounds}"
        ],
        [
          "Heliod",
          "{@spell guiding bolt}"
        ],
        [
          "Iroas",
          "{@spell heroism}"
        ],
        [
          "Karametra",
          "{@spell goodberry}"
        ],
        [
          "Keranos",
          "{@spell thunderous smite}"
        ],
        [
          "Klothys",
          "{@spell entangle}"
        ],
        [
          "Kruphix",
          "{@spell dissonant whispers}"
        ],
        [
          "Mogis",
          "{@spell hellish rebuke}"
        ],
        [
          "Nylea",
          "{@spell faerie fire}"
        ],
        [
          "Pharika",
          "{@spell lesser restoration}"
        ],
        [
          "Phenax",
          "{@spell charm person}"
        ],
        [
          "Purphoros",
          "{@spell searing smite}"
        ],
        [
          "Thassa",
          "{@spell identify}"
        ]
      ]
    }
  ]
},
{
  "name": "Hematite",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque gray-black gemstone."
  ]
},
{
  "name": "Hempen Rope (50 feet)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 10,
  "value": 100,
  "entries": [
    "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
  ]
},
{
  "name": "Herbalism Kit",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 82
    }
  ],
  "type": "T",
  "rarity": "none",
  "weight": 3,
  "value": 500,
  "entries": [
    "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing."
  ],
  "additionalEntries": [
    "Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana",
      "entries": [
        "Your knowledge of the nature and uses of herbs can add insight to your magical studies that deal with plants and your attempts to identify potions."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "When you inspect an area overgrown with plants, your proficiency can help you pick out details and clues that others might miss."
      ]
    },
    {
      "type": "entries",
      "name": "Medicine",
      "entries": [
        "Your mastery of herbalism improves your ability to treat illnesses and wounds by augmenting your methods of care with medicinal plants."
      ]
    },
    {
      "type": "entries",
      "name": "Nature and Survival",
      "entries": [
        "When you travel in the wild, your skill in herbalism makes it easier to identify plants and spot sources of food that others might overlook."
      ]
    },
    {
      "type": "entries",
      "name": "Identify Plants",
      "entries": [
        "You can identify most plants with a quick inspection of their appearance and smell."
      ]
    },
    {
      "type": "table",
      "caption": "Herbalism Kit",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Find plants",
          "15"
        ],
        [
          "Identify poison",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Heward's Handy Haversack",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.",
    "Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.",
    "The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.",
    "Placing the haversack inside an extradimensional space created by a {@item bag of holding}, {@item portable hole}, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10-feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
  ],
  "containerCapacity": {
    "weight": [
      20,
      20,
      80
    ],
    "weightless": true
  },
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Heward's Handy Spice Pouch",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "entries": [
    "This belt pouch appears empty and has 10 charges. While holding the pouch, you can use an action to expend 1 of its charges, speak the name of any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains {@dice 1d6 + 4} expended charges daily at dawn."
  ]
},
{
  "name": "Heward's Hireling Armor",
  "source": "LLK",
  "baseItem": "leather armor",
  "type": "LA",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 10,
  "ac": 11,
  "bonusAc": "+1",
  "entries": [
    "A number of Kwalish's experiments were attempts to research the works of the legendary mage Heward, who first crafted what he named hireling armor. While wearing this armor, you gain a +1 bonus to AC. In addition, the armor's animated straps can assist with the drawing and sheathing of weapons, such that you can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.",
    "This armor also has six pockets, each of which is an extradimensional space. Each pocket can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The armor always weighs 10 pounds, regardless of its pockets' contents. Placing an object into one of the armor's pockets follows the normal rules for interacting with objects. Retrieving an item from a pocket of the armor requires you to use an action. When you reach into a pocket for a specific item, the item is always magically on top.",
    "Placing the armor inside an extradimensional space created by a {@item bag of holding}, a {@item Heward's handy haversack}, or a similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
  ],
  "containerCapacity": {
    "weight": [
      20,
      20,
      20,
      20,
      20,
      20
    ],
    "weightless": true
  }
},
{
  "name": "Holy Water (flask)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 2500,
  "entries": [
    "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes {@damage 2d6} radiant damage.",
    "A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."
  ]
},
{
  "name": "Hooded Lantern",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 500,
  "entries": [
    "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
  ]
},
{
  "name": "Hook of Fisher's Delight",
  "source": "IDRotF",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny silver fishhook has a little gold feather attached to it. For it to function, the feathered hook must be tied to the end of a fishing line and immersed in enough water to fill at least a 10-foot cube. At the end of each uninterrupted hour of immersion, roll a {@dice d6}. On a 6, a floppy, 6-inch-long magical fish appears on the end of the hook. The color and properties of the conjured fish are determined by rolling on the Hook of Fisher's Delight table. Once the hook conjures a fish, it can't do so again until the next dawn.",
    {
      "type": "table",
      "caption": "Hook of Fisher's Delight",
      "colStyles": [
        "col-2 text-center",
        "col-1",
        "col-9"
      ],
      "colLabels": [
        "d20",
        "Fish Color",
        "Result"
      ],
      "rows": [
        [
          "1-10",
          "Green with copper bands",
          "This tasty fish provides a day's worth of nourishment to one creature that eats it. The fish loses this property and rots if it's not eaten within 24 hours of being caught."
        ],
        [
          "11-14",
          "Yellow with black stripes",
          "Once removed from the hook, this awful-tasting fish can be thrown up to 120 feet, targeting a creature the thrower can see. The target must succeed on a DC 15 Strength saving throw or be knocked {@condition prone}. The fish then disappears."
        ],
        [
          "15-18",
          "Blue with white bands",
          "When released from the hook, this fish squirms free, sprouts wings, follows you around, and sings a beautiful tune in Aquan. It disappears after {@dice 2d4} hours or when reduced to 0 hit points. The fish uses the {@creature quipper} stat block, except that it can breathe air and has a flying speed of 30 feet."
        ],
        [
          "19-20",
          "Gold with silver stripes",
          "This tasty fish provides a day's worth of nourishment to one creature that eats it and grants {@dice 2d10} temporary hit points to that creature. The fish loses these properties and rots if it's not eaten within 24 hours of being caught."
        ]
      ]
    }
  ],
  "miscTags": [
    "CF/W"
  ]
},
{
  "name": "Horn",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 2,
  "value": 300
},
{
  "name": "Horn of Blasting",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes {@damage 5d6} thunder damage and is {@condition deafened} for 1 minute. On a successful save, a creature takes half as much damage and isn't {@condition deafened}. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take {@damage 10d6} thunder damage instead of {@dice 5d6}.",
    "Each use of the horn's magic has a {@chance 20} chance of causing the horn to explode. The explosion deals {@damage 10d6} fire damage to the blower and destroys the horn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Horn of Silent Alarm",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d4}",
  "charges": 4,
  "entries": [
    "This horn has 4 charges. When you use an action to blow it, one creature of your choice can hear the horn's blare, provided the creature is within 600 feet of the horn and not {@condition deafened}. No other creature hears sound coming from the horn. The horn regains {@dice 1d4} expended charges daily at dawn."
  ]
},
{
  "name": "Horn of Valhalla, Brass",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the {@creature berserker} statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.",
    "A brass horn summons {@dice 3d4 + 3} {@creature berserker||berserkers}. To use the brass horn, you must be proficient with all simple weapons.",
    "If you blow the horn without meeting its requirement, the summoned {@creature berserker||berserkers} attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Horn of Valhalla, Bronze",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the {@creature berserker} statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.",
    "A bronze horn summons {@dice 4d4 + 4} {@creature berserker||berserkers}. To use the bronze horn, you must be proficient with medium armor.",
    "If you blow the horn without meeting its requirement, the summoned {@creature berserker||berserkers} attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Horn of Valhalla, Silver",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the {@creature berserker} statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.",
    "The silver horn summons {@dice 2d4 + 2} {@creature berserker||berserkers}.",
    "The {@creature berserker||berserkers} are friendly to you and your companions and follow your commands."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Horned Ring",
  "source": "WDMM",
  "type": "RG",
  "rarity": "very rare",
  "reqAttune": true,
  "entries": [
    "Allows an attuned wearer to ignore Undermountain's magical restrictions (see \"Alterations to Magic\")."
  ]
},
{
  "name": "Horror Trinket",
  "source": "VRGR",
  "type": "G",
  "rarity": "none",
  "entries": [
    "Before you finish making a character, roll once on the Horror Trinkets table for a unique object your character has with them at the start of their adventuring career. These trinkets hint toward various horrific tales and might lead to dreadful revelations or be nothing more than grim keepsakes. At the DM's discretion any of these trinkets might also be a Mist talisman (detailed in {@book chapter 3|VRGR|3|Mist Talismans}), a focal item that can lead the bearer through the Mists to a particular Domain of Dread.",
    {
      "type": "table",
      "caption": "Horror Trinkets",
      "colLabels": [
        "d100",
        "Trinket"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "01",
          "A picture you drew as a child of your imaginary friend"
        ],
        [
          "02",
          "A lock that opens when blood is dripped in its keyhole"
        ],
        [
          "03",
          "Clothes stolen from a scarecrow"
        ],
        [
          "04",
          "A spinning top carved with four faces: happy, sad, wrathful, and dead"
        ],
        [
          "05",
          "The necklace of a sibling who died on the day you were born"
        ],
        [
          "06",
          "A wig from someone executed by beheading"
        ],
        [
          "07",
          "The unopened letter to you from your dying father"
        ],
        [
          "08",
          "A pocket watch that runs backward for an hour every midnight"
        ],
        [
          "09",
          "A winter coat stolen from a dying soldier"
        ],
        [
          "10",
          "A bottle of invisible ink that can only be read at sunset"
        ],
        [
          "11",
          "A wineskin that refills when interred with a dead person for a night"
        ],
        [
          "12",
          "A set of silverware used by a king for his last meal"
        ],
        [
          "13",
          "A spyglass that always shows the world suffering a terrible storm"
        ],
        [
          "14",
          "A cameo with the profile's face scratched away"
        ],
        [
          "15",
          "A lantern with a black candle that never runs out and that burns with green flame"
        ],
        [
          "16",
          "A teacup from a child's tea set, stained with blood"
        ],
        [
          "17",
          "A little black book that records your dreams, and yours alone, when you sleep"
        ],
        [
          "18",
          "A necklace formed of the interlinked holy symbols of a dozen deities"
        ],
        [
          "19",
          "A noose that feels heavier than it should"
        ],
        [
          "20",
          "A birdcage into which small birds fly but once inside never eat or leave"
        ],
        [
          "21",
          "A lepidopterist's box filled with dead moths with skull-like patterns on their wings"
        ],
        [
          "22",
          "A jar of pickled ghouls' tongues"
        ],
        [
          "23",
          "The wooden hand of a notorious pirate"
        ],
        [
          "24",
          "A urn with the ashes of a dead relative"
        ],
        [
          "25",
          "A hand mirror backed with a bronze depiction of a medusa"
        ],
        [
          "26",
          "Pallid leather gloves crafted with ivory fingernails"
        ],
        [
          "27",
          "Dice made from the knuckles of a notorious charlatan"
        ],
        [
          "28",
          "A ring of keys for forgotten locks"
        ],
        [
          "29",
          "Nails from the coffin of a murderer"
        ],
        [
          "30",
          "A key to the family crypt"
        ],
        [
          "31",
          "A bouquet of funerary flowers that always looks and smells fresh"
        ],
        [
          "32",
          "A switch used to discipline you as a child"
        ],
        [
          "33",
          "A music box that plays by itself whenever someone holding it dances"
        ],
        [
          "34",
          "A walking cane with an iron ferrule that strikes sparks on stone"
        ],
        [
          "35",
          "A flag from a ship lost at sea"
        ],
        [
          "36",
          "A porcelain doll's head that always seems to be looking at you"
        ],
        [
          "37",
          "A wolf's head wrought in silver that is also a whistle"
        ],
        [
          "38",
          "A small mirror that shows a much older version of the viewer"
        ],
        [
          "39",
          "A small, worn book of children's nursery rhymes"
        ],
        [
          "40",
          "A mummified raven claw"
        ],
        [
          "41",
          "A broken pendant of a silver dragon that's always cold to the touch"
        ],
        [
          "42",
          "A small locked box that quietly hums a lovely melody at night, but you always forget it in the morning"
        ],
        [
          "43",
          "An inkwell that makes one a little nauseous when staring at it"
        ],
        [
          "44",
          "An old doll made from a dark, dense wood and missing a hand and a foot"
        ],
        [
          "45",
          "A black executioner's hood"
        ],
        [
          "46",
          "A pouch made of flesh, with a sinew drawstring"
        ],
        [
          "47",
          "A tiny spool of black thread that never runs out"
        ],
        [
          "48",
          "A tiny clockwork figurine of a dancer that's missing a gear and doesn't work"
        ],
        [
          "49",
          "A black wooden pipe that creates puffs of smoke that look like skulls"
        ],
        [
          "50",
          "A vial of perfume, the scent of which only certain creatures can detect"
        ],
        [
          "51",
          "A stone that emits a single endless sigh"
        ],
        [
          "52",
          "A rag doll with two red dots on its neck"
        ],
        [
          "53",
          "A spring-loaded toy with a missing crank"
        ],
        [
          "54",
          "A mason jar containing a harmless but agitated, animate ooze"
        ],
        [
          "55",
          "A black wooden die with 1's on all the faces"
        ],
        [
          "56",
          "A child's portrait with \"born\" written on the back, along with next year's date"
        ],
        [
          "57",
          "A dagger-sized shark tooth"
        ],
        [
          "58",
          "A finger that's taken root in a small pot"
        ],
        [
          "59",
          "A toolbox containing the remains of a dangerous but broken clockwork arachnid"
        ],
        [
          "60",
          "A pitcher-sized, opalescent snail shell that occasionally, inexplicably shudders or tips over"
        ],
        [
          "61",
          "The logbook of an ice-breaking ship called The Haifisch"
        ],
        [
          "62",
          "A small portrait of you as a child, alongside your identically dressed twin"
        ],
        [
          "63",
          "A silver pocket watch with thirteen hours marked on the face"
        ],
        [
          "64",
          "A woodcut of a wolf devouring its own hind leg"
        ],
        [
          "65",
          "A planchette etched with raven skulls"
        ],
        [
          "66",
          "A moist coral figurine of a lamprey with arms, legs, and a bipedal stance"
        ],
        [
          "67",
          "A bronze fingertrap sculpted with roaring tigers"
        ],
        [
          "68",
          "A pearl necklace that turns red under the full moon"
        ],
        [
          "69",
          "A fossil of a fish with humanoid features"
        ],
        [
          "70",
          "A plague doctor's mask"
        ],
        [
          "71",
          "A paper talisman with smudged ink"
        ],
        [
          "72",
          "A locket containing the smeared image of an eyeless figure"
        ],
        [
          "73",
          "A canopic jar with a lid sculpted like a goat"
        ],
        [
          "74",
          "A jack-o'-lantern made from a small, pale gourd"
        ],
        [
          "75",
          "A single high-heeled, iron shoe"
        ],
        [
          "76",
          "A candle made from a severed hand"
        ],
        [
          "77",
          "A clockwork device that beats like a heart"
        ],
        [
          "78",
          "A blank masquerade mask"
        ],
        [
          "79",
          "A glass eye with a live worm inside"
        ],
        [
          "80",
          "A sheet with two eyeholes cut in it"
        ],
        [
          "81",
          "The deed to someplace called Tergeron Manor"
        ],
        [
          "82",
          "An ornate, wax-sealed crimson envelope that resists all attempts to open it"
        ],
        [
          "83",
          "A mourning veil trimmed in black lace"
        ],
        [
          "84",
          "A straitjacket covered in charcoal runes"
        ],
        [
          "85",
          "A tattered, burlap mask with a crooked smile painted on it"
        ],
        [
          "86",
          "A green ribbon designed to be worn as a choker"
        ],
        [
          "87",
          "Dentures with mismatched, sharpened teeth"
        ],
        [
          "88",
          "A warm, fist-sized egg case"
        ],
        [
          "89",
          "A copper ring with \"mine\" engraved on the inside"
        ],
        [
          "90",
          "A glass ampoule containing a neon green fluid"
        ],
        [
          "91",
          "An eye patch embroidered with a holy symbol"
        ],
        [
          "92",
          "A severed big toe with a nail that continues to grow"
        ],
        [
          "93",
          "A journal that has been heavily redacted"
        ],
        [
          "94",
          "A glove with a mouth-like design stitched on the palm"
        ],
        [
          "95",
          "An ornate but empty reliquary made of silver and fractured glass"
        ],
        [
          "96",
          "A ceramic figure of a cat with too many eyes"
        ],
        [
          "97",
          "A crumpled paper ticket bearing the words \"admit none\""
        ],
        [
          "98",
          "An electrum coin with your face on one side"
        ],
        [
          "99",
          "A shrunken gremishka head that twitches when anyone casts magic nearby"
        ],
        [
          "100",
          "A sunburst amulet with a red stone at the center"
        ]
      ]
    }
  ]
},
{
  "name": "Horseshoes of Speed",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Horseshoes of a Zephyr",
  "source": "DMG",
  "tier": "minor",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores {@quickref difficult terrain||3}. In addition, the creature can move at normal speed for up to 12 hours a day without suffering {@condition exhaustion} from a forced march."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Hourglass",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 2500
},
{
  "name": "Hunk of Cheese",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 10
},
{
  "name": "Hunter's Coat",
  "source": "EGW",
  "baseItem": "leather armor",
  "type": "LA",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 10,
  "ac": 11,
  "bonusAc": "+1",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "You have a +1 bonus to AC while wearing this armor.",
    "The coat has 3 charges. When you hit a creature with an attack and that creature doesn't have all its hit points, you can expend 1 charge to deal an extra {@damage 1d10} necrotic damage to the target. The coat regains {@dice 1d3} expended charges daily at dawn.",
    "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials."
  ]
},
{
  "name": "Hunting Trap",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 25,
  "value": 500,
  "entries": [
    "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take {@damage 1d4} piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
  ]
},
{
  "name": "Icewind Dale Trinket",
  "source": "IDRotF",
  "type": "G",
  "rarity": "none",
  "entries": [
    {
      "type": "table",
      "caption": "Icewind Dale Trinkets",
      "colLabels": [
        "d100",
        "Trinket"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "01-04",
          "A small wooden figurine of a yawning walrus, painted in red and black"
        ],
        [
          "05-08",
          "A pair of scrimshaw cufflinks with an image of a fisherman on a boat engraved on them"
        ],
        [
          "09-12",
          "A small iron key with a frayed blue and gold cord tied to it"
        ],
        [
          "13-16",
          "A small illustrated book of Northlander myths that has pages missing"
        ],
        [
          "17-20",
          "A damaged scrimshaw cameo depicting a merfolk"
        ],
        [
          "21-24",
          "A stone from a burial cairn with a tiny Dwarvish rune carved into it"
        ],
        [
          "25-28",
          "A ripped cloth sail with a symbol you don't recognize"
        ],
        [
          "29-32",
          "An Ulu knife with a scrimshaw handle"
        ],
        [
          "33-36",
          "A jar containing an unidentifiable, sweet, sticky substance"
        ],
        [
          "37-40",
          "A delicate glass ball painted with snowflakes, capped by a metal loop with a tiny hook attached to it"
        ],
        [
          "41-44",
          "An expedition log with missing pages and a pressed flower used as a bookmark"
        ],
        [
          "45-48",
          "An owl figurine carved from whalebone"
        ],
        [
          "49-52",
          "A sewing box that smells of old wood and has three spools of blue thread inside"
        ],
        [
          "53-56",
          "A scrimshaw-handled ink pen with black runic designs along its length"
        ],
        [
          "57-60",
          "A brooch made from a small insect encased in amber"
        ],
        [
          "61-64",
          "A scrimshaw pepper shaker etched with the letter W"
        ],
        [
          "65-68",
          "An old, wooden-handled ice pick stained with blood that won't wash off"
        ],
        [
          "69-72",
          "A fabric doll bearing an angry expression"
        ],
        [
          "73-76",
          "A set of wind chimes made from seashells"
        ],
        [
          "77-80",
          "A beautiful silver tin that, when opened, emits the smell of rotting fish"
        ],
        [
          "81-84",
          "A bloodstained dreamcatcher made from fishing line, gold wire, and snowy owlbear feathers"
        ],
        [
          "85-88",
          "A figurine of a polar bear made of ice that never melts"
        ],
        [
          "89-92",
          "A snow globe that doesn't need to be shaken"
        ],
        [
          "93-96",
          "A piece of sea glass shaped like a unicorn's horn"
        ],
        [
          "97-00",
          "A dark blue scarf that gets lighter in shade the higher the altitude of the wearer"
        ]
      ]
    }
  ]
},
{
  "name": "Illuminator's Tattoo",
  "source": "TCE",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo features beautiful calligraphy, images of writing implements, and the like.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Magical Scribing",
      "entries": [
        "While this tattoo is on your skin, you can write with your fingertip as if it were an ink pen that never runs out of ink.",
        "As an action, you can touch a piece of writing up to one page in length and speak a creature's name. The writing becomes {@condition invisible} to everyone other than you and the named creature for the next 24 hours. Either of you can dismiss the invisibility by touching the script (no action required). Once used, this action can't be used again until the next dawn."
      ]
    }
  ]
},
{
  "name": "Illusionist's Bracers",
  "source": "GGR",
  "rarity": "very rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "entries": [
    "A powerful illusionist of House Dimir originally developed these bracers, which enabled her to create multiple minor illusions at once. The bracers' power, though, extends far beyond illusions.",
    "While wearing the bracers, whenever you cast a cantrip, you can use a bonus action on the same turn to cast that cantrip a second time."
  ]
},
{
  "name": "Immovable Rod",
  "source": "DMG",
  "type": "RD",
  "tier": "minor",
  "rarity": "uncommon",
  "weight": 2,
  "entries": [
    "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Infernal Puzzle Box",
  "source": "BGDIA",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "An infernal puzzle box is a cube-shaped container 5 to 6 inches on a side, composed of airtight, interlocking parts made from materials found in the Nine Hells. Most of these boxes are made of infernal iron, though some are carved from bone or horn. Infernal puzzle boxes are used to safeguard diabolical contracts signed between devils and mortals, even after the terms of these contracts are fulfilled. An empty infernal puzzle box weighs 3 pounds regardless of the materials used to fashion it.",
    "When an object small enough to fit inside an infernal puzzle box is placed in it, the container magically seals shut around the object, and no magic can force the box open. The sealed box becomes immune to all damage as well. Every infernal puzzle box is constructed with a unique means of opening it. The trick to solving the puzzle is always mundane, never magical. Once a creature figures out the trick or sequence of steps needed to open a particular infernal puzzle box, that creature can open the box as an action, allowing access to the box's contents.",
    "A creature that spends 1 hour holding an infernal puzzle box while trying to open it can make a DC 30 Intelligence ({@skill Investigation}) check. If the check succeeds, the creature figures out the trick or sequence of steps needed to open the box. If the check fails by 5 or more, the creature must make a DC 18 Wisdom saving throw, taking 42 ({@damage 12d6}) psychic damage on a failed save, or half as much damage on a successful one."
  ]
},
{
  "name": "Ingot of the Skold Rune",
  "source": "SKT",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusAc": "+1",
  "entries": [
    "This appears to be a simple ingot of iron ore, about a foot long and a few inches across. Inspection of its surface reveals the faint, silvery outline of the skold (shield) rune. The ingot has the following properties, which work only while it's on your person.",
    {
      "name": "Runic Shield",
      "type": "entries",
      "entries": [
        "You have a +1 bonus to AC."
      ]
    },
    {
      "name": "Shield Bond",
      "type": "entries",
      "entries": [
        "As a bonus action, choose a creature that you can see within 30 feet of you, other than yourself. Until the end of your next turn, any damage the target takes is reduced to 1, but you take half the damage prevented in this way. The damage you take can't be reduced in any way. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Shield Ward",
      "type": "entries",
      "entries": [
        "You can transfer the ingot's magic to a nonmagical item-a shield or a two-handed melee weapon-by tracing the skold rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the ingot is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:",
        {
          "type": "list",
          "style": "list-hang-notitle",
          "items": [
            {
              "type": "item",
              "name": "Shield",
              "entry": "The shield is now a rare magic item that requires attunement. Its magic gives you a +1 bonus to AC, and the first time after each of your long rests that damage reduces you to 0 hit points, you are instead reduced to 1 hit point. You must be wielding the shield to gain these benefits."
            },
            {
              "type": "item",
              "name": "Weapon",
              "entry": "The weapon is now an uncommon magic weapon. It grants you a +1 bonus to AC while you're holding it."
            }
          ]
        }
      ]
    }
  ]
},
{
  "name": "Ink (1-ounce bottle)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "Ink (1-ounce bottle)"
  ]
},
{
  "name": "Ink Pen",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 2
},
{
  "name": "Insect Repellent (block of incense)",
  "source": "ToA",
  "type": "G",
  "rarity": "none",
  "value": 10,
  "charges": 1,
  "entries": [
    "Insect repellent can be purchased in Port Nyanzaru in two forms: blocks of incense or a greasy salve. The merchant prince Kwayothe controls the sale of both. Neither kind of repellent protects against giant insects or the vile swarms of insects described in appendix A of the Monster Manual.",
    "When lit, it burns for 8 hours and repels normal insects within a 20-foot-radius centered on it."
  ]
},
{
  "name": "Insect Repellent (greasy salve)",
  "source": "ToA",
  "type": "G",
  "rarity": "none",
  "value": 100,
  "charges": 20,
  "entries": [
    "Insect repellent can be purchased in Port Nyanzaru in two forms: blocks of incense or a greasy salve. The merchant prince Kwayothe controls the sale of both. Neither kind of repellent protects against giant insects or the vile swarms of insects described in appendix A of the Monster Manual.",
    "A gourd or vial of salve contains 20 applications of odorless grease. One application protects its wearer against normal insects for 24 hours. The salve is waterproof so it doesn't wash off in rain."
  ]
},
{
  "name": "Insignia of Claws",
  "source": "HotDQ",
  "rarity": "uncommon",
  "wondrous": true,
  "bonusWeapon": "+1",
  "entries": [
    "The jewels in the insignia of the Cult of the Dragon flare with purple light when you enter combat, empowering your natural fists or natural weapons.",
    "While wearing the insignia you gain a +1 bonus to the attack rolls and the damage rolls you make with unarmed strikes and natural weapons. Such attacks are considered to be magical."
  ]
},
{
  "name": "Instrument of Illusions",
  "source": "XGE",
  "type": "INS",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While you are playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing."
  ]
},
{
  "name": "Instrument of Scribing",
  "source": "XGE",
  "type": "INS",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting {@spell dispel magic} on the message erases it. Otherwise, the message fades away after 24 hours.",
    "The instrument regains all expended charges daily at dawn."
  ]
},
{
  "name": "Instrument of the Bards, Anstruth Harp",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "entries": [
    "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take {@damage 2d4} psychic damage.",
    "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
    "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
    "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
    "In addition, the Anstruth harp can be used to cast {@spell control weather}, {@spell cure wounds} (5th level), and {@spell wall of thorns}."
  ],
  "attachedSpells": [
    "control weather",
    "fly",
    "invisibility",
    "levitate",
    "protection from evil and good",
    "cure wounds",
    "wall of thorns"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Instrument of the Bards, Canaith Mandolin",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "entries": [
    "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take {@damage 2d4} psychic damage.",
    "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
    "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
    "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
    "In addition, the Canaith mandolin can be used to cast {@spell cure wounds} (3rd level), {@spell dispel magic}, and {@spell protection from energy} (lightning only)."
  ],
  "attachedSpells": [
    "cure wounds",
    "fly",
    "invisibility",
    "levitate",
    "protection from evil and good",
    "dispel magic",
    "protection from energy"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Instrument of the Bards, Cli Lyre",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "entries": [
    "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take {@damage 2d4} psychic damage.",
    "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
    "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
    "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
    "In addition, the Cli lyre can be used to cast {@spell stone shape}, {@spell wall of fire}, and {@spell wind wall}."
  ],
  "attachedSpells": [
    "stone shape",
    "fly",
    "invisibility",
    "levitate",
    "protection from evil and good",
    "wall of fire",
    "wind wall"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Instrument of the Bards, Doss Lute",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "entries": [
    "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take {@damage 2d4} psychic damage.",
    "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
    "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
    "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
    "In addition, the Doss lute can be used to cast {@spell animal friendship}, {@spell protection from energy} (fire only), and {@spell protection from poison}."
  ],
  "attachedSpells": [
    "animal friendship",
    "fly",
    "invisibility",
    "levitate",
    "protection from evil and good",
    "protection from energy",
    "protection from poison"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Instrument of the Bards, Fochlucan Bandore",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "entries": [
    "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take {@damage 2d4} psychic damage.",
    "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
    "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
    "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
    "In addition, the Fochlucan bandore can be used to cast {@spell entangle}, {@spell faerie fire}, {@spell shillelagh}, and {@spell speak with animals}."
  ],
  "attachedSpells": [
    "entangle",
    "fly",
    "invisibility",
    "levitate",
    "protection from evil and good",
    "faerie fire",
    "shillelagh",
    "speak with animals"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Instrument of the Bards, Mac-Fuirmidh Cittern",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "entries": [
    "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take {@damage 2d4} psychic damage.",
    "You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
    "You can play the instrument while casting a spell that causes any of its targets to be {@condition charmed} on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.",
    "All instruments of the bards can be used to cast the following spells: {@spell fly}, {@spell invisibility}, {@spell levitate}, and {@spell protection from evil and good}.",
    "In addition, the Mac-Fuirmidh cittern can be used to cast {@spell barkskin}, {@spell cure wounds}, and {@spell fog cloud}."
  ],
  "attachedSpells": [
    "barkskin",
    "fly",
    "invisibility",
    "levitate",
    "protection from evil and good",
    "cure wounds",
    "fog cloud"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Ioun Stone of Vitality",
  "source": "IMR",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain a +1 bonus to death saving throws while this luminous green-and-blue marbled sphere orbits your head."
  ]
},
{
  "name": "Ioun Stone, Absorption",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "While this pale lavender ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you.",
    "Once the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Agility",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "dex": 2
  },
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "Your Dexterity score increases by 2, to a maximum of 20, while this deep red sphere orbits your head."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Awareness",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You can't be {@quickref Surprise|3|0|surprised} while this dark blue rhomboid orbits your head."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ioun Stone, Fortitude",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "con": 2
  },
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "Your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Historical Knowledge",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "grantsProficiency": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain proficiency in the {@skill History} skill, or a +1 bonus to checks with that skill if already proficient, while this polished, steely sphere orbits your head."
  ]
},
{
  "name": "Ioun Stone, Insight",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "wis": 2
  },
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "Your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Intellect",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "int": 2
  },
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "Your Intelligence score increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Language Knowledge",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You are fluent in one additional language while this pulsating bit of red jeweled crystal orbits your head. The DM chooses the language bestowed by the stone."
  ]
},
{
  "name": "Ioun Stone, Leadership",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "cha": 2
  },
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "Your Charisma score increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Natural Knowledge",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "grantsProficiency": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain proficiency in the {@skill Nature} skill, or a +1 bonus to checks with that skill if already proficient, while this burnished, brassy stone orbits your head."
  ]
},
{
  "name": "Ioun Stone, Protection",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusAc": "+1",
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain a +1 bonus to AC while this dusty rose prism orbits your head."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ioun Stone, Religious Knowledge",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "grantsProficiency": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain proficiency in the {@skill Religion} skill, or a +1 bonus to checks with that skill if already proficient, while this tiny golden gem orbits your head."
  ]
},
{
  "name": "Ioun Stone, Reserve",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. When found, it contains {@dice 1d4 - 1} levels of stored spells chosen by the DM.",
    "Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.",
    "While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ioun Stone, Self-Preservation",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain a +1 bonus to Intelligence saving throws while this silvery gem orbits your head."
  ]
},
{
  "name": "Ioun Stone, Strength",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "ability": {
    "str": 2
  },
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "Your Strength score increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ioun Stone, Supreme Intellect",
  "source": "LLK",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You gain a +1 bonus to Intelligence checks while this faceted sphere orbits your head."
  ]
},
{
  "name": "Ioun Stone, Sustenance",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "An {@italic Ioun stone} is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of {@italic Ioun stone} exist, each type a distinct combination of shape and color.",
    "When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of {@dice 1d3} feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity ({@skill Acrobatics}) check. You can use an action to seize and stow the stone, ending its effect.",
    "A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.",
    "You don't need to eat or drink while this clear spindle orbits your head."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Iron",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 10
},
{
  "name": "Iron Bands of Bilarro",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.",
    "Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is {@condition restrained} until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.",
    "A creature, including the one {@condition restrained}, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the {@condition restrained} creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.",
    "Once the bands are used, they can't be used again until the next dawn."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Iron Pot",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 10,
  "value": 200,
  "entries": [
    "An iron pot holds 1 gallon of liquid."
  ]
},
{
  "name": "Iron Spike",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 0.5,
  "value": 10
},
{
  "name": "Iron Spikes (10)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 100,
  "packContents": [
    {
      "item": "iron spike",
      "quantity": 10
    }
  ]
},
{
  "name": "Izzet Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Izzet, allows you to cast {@spell chaos bolt|XGE}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Izzet's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "chaos bolt|XGE"
  ]
},
{
  "name": "Izzet Keyrune",
  "source": "GGR",
  "rarity": "rare",
  "reqAttune": "by a member of the Izzet guild",
  "reqAttuneTags": [
    {
      "background": "izzet engineer|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "Formed of carved and polished red and blue stone, the keyrune includes bits of cable and wire. One end resembles a humanlike head, suggesting the jagged elemental form of the {@creature galvanice weird|GGR} that it can become for a duration of 3 hours. In this form, it will serve you as a bodyguard, lift and carry things for you, act as a test subject for your experiments, or aid you in any other way that its capabilities allow.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature galvanice weird|GGR}. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Jacinth",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 500000,
  "entries": [
    "A transparent fiery orange gemstone."
  ]
},
{
  "name": "Jade",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A translucent light green, deep green, or white gemstone."
  ]
},
{
  "name": "Jade bowl (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Jade breastplate (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Jade game board with solid gold playing pieces",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Jade headpiece (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Jade sword with amber (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Jade totem with diamond eyes (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Jasper",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An opaque blue, black, or brown gemstone."
  ]
},
{
  "name": "Javelin of Backbiting",
  "source": "TftYP",
  "baseItem": "javelin",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "curse": true,
  "weight": 2,
  "weaponCategory": "simple",
  "property": [
    "T"
  ],
  "range": "60/150",
  "dmg1": "1d6",
  "dmgType": "P",
  "bonusWeapon": "+2",
  "entries": [
    "You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, its normal and long ranges both increase by 30 feet, and it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with {@spell remove curse} or similar magic, you are unwilling to part with the weapon, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one."
      ]
    },
    "Whenever you roll a 1 on an attack roll using this weapon, the weapon bends or flies to hit you in the back. Make a new attack roll with advantage against your own AC. If the result is a hit, you take damage as if you had attacked yourself with the javelin."
  ]
},
{
  "name": "Javelin of Lightning",
  "source": "DMG",
  "baseItem": "javelin",
  "type": "M",
  "tier": "major",
  "rarity": "uncommon",
  "weight": 2,
  "weaponCategory": "simple",
  "property": [
    "T"
  ],
  "range": "30/120",
  "dmg1": "1d6",
  "dmgType": "P",
  "entries": [
    "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking {@damage 4d6} lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus {@damage 4d6} lightning damage.",
    "The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Jet",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "An opaque deep black gemstone."
  ]
},
{
  "name": "Jeweled anklet",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Jeweled anklet (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Jeweled gold crown",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Jeweled platinum ring",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Jeweler's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 82
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 2,
  "value": 2500,
  "additionalEntries": [
    "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana",
      "entries": [
        "Proficiency with jeweler's tools grants you knowledge about the reputed mystical uses of gems. This insight proves handy when you make {@skill Arcana} checks related to gems or gem-encrusted items."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "When you inspect jeweled objects, your proficiency with jeweler's tools aids you in picking out clues they might hold."
      ]
    },
    {
      "type": "entries",
      "name": "Identify Gems",
      "entries": [
        "You can identify gems and determine their value at a glance."
      ]
    },
    {
      "type": "table",
      "caption": "Jeweler's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Modify a gem's appearance",
          "15"
        ],
        [
          "Determine a gem's history",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Jug",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 2,
  "entries": [
    "A jug holds 1 gallon of liquid."
  ]
},
{
  "name": "Kagonesti Forest Shroud",
  "source": "DSotDQ",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This cloak appears to be made of autumnal leaves woven together. While you wear this cloak, you have advantage on Dexterity ({@skill Stealth}) checks, and you can use a bonus action to magically teleport, along with any equipment you are wearing or carrying, to an unoccupied space you can see within 30 feet of yourself. You then have advantage on the next attack roll you make before the end of the turn. Once this bonus action is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "Keelboat",
  "source": "DMG",
  "type": "SHP",
  "rarity": "none",
  "value": 300000,
  "crew": 1,
  "vehAc": 15,
  "vehHp": 100,
  "vehDmgThresh": 10,
  "vehSpeed": 1,
  "capPassenger": 6,
  "capCargo": 0.5,
  "entries": [
    "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores."
  ],
  "seeAlsoVehicle": [
    "Keelboat"
  ]
},
{
  "name": "Keg of Alchemist's Fire",
  "source": "LoX",
  "type": "G",
  "rarity": "none",
  "entries": [
    "A keg of alchemist's fire lobbed at a creature or an object deals 21 ({@damage 6d6}) fire damage on a hit. Further, the target is set ablaze and takes the damage again every round (in the case of a creature, at the start of each of its turns) until the fire is put out. A creature within reach of the blaze can take an action to smother the flames using a blanket or carpet, reducing the fire damage by {@dice 2d6}. Three such actions are needed to fully put out the fire."
  ]
},
{
  "name": "Keoghtom's Ointment",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This glass jar, 3 inches in diameter, contains {@dice 1d4 + 1} doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh &frac12; pound.",
    "As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains {@dice 2d8 + 2} hit points, ceases to be {@condition poisoned}, and is cured of any disease."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Keycharm",
  "source": "ERLW",
  "rarity": "common",
  "reqAttune": "by a creature with the Mark of Warding",
  "reqAttuneTags": [
    {
      "race": "dwarf (mark of warding)|erlw"
    }
  ],
  "wondrous": true,
  "entries": [
    "This small stylized key plays a vital role in the work of House Kundarak. If you cast the {@spell alarm}, {@spell arcane lock}, or {@spell glyph of warding} spell, you can tie the effect to the keycharm so that whoever holds it receives the notification from the {@spell alarm} spell, bypasses the lock of the {@spell arcane lock} spell, or avoids triggering the glyph placed by the {@spell glyph of warding} spell. In addition, the holder (who needn't be attuned to the item) can take an action to end any one spell tied to it, provided the holder knows the command word you set for ending the tied spells. The keycharm can have up to three tied spells at one time."
  ]
},
{
  "name": "Knave's Eye Patch",
  "source": "WDH",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While wearing this eye patch, you gain these benefits:",
    {
      "type": "list",
      "items": [
        "You have advantage on Wisdom ({@skill Perception}) checks that rely on sight.",
        "If you have the Sunlight Sensitivity trait, you are unaffected by the trait.",
        "You are immune to magic that allows other creatures to read your thoughts or determine whether you are lying. Creatures can communicate telepathically with you only if you allow it."
      ]
    }
  ]
},
{
  "name": "Kyrzin's Ooze",
  "source": "ERLW",
  "resist": [
    "acid",
    "poison"
  ],
  "conditionImmune": [
    "poisoned"
  ],
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This opalescent, symbiotic goo comes sealed in a jar and slowly shifts and moves, as if endlessly exploring the jar's interior. To attune to this item, you must first drink the contents of the jar, unlocking the following properties.",
    {
      "type": "entries",
      "name": "Resistant",
      "entries": [
        "While attuned to Kyrzin's ooze, you have resistance to poison and acid damage, and you're immune to the {@condition poisoned} condition."
      ]
    },
    {
      "type": "entries",
      "name": "Amorphous",
      "entries": [
        "As an action, you can speak a command word and cause your body to assume the amorphous qualities of an ooze. For the next minute, you (along with any equipment you're wearing or carrying) can move through a space as narrow as 1 inch wide without squeezing. Once you use this property, it can't be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Acid Breath",
      "entries": [
        "As an action, you can exhale acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 36 ({@damage 8d8}) acid damage on a failed save, or half as much damage on a successful one. Once you use this property, it can't be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Symbiotic Nature",
      "entries": [
        "The ooze can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the ooze ends, as it seeps out of you.",
        "If you die while the ooze is inside you, it bursts out and engulfs you, turning your corpse into a {@creature black pudding} allied with the daelkyr."
      ]
    }
  ]
},
{
  "name": "Ladder (10-foot)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 25,
  "value": 10,
  "entries": [
    "Ladder (10-foot)"
  ]
},
{
  "name": "Lamp",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 50,
  "entries": [
    "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
  ]
},
{
  "name": "Lamprey Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2000000,
  "crew": 15,
  "vehAc": 15,
  "vehHp": 250,
  "vehDmgThresh": 15,
  "vehSpeed": 4,
  "capCargo": 6,
  "entries": [
    "Lamprey ships are antiquated, being among the oldest spelljamming ships still in use. Psurlons (see Boo's Astral Menagerie) are particularly fond of them.",
    "Using the metal grappling jaws built into its bow, a lamprey ship can attach itself to another ship, which is a critical feature during boarding actions. Other standard weapons include four ballistae on the main deck.",
    "A lamprey can float on water, though it can't land safely on the ground. Lamprey ships that land on the ground have the distressing habit of rolling over, as more than a few crews have discovered to their dismay."
  ],
  "seeAlsoVehicle": [
    "Lamprey Ship|AAG"
  ]
},
{
  "name": "Lantern of Revealing",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "While lit, this {@item hooded lantern} burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. {@condition Invisible} creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Lantern of Tracking",
  "source": "IDRotF",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet.",
    "Each lantern of tracking is designed to track down a certain type of creature, which is determined by rolling on the Lantern of Tracking table. Once determined, this creature type can't be changed. While the lantern is within 300 feet of any creature of that type, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.",
    {
      "type": "table",
      "caption": "Lantern of Tracking",
      "colLabels": [
        "1d10",
        "Creature Type"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "Aberrations"
        ],
        [
          "2",
          "Celestials"
        ],
        [
          "3",
          "Constructs"
        ],
        [
          "4",
          "Dragons"
        ],
        [
          "5",
          "Elementals"
        ],
        [
          "6",
          "Fey"
        ],
        [
          "7",
          "Fiends"
        ],
        [
          "8",
          "Giants"
        ],
        [
          "9",
          "Monstrosities"
        ],
        [
          "10",
          "Undead"
        ]
      ]
    }
  ]
},
{
  "name": "Lapis Lazuli",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque light and dark blue with yellow flecks gemstone."
  ]
},
{
  "name": "Large gold bracelet",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Large gold bracelet (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Large jade totem (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Large well-made tapestry",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Large well-made tapestry (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Leather Golem Armor",
  "source": "LLK",
  "baseItem": "leather armor",
  "type": "LA",
  "resist": [
    "lightning"
  ],
  "rarity": "rare",
  "reqAttune": true,
  "curse": true,
  "weight": 10,
  "ac": 11,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "entries": [
    "Strange rituals have repurposed the body of a flesh golem into this partially sentient suit of leather armor. While wearing this armor, you gain a +1 bonus to AC and to saving throws against spells and other magical effects. In addition, you gain the following properties:",
    {
      "type": "list",
      "items": [
        {
          "type": "entries",
          "name": "Immutable Form",
          "entries": [
            "You are immune to any spell or effect that would alter your form."
          ]
        },
        {
          "type": "entries",
          "name": "Lightning Absorption",
          "entries": [
            "You gain resistance to lightning damage. Whenever you take lightning damage, you gain 5 temporary hit points."
          ]
        }
      ]
    },
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This armor is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a {@spell remove curse} spell or similar magic, you are unwilling to part with the armor. In addition, while you wear the cursed armor, you gain the following properties:",
        {
          "type": "list",
          "items": [
            {
              "type": "entries",
              "name": "Aversion of Fire",
              "entries": [
                "If you take fire damage, you have disadvantage on attack rolls and ability checks until the end of your next turn."
              ]
            },
            {
              "type": "entries",
              "name": "Berserk",
              "entries": [
                "Whenever a critical hit is made against you, roll a {@dice d6}. On a 6, the armor causes you to go berserk. On each of your turns while berserk, you attack the nearest creature you can see. If no creature is near enough to move to and attack, you attack an object, with preference for an object smaller than yourself. Once the armor causes you to go berserk, it cannot be removed. You continue to attack until you are {@condition incapacitated} or until another creature is able to calm you with appropriate magic (such as a {@spell calm emotions} spell) or a successful DC 15 Charisma ({@skill Persuasion}) check."
              ]
            }
          ]
        }
      ]
    }
  ]
},
{
  "name": "Leatherworker's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 82
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 500,
  "additionalEntries": [
    "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana",
      "entries": [
        "Your expertise in working with leather grants you added insight when you inspect magic items crafted from leather, such as boots and some cloaks."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "You gain added insight when studying leather items or clues related to them, as you draw on your knowledge of leather to pick out details that others would overlook."
      ]
    },
    {
      "type": "entries",
      "name": "Identify Hides",
      "entries": [
        "When looking at a hide or a leather item, you can determine the source of the leather and any special techniques used to treat it. For example, you can spot the difference between leather crafted using dwarven methods and leather crafted using halfling methods."
      ]
    },
    {
      "type": "table",
      "caption": "Leatherworker's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Modify a leather item's appearance",
          "10"
        ],
        [
          "Determine a leather item's history",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Libram of Souls and Flesh",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "With covers made of skin and fittings of bone, this tome is cold to the touch, and it whispers faintly. When found, the book contains the following spells, which are wizard spells for you while you are attuned to the book: {@spell animate dead}, {@spell circle of death}, {@spell false life}, {@spell finger of death}, {@spell speak with dead}, {@spell summon undead|TCE}, and {@spell vampiric touch}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the necromancy school.",
        "As an action, you can expend 1 charge to take on a semblance of undeath for 10 minutes. For the duration, you take on a deathly appearance, and undead creatures are indifferent to you, unless you have damaged them. You also appear undead to all outward inspection and to spells used to determine the target's status. The effect ends if you deal damage or force a creature to make a saving throw."
      ]
    }
  ],
  "attachedSpells": [
    "animate dead",
    "circle of death",
    "false life",
    "finger of death",
    "speak with dead",
    "summon undead",
    "vampiric touch"
  ]
},
{
  "name": "Lifewell Tattoo",
  "source": "TCE",
  "resist": [
    "necrotic"
  ],
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo features symbols of life and rebirth.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Necrotic Resistance",
      "entries": [
        "You have resistance to necrotic damage."
      ]
    },
    {
      "type": "entries",
      "name": "Life Ward",
      "entries": [
        "When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this property can't be used again until the next dawn."
      ]
    }
  ]
},
{
  "name": "Lightbringer",
  "source": "LMoP",
  "baseItem": "mace",
  "type": "M",
  "rarity": "uncommon",
  "weight": 4,
  "weaponCategory": "simple",
  "dmg1": "1d6",
  "dmgType": "B",
  "bonusWeapon": "+1",
  "entries": [
    "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and made of solid brass. Named Lightbringer, this weapon glows as bright as a {@item torch} when its wielder commands. While glowing, the mace deals an extra {@damage 1d6} radiant damage to undead creatures."
  ]
},
{
  "name": "Lightning Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "lightning"
  ],
  "detail1": "yellow",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Linen (1 sq. yd.)",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 500
},
{
  "name": "Living Gloves",
  "source": "ERLW",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "grantsProficiency": true,
  "entries": [
    "These symbiotic gloves-made of thin chitin and sinew-pulse with a life of their own. To attune to them, you must wear them for the entire attunement period, during which the gloves bond with your skin.",
    "While attuned to these gloves, you gain one of the following proficiencies (your choice when you attune to the gloves):",
    {
      "type": "list",
      "items": [
        "{@skill Sleight of Hand}",
        "{@item Thieves' tools}",
        "One kind of {@item artisan's tools} of your choice",
        "One kind of {@item musical instrument} of your choice"
      ]
    },
    "When you make an ability check using the chosen proficiency, you add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
    {
      "type": "entries",
      "name": "Symbiotic Nature",
      "entries": [
        "The gloves can't be removed from you while you're attuned to them, and you can't voluntarily end your attunement to them. If you're targeted by a spell that ends a curse, your attunement to the gloves ends, and they can be removed."
      ]
    }
  ]
},
{
  "name": "Living Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2500000,
  "crew": 5,
  "vehAc": 15,
  "vehHp": 250,
  "vehDmgThresh": 15,
  "vehSpeed": 4.5,
  "capCargo": 10,
  "entries": [
    "Druids, rangers, and clerics devoted to gods of nature are often found aboard living ships, as are Wildspace explorers who don't want to have to worry about their ship's air envelope becoming fouled during a long voyage.",
    "This ship's main distinctive feature is the fully grown {@creature treant} on the aft deck. The treant has a speed of 0 because its roots are woven into the deck; it and the ship are inseparable. If the ship is reduced to 0 hit points, the treant dies of shock. The ship can function if its treant dies, but the treant can never be replaced with another.",
    "When the treant finishes a long rest, it repairs the ship's hull, enabling the ship to regain {@dice 4d12} hit points, and refreshes the ship's air envelope (turning deadly air into foul air, or foul air into fresh air).",
    "A living ship can float on water and sail across it, but it can't land safely on the ground (its keel would cause it to roll on its side). Its standard weaponry is an aft-mounted ballista."
  ],
  "seeAlsoVehicle": [
    "Living Ship|AAG"
  ]
},
{
  "name": "Loadstone",
  "source": "TftYP",
  "rarity": "rare",
  "wondrous": true,
  "curse": true,
  "weight": 1,
  "entries": [
    "This stone is a large gem worth 150 gp.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "The stone is cursed, but its magical nature is hidden; {@spell detect magic} doesn't detect it. An {@spell identify} spell reveals the stone's true nature. If you use the {@action Dash} or {@action Disengage} action while the stone is on your person, its curse activates. Until the curse is broken with {@spell remove curse} or similar magic, your speed is reduced by 5 feet, and your maximum load and maximum lift capacities are halved. You also become unwilling to part with the stone."
      ]
    }
  ]
},
{
  "name": "Loaf of Bread",
  "source": "PHB",
  "type": "FD",
  "rarity": "none",
  "value": 2
},
{
  "name": "Lock",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 1000,
  "entries": [
    "A key is provided with the lock. Without the key, a creature proficient with {@item thieves' tools} can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices."
  ]
},
{
  "name": "Lock of Trickery",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This lock appears to be an ordinary lock (of the type described in chapter 5 of the Player's Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have disadvantage."
  ]
},
{
  "name": "Longhorn",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A Faer&ucirc;nian flute of sophisticated make, found only in areas with skilled artisans, as in great cities or elven enclaves."
  ]
},
{
  "name": "Longship",
  "source": "DMG",
  "type": "SHP",
  "rarity": "none",
  "value": 1000000,
  "crew": 40,
  "vehAc": 15,
  "vehHp": 300,
  "vehDmgThresh": 15,
  "vehSpeed": 3,
  "capPassenger": 150,
  "capCargo": 10,
  "seeAlsoVehicle": [
    "Longship"
  ]
},
{
  "name": "Lord's Ensemble",
  "source": "WDH",
  "rarity": "very rare",
  "reqAttune": "by a creature with a humanoid build",
  "reqAttuneTags": [
    {
      "creatureType": "humanoid"
    }
  ],
  "wondrous": true,
  "entries": [
    "The Masked Lords of Waterdeep don this ensemble when meeting with one another. This raiment renders each lord indistinguishable from the others. The ensemble consists of three pieces-a helm, an amulet, and a robe-that function as a single magic item when worn together, but only within the city of Waterdeep and its sewers. You become attuned to the ensemble as a single item.",
    {
      "type": "entries",
      "name": "Lord's Helm",
      "entries": [
        "This bucket helm covers your head and conceals your face. Screens over the eyes help to shroud your identity without blinding you. While you wear the helm, your voice is magically altered to sound genderless, and you are immune to magic that allows other creatures to read your thoughts, to determine whether you are lying, to know your alignment, or to know your creature type. Creatures can communicate telepathically with you only if you allow it."
      ]
    },
    {
      "type": "entries",
      "name": "Lord's Amulet",
      "entries": [
        "This amulet bears the crest of Waterdeep. It functions as an {@item amulet of proof against detection and location}."
      ]
    },
    {
      "type": "entries",
      "name": "Lord's Robe",
      "entries": [
        "This elegant robe functions as a {@item ring of free action}, and it creates the illusion that you have a nondescript, androgynous humanoid build and stand 6 feet tall."
      ]
    }
  ]
},
{
  "name": "Lorehold Primer",
  "source": "SCC",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The Lorehold Primer is a magic textbook created at Strixhaven's Lorehold College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make an Intelligence ({@skill History}) or Intelligence ({@skill Religion}) check while holding the primer, you can expend 1 charge to give yourself {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
    "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the cleric or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
  ]
},
{
  "name": "Lute",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 2,
  "value": 3500
},
{
  "name": "Lute crafted of exotic wood with mother-of-pearl inlay and zircon gems (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Lyre",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 2,
  "value": 3000
},
{
  "name": "Lyre of Building",
  "source": "TCE",
  "type": "INS",
  "rarity": "rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "grantsProficiency": true,
  "entries": [
    "While holding this {@item lyre}, you can cast {@spell mending} as an action. You can also play the {@item lyre} as a reaction when an object or a structure you can see within 300 feet of you takes damage, causing it to be immune to that damage and any further damage of the same type until the start of your next turn.",
    "In addition, you can play the {@item lyre} as an action to cast {@spell fabricate}, {@spell move earth}, {@spell passwall}, or {@spell summon construct|TCE}, and that spell can't be cast from it again until the next dawn."
  ],
  "attachedSpells": [
    "fabricate",
    "mending",
    "move earth",
    "passwall",
    "summon construct"
  ]
},
{
  "name": "Mace of Disruption",
  "source": "DMG",
  "baseItem": "mace",
  "type": "M",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "dmg1": "1d6",
  "dmgType": "B",
  "entries": [
    "When you hit a fiend or an undead with this magic weapon, that creature takes an extra {@damage 2d6} radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes {@condition frightened} of you until the end of your next turn.",
    "While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Mace of Smiting",
  "source": "DMG",
  "baseItem": "mace",
  "type": "M",
  "tier": "major",
  "rarity": "rare",
  "weight": 4,
  "weaponCategory": "simple",
  "dmg1": "1d6",
  "dmgType": "B",
  "bonusWeapon": "+1",
  "entries": [
    "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.",
    "When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
    "{@note Note: According to the SRD, it is an extra {@dice 2d6} and {@damage 4d6} bludgeoning damage, although {@link this is incorrect|https://rpg.stackexchange.com/a/174522/53884}}."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Mace of Terror",
  "source": "DMG",
  "baseItem": "mace",
  "type": "M",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "dmg1": "1d6",
  "dmgType": "B",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become {@condition frightened} of you for 1 minute. While it is {@condition frightened} in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the {@action Dodge} action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
    "The mace regains {@dice 1d3} expended charges daily at dawn."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Maddgoth's Helm",
  "source": "WDMM",
  "type": "OTH",
  "rarity": "very rare",
  "reqAttune": "by a humanoid",
  "reqAttuneTags": [
    {
      "creatureType": "humanoid"
    }
  ],
  "entries": [
    "While you wear this helm and are inside Maddgoth's castle, on its roof, or in its courtyard, you have immunity to all damage. If the helm is taken from the castle, it turns to dust and is destroyed."
  ]
},
{
  "name": "Magnifying Glass",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
  ]
},
{
  "name": "Malachite",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque striated light and dark green gemstone."
  ]
},
{
  "name": "Malice",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 25000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become {@condition poisoned} for 1 hour. The {@condition poisoned} creature is {@condition blinded}."
  ],
  "poisonTypes": [
    "inhaled"
  ]
},
{
  "name": "Manacles",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 6,
  "value": 200,
  "entries": [
    "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with {@item thieves' tools} can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."
  ]
},
{
  "name": "Mantle of Spell Resistance",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "You have advantage on saving throws against spells while you wear this cloak."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Manual of Bodily Health",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "ability": {
    "con": 2
  },
  "entries": [
    "This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Manual of Clay Golems",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes {@damage 6d6} psychic damage.",
    "To create a {@creature clay golem}, you must spend 30 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 65,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
  ]
},
{
  "name": "Manual of Flesh Golems",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes {@damage 6d6} psychic damage.",
    "To create a {@creature flesh golem}, you must spend 60 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 50,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
  ]
},
{
  "name": "Manual of Gainful Exercise",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "ability": {
    "str": 2
  },
  "entries": [
    "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Manual of Iron Golems",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes {@damage 6d6} psychic damage.",
    "To create an {@creature iron golem}, you must spend 120 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 100,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
  ]
},
{
  "name": "Manual of Quickness of Action",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "ability": {
    "dex": 2
  },
  "entries": [
    "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Manual of Stone Golems",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a manual of golems and attempts to read it takes {@damage 6d6} psychic damage.",
    "To create a {@creature stone golem}, you must spend 90 days, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay 80,000 gp to purchase supplies. Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands."
  ]
},
{
  "name": "Map or Scroll Case",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 100,
  "entries": [
    "This cylindrical leather case can hold up to ten rolled-up {@item paper (one sheet)|sheets of paper} or five rolled-up {@item parchment (one sheet)|sheets of parchment}."
  ],
  "containerCapacity": {
    "item": [
      {
        "parchment (one sheet)": 5,
        "paper (one sheet)": 10
      }
    ]
  }
},
{
  "name": "Marble font with gold inlay (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Mask of the Beast",
  "source": "ToA",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask you can expend 1 charge and use the mask to cast the {@spell animal friendship} spell as an action. The mask regains all expended charges at dawn."
  ],
  "attachedSpells": [
    "animal friendship"
  ]
},
{
  "name": "Mason's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 83
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 8,
  "value": 1000,
  "additionalEntries": [
    "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "Your expertise aids you in identifying a stone building's date of construction and purpose, along with insight into who might have built it."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "You gain additional insight when inspecting areas within stone structures."
      ]
    },
    {
      "type": "entries",
      "name": "Perception",
      "entries": [
        "You can spot irregularities in stone walls or floors, making it easier to find trap doors and secret passages."
      ]
    },
    {
      "type": "entries",
      "name": "Demolition",
      "entries": [
        "Your knowledge of masonry allows you to spot weak points in brick walls. You deal double damage to such structures with your weapon attacks."
      ]
    },
    {
      "type": "table",
      "caption": "Mason's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Chisel a small hole in a stone wall",
          "10"
        ],
        [
          "Find a weak point in a stone wall",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Masque Charm",
  "source": "SCC",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "A masque charm is a small silver pin. While wearing this charm, you can use an action to cast the {@spell disguise self} spell (DC 13 to discern the disguise). Once the spell is cast, it can't be cast from the charm again until the next sunset. When casting the spell, you can have the spell last for its normal 1 hour duration or for 6 hours. If you choose the 6-hour duration, the charm becomes nonmagical when the spell ends. In either case, the spell ends if the charm is removed from you."
  ],
  "attachedSpells": [
    "disguise self"
  ]
},
{
  "name": "Masquerade Tattoo",
  "source": "TCE",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo appears on your body as whatever you desire.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Fluid Ink",
      "entries": [
        "As a bonus action, you can shape the tattoo into any color or pattern and move it to any area of your skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of art that covers all your skin."
      ]
    },
    {
      "type": "entries",
      "name": "Disguise Self",
      "entries": [
        "As an action, you can use the tattoo to cast the {@spell disguise self} spell (DC 13 to discern the disguise). Once the spell is cast from the tattoo, it can't be cast from the tattoo again until the next dawn."
      ]
    }
  ],
  "attachedSpells": [
    "disguise self"
  ]
},
{
  "name": "Masterpiece painting in mahogany frame with gold inlay (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Mastiff",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 2500,
  "carryingCapacity": 195,
  "speed": 40
},
{
  "name": "Medal of Muscle",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "You can squeeze this medal tightly in the palm of your hand as an action. Doing so gives you advantage on Strength checks and Strength saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
  ]
},
{
  "name": "Medal of Wit",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "You can press this medal to your temple as an action. Doing so gives you advantage on Intelligence checks and Intelligence saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
  ]
},
{
  "name": "Medal of the Conch",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "modifySpeed": {
    "equal": {
      "swim": "walk"
    }
  },
  "entries": [
    "When you use an action to rub this medal, you gain a swimming speed equal to your walking speed for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
  ]
},
{
  "name": "Medal of the Horizonback",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "When you would be hit by an attack, you can use your reaction to increase your AC by 5 until the start of your next turn, including against the triggering attack. You must be wearing the medal and able to see the creature that made the triggering attack to use this property. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
  ]
},
{
  "name": "Medal of the Maze",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "When you use an action to trace the maze inscribed on this medal, you gain advantage on Wisdom checks and know the quickest route to the end of any nonmagical path or maze for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
  ]
},
{
  "name": "Medal of the Meat Pie",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "You gain {@dice 2d4 + 2} temporary hit points when you use an action to press this medal to your mouth. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
    "While magical, this medal is slightly warm to the touch (as if it's fresh from the oven) and smells faintly of baked pie crust."
  ]
},
{
  "name": "Medal of the Wetlands",
  "source": "CRCotN",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "When you use an action to trace the edge of this medal, {@quickref difficult terrain||3} doesn't cost you extra movement for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
  ]
},
{
  "name": "Medallion of Thoughts",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the {@spell detect thoughts} spell (save DC 13) from it. The medallion regains {@dice 1d3} expended charges daily at dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "detect thoughts"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Merchant's Scale",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 3,
  "value": 500,
  "entries": [
    "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
  ]
},
{
  "name": "Mess Kit",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 20,
  "entries": [
    "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
  ]
},
{
  "name": "Midnight Tears",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 150000,
  "poison": true,
  "entries": [
    "A creature that ingests this poison suffers no effect until the stroke of midnight. If the poison has not been neutralized before then, the creature must succeed on a DC 17 Constitution saving throw, taking 31 ({@damage 9d6}) poison damage on a failed save, or half as much damage on a successful one."
  ],
  "poisonTypes": [
    "ingested"
  ]
},
{
  "name": "Military Saddle",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 30,
  "value": 2000,
  "entries": [
    "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted."
  ]
},
{
  "name": "Mind Lash",
  "source": "VGM",
  "type": "M",
  "rarity": "rare",
  "reqAttune": "by a mind flayer",
  "weight": 3,
  "property": [
    "F",
    "R"
  ],
  "dmg1": "1d4",
  "dmgType": "S",
  "entries": [
    "In the hands of any creature other than a {@creature mind flayer}, a mind lash functions as a normal whip. In the hands of an illithid, this magic weapon strips away a creature's will to survive as it also strips away flesh, dealing an extra {@damage 2d4} psychic damage to any target it hits. Any creature that takes psychic damage from the mind lash must also succeed on a DC 15 Wisdom saving throw or have disadvantage on Intelligence, Wisdom, and Charisma saving throws for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  ]
},
{
  "name": "Miner's Pick",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 10,
  "value": 200
},
{
  "name": "Mirror of Life Trapping",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 50,
  "entries": [
    "When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.",
    "If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again.",
    "Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.",
    "An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.",
    "If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.",
    "While within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally.",
    "In a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Mirror of Reflected Pasts",
  "source": "DSotDQ",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 25,
  "entries": [
    "This mirror of elven design allows those who stare into it to reflect on positive memories. The 3-foot-tall mirror weighs 25 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed if reduced to 0 hit points.",
    "While holding the mirror upright, you can use an action to speak its command word and activate it. While activated, the mirror hovers in the air, and it can be destroyed but not moved. It remains activated until you use an action to speak the command word again or your attunement to the mirror ends, at which point the mirror harmlessly floats to the ground. Once the mirror has been deactivated, it can't be activated again until the next dawn.",
    "If a non-Construct creature other than you sees its reflection in the activated mirror while within 30 feet of it, that creature must succeed on a DC 15 Wisdom saving throw or become {@condition paralyzed} until the mirror is deactivated or until that creature can no longer see the mirror. A creature {@condition paralyzed} by the mirror can repeat the saving throw at the end of each of its turns, ending the effect on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this mirror's effect for the next 24 hours.",
    "While {@condition paralyzed} by the mirror, the creature sees events from their past reflected in the mirror's glass. These memories aren't real, but rather idealized versions of those occurrences. Nearby observers can glimpse flashes of these memories if looking indirectly at the mirror."
  ]
},
{
  "name": "Mirror of the Past",
  "source": "TftYP",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "The holder of this platinum hand mirror can learn something about the history of a specific object or creature by taking an action to gaze into the mirror and think of the target. Instead of the holder's reflection, the mirror presents scenes from the target's past. Information conveyed is accurate, but it is random and cryptic, and presented in no particular order. Once it is activated, the mirror gives its information for 1 minute or less, then returns to normal. It can't be used again until the next dawn."
  ]
},
{
  "name": "Mizzium Apparatus",
  "source": "GGR",
  "rarity": "uncommon",
  "reqAttune": "by a sorcerer, warlock, or wizard",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    },
    {
      "class": "warlock"
    },
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 8,
  "focus": [
    "Sorcerer",
    "Warlock",
    "Wizard"
  ],
  "entries": [
    "Innovation is a dangerous pursuit, at least the way the mages of the Izzet League engage in it. As protection against the risk of an experiment going awry, they have developed a device to help channel and control their magic. This apparatus is a collection of leather straps, flexible tubing, glass cylinders, and plates, bracers, and fittings made from a magic-infused metal alloy called mizzium, all assembled into a harness. The item weighs 8 pounds.",
    "While you are wearing the mizzium apparatus, you can use it as an arcane focus. In addition, you can attempt to cast a spell that you do not know or have prepared. The spell you choose must be on your class's spell list and of a level for which you have a spell slot, and you must provide the spell's components.",
    "You expend a spell slot to cast the spell as normal, but before resolving it you must make an Intelligence ({@skill Arcana}) check. The DC is 10 + twice the level of the spell slot you expend to cast the spell.",
    "On a successful check, you cast the spell as normal, using your spell save DC and spellcasting ability modifier. On a failed check, you cast a different spell from the one you intended. Randomly determine the spell you cast by rolling on the table for the level of the spell slot you expended. If the slot is 6th level or higher, roll on the table for 5th-level spells.",
    "If you try to cast a cantrip you don't know, the DC for the Intelligence ({@skill Arcana}) check is 10, and on a failed check, there is no effect.",
    {
      "type": "table",
      "caption": "1st-Level Spells",
      "colLabels": [
        "d6",
        "spell"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "{@spell burning hands}"
        ],
        [
          "2",
          "{@spell chaos bolt|XGE}"
        ],
        [
          "3",
          "{@spell color spray}"
        ],
        [
          "4",
          "{@spell faerie fire}"
        ],
        [
          "5",
          "{@spell fog cloud}"
        ],
        [
          "6",
          "{@spell thunderwave}"
        ]
      ]
    },
    {
      "type": "table",
      "caption": "2nd-Level Spells",
      "colLabels": [
        "d6",
        "spell"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "{@spell blur}"
        ],
        [
          "2",
          "{@spell gust of wind}"
        ],
        [
          "3",
          "{@spell heat metal}"
        ],
        [
          "4",
          "{@spell Melf's acid arrow}"
        ],
        [
          "5",
          "{@spell scorching ray}"
        ],
        [
          "6",
          "{@spell shatter}"
        ]
      ]
    },
    {
      "type": "table",
      "caption": "3rd-Level Spells",
      "colLabels": [
        "d6",
        "spell"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "{@spell fear}"
        ],
        [
          "2",
          "{@spell feign death}"
        ],
        [
          "3",
          "{@spell fireball}"
        ],
        [
          "4",
          "{@spell gaseous form}"
        ],
        [
          "5",
          "{@spell sleet storm}"
        ],
        [
          "6",
          "{@spell stinking cloud}"
        ]
      ]
    },
    {
      "type": "table",
      "caption": "4th-Level Spells",
      "colLabels": [
        "d4",
        "spell"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "{@spell confusion}"
        ],
        [
          "2",
          "{@spell conjure minor elementals}"
        ],
        [
          "3",
          "{@spell Evard's black tentacles}"
        ],
        [
          "4",
          "{@spell ice storm}"
        ]
      ]
    },
    {
      "type": "table",
      "caption": "5th-Level Spells",
      "colLabels": [
        "d4",
        "spell"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "{@spell animate objects}"
        ],
        [
          "2",
          "{@spell cloudkill}"
        ],
        [
          "3",
          "{@spell cone of cold}"
        ],
        [
          "4",
          "{@spell flame strike}"
        ]
      ]
    }
  ]
},
{
  "name": "Mizzium Mortar",
  "source": "GGR",
  "rarity": "rare",
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d4}",
  "charges": 4,
  "entries": [
    "This short tube, about 2 feet long and 6 inches in diameter, is made from mizzium, a magically enhanced metal alloy forged by the Izzet League. The end that's pointed toward a target is open, and a glowing ball of molten metal can be seen at the other end as long as the mortar has at least 1 charge remaining.",
    "The mortar has 4 charges for the following properties. It regains {@dice 1d4} expended charges daily at dawn.",
    {
      "type": "entries",
      "name": "Molten Spray",
      "entries": [
        "You can expend 1 charge as an action to loose a 30-foot cone of molten mizzium. Each creature in the area must make a DC 15 Dexterity saving throw, taking {@damage 5d4} fire damage on a failed save, or half as much damage on a successful one."
      ]
    },
    {
      "type": "entries",
      "name": "Mizzium Bombard",
      "entries": [
        "You can expend 3 charges as an action to launch a hail of molten projectiles in a 20-foot-radius, 40-foot-high cylinder centered on a point you can see within 60 feet of you. Each creature in the area must make a DC 15 Dexterity saving throw. A creature takes {@damage 5d8} fire damage on a failed save, or half as much damage on a successful one."
      ]
    }
  ]
},
{
  "name": "Monster Hunter's Pack",
  "source": "VRGR",
  "type": "G",
  "rarity": "none",
  "weight": 48.5,
  "value": 3300,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item chest}",
        "a {@item crowbar}",
        "a {@item hammer}",
        "three wooden stakes",
        "a {@item holy symbol}",
        "a {@item holy water (flask)|flask of holy water}",
        "a set of {@item manacles}",
        "a {@item steel mirror}",
        "a {@item oil (flask)|flask of oil}",
        "a {@item tinderbox}",
        "3 {@item torch|torches}"
      ]
    }
  ],
  "packContents": [
    "backpack",
    "chest",
    "crowbar",
    "hammer",
    {
      "special": "wooden stake",
      "quantity": 3
    },
    "holy symbol",
    "holy water (flask)",
    "manacles",
    "steel mirror",
    "oil (flask)",
    "tinderbox",
    {
      "item": "torch",
      "quantity": 3
    }
  ]
},
{
  "name": "Moodmark Paint",
  "source": "GGR",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This thick, black paint is stored in a small jar, containing enough paint to apply moodmarks to one creature. The paint is dabbed on the face in spots or markings that often resemble the eyes of insects or spiders. Applying the paint in this way takes 1 minute.",
    "For the next 8 hours, the marks change to reflect your mental state. A creature that can see you and makes a successful DC 10 Wisdom ({@skill Insight}) check can discern whether you are happy, sad, angry, disgusted, surprised, or afraid, as well as the main source of that emotion. For example, you might communicate fear caused by a monster you just saw around the corner, grief at the loss of a friend, or happiness derived from pride in your performance in combat. A dark elf has advantage on this check."
  ]
},
{
  "name": "Moonstone",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A translucent white with pale blue glow gemstone."
  ]
},
{
  "name": "Moorbounder",
  "source": "EGW",
  "type": "MNT",
  "rarity": "none",
  "value": 40000,
  "entries": [
    "Beasts of burden are common throughout Xhorhas, and often horses and other riding animals are the best or only option. For those who require speed and have a little more coin to spend, the best option is often a moorbounder. However, moorbounders that haven't undergone proper training or established bonds of trust with their masters tend to attack and even eat their riders.",
    "Moorbounders can cost anywhere from 300 to 500 gp each. They're often cheaper and more abundant in towns on the wastes than in cities like Rosohna."
  ]
},
{
  "name": "Moss Agate",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "A translucent pink or yellow-white with mossy gray or green markings gemstone."
  ]
},
{
  "name": "Mule",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 800,
  "carryingCapacity": 420,
  "speed": 40
},
{
  "name": "Mummy Rot Antidote",
  "source": "IMR",
  "type": "P",
  "rarity": "uncommon",
  "entries": [
    "White dust swirls constantly within this pale gray potion. When you drink the potion, it cures you of mummy rot."
  ]
},
{
  "name": "Muroosa Balm",
  "source": "EGW",
  "type": "G",
  "resist": [
    "fire"
  ],
  "rarity": "none",
  "value": 10000,
  "entries": [
    "This paste made from the muroosa bush is known to help prevent sunburn, but it is also a fire retardant. After spending 1 minute applying a quarter pint of muroosa balm to your skin, you gain resistance against fire damage for 1 hour.",
    "A dose of muroosa balm sufficient for treating sunburn costs 1 gp."
  ]
},
{
  "name": "Mystery Key",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "A question mark is worked into the head of this key. The key has a {@chance 5} chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
  ]
},
{
  "name": "Narycrash",
  "source": "DSotDQ",
  "type": "G",
  "rarity": "none",
  "entries": [
    "This backpack-sized device holds a balloon-based parachute. If you fall while wearing this device, you can use your reaction to deploy the parachute. Once deployed, the parachute rapidly inflates, and you descend 60 feet per round and take no damage from falling. When you are 10 feet away from the ground, roll a {@dice d20}. If you roll a 5 or less, the parachute gives out, and you begin to fall normally."
  ]
},
{
  "name": "Nature's Mantle",
  "source": "TCE",
  "rarity": "uncommon",
  "reqAttune": "by a druid or ranger",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "ranger"
    }
  ],
  "wondrous": true,
  "weight": 2,
  "focus": [
    "Druid",
    "Ranger"
  ],
  "entries": [
    "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a spellcasting focus for your druid and ranger spells.",
    "While you are in an area that is lightly obscured, you can {@action Hide} as a bonus action even if you are being directly observed."
  ]
},
{
  "name": "Nautiloid",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 5000000,
  "crew": 20,
  "vehAc": 15,
  "vehHp": 400,
  "vehDmgThresh": 15,
  "vehSpeed": 4.5,
  "capCargo": 17,
  "entries": [
    "Built and used by mind flayers, nautiloids are designed exclusively for space travel. They can't float on water, nor can they land safely on the ground.",
    "As an action, a creature attuned to a nautiloid's spelljamming helm and in physical contact with the ship can transport the nautiloid and all creatures and objects aboard it to a different plane of existence, at or near a destination envisioned by the spelljammer (or to a random location on the plane if no destination is envisioned). This property is a feature of the ship, not the spelljamming helm. Each time this property is used, roll a {@dice d6}. On a 5-6, the property recharges after 1 minute; otherwise, it can't be used again for 24 hours."
  ],
  "seeAlsoVehicle": [
    "Nautiloid|AAG"
  ]
},
{
  "name": "Navigation Orb",
  "source": "SKT",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "A navigation orb is a hollow, 7-foot-diameter sphere of thin, polished mithral with a large skye (cloud) rune embossed on its outer surface. The orb levitates 10 feet above the ground and is keyed to a particular cloud castle, allowing you to control that castle's altitude and movement while the orb is inside the castle. If the orb is destroyed or removed from its castle, the castle's altitude and location remain fixed until the orb is returned or replaced.",
    "As an action, you can cause one of the following effects to occur if you are touching the orb:",
    "The castle moves at a speed of 1 mph in a straight line, in a direction of your choice, until the castle stops or is made to stop, or until another action is used to change its direction. If this movement brings the castle into contact with the ground, the castle lands gently.",
    "The castle, if it is moving, comes to a gradual stop.",
    "The castle makes a slow, 90-degree turn clockwise or counterclockwise (turning a northerly view into a westerly view, for example). The castle can turn while it is moving in a straight line.",
    "Any creature touching the orb knows the altitude of the base of the castle above the ground or water below it."
  ]
},
{
  "name": "Navigator's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 83
    }
  ],
  "type": "T",
  "rarity": "none",
  "weight": 2,
  "value": 2500,
  "entries": [
    "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."
  ],
  "additionalEntries": [
    "Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill."
      ]
    },
    {
      "type": "entries",
      "name": "Survival",
      "entries": [
        "Knowledge of navigator's tools helps you avoid becoming lost and also grants you insight into the most likely location for roads and settlements."
      ]
    },
    {
      "type": "entries",
      "name": "Sighting",
      "entries": [
        "By taking careful measurements, you can determine your position on a nautical chart and the time of day."
      ]
    },
    {
      "type": "table",
      "caption": "Navigator's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Plot a course",
          "10"
        ],
        [
          "Discover your position on a nautical chart",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Necklace of Adaptation",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as {@spell cloudkill} and {@spell stinking cloud} effects, inhaled poisons, and the breath weapons of some dragons)."
  ],
  "optionalfeatures": [
    "replicate magic item"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Necklace of Fireballs",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This necklace has {@dice 1d6 + 3} beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level {@spell fireball} spell (save DC 15).",
    "You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the {@spell fireball} by 1 for each bead beyond the first."
  ],
  "attachedSpells": [
    "fireball"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Necklace of Prayer Beads",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a cleric, druid, or paladin",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    },
    {
      "class": "paladin"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This necklace has {@dice 1d4 + 2} magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.",
    "Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d20}",
        "Bead of...",
        "Spell"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-2",
        "col-9"
      ],
      "rows": [
        [
          "1-6",
          "Blessing",
          "{@spell Bless}"
        ],
        [
          "7-12",
          "Curing",
          "{@spell Cure wounds} (2nd level) or {@spell lesser restoration}"
        ],
        [
          "13-16",
          "Favor",
          "{@spell Greater restoration}"
        ],
        [
          "17-18",
          "Smiting",
          "{@spell Branding smite}"
        ],
        [
          "19",
          "Summons",
          "{@spell Planar ally}"
        ],
        [
          "20",
          "Wind walking",
          "{@spell Wind walk}"
        ]
      ]
    }
  ],
  "attachedSpells": [
    "bless",
    "cure wounds",
    "lesser restoration",
    "greater restoration",
    "branding smite",
    "planar ally",
    "wind walk"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Necklace of electrum medallions with red and blue tournalines (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Necklace of jade and pink pearls (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Necklace string of small pink pearls",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Necrotic Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "necrotic"
  ],
  "detail1": "black",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Needle of Mending",
  "source": "EGW",
  "baseItem": "dagger",
  "type": "M",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 1,
  "weaponCategory": "simple",
  "property": [
    "F",
    "L",
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d4",
  "dmgType": "P",
  "bonusWeapon": "+1",
  "weapon": true,
  "entries": [
    "This weapon is a magic dagger disguised as a sewing needle. When you hold it and use a bonus action to speak its command word, it transforms into a dagger or back into a needle.",
    "You gain a +1 bonus to attack and damage rolls made with the dagger. While holding it, you can use an action to cast the {@spell mending} cantrip from it."
  ],
  "attachedSpells": [
    "mending"
  ]
},
{
  "name": "Nib",
  "source": "WDH",
  "type": "$",
  "rarity": "none",
  "value": 1,
  "entries": [
    "Copper coin about the size of a thumbnail (1 nib = 1 common copper coin)"
  ]
},
{
  "name": "Night Caller",
  "source": "TftYP",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This whistle is carved from transparent crystal, and it resembles a tiny dragon curled up like a snail. The name Night Caller is etched on the whistle in Dwarvish runes. If a character succeeds on a DC 20 Intelligence ({@skill Arcana} or {@skill History}) check, the character recalls lore that says the {@creature duergar} made several such whistles for various groups in an age past.",
    "If you blow the whistle in darkness or under the night sky, it allows you to cast the {@spell animate dead} spell. The target can be affected through up to 10 feet of soft earth or similar material, and if it is, it takes 1 minute to claw its way to the surface to serve you. Once the whistle has animated an undead creature, it can't do so again until 7 days have passed.",
    "Once every 24 hours, you can blow the whistle to reassert control over one or two creatures you animated with it."
  ],
  "attachedSpells": [
    "animate dead"
  ]
},
{
  "name": "Nightspider",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 5000000,
  "crew": 25,
  "vehAc": 19,
  "vehHp": 300,
  "vehDmgThresh": 15,
  "vehSpeed": 4.5,
  "capCargo": 50,
  "entries": [
    "Neogi terrorize Wildspace in ships of their own construction, which others call nightspiders. These vessels often wait in ambush for other ships. Once a target ship is identified, the neogi try to steal its spelljamming helm and capture its crew.",
    "A nightspider's crew usually consists of nineteen neogi and up to a half-dozen umber hulks, which the neogi use as shock troops.",
    "Nightspiders are designed for space travel alone and can't float on water or land safely on the ground (the weight of the ship would snap its spindly legs, destroying its weblike rigging in the process). Standard weaponry on a nightspider includes four ballistae (two forward-facing and two aft-facing) and a forward-facing mangonel."
  ],
  "seeAlsoVehicle": [
    "Nightspider|AAG"
  ]
},
{
  "name": "Nolzur's Marvelous Pigments",
  "source": "DMG",
  "tier": "minor",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "Typically found in {@dice 1d4} pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image.",
    "Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain features-such as a door, a pit, flowers, trees, cells, rooms, or weapons-that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet.",
    "When you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. Thus, painting a door on a wall creates an actual door that can be opened to whatever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of objects you create.",
    "Nothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material.",
    "If you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Oathbow",
  "source": "DMG",
  "baseItem": "longbow",
  "type": "R",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 2,
  "weaponCategory": "martial",
  "property": [
    "A",
    "H",
    "2H"
  ],
  "range": "150/600",
  "dmg1": "1d8",
  "dmgType": "P",
  "entries": [
    "When you nock an arrow on this bow, it whispers in Elvish, \"Swift defeat to my enemies.\" When you use this weapon to make a ranged attack, you can, as a command phrase, say, \"Swift death to you who have wronged me.\" The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.",
    "When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra {@damage 3d6} piercing damage.",
    "While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons."
  ],
  "ammoType": "arrow",
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Obsidian",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque black gemstone."
  ]
},
{
  "name": "Obsidian statuette with gold fittings and inlay",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Oil (flask)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 10,
  "entries": [
    "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."
  ]
},
{
  "name": "Oil of Etherealness",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the {@spell etherealness} spell for 1 hour."
  ],
  "attachedSpells": [
    "etherealness"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Oil of Sharpness",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "bonusWeapon": "+3",
  "entries": [
    "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Oil of Slipperiness",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a {@spell freedom of movement} spell for 8 hours.",
    "Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the {@spell grease} spell in that area for 8 hours."
  ],
  "attachedSpells": [
    "freedom of movement"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Oil of Taggit",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 40000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or become {@condition poisoned} for 24 hours. The {@condition poisoned} creature is {@condition unconscious}. The creature wakes up if it takes damage."
  ],
  "poisonTypes": [
    "contact"
  ]
},
{
  "name": "Old masterpiece painting",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Olisuba Leaf",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "These dried leaves of the Olisuba tree, when steeped to make a tea, can help a body recover from strenuous activity. If you drink a dose of Olisuba tea during a long rest, your {@condition exhaustion} level is reduced by 2 instead of 1 at the end of that long rest."
  ]
},
{
  "name": "Onyx",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An opaque black and white banded, or pure black or white gemstone."
  ]
},
{
  "name": "Opal",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A translucent pale blue with green and golden mottling gemstone."
  ]
},
{
  "name": "Opal of the Ild Rune",
  "source": "SKT",
  "resist": [
    "cold"
  ],
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This triangular fire opal measures about three inches on each side and is half an inch thick. The ild (fire) rune shimmers within its core, causing it to be slightly warm to the touch. The opal has the following properties, which work only while it's on your person.",
    {
      "name": "Ignite",
      "type": "entries",
      "entries": [
        "As an action, you can ignite an object within 10 feet of you. The object must be flammable, and the fire starts in a circle no larger than 1 foot in diameter."
      ]
    },
    {
      "name": "Fires Friend",
      "type": "entries",
      "entries": [
        "You have resistance to cold damage."
      ]
    },
    {
      "name": "Fire Tamer",
      "type": "entries",
      "entries": [
        "As an action, you can extinguish any open flame within 10 feet of you. You choose how much fire to extinguish in that radius."
      ]
    },
    {
      "name": "Gift of Flame",
      "type": "entries",
      "entries": [
        "You can transfer the opal's magic to a nonmagical item-a weapon or a suit of armor-by tracing the ild rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the opal is destroyed, and the rune appears in red on the chosen item, which gains a benefit based on its form:",
        {
          "type": "list",
          "style": "list-hang-notitle",
          "items": [
            {
              "type": "item",
              "name": "Weapon",
              "entry": "The weapon is now an uncommon magic weapon. It deals an extra {@damage 1d6} fire damage to any target it hits."
            },
            {
              "type": "item",
              "name": "Armor",
              "entry": "The armor is now a rare magic item that requires attunement. You have resistance to cold damage while wearing the armor."
            }
          ]
        }
      ]
    }
  ]
},
{
  "name": "Orb of Direction",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "While holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane."
  ]
},
{
  "name": "Orb of Gonging",
  "source": "WDMM",
  "rarity": "common",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "This common wondrous item is a hollow, 5-inch-diameter orb that weighs 5 pounds. Its outer shell is composed of notched bronze rings, which can be turned so that the notches line up. Aligning the notches requires an action, and doing so causes the orb to gong loudly until the notches are no longer aligned. The sounds are spaced 6 seconds apart and can be heard out to a range of 600 feet."
  ]
},
{
  "name": "Orb of Time",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "While holding this orb, you can use an action to determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane."
  ]
},
{
  "name": "Orb of the Stein Rune",
  "source": "SKT",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 3,
  "entries": [
    "This orb of granite is about the size of an adult human's fist. The stein (stone) rune appears on it in the form of crystalline veins that run across the surface. The orb has the following properties, which work only while it's on your person.",
    {
      "type": "entries",
      "name": "Indomitable Stand",
      "entries": [
        "As an action, you can channel the orb's magic to hold your ground. For the next minute or until you move any distance, you have advantage on all checks and saving throws to resist effects that force you to move. In addition, any enemy that moves to a space within 10 feet of you must succeed on a DC 12 Strength saving throw or be unable to move any farther this turn."
      ]
    },
    {
      "type": "entries",
      "name": "Stone Soul",
      "entries": [
        "You can't be {@condition petrified}."
      ]
    },
    {
      "type": "entries",
      "name": "Earthen Step",
      "entries": [
        "You can cast {@spell meld into stone} as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "type": "entries",
      "name": "Gift of Stone",
      "entries": [
        "You can transfer the orb's magic to a nonmagical item-a shield or a pair of boots-by tracing the stein rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the orb is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:",
        {
          "type": "list",
          "style": "list-hang-notitle",
          "items": [
            {
              "type": "item",
              "name": "Shield",
              "entry": "The shield is now a rare magic item that requires attunement. While you wield it, you have resistance to all damage dealt by ranged weapon attacks."
            },
            {
              "type": "item",
              "name": "Boots",
              "entry": "The pair of boots is now an uncommon magic item that requires attunement. While you wear the boots, you have advantage on Strength saving throws, and you can use your reaction to avoid being knocked {@condition prone}."
            }
          ]
        }
      ]
    }
  ],
  "attachedSpells": [
    "meld into stone"
  ]
},
{
  "name": "Orb of the Veil",
  "source": "EGW",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "weight": 3,
  "ability": {
    "wis": 2
  },
  "entries": [
    "This onyx sphere bears deep, spiraling grooves and dangles from an iron chain. While the orb is on your person, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "Your Wisdom score increases by 2, as does your maximum for that score.",
        "You gain {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision}, the orb increases its range by 60 feet.",
        "You have advantage on Wisdom checks to find hidden doors and paths."
      ]
    },
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "The orb is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the orb, keeping it on your person at all times. All nonmagical flames within 30 feet of you automatically extinguish, and fire damage dealt by you is halved."
      ]
    }
  ]
},
{
  "name": "Orc Stone",
  "source": "IDRotF",
  "rarity": "uncommon",
  "reqAttune": "by a recipient only",
  "wondrous": true,
  "entries": [
    "I saved the life of an orc, who gave me a stone with the symbol of the Many-Arrows tribe (a humanoid skull pierced by three arrows) carved into it. The stone is an uncommon magic item that requires attunement, and only I can attune to it.",
    "As an action, I can use the stone to summon the spirit of an orc warrior, which appears within 30 feet of me. The spirit uses the {@creature orc war chief} stat block in the Monster Manual and disappears after 10 minutes or when reduced to 0 hit points. The spirit understands any language I speak and obeys my commands.",
    "After the stone is used three times, it turns to dust. (See Appendix B of Icewind Dale: Rime of the Frostmaiden)"
  ]
},
{
  "name": "Order of the Silver Dragon +2 Shield",
  "source": "CoS",
  "type": "S",
  "tier": "major",
  "rarity": "rare",
  "weight": 6,
  "ac": 2,
  "bonusAc": "+2",
  "entries": [
    "While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
    "The shield is emblazoned with a stylized silver dragon that is the emblem of the Order of the Silver Dragon (see {@adventure {@i Curse of Strahd}, chapter 7|CoS|7|The Order of the Silver Dragon}). The shield whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn't {@condition incapacitated}.",
    "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time."
  ]
},
{
  "name": "Ornithopter of Flying",
  "source": "WBtW",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 25,
  "entries": [
    "You can use this contraption to fly, provided your weight (including whatever you are wearing or carrying) doesn't exceed 300 pounds. The ornithopter has a flying speed of 30 feet, and it moves according to your spoken directions while you are riding it. It can't hover. If the ornithopter loses its rider while airborne, it falls and can't fly again for {@dice 1d6 + 4} days.",
    "The ornithopter is 8 feet long, has a 14-foot wingspan, and weighs 25 pounds."
  ]
},
{
  "name": "Orzhov Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Orzhov, allows you to cast {@spell command}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Orzhov's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "command"
  ]
},
{
  "name": "Orzhov Keyrune",
  "source": "GGR",
  "rarity": "rare",
  "reqAttune": "by a member of the Orzhov guild",
  "reqAttuneTags": [
    {
      "background": "orzhov representative|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "This keyrune is carved from white marble with veins of black. The end is shaped like a thrull's head, with a gold faceplate affixed. On command, the keyrune transforms into a {@creature winged thrull|GGR} for up to 2 hours. If you don't come from an Orzhov oligarch family, it serves you grudgingly, clownishly aping your movements and mannerisms while carrying out your orders.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature winged thrull|GGR}. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Outer Essence Shard",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "Roll a {@dice d4} and consult the Outer Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
    {
      "type": "table",
      "caption": "Outer Essence Shards",
      "colLabels": [
        "d4",
        "Property",
        "Shard"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-2 text-center",
        "col-8"
      ],
      "rows": [
        [
          "1",
          "Lawful",
          "{@item Outer Essence Shard (Lawful)|TCE}"
        ],
        [
          "2",
          "Chaotic",
          "{@item Outer Essence Shard (Chaotic)|TCE}"
        ],
        [
          "3",
          "Good",
          "{@item Outer Essence Shard (Good)|TCE}"
        ],
        [
          "4",
          "Evil",
          "{@item Outer Essence Shard (Evil)|TCE}"
        ]
      ]
    }
  ]
},
{
  "name": "Outer Essence Shard (Chaotic)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "Choose one creature who takes damage from the spell. That target has disadvantage on attack rolls and ability checks made before the start of your next turn."
      ]
    }
  ]
},
{
  "name": "Outer Essence Shard (Evil)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "Choose one creature who takes damage from the spell. That target takes an extra {@damage 3d6} necrotic damage."
      ]
    }
  ]
},
{
  "name": "Outer Essence Shard (Good)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "You or one creature of your choice that you can see within 30 feet of you gains {@dice 3d6} temporary hit points."
      ]
    }
  ]
},
{
  "name": "Outer Essence Shard (Lawful)",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
    {
      "type": "entries",
      "name": "Property",
      "entries": [
        "You can end one of the following conditions affecting yourself or one creature you can see within 30 feet of you: {@condition charmed}, {@condition blinded}, {@condition deafened}, {@condition frightened}, {@condition poisoned}, or {@condition stunned}."
      ]
    }
  ]
},
{
  "name": "Ox",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 1500
},
{
  "name": "Pack Saddle",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 15,
  "value": 500
},
{
  "name": "Painted gold child's sarcophagus",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Painted gold war mask",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Painter's Supplies",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 83
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 1000,
  "additionalEntries": [
    "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana, History, Religion",
      "entries": [
        "Your expertise aids you in uncovering lore of any sort that is attached to a work of art, such as the magical properties of a painting or the origins of a strange mural found in a dungeon."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation, Perception",
      "entries": [
        "When you inspect a painting or a similar work of visual art, your knowledge of the practices behind creating it can grant you additional insight."
      ]
    },
    {
      "type": "entries",
      "name": "Painting and Drawing",
      "entries": [
        "As part of a short or long rest, you can produce a simple work of art. Although your work might lack precision, you can capture an image or a scene, or make a quick copy of a piece of art you saw."
      ]
    },
    {
      "type": "table",
      "caption": "Painter's Supplies",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Paint an accurate portrait",
          "10"
        ],
        [
          "Create a painting with a hidden message",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Pair of engraved bone dice",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Pair of engraved bone dice (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Pale Tincture",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 25000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 16 Constitution saving throw or take 3 ({@damage 1d6}) poison damage and become {@condition poisoned}. The {@condition poisoned} creature must repeat the saving throw every 24 hours, taking 3 ({@damage 1d6}) poison damage on a failed save. Until this poison ends, the damage the poison deals can't be healed by any means. After seven successful saving throws, the effect ends and the creature can heal normally."
  ],
  "poisonTypes": [
    "ingested"
  ]
},
{
  "name": "Pan Flute",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 2,
  "value": 1200
},
{
  "name": "Paper (one sheet)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 20
},
{
  "name": "Paper Bird",
  "source": "WDH",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "After you write a message of fifty words or fewer on this magic sheet of parchment and speak a creature's name, the parchment magically folds into a Tiny paper bird and flies to the recipient whose name you uttered. The recipient must be on the same plane of existence as you, otherwise the bird turns into ash as it takes flight.",
    "The bird is an object that has 1 hit point, an Armor Class of 13, a flying speed of 60 feet, a Dexterity of 16 (+3), and a score of 1 (-5) in all other abilities, and it is immune to poison and psychic damage.",
    "It travels to within 5 feet of its intended recipient by the most direct route, whereupon it turns into a nonmagical and inanimate sheet of parchment that can be unfolded only by the intended recipient. If the bird's hit points or speed is reduced to 0 or if it is otherwise immobilized, it turns into ash.",
    "Paper birds usually come in small, flat boxes containing {@dice 1d6 + 3} sheets of the parchment."
  ]
},
{
  "name": "Parchment (one sheet)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 10
},
{
  "name": "Pariah's Shield",
  "source": "GGR",
  "type": "S",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "bonusAc": "+1",
  "entries": [
    "Soldiers of the Boros Legion consider it an honor to bear this shield, even knowing that it might be the last honor they receive. The front of the shield is sculpted to depict a grieving human face.",
    "You gain a +1 bonus to AC for every two allies within 5 feet of you (up to a maximum of +3) while you wield this shield. This bonus is in addition to the shield's normal bonus to AC.",
    "When a creature you can see within 5 feet of you takes damage, you can use your reaction to take that damage, instead of the creature taking it. When you do so, the damage type changes to force."
  ]
},
{
  "name": "Pearl",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "An opaque lustrous white, yellow, or pink gemstone."
  ]
},
{
  "name": "Pearl of Power",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "entries": [
    "While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Pennant of the Vind Rune",
  "source": "SKT",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "bonus": {
      "*": 5
    }
  },
  "entries": [
    "This blue pennant is crafted from silk and is five feet long and whips about as if buffeted by a wind. The vind (wind) rune appears on its surface, looking almost like a cloud. The pennant has the following properties, which work only while it's on your person.",
    {
      "type": "entries",
      "name": "Wind Step",
      "entries": [
        "As an action, you fly up to 20 feet. If you don't land at the end of this flight, you fall unless you have another means of staying aloft."
      ]
    },
    {
      "type": "entries",
      "name": "Comforting Wind",
      "entries": [
        "You can't suffocate."
      ]
    },
    {
      "type": "entries",
      "name": "Winds Grasp",
      "entries": [
        "As a reaction when you fall, you can cause yourself to take no damage from the fall. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "type": "entries",
      "name": "Wind Walker",
      "entries": [
        "While you are attuned to this rune, you can cast {@spell levitate} as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "type": "entries",
      "name": "Gift of Wind",
      "entries": [
        "You can transfer the pennant's magic to a nonmagical item-a suit of armor, a pair of boots, or a cloak-by tracing the vind rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the pennant is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:",
        {
          "type": "list",
          "style": "list-hang-notitle",
          "items": [
            {
              "type": "item",
              "name": "Armor",
              "entry": "The armor is now an uncommon magic item that requires attunement. You gain a bonus to speed of 5 feet while you wear the armor, and if it normally imposes disadvantage on {@skill Stealth} checks, it no longer does so."
            },
            {
              "type": "item",
              "name": "Boots/Cloak",
              "entry": "The pair of boots or cloak is now a rare magic item that requires attunement. While wearing the item, you can convert up to 20 feet of your movement on each of your turns into flight. If you don't land at the end of this flight, you fall unless you have another means of staying aloft. You can also cast {@spell feather fall} once from the item, and you regain the ability to do so when you finish a short or long rest."
            }
          ]
        }
      ]
    }
  ],
  "attachedSpells": [
    "levitate",
    "feather fall"
  ]
},
{
  "name": "Pepper",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 200
},
{
  "name": "Peregrine Mask",
  "source": "GGR",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "static": {
      "fly": 60
    }
  },
  "entries": [
    "While wearing this winged helm, you have a flying speed of 60 feet. In addition, you have advantage on initiative rolls."
  ]
},
{
  "name": "Perfume (vial)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 500
},
{
  "name": "Perfume of Bewitching",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This tiny vial contains magic perfume, enough for one use. You can use an action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic."
  ]
},
{
  "name": "Periapt of Health",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed while you wear the pendant."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Periapt of Proof against Poison",
  "source": "DMG",
  "immune": [
    "poison"
  ],
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the {@condition poisoned} condition and have immunity to poison damage."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Periapt of Wound Closure",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Peridot",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 50000,
  "entries": [
    "A transparent rich olive green gemstone."
  ]
},
{
  "name": "Pewter mug with green spinels (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Philter of Love",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "The next time you see a creature within 10 minutes after drinking this philter, you become {@condition charmed} by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are {@condition charmed}. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Piercer",
  "source": "AI",
  "baseItem": "shortsword",
  "type": "M",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 2,
  "weaponCategory": "martial",
  "property": [
    "F",
    "L"
  ],
  "dmg1": "1d6",
  "dmgType": "P",
  "bonusWeapon": "+1",
  "entries": [
    "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
    "A character attuned to the sword regains the maximum possible number of hit points from expended Hit Dice. However, the attuned character must eat twice as much food each day (a minimum of 2 pounds) to avoid {@condition exhaustion} (see \"The Environment\" in chapter 8 of the Player's Handbook.)"
  ]
},
{
  "name": "Pig",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 300
},
{
  "name": "Pipe of Remembrance",
  "source": "GoS",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This long, delicate wooden pipe features a bowl made from smooth river stone. When the pipe is lit, smoke exhaled from it does not dissipate, instead lingering around the bearer. After 10 minutes, the smoke forms moving shapes that reenact the bearer's most impressive and heroic achievements for 5 minutes. When this realistic performance is complete, the smoke dissipates. The pipe can't be used this way again until the next dawn."
  ]
},
{
  "name": "Pipe of Smoke Monsters",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
  ]
},
{
  "name": "Pipes of Haunting",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 2,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become {@condition frightened} of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain {@dice 1d3} expended charges daily at dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Pipes of the Sewers",
  "source": "DMG",
  "type": "INS",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "weight": 2,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.",
    "The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one {@creature swarm of rats} with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain {@dice 1d3} expended charges daily at dawn.",
    "Whenever a {@creature swarm of rats} that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Pitcher",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 2,
  "entries": [
    "A pitcher holds 1 gallon of liquid."
  ]
},
{
  "name": "Piton",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 0.25,
  "value": 5
},
{
  "name": "Piwafwi (Cloak of Elvenkind)",
  "source": "OotA",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This dark spider-silk cloak is made by {@creature drow}. It is a {@item cloak of elvenkind}. It loses its magic if exposed to sunlight for 1 hour without interruption.",
    "While you wear this cloak with its hood up, Wisdom ({@skill Perception}) checks made to see you have disadvantage. and you have advantage on Dexterity ({@skill Stealth}) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
  ]
},
{
  "name": "Piwafwi of Fire Resistance",
  "source": "OotA",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This dark spider-silk cloak is made by {@creature drow}. It is a {@item cloak of elvenkind}. It also grants resistance to fire damage while you wear it. It loses its magic if exposed to sunlight for 1 hour without interruption.",
    "While you wear this cloak with its hood up, Wisdom ({@skill Perception}) checks made to see you have disadvantage. and you have advantage on Dexterity ({@skill Stealth}) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
  ]
},
{
  "name": "Pixie Dust",
  "source": "WBtW",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "As an action, you can sprinkle this dust on yourself or another creature you can see within 5 feet of you. The recipient gains a flying speed of 30 feet and the ability to hover for 1 minute. If the creature is airborne when this effect ends, it falls safely to the ground, taking no damage and landing on its feet.",
    "A small packet holds enough pixie dust for one use."
  ]
},
{
  "name": "Planar Key",
  "source": "AitFR-THP",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This key is etched with sigils.",
    "A planar key begins existence with {@dice 1d4 + 1} charges and cannot regain charges. When the key's last charge is expended, the key's sigils and magic fade away, but the key remains.",
    "While touching the key, you can use your action to expend 1 charge and have the key cast {@spell plane shift} limited to the key's predefined destination only. Each planar key links to a single destination defined when the key is made."
  ],
  "attachedSpells": [
    "plane shift"
  ]
},
{
  "name": "Planecaller's Codex",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "The pages of this book are bound in fiend hide, and its cover is embossed with a diagram of the Great Wheel of the multiverse. When found, the book contains the following spells: {@spell banishment}, {@spell find familiar}, {@spell gate}, {@spell magic circle}, {@spell planar binding}, and {@spell summon elemental|TCE}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.",
        "When you cast a conjuration spell that summons or creates one creature, you can expend 1 charge to grant that creature advantage on attack rolls for 1 minute."
      ]
    }
  ],
  "attachedSpells": [
    "banishment",
    "find familiar",
    "gate",
    "magic circle",
    "planar binding",
    "summon elemental"
  ]
},
{
  "name": "Platinum",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 50000
},
{
  "name": "Platinum (pp)",
  "source": "PHB",
  "type": "$",
  "rarity": "none",
  "weight": 0.02,
  "value": 1000,
  "entries": [
    "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
    "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
    "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
    "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
    "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
    "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
  ]
},
{
  "name": "Platinum 10-Zino Coin",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 1000
},
{
  "name": "Platinum 100-Zino Coin",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 10000
},
{
  "name": "Platinum bracelet set with a sapphire",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Platinum headdress with topaz sun symbol (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 250000
},
{
  "name": "Platinum ring with yellow sapphire (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Platinum staff topped with amber (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Playing Card Set",
  "source": "PHB",
  "type": "GS",
  "rarity": "none",
  "value": 50
},
{
  "name": "Poison Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "poison"
  ],
  "detail1": "violet",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Poisoner's Kit",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 83
    }
  ],
  "type": "T",
  "rarity": "none",
  "weight": 2,
  "value": 5000,
  "entries": [
    "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.",
    "Additionally, the {@book Crafting and Harvesting Poison|dmg|8|Crafting and Harvesting Poison} rules require the use of a poisoner's kit."
  ],
  "additionalEntries": [
    "A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "Your training with poisons can help you when you try to recall facts about infamous poisonings."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation, Perception",
      "entries": [
        "Your knowledge of poisons has taught you to handle those substances carefully, giving you an edge when you inspect {@condition poisoned} objects or try to extract clues from events that involve poison."
      ]
    },
    {
      "type": "entries",
      "name": "Medicine",
      "entries": [
        "When you treat the victim of a poison, your knowledge grants you added insight into how to provide the best care to your patient."
      ]
    },
    {
      "type": "entries",
      "name": "Nature, Survival",
      "entries": [
        "Working with poisons enables you to acquire lore about which plants and animals are poisonous."
      ]
    },
    {
      "type": "entries",
      "name": "Handle Poison",
      "entries": [
        "Your proficiency allows you to handle and apply a poison without risk of exposing yourself to its effects."
      ]
    },
    {
      "type": "table",
      "caption": "Poisoner's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Spot a {@condition poisoned} object",
          "10"
        ],
        [
          "Determine the effects of a poison",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Pole (10-foot)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 7,
  "value": 5
},
{
  "name": "Pole of Angling",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole."
  ]
},
{
  "name": "Pole of Collapsing",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "While holding this 10-foot pole, you can use an action to speak a command word and cause it to collapse into a 1-foot-long rod, for ease of storage. The pole's weight doesn't change. You can use an action to speak a different command word and cause the rod to revert to a pole; however, the rod will elongate only as far as the surrounding space allows."
  ]
},
{
  "name": "Pony",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 3000,
  "carryingCapacity": 225,
  "speed": 40
},
{
  "name": "Portable Hole",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.",
    "You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.",
    "You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.",
    "If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.",
    "Placing a portable hole inside an extradimensional space created by a {@item bag of holding}, {@item Heward's handy haversack}, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Portable Ram",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 35,
  "value": 400,
  "entries": [
    "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
  ]
},
{
  "name": "Pot of Awakening",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an {@creature awakened shrub} at the end of that time. When the shrub awakens, its roots break the pot, destroying it.",
    "The awakened shrub is friendly toward you. Absent commands from you, it does nothing."
  ]
},
{
  "name": "Potion of Acid Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "acid"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Advantage",
  "source": "WBtW",
  "type": "P",
  "rarity": "uncommon",
  "entries": [
    "When you drink this potion, you gain advantage on one ability check, attack roll, or saving throw of your choice that you make within the next hour.",
    "This potion takes the form of a sparkling, golden mist that moves and pours like water."
  ]
},
{
  "name": "Potion of Animal Friendship",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "When you drink this potion, you can cast the {@spell animal friendship} spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair."
  ],
  "attachedSpells": [
    "animal friendship"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Potion of Aqueous Form",
  "source": "MOT",
  "type": "P",
  "rarity": "rare",
  "modifySpeed": {
    "static": {
      "swim": 30
    }
  },
  "entries": [
    "When you drink this potion, you transform into a pool of water. You return to your true form after 10 minutes or if you are {@condition incapacitated} or die.",
    "You're under the following effects while in this form:",
    {
      "type": "list",
      "style": "list-hang-notitle",
      "items": [
        {
          "type": "item",
          "name": "Liquid Movement",
          "entry": "You have a swimming speed of 30 feet. You can move over or through other liquids. You can enter and occupy the space of another creature. You can rise up to your normal height, and you can pass through even Tiny openings. You extinguish nonmagical flames in any space you enter."
        },
        {
          "type": "item",
          "name": "Watery Resilience",
          "entry": "You have resistance to nonmagical damage. You also have advantage on Strength, Dexterity, and Constitution saving throws."
        },
        {
          "type": "item",
          "name": "Limitations",
          "entry": "You can't talk, attack, cast spells, or activate magic items. Any objects you were carrying or wearing meld into your new form and are inaccessible, though you continue to be affected by anything you're wearing, such as armor."
        }
      ]
    }
  ]
},
{
  "name": "Potion of Clairvoyance",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "When you drink this potion, you gain the effect of the {@spell clairvoyance} spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened."
  ],
  "attachedSpells": [
    "clairvoyance"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Climbing",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "common",
  "modifySpeed": {
    "equal": {
      "climb": "walk"
    }
  },
  "entries": [
    "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength ({@skill Athletics}) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors."
  ],
  "lootTables": [
    "Magic Item Table A"
  ]
},
{
  "name": "Potion of Cloud Giant Strength",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "ability": {
    "static": {
      "str": 27
    }
  },
  "entries": [
    "When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
    "This potion's transparent liquid has floating in it a sliver of fingernail from a {@creature cloud giant}."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Potion of Cold Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "cold"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Comprehension",
  "source": "WDMM",
  "type": "P",
  "rarity": "common",
  "entries": [
    "When you drink this potion, you gain the effect of a {@spell comprehend languages} spell for 1 hour. This liquid is a clear concoction with bits of salt and soot swirling in it."
  ]
},
{
  "name": "Potion of Diminution",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "When you drink this potion, you gain the \"reduce\" effect of the {@spell enlarge/reduce} spell for {@dice 1d4} hours (no {@status concentration} required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process."
  ],
  "attachedSpells": [
    "enlarge/reduce"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Fire Breath",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking {@damage 4d6} fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Potion of Fire Giant Strength",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "ability": {
    "static": {
      "str": 25
    }
  },
  "entries": [
    "When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
    "This potion's transparent liquid has floating in it a sliver of fingernail from a {@creature fire giant}."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Fire Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "fire"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Flying",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "modifySpeed": {
    "equal": {
      "fly": "walk"
    }
  },
  "entries": [
    "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Potion of Force Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "force"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Frost Giant Strength",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "ability": {
    "static": {
      "str": 23
    }
  },
  "entries": [
    "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
    "This potion's transparent liquid has floating in it a sliver of fingernail from a {@creature frost giant}."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Gaseous Form",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "When you drink this potion, you gain the effect of the {@spell gaseous form} spell for 1 hour (no {@status concentration} required) or until you end the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water."
  ],
  "attachedSpells": [
    "gaseous form"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Greater Healing",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "You regain {@dice 4d4 + 4} hit points when you drink this potion. The potion's red liquid glimmers when agitated."
  ],
  "lootTables": [
    "Magic Item Table A",
    "Magic Item Table B"
  ]
},
{
  "name": "Potion of Growth",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "When you drink this potion, you gain the \"enlarge\" effect of the {@spell enlarge/reduce} spell for {@dice 1d4} hours (no {@status concentration} required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process."
  ],
  "attachedSpells": [
    "enlarge/reduce"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Potion of Healing",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "common",
  "weight": 0.5,
  "value": 5000,
  "entries": [
    "You regain {@dice 2d4 + 2} hit points when you drink this potion. The potion's red liquid glimmers when agitated."
  ],
  "lootTables": [
    "Magic Item Table A"
  ]
},
{
  "name": "Potion of Heroism",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the {@spell bless} spell (no {@status concentration} required). This blue potion bubbles and steams as if boiling."
  ],
  "attachedSpells": [
    "bless"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Hill Giant Strength",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "ability": {
    "static": {
      "str": 21
    }
  },
  "entries": [
    "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
    "This potion's transparent liquid has floating in it a sliver of fingernail from a {@creature hill giant}."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Potion of Invisibility",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become {@condition invisible} for 1 hour. Anything you wear or carry is {@condition invisible} with you. The effect ends early if you attack or cast a spell."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Potion of Invulnerability",
  "source": "DMG",
  "type": "P",
  "resist": [
    "acid",
    "bludgeoning",
    "cold",
    "fire",
    "force",
    "lightning",
    "necrotic",
    "piercing",
    "poison",
    "psychic",
    "radiant",
    "slashing",
    "thunder"
  ],
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "For 1 minute after you drink this potion, you have resistance to all damage. The potion's syrupy liquid looks like liquefied iron."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Lightning Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "lightning"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Longevity",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "When you drink this potion, your physical age is reduced by {@dice 1d6 + 6} years, to a minimum of 13 years. Each time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by {@dice 1d6 + 6} years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Potion of Maximum Power",
  "source": "EGW",
  "type": "P",
  "rarity": "rare",
  "entries": [
    "The first time you cast a damage-dealing spell of 4th level or lower within 1 minute after drinking the potion, instead of rolling dice to determine the damage dealt, you can instead use the highest number possible for each die.",
    "This glowing purple liquid smells of sugar and plum, but it has a muddy taste."
  ]
},
{
  "name": "Potion of Mind Control (beast)",
  "source": "TftYP",
  "type": "P",
  "rarity": "rare",
  "entries": [
    "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.",
    "A potion of mind control produces the effect of a {@spell dominate beast} spell. If the target's initial saving throw fails, the effect lasts for 1 hour, with no {@status concentration} required on your part. The {@condition charmed} creature has disadvantage on new saving throws to break the effect during this time."
  ],
  "attachedSpells": [
    "dominate beast"
  ]
},
{
  "name": "Potion of Mind Control (humanoid)",
  "source": "TftYP",
  "type": "P",
  "rarity": "rare",
  "entries": [
    "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.",
    "A potion of mind control produces the effect of a {@spell dominate person} spell. If the target's initial saving throw fails, the effect lasts for 1 hour, with no {@status concentration} required on your part. The {@condition charmed} creature has disadvantage on new saving throws to break the effect during this time."
  ],
  "attachedSpells": [
    "dominate person"
  ]
},
{
  "name": "Potion of Mind Control (monster)",
  "source": "TftYP",
  "type": "P",
  "rarity": "very rare",
  "entries": [
    "When you drink a potion of mind control, you can cast a dominate spell (save DC 15) on a specific creature if you do so before the end of your next turn. If you don't, the potion is wasted.",
    "A potion of mind control produces the effect of a {@spell dominate monster} spell. If the target's initial saving throw fails, the effect lasts for 1 hour, with no {@status concentration} required on your part. The {@condition charmed} creature has disadvantage on new saving throws to break the effect during this time."
  ],
  "attachedSpells": [
    "dominate monster"
  ]
},
{
  "name": "Potion of Mind Reading",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "When you drink this potion, you gain the effect of the {@spell detect thoughts} spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it."
  ],
  "attachedSpells": [
    "detect thoughts"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Necrotic Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "necrotic"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Poison",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "This concoction looks, smells, and tastes like a {@item potion of healing} or other beneficial potion. However, it is actually poison masked by illusion magic. An {@spell identify} spell reveals its true nature.",
    "If you drink it, you take {@damage 3d6} poison damage, and you must succeed on a DC 13 Constitution saving throw or be {@condition poisoned}. At the start of each of your turns while you are {@condition poisoned} in this way, you take {@damage 3d6} poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by {@dice 1d6}. The poison ends when the damage decreases to 0."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Potion of Poison Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "poison"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Possibility",
  "source": "EGW",
  "type": "P",
  "rarity": "very rare",
  "entries": [
    "When you drink this clear potion, you gain two Fragments of Possibility, each of which looks like a Tiny, grayish bead of energy that follows you around, staying within 1 foot of you at all times. Each fragment lasts for 8 hours or until used.",
    "When you make an attack roll, an ability check, or a saving throw, you can expend your fragment to roll an additional {@dice d20} and choose which of the {@dice d20}s to use. Alternatively, when an attack roll is made against you, you can expend your fragment to roll a {@dice d20} and choose which of the {@dice d20}s to use, the one you rolled or the one the attacker rolled.",
    "If the original {@dice d20} roll has advantage or disadvantage, you roll your {@dice d20} after advantage or disadvantage has been applied to the original roll.",
    "While you have one or more Fragments of Possibility from this potion, you can't gain another Fragment of Possibility from any source."
  ]
},
{
  "name": "Potion of Psychic Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "psychic"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Radiant Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "radiant"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Speed",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "When you drink this potion, you gain the effect of the {@spell haste} spell for 1 minute (no {@status concentration} required). The potion's yellow fluid is streaked with black and swirls on its own."
  ],
  "attachedSpells": [
    "haste"
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Potion of Stone Giant Strength",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "ability": {
    "static": {
      "str": 23
    }
  },
  "entries": [
    "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.",
    "This potion's transparent liquid has floating in it a sliver of fingernail from a {@creature stone giant}."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Superior Healing",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "You regain {@dice 8d4 + 8} hit points when you drink this potion. The potion's red liquid glimmers when agitated."
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Potion of Supreme Healing",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "You regain {@dice 10d4 + 20} hit points when you drink this potion. The potion's red liquid glimmers when agitated."
  ],
  "lootTables": [
    "Magic Item Table D",
    "Magic Item Table E"
  ]
},
{
  "name": "Potion of Thunder Resistance",
  "source": "DMG",
  "type": "P",
  "resist": [
    "thunder"
  ],
  "tier": "minor",
  "rarity": "uncommon",
  "hasRefs": true,
  "entries": [
    "{#itemEntry Potion of Resistance}"
  ]
},
{
  "name": "Potion of Vitality",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "When you drink this potion, it removes any {@condition exhaustion} you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat."
  ],
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Potion of Watchful Rest",
  "source": "WDMM",
  "type": "P",
  "rarity": "common",
  "entries": [
    "When you drink this potion, you gain the following benefits for the next 8 hours: magic can't put you to sleep, and you can remain awake during a long rest and still gain its benefits. This sweet, amber-colored brew has no effect on creatures that don't require sleep, such as elves."
  ]
},
{
  "name": "Potion of Water Breathing",
  "source": "DMG",
  "type": "P",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Potter's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 84
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 3,
  "value": 1000,
  "additionalEntries": [
    "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "Your expertise aids you in identifying ceramic objects, including when they were created and their likely place or culture of origin."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation, Perception",
      "entries": [
        "You gain additional insight when inspecting ceramics, uncovering clues others would overlook by spotting minor irregularities."
      ]
    },
    {
      "type": "entries",
      "name": "Reconstruction",
      "entries": [
        "By examining pottery shards, you can determine an object's original, intact form and its likely purpose."
      ]
    },
    {
      "type": "table",
      "caption": "Potter's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Determine what a vessel once held",
          "10"
        ],
        [
          "Create a serviceable pot",
          "15"
        ],
        [
          "Find a weak point in a ceramic object",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Pouch",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 50,
  "entries": [
    "A cloth or leather pouch can hold up to 20 {@item sling bullet|sling bullets} or 50 {@item blowgun needle|blowgun needles}, among other things. A compartmentalized pouch for holding spell components is called a {@item component pouch}. A pouch can hold up to &frac15; cubic foot or 6 pounds of gear."
  ],
  "containerCapacity": {
    "weight": [
      6
    ],
    "item": [
      {
        "sling bullet": 20,
        "blowgun needle": 50
      }
    ]
  }
},
{
  "name": "Pressure Capsule",
  "source": "GoS",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This small capsule is made of beeswax blended with sand and a variety of enchanted water plants. A creature who consumes a pressure capsule ignores the effects of swimming at depths greater than 100 feet (see \"{@book Unusual Environments|dmg|5|Unusual Environments}\" in chapter 5 of the Dungeon Master's Guide)."
  ]
},
{
  "name": "Pride Silk",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 10000,
  "entries": [
    "The hearty silk unique to the region has long been a point of pride with the locals. When processed and woven properly, the resulting cloth is pride silk: an extremely flexible material with the durability of tanned leather. Pride silk has become a favorite cloth for use on military ship sails, war banners, and other utilitarian applications, but has also gained popularity in affluent circles. High-end clothing made from pride silk is both fashionable and protective, leading many nobles and wealthy merchants to seek full outfits and formal gowns made with it. The tailors skilled enough to create such outfits are few and far between, so while pride silk might be expensive as a raw material, outfits made of the cloth are prohibitively expensive for most common folk."
  ]
},
{
  "name": "Pride Silk Outfit",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 50000,
  "entries": [
    "An outfit made of pride silk weighs 4 pounds and costs 500 gp. If you aren't wearing armor, your base Armor Class is 11 + your Dexterity modifier while wearing it."
  ]
},
{
  "name": "Priest's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 24,
  "value": 1900,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item backpack}",
        "a {@item blanket}",
        "10 {@item candle|candles}",
        "a {@item tinderbox}",
        "an alms box",
        "2 blocks of incense",
        "a censer",
        "vestments",
        "2 days of {@item Rations (1 day)|rations}",
        "a {@item waterskin}."
      ]
    }
  ],
  "packContents": [
    "backpack",
    "blanket",
    {
      "item": "candle",
      "quantity": 10
    },
    "tinderbox",
    {
      "item": "rations (1 day)",
      "quantity": 2
    },
    "waterskin",
    {
      "special": "alms box"
    },
    {
      "special": "block of incense",
      "quantity": 2
    },
    {
      "special": "censer"
    },
    {
      "special": "vestments"
    }
  ]
},
{
  "name": "Prismari Primer",
  "source": "SCC",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The Prismari Primer is a magic textbook created at Strixhaven's Prismari College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make a Dexterity ({@skill Acrobatics}) or a Charisma ({@skill Performance}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
    "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the bard or sorcerer spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
  ]
},
{
  "name": "Professor Orb",
  "source": "WDMM",
  "rarity": "rare",
  "wondrous": true,
  "sentient": true,
  "weight": 5,
  "entries": [
    "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.",
    "A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"{@book Sentient Magic Items|DMG|7|Sentient Magic Items}\" section in chapter 7 of the {@book Dungeon Master's Guide|dmg}. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling {@dice 3d6} for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.",
    "A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).",
    "In addition to the knowledge it possesses, a professor orb can cast the {@spell mage hand} cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
  ],
  "attachedSpells": [
    "mage hand"
  ]
},
{
  "name": "Propeller Helm",
  "source": "WDMM",
  "rarity": "uncommon",
  "reqAttune": "by a small humanoid",
  "reqAttuneTags": [
    {
      "creatureType": "humanoid",
      "size": "S"
    }
  ],
  "wondrous": true,
  "entries": [
    "While worn, the helm allows its wearer to use an action to cast the {@spell levitate} spell, requiring no components. The helm's propeller spins and whirs loudly until the spell ends. Each time the spell ends, there is a {@chance 50|50 percent} chance that the helm loses its magic and becomes nonmagical."
  ]
},
{
  "name": "Prosthetic Limb",
  "source": "TCE",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This item replaces a lost limb-a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action, and it can't be removed against your will. It detaches if you die."
  ]
},
{
  "name": "Protective Verses",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "wondrous": true,
  "weight": 3,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "focus": [
    "Wizard"
  ],
  "entries": [
    "This leather-bound spellbook is reinforced with iron and silver fittings and an iron lock (DC 20 to open). As an action, you can touch the book's cover and cause it to lock as if you cast {@spell arcane lock} on it. When found, the book contains the following spells: {@spell arcane lock}, {@spell dispel magic}, {@spell globe of invulnerability}, {@spell glyph of warding}, {@spell Mordenkainen's private sanctum}, {@spell protection from evil and good||protection from evil}, and {@spell symbol}. It functions as a spellbook for you.",
    "While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
    "The book has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. You can use the charges in the following ways while holding it:",
    {
      "type": "list",
      "items": [
        "If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the abjuration school.",
        "When you cast an abjuration spell, you can expend 1 charge to grant a creature you can see within 30 feet of you {@dice 2d10} temporary hit points."
      ]
    }
  ],
  "attachedSpells": [
    "arcane lock",
    "dispel magic",
    "globe of invulnerability",
    "glyph of warding",
    "mordenkainen's private sanctum",
    "protection from evil and good",
    "symbol"
  ]
},
{
  "name": "Psi Crystal",
  "source": "IDRotF",
  "rarity": "uncommon",
  "reqAttune": "by a creature with an intelligence score of 3 or higher",
  "reqAttuneTags": [
    {
      "int": 3
    }
  ],
  "wondrous": true,
  "entries": [
    "This crystal grants you telepathy for as long as you remain attuned to it. See the {@book introduction of the Monster Manual|MM|0|Telepathy} for rules on how this telepathy works.",
    "The crystal also glows with a purplish inner light while you are attuned to it.",
    "The higher your intelligence, the greater the light's intensity and the greater the range of the telepathy (see the Psi Crystal Properties table).",
    {
      "type": "table",
      "caption": "Psi Crystal Properties",
      "colStyles": [
        "col-2 text-center",
        "col-2 text-center",
        "col-8"
      ],
      "colLabels": [
        "Intelligence Score",
        "Range of Telepathy",
        "Light Intensity"
      ],
      "rows": [
        [
          "3-7",
          "15 feet",
          "Dim light out to a range of 5 feet"
        ],
        [
          "8-11",
          "30 feet",
          "Bright light in a 5-foot radius and dim light for an additional 5 feet"
        ],
        [
          "12-15",
          "60 feet",
          "Bright light in a 10-foot radius and dim light for an additional 10 feet"
        ],
        [
          "16 or higher",
          "120 feet",
          "Bright light in a 15-foot radius and dim light for an additional 15 feet"
        ]
      ]
    }
  ]
},
{
  "name": "Psychic Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "psychic"
  ],
  "detail1": "silver",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Purple Worm Poison",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 200000,
  "poison": true,
  "entries": [
    "This poison must be harvested from a dead or {@condition incapacitated} {@creature purple worm}. A creature subjected to this poison must make a DC 19 Constitution saving throw, taking 42 ({@damage 12d6}) poison damage on a failed save, or half as much damage on a successful one."
  ],
  "poisonTypes": [
    "injury"
  ]
},
{
  "name": "Pyroconverger",
  "source": "GGR",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "A Pyroconverger is an Izzet-made flamethrower. It carries a risk of malfunction each time you use it.",
    "As an action, you can cause the Pyroconverger to project fire in a 10-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking {@damage 4d6} fire damage on a failed save, or half as much damage on a successful one.",
    "Each time you use the Pyroconverger, roll a {@dice d10} and add the number of times you have used it since your last long rest. If the total is 11 or higher, the Pyroconverger malfunctions: you take {@damage 4d6} fire damage, and you can't use the Pyroconverger again until you finish a long rest."
  ]
},
{
  "name": "Quaal's Feather Token, Anchor",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect.",
    {
      "name": "Anchor",
      "type": "entries",
      "entries": [
        "You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears."
      ]
    }
  ]
},
{
  "name": "Quaal's Feather Token, Bird",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect.",
    {
      "name": "Bird",
      "type": "entries",
      "entries": [
        "You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a {@creature roc}, but it obeys your simple commands and can't attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day. with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action."
      ]
    }
  ]
},
{
  "name": "Quaal's Feather Token, Fan",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect.",
    {
      "name": "Fan",
      "type": "entries",
      "entries": [
        "If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action."
      ]
    }
  ]
},
{
  "name": "Quaal's Feather Token, Swan Boat",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect.",
    {
      "name": "Swan Boat",
      "type": "entries",
      "entries": [
        "You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action."
      ]
    }
  ]
},
{
  "name": "Quaal's Feather Token, Tree",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect.",
    {
      "name": "Tree",
      "type": "entries",
      "entries": [
        "You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius."
      ]
    }
  ]
},
{
  "name": "Quaal's Feather Token, Whip",
  "source": "DMG",
  "tier": "minor",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect.",
    {
      "name": "Whip",
      "type": "entries",
      "entries": [
        "You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of {@hit 9}. On a hit, the target takes {@damage 1d6 + 5} force damage.",
        "As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are {@condition incapacitated} or die."
      ]
    }
  ]
},
{
  "name": "Quandrix Primer",
  "source": "SCC",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The Quandrix Primer is a magic textbook created at Strixhaven's Quandrix College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make an Intelligence ({@skill Arcana}) or an Intelligence ({@skill Nature}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
    "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the druid or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
  ]
},
{
  "name": "Quartz",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A transparent white, smoky gray, or yellow gemstone."
  ]
},
{
  "name": "Quiver",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 100,
  "entries": [
    "A quiver can hold up to 20 {@item arrow|arrows}."
  ],
  "containerCapacity": {
    "item": [
      {
        "arrow": 20
      }
    ]
  }
},
{
  "name": "Quiver of Ehlonna",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 2,
  "entries": [
    "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty {@item arrow|arrows}, {@item crossbow bolt|bolts}, or similar objects. The midsize compartment holds up to eighteen {@item javelin|javelins} or similar objects. The longest compartment holds up to six long objects, such as bows, {@item quarterstaff|quarterstaffs}, or {@item spear|spears}.",
    "You can draw any item the quiver contains as if doing so from a regular quiver or scabbard."
  ],
  "containerCapacity": {
    "item": [
      {
        "crossbow bolt": 60,
        "arrow": 60
      },
      {
        "javelin": 18
      },
      {
        "quarterstaff": 6,
        "spear": 6
      }
    ],
    "weightless": true
  },
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Radiant Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "radiant"
  ],
  "detail1": "gold",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Rain Catcher",
  "source": "ToA",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 100,
  "entries": [
    "A rain catcher is a simple contraption consisting of a 5-foot-square leather tarp and a wooden frame with legs. When the tarp is stretched across the wooden frame, it forms a basin that can catch 2 gallons of drinking water per inch of rainfall and hold up to 8 gallons. The tarp and wooden frame fold up for easy transport."
  ]
},
{
  "name": "Rakdos Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Rakdos, allows you to cast {@spell hellish rebuke}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Rakdos' recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "hellish rebuke"
  ]
},
{
  "name": "Rakdos Keyrune",
  "source": "GGR",
  "rarity": "uncommon",
  "reqAttune": "by a member of the Rakdos guild",
  "reqAttuneTags": [
    {
      "background": "rakdos cultist|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "This dark granite keyrune is marbled with scarlet veins and carved with the leering visage of a mischievous demon. When activated, it transforms into a {@creature cackler|GGR} for up to 1 hour.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature cackler|GGR}. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Rations (1 day)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 2,
  "value": 50,
  "entries": [
    "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
  ]
},
{
  "name": "Red Chromatic Rose",
  "source": "WBtW",
  "resist": [
    "fire"
  ],
  "detail1": "wreathed in fire",
  "rarity": "rare",
  "wondrous": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Chromatic Rose}"
  ]
},
{
  "name": "Red Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "fire"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to fire damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest red dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Reincarnation Dust",
  "source": "EGW",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "When this small pouch of purple dust is sprinkled on a dead humanoid or a piece of a dead humanoid, the dust is absorbed by the remains. If willing, the dead creature returns to life with a new body as if the {@spell reincarnate} spell had been cast on the remains."
  ],
  "attachedSpells": [
    "reincarnate"
  ]
},
{
  "name": "Reliquary",
  "source": "PHB",
  "type": "SCF",
  "scfType": "holy",
  "rarity": "none",
  "weight": 2,
  "value": 500
},
{
  "name": "Reszur",
  "source": "PotA",
  "baseItem": "dagger",
  "type": "M",
  "rarity": "uncommon",
  "weight": 1,
  "weaponCategory": "simple",
  "property": [
    "F",
    "L",
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d4",
  "dmgType": "P",
  "bonusWeapon": "+1",
  "entries": [
    "You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.",
    "The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again."
  ]
},
{
  "name": "Reveler's Concertina",
  "source": "TCE",
  "type": "INS",
  "rarity": "rare",
  "reqAttune": "by a bard",
  "reqAttuneTags": [
    {
      "class": "bard"
    }
  ],
  "wondrous": true,
  "bonusSpellSaveDc": "+2",
  "entries": [
    "While holding this concertina, you gain a +2 bonus to the saving throw DC of your bard spells.",
    "As an action, you can use the concertina to cast {@spell Otto's irresistible dance} from the item. This property of the concertina can't be used again until the next dawn."
  ],
  "attachedSpells": [
    "otto's irresistible dance"
  ]
},
{
  "name": "Rhodochrosite",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque light pink gemstone."
  ]
},
{
  "name": "Riding Horse",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 7500,
  "carryingCapacity": 480,
  "speed": 60
},
{
  "name": "Riding Saddle",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 25,
  "value": 1000
},
{
  "name": "Ring of Acid Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "acid"
  ],
  "detail1": "pearl",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Animal Influence",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:",
    {
      "type": "list",
      "items": [
        "{@spell Animal friendship} (save DC 13)",
        "{@spell Fear} (save DC 13), targeting only beasts that have an Intelligence of 3 or lower",
        "{@spell Speak with animals}"
      ]
    }
  ],
  "attachedSpells": [
    "animal friendship",
    "fear",
    "speak with animals"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of Cold Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "cold"
  ],
  "detail1": "tourmaline",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Evasion",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of Feather Falling",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "entries": [
    "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of Fire Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "fire"
  ],
  "detail1": "garnet",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Force Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "force"
  ],
  "detail1": "sapphire",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Free Action",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "entries": [
    "While you wear this ring, {@quickref difficult terrain||3} doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be {@condition paralyzed} or {@condition restrained}."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of Jumping",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you can cast the {@spell jump} spell from it as a bonus action at will, but can target only yourself when you do so."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "jump"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Ring of Lightning Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "lightning"
  ],
  "detail1": "citrine",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Mind Shielding",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.",
    "You can use an action to cause the ring to become {@condition invisible} until you use another action to make it visible, until you remove the ring, or until you die.",
    "If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Ring of Necrotic Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "necrotic"
  ],
  "detail1": "jet",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Obscuring",
  "source": "EGW",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This band of iron resembles a skull and is cold to the touch. It has 3 charges and regains {@dice 1d3} expended charges daily at dawn. As an action while wearing the ring, you can expend 1 of its charges to cast the {@spell fog cloud} spell from it, with the following changes: the cloud is centered on you when it first appears, and the spell lasts for 1 minute (no {@status concentration} required)."
  ],
  "attachedSpells": [
    "fog cloud"
  ]
},
{
  "name": "Ring of Poison Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "poison"
  ],
  "detail1": "amethyst",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Protection",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "entries": [
    "You gain a +1 bonus to AC and saving throws while wearing this ring."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of Psychic Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "psychic"
  ],
  "detail1": "jade",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Radiant Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "radiant"
  ],
  "detail1": "topaz",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Red Fury",
  "source": "CRCotN",
  "type": "RG",
  "rarity": "very rare",
  "reqAttune": true,
  "modifySpeed": {
    "equal": {
      "swim": "walk"
    }
  },
  "entries": [
    "This ring has a stripe of ruidium running through it. While wearing the ring, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "You can breathe water.",
        "You gain a swimming speed equal to your walking speed."
      ]
    },
    {
      "type": "entries",
      "name": "Ruidium Rage",
      "entries": [
        "As a bonus action, you can use the ring to gain the following benefits, which last for 1 minute or until you are {@condition incapacitated}:",
        {
          "type": "list",
          "items": [
            "You have advantage on Strength checks and Strength saving throws.",
            "When you hit with an attack, you can add your proficiency bonus to the damage roll.",
            "Difficult terrain doesn't cost you extra movement, and you are immune to the {@condition paralyzed} and {@condition restrained} conditions."
          ]
        },
        "You can't use this property of the ring again until you finish a long rest."
      ]
    },
    {
      "type": "entries",
      "name": "Ruidium Corruption",
      "entries": [
        "When you use the Ruidium Rage property of the ring, you must make a DC 20 Charisma saving throw. On a failed save, you gain 1 level of {@condition exhaustion}. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save."
      ]
    },
    {
      "type": "entries",
      "name": "If Ruidium Is Destroyed",
      "entries": [
        "If the Apotheon is killed or redeemed, all the ruidium in Exandria is destroyed instantly, and the ring of red fury becomes a {@item ring of free action}."
      ]
    }
  ]
},
{
  "name": "Ring of Regeneration",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you regain {@dice 1d6} hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after {@dice 1d6 + 1} days if you have at least 1 hit point the whole time."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ring of Shooting Stars",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "outdoors at night",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6}",
  "charges": 6,
  "entries": [
    "While wearing this ring in dim light or darkness, you can cast {@spell dancing lights} and {@spell light} from the ring at will. Casting either spell from the ring requires an action.",
    "The ring has 6 charges for the following other properties. The ring regains {@dice 1d6} expended charges daily at dawn.",
    {
      "name": "Faerie Fire",
      "type": "entries",
      "entries": [
        "You can expend 1 charge as an action to cast {@spell faerie fire} from the ring."
      ]
    },
    {
      "name": "Ball Lightning",
      "type": "entries",
      "entries": [
        "You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.",
        "Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if {@status concentration||concentrating} on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.",
        "As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created. (4 spheres = {@dice 2d4}, 3 spheres = {@dice 2d6}, 2 spheres = {@dice 5d4}, 1 sphere = {@dice 4d12})"
      ]
    },
    {
      "name": "Shooting Stars",
      "type": "entries",
      "entries": [
        "You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw, taking {@damage 5d4} fire damage on a failed save, or half as much damage on a successful one."
      ]
    }
  ],
  "attachedSpells": [
    "dancing lights",
    "faerie fire",
    "light"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ring of Spell Storing",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "entries": [
    "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains {@dice 1d6 - 1} levels of stored spells chosen by the DM.",
    "Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.",
    "While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of Swimming",
  "source": "DMG",
  "type": "RG",
  "tier": "minor",
  "rarity": "uncommon",
  "modifySpeed": {
    "static": {
      "swim": 40
    }
  },
  "entries": [
    "You have a swimming speed of 40 feet while wearing this ring."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Ring of Telekinesis",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you can cast the {@spell telekinesis} spell at will, but you can target only objects that aren't being worn or carried."
  ],
  "attachedSpells": [
    "telekinesis"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Ring of Temporal Salvation",
  "source": "EGW",
  "type": "RG",
  "rarity": "rare",
  "reqAttune": true,
  "entries": [
    "If you die while wearing this gray crystal ring, you vanish and reappear in an unoccupied space within 5 feet of the space you left (or the nearest unoccupied space). You have a number of hit points equal to {@dice 3d6} + your Constitution modifier. If your hit point maximum is lower than the number of hit points you regain, your hit point maximum rises to a similar amount. If you have any levels of {@condition exhaustion}, reduce your level of {@condition exhaustion} by 1. Once the ring is used, it turns to dust and is destroyed."
  ]
},
{
  "name": "Ring of Thunder Resistance",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "thunder"
  ],
  "detail1": "spinel",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Ring of Resistance}"
  ]
},
{
  "name": "Ring of Truth Telling",
  "source": "WDH",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you have advantage on Wisdom ({@skill Insight}) checks to determine whether someone is lying to you."
  ]
},
{
  "name": "Ring of Warmth",
  "source": "DMG",
  "type": "RG",
  "resist": [
    "cold"
  ],
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Ring of Water Walking",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "uncommon",
  "entries": [
    "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Ring of X-ray Vision",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "entries": [
    "While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead.",
    "Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of {@condition exhaustion}."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Ring of the Ram",
  "source": "DMG",
  "type": "RG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to make a ranged spell attack against one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes {@damage 2d10} force damage and is pushed 5 feet away from you.",
    "Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Robe of Eyes",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "The robe lets you see in all directions, and you have advantage on Wisdom ({@skill Perception}) checks that rely on sight.",
        "You have {@sense darkvision} out to a range of 120 feet.",
        "You can see {@condition invisible} creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet."
      ]
    },
    "The eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.",
    "A {@spell light} spell cast on the robe or a {@spell daylight} spell cast within 5 feet of the robe causes you to be {@condition blinded} for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for {@spell light} or DC 15 for {@spell daylight}), ending the blindness on a success."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Robe of Scintillating Colors",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This robe has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become {@condition stunned} until the effect ends."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Robe of Serpents",
  "source": "SKT",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "A robe of serpents is a stylish silk garment that is popular among wealthy nobles and retired assassins. The robe is emblazoned with {@dice 1d4 + 3} stylized serpents, all brightly colored.",
    "As a bonus action on your turn, you can transform one of the robe's serpents into a {@creature giant poisonous snake}. The snake instantly falls from the robe, slithers into an unoccupied space next to you, and acts on your initiative count. The snake can tell friendly creatures from hostile ones and attacks the latter. The snake disappears in a harmless puff of smoke after 1 hour, when it drops to 0 hit points, or when you dismiss it (no action required). Once detached, a snake can't return to the robe. When all of the robe's snakes have detached, the robe becomes a nonmagical garment."
  ]
},
{
  "name": "Robe of Stars",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.",
    "Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast {@spell magic missile} as a 5th-level spell. Daily at dusk, {@dice 1d6} removed stars reappear on the robe.",
    "While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space."
  ],
  "attachedSpells": [
    "magic missile"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Robe of Summer",
  "source": "TftYP",
  "resist": [
    "cold"
  ],
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "weight": 1,
  "entries": [
    "This elegant garment is made from fine cloth in hues of red, orange, and gold. While you wear the robe, you have resistance to cold damage. In addition, you are comfortable as if the temperature were that of a balmy day, so you suffer no ill effects from the weather's temperature extremes."
  ]
},
{
  "name": "Robe of Useful Items",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "This robe has cloth patches of various shapes and colors covering it. While wearing the robe. you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.",
    "The robe has two of each of the following patches:",
    {
      "type": "list",
      "items": [
        "Dagger",
        "Bullseye lantern (filled and lit)",
        "Steel mirror",
        "10-foot pole",
        "Hempen rope (50 feet, coiled)",
        "Sack"
      ]
    },
    "In addition, the robe has {@dice 4d4} other patches. The DM chooses the patches or determines them randomly.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d100}",
        "Patch"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01-08",
          "Bag of 100 gp"
        ],
        [
          "09-15",
          "Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp"
        ],
        [
          "16-22",
          "Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself"
        ],
        [
          "23-30",
          "10 gems worth 100 gp each"
        ],
        [
          "31-44",
          "Wooden ladder (24 feet long)"
        ],
        [
          "45-51",
          "A {@creature riding horse} with saddle bags"
        ],
        [
          "52-59",
          "Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you"
        ],
        [
          "60-68",
          "4 {@item potion of healing||potions of healing}"
        ],
        [
          "69-75",
          "{@item Rowboat} (12 feet long)"
        ],
        [
          "76-83",
          "Spell scroll containing one spell of 1st to 3rd level"
        ],
        [
          "84-90",
          "2 {@creature mastiff||mastiffs}"
        ],
        [
          "91-96",
          "Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach"
        ],
        [
          "97-00",
          "{@item Portable ram}"
        ]
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Robes",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 100
},
{
  "name": "Rod of Absorption",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 2,
  "entries": [
    "While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy-not the spell itself-is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.",
    "When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.",
    "If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.",
    "A newly found rod has {@dice 1d10} levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Rod of Alertness",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 2,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "entries": [
    "This rod has a flanged head and the following properties.",
    {
      "name": "Alertness",
      "type": "entries",
      "entries": [
        "While holding the rod, you have advantage on Wisdom ({@skill Perception}) checks and on rolls for initiative."
      ]
    },
    {
      "name": "Spells",
      "type": "entries",
      "entries": [
        "While holding the rod, you can use an action to cast one of the following spells from it: {@spell detect evil and good}, {@spell detect magic}, {@spell detect poison and disease}, or {@spell see invisibility}."
      ]
    },
    {
      "name": "Protective Aura",
      "type": "entries",
      "entries": [
        "As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any {@condition invisible} hostile creature that is also in the bright light.",
        "The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn."
      ]
    }
  ],
  "attachedSpells": [
    "detect evil and good",
    "detect magic",
    "detect poison and disease",
    "see invisibility"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Rod of Retribution",
  "source": "EGW",
  "type": "RD",
  "rarity": "uncommon",
  "reqAttune": true,
  "weight": 2,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This adamantine rod is tipped with a glowing crystalline eye. The rod has 3 charges and regains all its expended charges daily at dawn.",
    "When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 of the rod's charges to force the creature to make a DC 13 Dexterity saving throw. The creature takes {@damage 2d10} lightning damage on a failed save, or half as much damage on a successful one."
  ]
},
{
  "name": "Rod of Rulership",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 2,
  "entries": [
    "You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be {@condition charmed} by you for 8 hours. While {@condition charmed} in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be {@condition charmed} in this way. The rod can't be used again until the next dawn."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Rod of Security",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "very rare",
  "weight": 2,
  "entries": [
    "While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space.",
    "For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down).",
    "When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Rod of the Vonindod",
  "source": "SKT",
  "type": "RD",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 100,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "entries": [
    "The {@creature fire giant} Duke Zalto hired a wizard to craft several of these adamantine rods. Each measures 4 feet long, weighs 100 pounds, and is sized to fit comfortably in a {@creature fire giant||fire giant's} hand. The rod has two prongs at one end and a molded handle grip on the opposite end.",
    "The rod has 10 charges and regains {@dice 1d6 + 4} of its expended charges daily at dawn. As an action, you can grasp it by the handle and expend 1 charge to cast the {@spell locate object} spell from it. When the rod is used to detect objects made of adamantine, such as fragments of the Vonindod construct, its range increases to 10 miles."
  ],
  "attachedSpells": [
    "locate object"
  ]
},
{
  "name": "Rope of Climbing",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.",
    "If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.",
    "The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Rope of Entanglement",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 3,
  "entries": [
    "This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become {@condition restrained}.",
    "You can release the creature by using a bonus action to speak a second command word. A target {@condition restrained} by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer {@condition restrained} by the rope.",
    "The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Rope of Mending",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "You can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost or destroyed."
  ]
},
{
  "name": "Rotor of Return",
  "source": "AI",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "While attuned to this device, you have a +1 bonus to Constitution saving throws. You periodically receive flashbacks of old memories, and you can unerringly recall any event that took place within the previous 30 days.",
    {
      "type": "entries",
      "name": "Borrow Object",
      "entries": [
        "You name a mundane item with a value of 50 gp or less and it appears in your hand or at your feet. This can be any item that appears in chapter 5, \"{@book Equipment|5},\" of the Player's Handbook, or any similar item selected with the DM's permission. The summoned item is transported to you from somewhere else in the world, but it is generic in nature, so that you might call for a longsword but you cannot borrow a specific creature's longsword. The item vanishes 10 minutes after it appears. Once you use this feature of the rotor of return, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Recall Code",
      "entries": [
        "As an action, you can set your current location as a point of return locked to the rotor. Anytime thereafter, you can use a bonus action to teleport to the rotor's point of return as long as you are within 500 feet of that point. Once you use the rotor of return to teleport, this feature cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Part of a Whole",
      "entries": [
        "While this component is not installed in the {@item Orrery of the Wanderer|AI}, its magic might function sporadically or with unpredictable side effects, as determined by the DM."
      ]
    }
  ]
},
{
  "name": "Rowboat",
  "source": "DMG",
  "type": "SHP",
  "rarity": "none",
  "weight": 100,
  "value": 5000,
  "crew": 1,
  "vehAc": 11,
  "vehHp": 50,
  "vehSpeed": 1.5,
  "capPassenger": 3,
  "entries": [
    "Keelboats and rowboats are used on lakes and rivers, If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land."
  ],
  "seeAlsoVehicle": [
    "Rowboat"
  ]
},
{
  "name": "Ruby",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 500000,
  "entries": [
    "A transparent clear red to deep crimson gemstone."
  ]
},
{
  "name": "Ruby of the War Mage",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "focus": true,
  "entries": [
    "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon; simple weapon} as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an {@spell antimagic field} causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends."
  ]
},
{
  "name": "Ruidium Shield",
  "source": "CRCotN",
  "baseItem": "shield",
  "type": "S",
  "resist": [
    "psychic"
  ],
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "bonusAc": "+2",
  "modifySpeed": {
    "equal": {
      "swim": "walk"
    }
  },
  "entries": [
    "Tendrils of ruidium extend across the metal surface of this shield. While this shield is on your person, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "You have resistance to psychic damage.",
        "You can breathe water.",
        "You gain a swimming speed equal to your walking speed."
      ]
    },
    {
      "type": "entries",
      "name": "Psychic Reflection",
      "entries": [
        "When you take psychic damage while holding the shield, you can use your reaction to choose another creature you can see within 30 feet of you. That creature takes the psychic damage you would have taken."
      ]
    },
    {
      "type": "entries",
      "name": "Ruidium Corruption",
      "entries": [
        "When you use the shield's Psychic Reflection property, you must make a DC 20 Charisma saving throw. On a failed save, you gain 1 level of {@condition exhaustion}. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save."
      ]
    },
    {
      "type": "entries",
      "name": "If Ruidium Is Destroyed",
      "entries": [
        "If the Apotheon is killed or redeemed, all the ruidium in Exandria is destroyed instantly, and a ruidium shield becomes a {@item +2 shield}."
      ]
    }
  ]
},
{
  "name": "Sack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 0.5,
  "value": 1,
  "entries": [
    "A sack can hold up to 1 cubic foot or 30 pounds of gear."
  ],
  "containerCapacity": {
    "weight": [
      30
    ]
  }
},
{
  "name": "Saddle of the Cavalier",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Saddlebags",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "weight": 8,
  "value": 400
},
{
  "name": "Saffron",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 1500
},
{
  "name": "Sailing Ship",
  "source": "DMG",
  "type": "SHP",
  "rarity": "none",
  "value": 1000000,
  "crew": 20,
  "vehAc": 15,
  "vehHp": 300,
  "vehDmgThresh": 15,
  "vehSpeed": 2,
  "capPassenger": 20,
  "capCargo": 100,
  "seeAlsoVehicle": [
    "Sailing Ship"
  ]
},
{
  "name": "Saint Markovia's Thighbone",
  "source": "CoS",
  "type": "M",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 4,
  "dmg1": "1d6",
  "dmgType": "B",
  "entries": [
    "Saint Markovia's thighbone has the properties of a {@item mace of disruption}. If it scores one or more hits against a {@creature vampire} or a {@creature vampire spawn} in the course of a single battle, the thighbone crumbles into dust once the battle concludes.",
    "As a youth, Markovia followed her heart and became a priest of the Morninglord soon after her eighteenth birthday. She proved to be a charismatic proselytizer and, before the age of thirty, had gained a reputation for allowing no evil to stand before her.",
    "Markovia had long considered Strahd a mad tyrant, but only after his transformation into a {@creature vampire} did she dare to challenge him. As she rallied her followers and prepared to march on Castle Ravenloft, Strahd sent a group of {@creature vampire spawn} to her abbey. They confronted Markovia and were destroyed to a one.",
    "Suffused with confidence born of a righteous victory, Markovia advanced on Castle Ravenloft. A great battle raged from the catacombs to the parapets. In the end, Markovia never returned to Barovia, and Strahd long afterward walked with a limp and a grimace of pain. It is said that he trapped Markovia in a crypt beneath his castle, and her remains linger there yet.",
    "The essence of Markovia's saintliness passed partly into her bones as the rest of her body decomposed. Her remaining thighbone is imbued with power that inflicts grievous injury on the undead.",
    "{@item Mace of Disruption}. When you hit a fiend or an undead with this magic weapon, that creature takes an extra {@damage 2d6} radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes {@condition frightened} of you until the end of your next turn.",
    "While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
  ]
},
{
  "name": "Salt",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 5
},
{
  "name": "Sapphire Buckler",
  "source": "FTD",
  "baseItem": "shield",
  "type": "S",
  "resist": [
    "psychic",
    "thunder"
  ],
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "entries": [
    "This crystalline blue shield is fashioned from a sapphire dragon's scale and is created to aid in rooting out the influence of Aberrations. While wielding the shield, you have resistance to psychic and thunder damage. Also, when you take damage from a creature that is within 5 feet of you, you can use your reaction to deal {@damage 2d6} thunder damage to that creature.",
    "As an action, you can use the shield to help you locate Aberrations until the end of your next turn. If any Aberrations are within 1 mile of you, the shield emits a low humming tone for a moment, and you know the direction of all Aberrations within that range. Once this property is used, it can't be used again until the next dawn."
  ]
},
{
  "name": "Sardonyx",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "An opaque bands of red and white gemstone."
  ]
},
{
  "name": "Scholar's Pack",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 10,
  "value": 4000,
  "entries": [
    "Includes:",
    {
      "type": "list",
      "items": [
        "a {@item backpack}",
        "a {@item book} of lore",
        "a {@item Ink (1-ounce bottle)|bottle of ink}",
        "an {@item ink pen}",
        "10 {@item Parchment (one sheet)|sheets of parchment}",
        "a little bag of sand",
        "a small knife."
      ]
    }
  ],
  "packContents": [
    "backpack",
    "book",
    "ink (1-ounce bottle)",
    "ink pen",
    "parchment (one sheet)",
    {
      "special": "little bag of sand"
    },
    {
      "special": "small knife"
    }
  ]
},
{
  "name": "Scimitar of Speed",
  "source": "DMG",
  "baseItem": "scimitar",
  "type": "M",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "F",
    "L"
  ],
  "dmg1": "1d6",
  "dmgType": "S",
  "bonusWeapon": "+2",
  "entries": [
    "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Scissors of Shadow Snipping",
  "source": "WBtW",
  "rarity": "rare",
  "reqAttune": "by a fey or a spellcaster",
  "reqAttuneTags": [
    {
      "creatureType": "fey"
    },
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "entries": [
    "As an action, you make a few snips with these iron shears and cause the shadow of a Humanoid creature you can see within 5 feet of you to detach from its source. If the creature is unwilling to give up its shadow, it can make a DC 15 Charisma saving throw, retaining its shadow on a success. Whether or not the shadow is snipped, this property of the scissors can't be used again until the next dawn.",
    "The detached shadow is rooted to the spot where it was snipped until you use a bonus action to cause it to behave in one of the following ways, either of which is possible only if you can see the shadow:",
    {
      "type": "list",
      "items": [
        "You control the shadow's movements and can make the shadow move up to 30 feet across a solid or liquid surface, in any direction you choose (including along vertical surfaces), provided it remains within your sight at all times. The shadow is harmless and unable to be harmed, and it is {@condition invisible} in darkness. It can't speak, and it doesn't require air, sleep, or nourishment.",
        "You can relinquish control of the shadow, at which point it becomes autonomous and behaves as the DM wishes. It uses the {@creature shadow} stat block in the Monster Manual, but its creature type is Fey instead of Undead. A creature whose Strength is reduced to 0 by this shadow's Strength Drain attack does not die but falls {@condition unconscious} instead. The creature regains consciousness and all its Strength after finishing a short or long rest."
      ]
    },
    "A creature whose shadow has detached from it is cursed. If a shadowless creature is subjected to any spell that ends a curse, or if its detached shadow is reduced to 0 hit points, the detached shadow disappears, and the creature regains its normal shadow instantly."
  ]
},
{
  "name": "Scorpion Armor",
  "source": "ToA",
  "type": "HA",
  "rarity": "rare",
  "reqAttune": true,
  "curse": true,
  "weight": 65,
  "ac": 18,
  "strength": "15",
  "entries": [
    "This suit of plate armor is fashioned from {@creature giant scorpion} chitin. While wearing this armor, you gain the following benefits:",
    {
      "type": "list",
      "items": [
        "The armor improves your combat readiness, granting you a +5 bonus to initiative as long as you aren't {@condition incapacitated}.",
        "The armor doesn't impose disadvantage on your Dexterity ({@skill Stealth}) checks.",
        "The armor doesn't impose disadvantage on saving throws made to resist the effects of extreme heat (see chapter 5 of the Dungeon Master's Guide)."
      ]
    },
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This armor is cursed. Whenever you don or doff it, you must make a DC 15 Constitution saving throw, taking 100 ({@damage 10d10 + 45}) poison damage on a failed save, or half as much damage on a successful one. Only a {@spell wish} spell can remove the armor's curse."
      ]
    }
  ]
},
{
  "name": "Scorpion Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2500000,
  "crew": 12,
  "vehAc": 19,
  "vehHp": 250,
  "vehDmgThresh": 15,
  "vehSpeed": 3.5,
  "capCargo": 12,
  "entries": [
    "Scorpion ships are archaic metal warships that have never lost their popularity, largely because of their versatility. Articulated legs enable a scorpion ship to land safely on the ground and move across a solid surface at a walking speed of 30 feet. The ship can't float on water, however. A ballista is mounted on the top deck, and a mangonel is perched on the end of the tail. The ship's two claws are relatively inefficient in combat, but a claw that grabs a creature can quickly take it out of action."
  ],
  "seeAlsoVehicle": [
    "Scorpion Ship|AAG"
  ]
},
{
  "name": "Scribe's Pen",
  "source": "ERLW",
  "rarity": "common",
  "reqAttune": "by a creature with the Mark of Scribing",
  "reqAttuneTags": [
    {
      "race": "gnome (mark of scribing)|erlw"
    }
  ],
  "wondrous": true,
  "entries": [
    "You can use this pen to write on any surface. You decide whether the writing is visible or {@condition invisible}, but the writing is always visible to a person with the Mark of Scribing.",
    "Any creature with the Mark of Scribing can use an action to touch the {@condition invisible} writing, making it visible to all.",
    "If you use the pen to write on a creature that isn't a construct, the writing fades after 7 days."
  ]
},
{
  "name": "Scroll of Protection from Aberrations",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents aberrations from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that an aberration would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Beasts",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents beasts from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that a beast would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Celestials",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents celestials from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that a celestial would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Elementals",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents elementals from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that an elemental would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Fey",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents fey from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that a fey would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Fiends",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents fiends from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that a fiend would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Plants",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents plants from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that a plant would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Scroll of Protection from Undead",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "Using an action to read the scroll encloses you in an {@condition invisible} barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents undead from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that an undead would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier."
  ]
},
{
  "name": "Sealing Wax",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 50
},
{
  "name": "Seeker Dart",
  "source": "PotA",
  "baseItem": "dart",
  "type": "R",
  "rarity": "uncommon",
  "weight": 0.25,
  "weaponCategory": "simple",
  "property": [
    "F",
    "T"
  ],
  "range": "20/60",
  "dmg1": "1d4",
  "dmgType": "P",
  "entries": [
    "This small dart is decorated with designs like windy spirals that span the length of its shaft.",
    "When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass though openings as narrow as 1 inch wide and can change direction to fly around corners.",
    "When the dart reaches its target, the target must succeed on a DC 16 Dexterity saving throw or take {@damage 1d4} piercing damage and {@damage 3d4} lightning damage. The dart's magic is then spent, and it becomes an ordinary dart."
  ]
},
{
  "name": "Sekolahian Worshiping Statuette",
  "source": "GoS",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "Skillfully carved from sandstone, this 1-foot-tall statuette depicts a shark twisting through the water with its mouth open. If any Tiny sea-dwelling animal is within 1 inch of the statuette's mouth, the shark flashes to life and deals 1 piercing damage to it. The shark can deal damage in this way no more than once per hour."
  ]
},
{
  "name": "Selesnya Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Selesnya, allows you to cast {@spell charm person}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Selesnya's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "charm person"
  ]
},
{
  "name": "Selesnya Keyrune",
  "source": "GGR",
  "rarity": "rare",
  "reqAttune": "by a member of the Selesnya guild",
  "reqAttuneTags": [
    {
      "background": "selesnya initiate|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "Carved from white and green marble in the shape of a wolf's head, this keyrune transforms into a {@creature dire wolf}. The wolf persists for 8 hours. Its Intelligence is 6, and it understands Elvish and Sylvan but can't speak those languages. While it is within 1 mile of you, you can communicate with each other telepathically.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature dire wolf}. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Sending Stone",
  "source": "AI",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Also at rank 1, you are given use of an Acquisitions Incorporated sending stone, an uncommon magic item that resembles a gemstone in a bold setting. It functions like a normal sending stone, except that it has no matching stone and allows communication with Head Office, specific secretarians you know, and the secretarian nearest your location. You must succeed on a DC 15 Intelligence ({@skill Arcana}) check to establish contact. Once the stone is successfully used, it can't be used again until the next dawn.",
    "Making contact with another secretarian assumes that they are in possession of their own sending stone.",
    {
      "type": "table",
      "caption": "Quirks of Your Sending Stone",
      "colLabels": [
        "d8",
        "quirk"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "It's a flip stone."
        ],
        [
          "2",
          "It gets great reception everywhere except in your headquarters."
        ],
        [
          "3",
          "It sometimes picks up other magical conversations."
        ],
        [
          "4",
          "It's the perfect size, shape, and weight to be used as a skipping stone."
        ],
        [
          "5",
          "It heats up when you use it, to the extent that it once burned through your gloves."
        ],
        [
          "6",
          "It has an obnoxious ringtone that you can't work out how to change."
        ],
        [
          "7",
          "It fails to notify you of incoming messages except for a faint pulsating glow."
        ],
        [
          "8",
          "It's voice activated, so that every time you talk to someone, it tries to send a message to someone else."
        ]
      ]
    },
    {
      "type": "entries",
      "name": "Rumor Mill",
      "entries": [
        "Also at rank 2, whenever your franchise begins a major quest or mission, make a DC 15 Intelligence ({@skill History}) check. On a success, you can learn up to three rumors related to creatures or organizations involved in the mission, which come to you through your sending stone. These rumors reflect current or historical knowledge possessed by Acquisitions Incorporated or the organization's many contacts."
      ]
    },
    {
      "type": "entries",
      "name": "Improved Rumor Mill",
      "entries": [
        "At rank 3, when you use your Rumor Mill feature, the DM provides you with a sense of which parts of a particular rumor are inaccurate, if any. You do not necessarily learn the truth behind those false rumors."
      ]
    }
  ]
},
{
  "name": "Sending Stones",
  "source": "DMG",
  "tier": "minor",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the {@spell sending} spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.",
    "Once {@spell sending} is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "sending"
  ],
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Sentinel Shield",
  "source": "DMG",
  "type": "S",
  "tier": "major",
  "rarity": "uncommon",
  "weight": 6,
  "ac": 2,
  "entries": [
    "While holding this shield, you have advantage on initiative rolls and Wisdom ({@skill Perception}) checks. The shield is emblazoned with a symbol of an eye."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Serpent Scale Armor",
  "source": "CM",
  "baseItem": "scale mail",
  "type": "MA",
  "rarity": "uncommon",
  "weight": 45,
  "ac": 14,
  "dexterityMax": null,
  "entries": [
    "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier (instead of a maximum of +2) when determining your Armor Class. In addition, this armor does not impose disadvantage on your Dexterity ({@skill Stealth}) checks."
  ]
},
{
  "name": "Serpent Venom",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 20000,
  "poison": true,
  "entries": [
    "This poison must be harvested from a dead or {@condition incapacitated} {@creature giant poisonous snake}. A creature subjected to this poison must succeed on a DC 11 Constitution saving throw, taking 10 ({@damage 3d6}) poison damage on a failed save, or half as much damage on a successful one."
  ],
  "poisonTypes": [
    "injury"
  ]
},
{
  "name": "Serpent's Fang",
  "source": "CM",
  "baseItem": "longsword",
  "type": "M",
  "rarity": "rare",
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "S",
  "dmg2": "1d10",
  "sword": true,
  "weapon": true,
  "entries": [
    "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. Its hilt changes shape to adjust to the grasp of any creature that picks it up. The weapon deals an extra {@damage 1d10} poison damage to any target it hits."
  ]
},
{
  "name": "Shadowfell Brand Tattoo",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo is dark in color and abstract.",
    {
      "type": "entries",
      "name": "Tattoo Attunement",
      "entries": [
        "To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
        "If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space."
      ]
    },
    {
      "type": "entries",
      "name": "Shadow Essence",
      "entries": [
        "You gain {@sense darkvision} with a range of 60 feet, and you have advantage on Dexterity ({@skill Stealth}) checks."
      ]
    },
    {
      "type": "entries",
      "name": "Shadowy Defense",
      "entries": [
        "When you take damage, you can use your reaction to become insubstantial for a moment, halving the damage you take. Then the reaction can't be used again until the next sunset."
      ]
    }
  ]
},
{
  "name": "Shadowfell Shard",
  "source": "TCE",
  "rarity": "rare",
  "reqAttune": "by a sorcerer",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    }
  ],
  "wondrous": true,
  "weight": 1,
  "focus": [
    "Sorcerer"
  ],
  "entries": [
    "This dull, cold crystal sits heavy and leaden, saturated by the Shadowfell's despair. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
    "When you use a Metamagic option on a spell while you are holding or wearing the shard, you can momentarily curse one creature targeted by the spell; choose one ability score, and until the end of your next turn, the creature has disadvantage on ability checks and saving throws that use that ability."
  ]
},
{
  "name": "Shard",
  "source": "WDH",
  "type": "$",
  "rarity": "none",
  "value": 10,
  "entries": [
    "Silver coin, slightly smaller than the nib (1 shard = 10 {@item nib|wdh|nibs})"
  ]
},
{
  "name": "Shard of Xeluan",
  "source": "KftGV",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "bonusSpellAttack": "+1",
  "entries": [
    "This 1-foot-long shard of obsidian has veins of silver and gold beneath its cold surface.",
    {
      "type": "entries",
      "name": "Empowered Magic",
      "entries": [
        "While holding the shard, you can use it as a spellcasting focus, and it gives you a +1 bonus to your spell attack rolls."
      ]
    },
    {
      "type": "entries",
      "name": "Enhanced Strength",
      "entries": [
        "Your Strength score increases by 4 while the shard is on your person. The shard can't raise your Strength score above 22."
      ]
    },
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "Attuning to this item extends its curse to you. You remain cursed until you are targeted by a {@spell remove curse} spell or similar magic, or until the shard is reattached to Xeluan's {@condition petrified} heart.",
        "The shard's curse causes misfortune to befall you. When you roll a 1 on an attack roll, an ability check, or a saving throw, roll on the Shard Misfortunes table to determine the misfortune. For as long as this misfortune lasts, no other shard misfortunes befall you."
      ]
    },
    {
      "type": "table",
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "colLabels": [
        "d6",
        "Misfortune"
      ],
      "rows": [
        [
          "1",
          "You accidentally cut yourself with the shard and are {@condition poisoned} until the next dawn."
        ],
        [
          "2",
          "You experience a vision of an ancient calamity-a beautiful city threatened by crumbling mountains and erupting volcanoes-and are {@condition stunned} until the end of your next turn."
        ],
        [
          "3",
          "For a few seconds, the ground shakes under you. You and each creature within 10 feet of you must succeed on a DC 16 Dexterity saving throw or be knocked {@condition prone}."
        ],
        [
          "4",
          "The shard releases three glowing darts of magical force that target one random creature within 30 feet of you. If no such target exists, you become the target. Each dart hits automatically and deals 3 ({@damage 1d4 + 1}) force damage to the target."
        ],
        [
          "5",
          "Until the next dawn, Beasts with an Intelligence score of 3 or lower are hostile to you."
        ],
        [
          "6",
          "Nothing seems to go your way. Until the next dawn, you have disadvantage on ability checks."
        ]
      ]
    }
  ]
},
{
  "name": "Shard of the Ise Rune",
  "source": "SKT",
  "resist": [
    "fire"
  ],
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This shard of ice is long and slender, roughly the size of a dagger. The ise (ice) rune glows within it. The shard has the following properties, which work only while it's on your person.",
    {
      "name": "Frigid Touch",
      "type": "entries",
      "entries": [
        "As an action, you can touch a body of water and freeze the water in a 10-foot-radius sphere around the spot you touched. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Frost Friend",
      "type": "entries",
      "entries": [
        "You have resistance to fire damage."
      ]
    },
    {
      "name": "Icy Mantle",
      "type": "entries",
      "entries": [
        "As an action, you can touch yourself or another creature with water on your finger. The water creates an icy mantle of protection. The next time within the next minute that the target takes bludgeoning, slashing, or piercing damage, that damage is reduced to 0, and the mantle is destroyed. Once you use this property, you can't use it again until you finish a short or long rest."
      ]
    },
    {
      "name": "Winters Howl",
      "type": "entries",
      "entries": [
        "As an action, you can cast {@spell sleet storm} (spell save DC 17). You regain this ability after you finish a short or long rest."
      ]
    },
    {
      "name": "Gift of Frost",
      "type": "entries",
      "entries": [
        "You can transfer the shard's magic to a nonmagical item-a cloak or a pair of boots-by tracing the ise rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shard is destroyed, and the rune appears in blue on the chosen item, which gains a benefit based on its form:",
        {
          "type": "list",
          "style": "list-hang-notitle",
          "items": [
            {
              "type": "item",
              "name": "Cloak",
              "entry": "The cloak is now a rare magic item that requires attunement. While wearing it, you have resistance to fire damage, and you have advantage on Dexterity ({@skill Stealth}) checks made while in snowy terrain."
            },
            {
              "type": "item",
              "name": "Boots",
              "entry": "The pair of boots is now a rare magic item that requires attunement. While wearing it, you ignore {@quickref difficult terrain||3} while walking, and you can walk on water."
            }
          ]
        }
      ]
    }
  ],
  "attachedSpells": [
    "sleet storm"
  ]
},
{
  "name": "Shatterspike",
  "source": "TftYP",
  "baseItem": "longsword",
  "type": "M",
  "rarity": "uncommon",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "S",
  "dmg2": "1d10",
  "bonusWeapon": "+1",
  "entries": [
    "You have a +1 bonus to attack and damage rolls made with this magic weapon. If it hits an object, the hit is automatically a critical hit, and it can deal bludgeoning or slashing damage to the object (your choice). Further, damage from nonmagical sources can't harm the weapon."
  ]
},
{
  "name": "Shawm",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 1,
  "value": 200
},
{
  "name": "Shawm",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A double-reed instrument similar to an oboe or a bassoon, popular with gnomes, who have developed some bellows-powered versions."
  ]
},
{
  "name": "Sheep",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 200
},
{
  "name": "Shield Guardian Amulet",
  "source": "IDRotF",
  "rarity": "rare",
  "reqAttune": "by a humanoid",
  "reqAttuneTags": [
    {
      "creatureType": "humanoid"
    }
  ],
  "wondrous": true,
  "entries": [
    "The amulet is a 4-inch-wide disk composed of silver-framed wood, with a rune carved into its face. A {@spell detect magic} spell reveals a magical aura of enchantment around the amulet.",
    "Every {@creature shield guardian} has an amulet magically linked to it. A shield guardian can have only one corresponding amulet, and if that amulet is destroyed, the shield guardian is {@condition incapacitated} until a replacement amulet is created.",
    "A shield guardian's amulet is subject to direct attack if it isn't being worn or carried. It has AC 10, 10 hit points, and immunity to poison and psychic damage. Crafting an amulet requires 1 week and costs 1,000 gp in components.",
    "A shield guardian's solitary focus is to protect the amulet's wearer. The amulet's wearer can command the guardian to attack its enemies or to guard the wielder against attack. If an attack threatens to injure the wearer, the construct can magically absorb the blow into its own body, even at a distance.",
    "A humanoid that attunes to this amulet knows the distance and direction of the shield guardian, provided the amulet and the guardian are on the same plane of existence. As an action, the amulet's attuned wearer can try to reactivate the shield guardian, doing so with a successful DC 20 Intelligence ({@skill Arcana}) check. Reactivation can only be attempted while the amulet and guardian are within 10 feet of each other."
  ]
},
{
  "name": "Shield of Expression",
  "source": "XGE",
  "type": "S",
  "tier": "minor",
  "rarity": "common",
  "weight": 6,
  "ac": 2,
  "entries": [
    "The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the face's expression."
  ]
},
{
  "name": "Shield of Far Sight",
  "source": "VGM",
  "type": "S",
  "rarity": "rare",
  "weight": 6,
  "ac": 2,
  "entries": [
    "A {@creature mind flayer} skilled at crafting magic items creates a shield of far sight by harvesting an eye from an intelligent humanoid and magically implanting it on the outer surface of a nonmagical shield. The shield becomes a magic item once the eyes is implanted, whereupon the {@creature mind flayer} can give the shield to a thrall or hang it on a wall in its lair. As long as the shield is on the same plane of existence as its creator, the {@creature mind flayer} can see through the shield's eye, which has {@sense darkvision} out to a range of 60 feet. While peering through this magical eye, the {@creature mind flayer} can use its Mind Blast action as though it were standing behind the shield.",
    "If a shield of far sight is destroyed, the {@creature mind flayer} that created it is {@condition blinded} for {@dice 2d12} hours."
  ]
},
{
  "name": "Shield of Missile Attraction",
  "source": "DMG",
  "type": "S",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "curse": true,
  "weight": 6,
  "ac": 2,
  "entries": [
    "While holding this shield, you have resistance to damage from ranged weapon attacks.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This shield is cursed. Attuning to it curses you until you are targeted by the {@spell remove curse} spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead."
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Shield of the Uven Rune",
  "source": "WDMM",
  "type": "S",
  "immune": [
    "cold"
  ],
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "bonusWeapon": "+1",
  "entries": [
    "This shield is made from the scale of an ancient white dragon. It has a rune burned into its outward-facing side. A character who examines the rune and succeeds on a DC 20 Intelligence ({@skill History}) check recognizes it as an uven (\"enemy\" in Giant) rune that confers great power.",
    "While holding the shield, you benefit from the following properties.",
    {
      "type": "entries",
      "name": "Winter's Friend",
      "entries": [
        "You are immune to cold damage."
      ]
    },
    {
      "type": "entries",
      "name": "Deadly Rebuke",
      "entries": [
        "Immediately after a creature hits you with a melee attack, you can use your reaction to deal {@damage 3d6} necrotic damage to that creature."
      ]
    },
    {
      "type": "entries",
      "name": "Bane",
      "entries": [
        "You can cast the {@spell bane} spell from the shield (save DC 17). The spell does not require {@status concentration} and lasts for 1 minute. Once you cast the spell from the shield, you can't do so again until you finish a short or long rest."
      ]
    },
    {
      "type": "entries",
      "name": "Gift of Vengeance",
      "entries": [
        "You can transfer the shield's magic to a nonmagical weapon by tracing the uven rune on the weapon with one finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shield is destroyed, and the rune is etched or burned into the chosen weapon. This weapon becomes a rare magic item that requires attunement. It has the properties of a +1 weapon. The bonus increases to +3 when the weapon is used against one of the following creature types, chosen by you at the time of the magic weapon's creation: aberrations, celestials, constructs, dragons, elementals, fey, fiends, giants, or undead."
      ]
    }
  ],
  "attachedSpells": [
    "bane"
  ]
},
{
  "name": "Shiftweave",
  "source": "ERLW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties."
  ]
},
{
  "name": "Shovel",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 200
},
{
  "name": "Shrike Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2000000,
  "crew": 11,
  "vehAc": 15,
  "vehHp": 250,
  "vehDmgThresh": 15,
  "vehSpeed": 8,
  "capCargo": 20,
  "entries": [
    "This swift vessel is a relatively recent design, quickly gaining popularity with merchants and pirates. A shrike ship's legs enable it to land safely on the ground. The ship can float but isn't built for traveling on water and sinks quickly in rough seas.",
    "Standard weaponry on a shrike ship includes three ballistae-one on the forecastle, one in the middle of the top deck, and one on the sterncastle. In a desperate situation, the ship's reinforced bow can be used as a piercing ram."
  ],
  "seeAlsoVehicle": [
    "Shrike Ship|AAG"
  ]
},
{
  "name": "Signal Whistle",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 5
},
{
  "name": "Signet Ring",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 500
},
{
  "name": "Silk (1 sq. yd.)",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "value": 1000
},
{
  "name": "Silk Rope (50 feet)",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "value": 1000,
  "entries": [
    "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
  ]
},
{
  "name": "Silk robe with gold embroidery",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Silver",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 500
},
{
  "name": "Silver (sp)",
  "source": "PHB",
  "type": "$",
  "rarity": "none",
  "weight": 0.02,
  "value": 10,
  "entries": [
    "Common coins come in several different denominations based on the relative worth of the metal from which they are made. The three most common coins are the gold piece (gp), the silver piece (sp), and the copper piece (cp).",
    "With one gold piece, a character can buy a belt pouch, 50 feet of good rope, or a goat. A skilled (but not exceptional) artisan can earn one gold piece a day. The gold piece is the standard unit of measure for wealth, even if the coin itself is not commonly used. When merchants discuss deals that involve goods or services worth hundreds or thousands of gold pieces, the transactions don't usually involve the exchange of individual coins. Rather, the gold piece is a standard measure of value, and the actual exchange is in gold bars, letters of credit, or valuable goods.",
    "One gold piece is worth ten silver pieces, the most prevalent coin among commoners. A silver piece buys a laborer's work for a day, a flask of lamp oil, or a night's rest in a poor inn.",
    "One silver piece is worth ten copper pieces, which are common among laborers and beggars. A single copper piece buys a candle, a torch, or a piece of chalk.",
    "In addition, unusual coins made of other precious metals sometimes appear in treasure hoards. The electrum piece (ep) and the platinum piece (pp) originate from fallen empires and lost kingdoms, and they sometimes arouse suspicion and skepticism when used in transactions. An electrum piece is worth five silver pieces, and a platinum piece is worth ten gold pieces.",
    "A standard coin weighs about a third of an ounce, so fifty coins weigh a pound."
  ]
},
{
  "name": "Silver 25-Zib Coin",
  "source": "GGR",
  "type": "$",
  "rarity": "none",
  "value": 25
},
{
  "name": "Silver Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "cold"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to cold damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest silver dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "Silver and gold brooch",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Silver chalice set with moonstones",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Silver ewer",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Silver headdress with amber and red-coral feathers (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Silver medallion (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Silver necklace with a gemstone pendant",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Silver necklace with an amber pendant (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 25000
},
{
  "name": "Silver shoulder piece with amber and garnet (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Silver-plated steel longsword with jet set in hilt",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Silverquill Primer",
  "source": "SCC",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The Silverquill Primer is a magic textbook created at Strixhaven's Silverquill College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make a Charisma ({@skill Intimidation}) or a Charisma ({@skill Persuasion}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
    "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the bard or cleric spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
  ]
},
{
  "name": "Simic Guild Signet",
  "source": "GGR",
  "type": "RG",
  "rarity": "uncommon",
  "reqAttune": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This ring, adorned with the symbol of Simic, allows you to cast {@spell expeditious retreat}. A guild signet is sometimes awarded to a guild member whose renown score in that guild is 5 or higher, as a reward for performing special services for the guild. Aside from its magical properties, the ring is also an indicator of Simic's recognition and favor.",
    "A signet has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. While wearing it, you can expend 1 charge to cast the associated spell (save DC 13)."
  ],
  "attachedSpells": [
    "expeditious retreat"
  ]
},
{
  "name": "Simic Keyrune",
  "source": "GGR",
  "rarity": "uncommon",
  "reqAttune": "by a member of the Simic guild",
  "reqAttuneTags": [
    {
      "background": "simic scientist|ggr"
    }
  ],
  "wondrous": true,
  "entries": [
    "This keyrune is assembled from coral, mother-of-pearl, and chrome and adorned with the spirals and curves characteristic of Simic ornamentation. The head resembles the shell of a sea creature. On command, the keyrune turns into a {@creature category 1 krasis|GGR} that has the Grabber and Stabilizing Legs adaptations. The transformation lasts for up to 5 hours.",
    "When you use an action to speak the item's command word and place the keyrune on the ground in an unoccupied space within 5 feet of you, the keyrune transforms into a {@creature category 1 krasis|GGR} that has the Grabber and Stabilizing Legs adaptations. If there isn't enough space for the creature, the keyrune doesn't transform.",
    "The creature is friendly to you, your companions, and other members of your guild (unless those guild members are hostile to you). It understands your languages and obeys your spoken commands. If you issue no commands, the creature takes the {@action Dodge} action and moves to avoid danger.",
    "At the end of the duration, the creature reverts to its keyrune form. It reverts early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature reverts to its keyrune form, it can't transform again until 36 hours have passed."
  ]
},
{
  "name": "Siren Song Lyre",
  "source": "MOT",
  "type": "INS",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "You can use an action to play this lyre and cast one of the following spells from it: {@spell animal friendship}, {@spell charm person}, {@spell enthrall}, {@spell suggestion}. If the spell requires a saving throw, the spell save DC is 13.",
    "Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn."
  ],
  "attachedSpells": [
    "animal friendship",
    "charm person",
    "enthrall",
    "suggestion"
  ]
},
{
  "name": "Skyblinder Staff",
  "source": "GGR",
  "rarity": "uncommon",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+1",
  "bonusSpellAttack": "+1",
  "staff": true,
  "entries": [
    "You gain a +1 bonus to attack and damage rolls made with this magic quarterstaff. While holding it, you gain a +1 bonus to spell attack rolls.",
    "If a flying creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to hold the staff aloft and cause it to flare with light. The attacker has disadvantage on the attack roll, and it must succeed on a DC 15 Constitution saving throw or be {@condition blinded} until the start of its next turn."
  ]
},
{
  "name": "Skyship",
  "source": "EGW",
  "type": "AIR",
  "rarity": "none",
  "value": 10000000,
  "crewMin": 6,
  "crewMax": 10,
  "vehSpeed": 10,
  "capPassenger": 30,
  "capCargo": 10,
  "travelCost": 200,
  "shippingCost": 100
},
{
  "name": "Sled",
  "source": "PHB",
  "type": "VEH",
  "rarity": "none",
  "weight": 300,
  "value": 2000
},
{
  "name": "Sled Dog",
  "source": "IDRotF",
  "type": "MNT",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A sled dog (use the {@creature wolf} stat block in appendix A of the Monster Manual) costs 50 gp and can pull 360 pounds.",
    "Sled dogs must take a short rest after pulling a sled for 1 hour; otherwise, they gain one level of {@condition exhaustion}."
  ]
},
{
  "name": "Sledgehammer",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 10,
  "value": 200
},
{
  "name": "Sling Bullets of Althemone",
  "source": "MOT",
  "type": "A",
  "rarity": "very rare",
  "bonusWeapon": "+2",
  "entries": [
    "The sling bullets come in a pouch, which contains {@dice 1d4 + 4} bullets. Roll on the Magic Sling Bullets table for each bullet to determine its magical property.",
    "You have a +2 bonus to attack and damage rolls made with each of these bullets. If a bullet misses its target, the bullet teleports back into the pouch. Once a bullet hits a target, the bullet loses its magic.",
    {
      "type": "table",
      "caption": "Magic Sling Bullets",
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "colLabels": [
        "d4",
        "Bullet"
      ],
      "rows": [
        [
          "1",
          "{@b Banishment.} A creature that takes damage from this bullet must succeed on a DC 15 Charisma saving throw or be banished as though affected by the {@spell banishment} spell."
        ],
        [
          "2",
          "{@b Fulguration.} On a hit, this bullet deals an extra {@damage 2d8} lightning damage to its target. All other creatures within 10 feet of the target must each succeed on a DC 15 Constitution saving throw or take {@damage 1d8} thunder damage."
        ],
        [
          "3",
          "{@b Stunning.} On a hit, this bullet deals an extra {@damage 1d10} force damage, and the target is {@condition stunned} until the end of your next turn."
        ],
        [
          "4",
          "{@b Tracking.} A creature that takes damage from this bullet is marked with a glowing rune where the bullet hit. The mark lasts 24 hours. While the creature is marked, you always know the direction to it."
        ]
      ]
    }
  ]
},
{
  "name": "Slippers of Spider Climbing",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "equal": {
      "climb": "walk"
    }
  },
  "entries": [
    "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Slumbering Dragon Vessel",
  "source": "FTD",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This vessel can be a potion bottle, drinking horn, or other container meant to hold a liquid.",
    "As a bonus action, if the vessel is empty, you can speak the command word to fill the vessel with one of the following (your choice): ale, olive oil, a {@item potion of healing}, or a {@item potion of climbing}. Once this property is used, it can't be used until the next dawn. A potion you create in this way loses its magical properties if it isn't imbibed within 24 hours."
  ]
},
{
  "name": "Slumbering Dragon-Touched Focus",
  "source": "FTD",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "focus": [
    "Artificer",
    "Bard",
    "Cleric",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Warlock",
    "Wizard"
  ],
  "entries": [
    "This wondrous item can be a scepter, an orb, an amulet, a crystal, or another finely crafted object. It typically incorporates imagery of dragons' wings, claws, teeth, or scales.",
    "You have advantage on initiative rolls. While you are holding the focus, it can function as a spellcasting focus for all your spells."
  ]
},
{
  "name": "Slumbering Scaled Ornament",
  "source": "FTD",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "equal": {
      "fly": "walk"
    }
  },
  "entries": [
    "This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon's scale, tooth, or claw, or it incorporates images in those shapes.",
    "You have advantage on saving throws you make to avoid being {@condition charmed} or {@condition frightened} or to end those conditions on you."
  ]
},
{
  "name": "Small gold bracelet",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Small gold idol",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 75000
},
{
  "name": "Small gold statuette set with rubies",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Small mirror set in a painted wooden frame",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Smith's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 84
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 8,
  "value": 2000,
  "additionalEntries": [
    "Smith's tools allow you to work metal, heating it to alter its shape, repair damage, or work raw ingots into useful items.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Smith's tools include hammers, tongs, charcoal, rags, and a whetstone."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana and History",
      "entries": [
        "Your expertise lends you additional insight when examining metal objects, such as weapons."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "You can spot clues and make deductions that others might overlook when an investigation involves armor, weapons, or other metalwork."
      ]
    },
    {
      "type": "entries",
      "name": "Repair",
      "entries": [
        "With access to your tools and an open flame hot enough to make metal pliable, you can restore 10 hit points to a damaged metal object for each hour of work."
      ]
    },
    {
      "type": "table",
      "caption": "Smith's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Sharpen a dull blade",
          "10"
        ],
        [
          "Repair a suit of armor",
          "15"
        ],
        [
          "Sunder a nonmagical metal object",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Smoke Grenade",
  "source": "DMG",
  "type": "EXP",
  "rarity": "none",
  "weight": 2,
  "age": "modern",
  "entries": [
    "As an action, a character can throw a grenade at a point up to 60 feet away. With a grenade launcher, the character can propel the grenade up to 120 feet away.",
    "One round after a smoke grenade lands, it emits a cloud of smoke that creates a heavily obscured area in a 20-foot radius. A moderate wind (at least 10 miles per hour) disperses the smoke in 4 rounds; a strong wind (20 or more miles per hour) disperses it in 1 round."
  ]
},
{
  "name": "Smokepowder",
  "source": "WDH",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Smokepowder is a magical explosive chiefly used to propel a bullet out of the barrel of a firearm. It is stored in airtight wooden kegs or tiny, waterproof leather packets. A packet contains enough smokepowder for five shots, and a keg holds enough smokepowder for five hundred shots.",
    "If smokepowder is set on fire, dropped, or otherwise handled roughly, it explodes and deals fire damage to each creature or object within 20 feet of it: {@dice 1d6} for a packet, {@dice 9d6} for a keg. A successful DC 12 Dexterity saving throw halves the damage.",
    "Casting {@spell dispel magic} on smokepowder renders it permanently inert."
  ]
},
{
  "name": "Snowshoes",
  "source": "IDRotF",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 200,
  "entries": [
    "Snowshoes reduce the likelihood of their wearer getting stuck in the deep snow."
  ]
},
{
  "name": "Soap",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 2
},
{
  "name": "Songhorn",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A recorder, a simple type of flute, usually carved from wood."
  ]
},
{
  "name": "Soothsalts",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "value": 15000,
  "entries": [
    "Soothsalts are derived from a naturally occurring crystalline substance discovered throughout the wilds of the Miskath Strand. The crimson crystals have been mined from cavernous veins like those in the mouth of the Miskath Pit and found within smaller geode formations near sites ravaged by the Calamity. Soothsalts are consumed orally in lozenge-sized doses, and frequent users can be identified by the telltale crimson stain around their mouths. A creature subjected to a dose of soothsalts gains advantage on all Intelligence checks for {@dice 1d4} hours.",
    "For each dose of soothsalts consumed, the creature must succeed on a DC 15 Constitution saving throw or gain one level of {@condition exhaustion}-an effect which is cumulative with multiple doses."
  ]
},
{
  "name": "Soul Bag",
  "source": "MM",
  "type": "OTH",
  "rarity": "very rare",
  "entries": [
    "When an evil humanoid dies as a result of a {@creature night hag}'s Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  ]
},
{
  "name": "Soul Coin",
  "source": "BGDIA",
  "rarity": "uncommon",
  "wondrous": true,
  "weight": 0.333,
  "entries": [
    "Soul coins are about 5 inches across and about an inch thick, minted from infernal iron. Each coin weighs one-third of a pound, and is inscribed with Infernal writing and a spell that magically binds a single soul to the coin. Because each soul coin has a unique soul trapped within it, each has a story. A creature might have been imprisoned as a result of defaulting on a deal, while another might be the victim of a night hag's curse.",
    {
      "type": "entries",
      "name": "Carrying Soul Coins",
      "entries": [
        "To hold a soul coin is to feel the soul bound within it-overcome with rage or fraught with despair.",
        "An evil creature can carry as many soul coins as it wishes (up to its maximum weight allowance). A non-evil creature can carry a number of soul coins equal to or less than its Constitution modifier without penalty. A non-evil creature carrying a number of soul coins greater than its Constitution modifier has disadvantage on its attack rolls, ability checks, and saving throws."
      ]
    },
    {
      "type": "entries",
      "name": "Using a Soul Coin",
      "entries": [
        "A soul coin has 3 charges. A creature carrying the coin can use its action to expend 1 charge from a soul coin and use it to do one of the following:",
        {
          "type": "list",
          "items": [
            {
              "type": "item",
              "name": "Drain Life",
              "entry": "You siphon away some of the soul's essence and gain {@dice 1d10} temporary hit points."
            },
            {
              "type": "item",
              "name": "Query",
              "entry": "You telepathically ask the soul a question and receive a brief telepathic response, which you can understand. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic."
            }
          ]
        }
      ]
    },
    {
      "type": "entries",
      "name": "Freeing a Soul",
      "entries": [
        "Casting a spell that removes a curse on a soul coin frees the soul trapped within it, as does expending all of the coin's charges. The coin itself rusts from within and is destroyed once the soul is released. A freed soul travels to the realm of the god it served or the outer plane most closely tied to its alignment (DM's choice). The souls of lawful evil creatures released from soul coins typically emerge from the River Styx as {@creature lemure} devils.",
        "A soul can also be freed by destroying the coin that contains it. A soul coin has AC 19, 1 hit point for each charge it has remaining, and immunity to all damage except that which is dealt by a {@item hellfire weapon|bgdia} or an infernal war machine's furnace (see \"{@adventure Soul Fuel|bgdia|11|Soul Fuel}\").",
        "Freeing a soul from a soul coin is considered a good act, even if the soul belongs to an evil creature."
      ]
    },
    {
      "type": "entries",
      "name": "Hellish Currency",
      "entries": [
        "Soul coins are a currency of the Nine Hells and are highly valued by devils. The coins are used among the infernal hierarchy to barter for favors, bribe the unwilling, and reward the faithful for services rendered.",
        "Soul coins are created by Mammon and his greater devils on Minauros, the third layer of the Nine Hells, in a vast chamber where the captured souls of evil mortals are bound into the coins. These coins are then distributed throughout the Nine Hells to be used for goods and services, infernal deals, dark bargains, and bribes."
      ]
    }
  ]
},
{
  "name": "Space Galleon",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 3000000,
  "crew": 20,
  "vehAc": 15,
  "vehHp": 400,
  "vehDmgThresh": 15,
  "vehSpeed": 4,
  "capCargo": 20,
  "entries": [
    "The space galleon is a mainstay among the host of vessels that ply Wildspace and the Astral Sea. Space galleons can easily pass for ordinary seafaring galleons. Because they can land on water and move across it like their namesakes, they can sail into ports on terrestrial worlds without attracting undue attention. Like an ordinary galleon, a space galleon isn't built to land on the ground (its keel would cause it to roll on its side). The ship's standard weaponry includes two forward-mounted ballistae and an aft-mounted mangonel."
  ],
  "seeAlsoVehicle": [
    "Space Galleon|AAG"
  ]
},
{
  "name": "Speaking Stone",
  "source": "ERLW",
  "rarity": "very rare",
  "wondrous": true,
  "entries": [
    "The key to long-distance, virtually instantaneous communication across Khorvaire is House Sivis's network of message stations. Each station contains at least one speaking stone, which is carved from a Siberys dragonshard and inscribed with arcane symbols that uniquely identify it. If you're a gnome with the Mark of Scribing, you can touch the stone and use an action to cast the {@spell sending} spell from it. The target is any other speaking stone whose location or unique sequence of symbols you know. A creature within 5 feet of the stone hears the message as if they were the target.",
    "In a Sivis message station, a gnome is always on duty by the speaking stone, listening for messages that might come in and transcribing them for delivery to their intended recipients."
  ],
  "attachedSpells": [
    "sending"
  ]
},
{
  "name": "Spear of Backbiting",
  "source": "TftYP",
  "baseItem": "spear",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "curse": true,
  "weight": 3,
  "weaponCategory": "simple",
  "property": [
    "T",
    "V"
  ],
  "range": "50/90",
  "dmg1": "1d6",
  "dmgType": "P",
  "dmg2": "1d8",
  "bonusWeapon": "+2",
  "entries": [
    "You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, its normal and long ranges both increase by 30 feet, and it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with {@spell remove curse} or similar magic, you are unwilling to part with the weapon, keeping it within reach at all times. In addition, you have disadvantage on attack rolls made with weapons other than this one."
      ]
    },
    "Whenever you roll a 1 on an attack roll using this weapon, the weapon bends or flies to hit you in the back. Make a new attack roll with advantage against your own AC. If the result is a hit, you take damage as if you had attacked yourself with the spear."
  ]
},
{
  "name": "Spell Gem (Amber)",
  "source": "OotA",
  "rarity": "very rare",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "An amber spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "An amber spell gem can store up to 4th level spells. Spells cast from the spell gem have a save DC of 15 and an attack bonus of {@hit 9}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Gem (Bloodstone)",
  "source": "OotA",
  "rarity": "rare",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "A bloodstone spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "A bloodstone spell gem can store up to 3rd level spells. Spells cast from the spell gem have a save DC of 15 and an attack bonus of {@hit 7}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Gem (Jade)",
  "source": "OotA",
  "rarity": "very rare",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "A jade spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "A jade spell gem can store up to 5th level spells. Spells cast from the spell gem have a save DC of 17 and an attack bonus of {@hit 9}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Gem (Lapis lazuli)",
  "source": "OotA",
  "rarity": "uncommon",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "A lapis lazuli spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "A lapis lazuli spell gem can store up to 1st level spells. Spells cast from the spell gem have a save DC of 13 and an attack bonus of {@hit 5}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Gem (Obsidian)",
  "source": "OotA",
  "rarity": "uncommon",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "An obsidian spell gem can contain one cantrip from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "An obsidian spell gem can only store cantrips. Cantrips cast from the spell gem have a save DC of 13 and an attack bonus of {@hit 5}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Gem (Quartz)",
  "source": "OotA",
  "rarity": "rare",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "A quartz spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "A quartz spell gem can store up to 2nd level spells. Spells cast from the spell gem have a save DC of 13 and an attack bonus of {@hit 5}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Gem (Topaz)",
  "source": "OotA",
  "rarity": "very rare",
  "reqAttune": "optional",
  "wondrous": true,
  "entries": [
    "A topaz spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
    "If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
    "A topaz spell gem can store up to 6th level spells. Spells cast from the spell gem have a save DC of 17 and an attack bonus of {@hit 10}.",
    "You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
    "Once imbued with a spell, the gem can't be imbued again until the next dawn.",
    "Deep gnomes created these magic gemstones and keep the creation process a secret."
  ]
},
{
  "name": "Spell Scroll (1st Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "common",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 11. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 13 and an attack bonus of {@hit 5}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 11 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 1,
  "lootTables": [
    "Magic Item Table A"
  ]
},
{
  "name": "Spell Scroll (2nd Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 12. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 13 and an attack bonus of {@hit 5}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 12 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 2,
  "lootTables": [
    "Magic Item Table A",
    "Magic Item Table B"
  ]
},
{
  "name": "Spell Scroll (3rd Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "uncommon",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 13. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 15 and an attack bonus of {@hit 7}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 13 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 3,
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Spell Scroll (4th Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 14. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 15 and an attack bonus of {@hit 7}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 14 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 4,
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Spell Scroll (5th Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "rare",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 15. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 17 and an attack bonus of {@hit 9}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 15 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 5,
  "lootTables": [
    "Magic Item Table C"
  ]
},
{
  "name": "Spell Scroll (6th Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 16. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 17 and an attack bonus of {@hit 9}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 16 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 6,
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Spell Scroll (7th Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 17. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 18 and an attack bonus of {@hit 10}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 17 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 7,
  "lootTables": [
    "Magic Item Table D"
  ]
},
{
  "name": "Spell Scroll (8th Level)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "very rare",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 18. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 18 and an attack bonus of {@hit 10}.",
    "A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 18 Intelligence ({@skill Arcana}) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
  ],
  "spellScrollLevel": 8,
  "lootTables": [
    "Magic Item Table D",
    "Magic Item Table E"
  ]
},
{
  "name": "Spell Scroll (Cantrip)",
  "source": "DMG",
  "type": "SC",
  "tier": "minor",
  "rarity": "common",
  "entries": [
    "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.",
    "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 10. On a failed check, the spell disappears from the scroll with no other effect.",
    "Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.",
    "A spell cast from this scroll has a save DC of 13 and an attack bonus of {@hit 5}."
  ],
  "spellScrollLevel": 0,
  "lootTables": [
    "Magic Item Table A"
  ]
},
{
  "name": "Spellbook",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 3,
  "value": 5000,
  "entries": [
    "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
  ]
},
{
  "name": "Spellguard Shield",
  "source": "DMG",
  "type": "S",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 6,
  "ac": 2,
  "entries": [
    "While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Spelljamming Helm",
  "source": "AAG",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "entries": [
    "The function of this ornate chair is to propel and maneuver a ship on which it has been installed through space and air. It can also propel and maneuver a ship on water or underwater, provided the ship is built for such travel. The ship in question must weigh 1 ton or more.",
    "The sensation of being attuned to a spelljamming helm is akin to the pins-and-needles effect one experiences after one's arm or leg falls asleep, but not as painful.",
    "While attuned to a spelljamming helm and sitting in it, you gain the following abilities for as long as you maintain {@status concentration} (as if {@status concentration||concentrating} on a spell):",
    {
      "type": "list",
      "items": [
        "You can use the spelljamming helm to move the ship through space, air, or water up to the ship's speed. If the ship is in space and no other objects weighing 1 ton or more are within 1 mile of it, you can use the spelljamming helm to move the vessel fast enough to travel 100 million miles in 24 hours.",
        "You can steer the vessel, albeit in a somewhat clumsy fashion, in much the way that a rudder or oars can be used to maneuver a seafaring ship.",
        "At any time, you can see and hear what's happening on and around the vessel as though you were standing in a location of your choice aboard it."
      ]
    },
    {
      "type": "entries",
      "name": "Transfer Attunement",
      "entries": [
        "You can use an action to touch a willing spellcaster. That creature attunes to the spelljamming helm immediately, and your attunement to it ends."
      ]
    },
    {
      "type": "inset",
      "name": "Cost of a Spelljamming Helm",
      "entries": [
        "A spelljamming helm propels and steers a ship much as sails, oars, and rudders work on a seafaring vessel, and a spelljamming helm is easy to create if one has the proper spell. {@spell Create spelljamming helm|AAG} has a material component cost of 5,000 gp, so that's the least one can pay to acquire a spelljamming helm.",
        "Wildspace merchants, including {@creature dohwar|BAM|dohwars} and {@creature mercane|BAM|mercanes} (both described in {@book Boo's Astral Menagerie|BAM}), typically sell a spelljamming helm for substantially more than it cost to make. How much more depends on the market, but 7,500 gp would be a reasonable demand. A desperate buyer in a seller's market might pay 10,000 gp or more."
      ]
    }
  ]
},
{
  "name": "Spellshard",
  "source": "ERLW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This polished Eberron dragonshard fits in the hand and stores information similar to a book. The shard can hold the equivalent of one book that's no more than 320 pages long. A shard can be created blank or already filled with information. When the shard is created, the creator can set a passphrase that must be spoken to access the information stored within.",
    "While holding the shard, you can use an action to open your mind to the shard, seeing its content in your mind. On subsequent rounds, reading the text or scribing new text on blank \"pages\" in the shard requires {@status concentration} (as if {@status concentration||concentrating} on a spell) and takes the same amount of time it takes you to read and write normally. Thinking of a particular phrase or topic draws you to the first section in the shard that addresses it.",
    "A wizard can use a spellshard as a spellbook, with the usual cost in gold and time to \"scribe\" a spell into the shard."
  ]
},
{
  "name": "Spellwrought Tattoo (1st Level)",
  "source": "TCE",
  "rarity": "common",
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo contains a single {@filter 1st level spell|spells|level=1}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
    "The Ability modifier for this spell is +3; the Save DC is 13 and the attack bonus is +5."
  ]
},
{
  "name": "Spellwrought Tattoo (2nd Level)",
  "source": "TCE",
  "rarity": "uncommon",
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo contains a single {@filter 2nd level spell|spells|level=2}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
    "The Ability modifier for this spell is +3; the Save DC is 13 and the attack bonus is +5."
  ]
},
{
  "name": "Spellwrought Tattoo (3rd Level)",
  "source": "TCE",
  "rarity": "uncommon",
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo contains a single {@filter 3rd level spell|spells|level=3}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
    "The Ability modifier for this spell is +4; the Save DC is 15 and the attack bonus is +7."
  ]
},
{
  "name": "Spellwrought Tattoo (4th Level)",
  "source": "TCE",
  "rarity": "rare",
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo contains a single {@filter 4th level spell|spells|level=4}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
    "The Ability modifier for this spell is +4; the Save DC is 15 and the attack bonus is +7."
  ]
},
{
  "name": "Spellwrought Tattoo (5th Level)",
  "source": "TCE",
  "rarity": "rare",
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo contains a single {@filter 5th level spell|spells|level=5}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
    "The Ability modifier for this spell is +5; the Save DC is 17 and the attack bonus is +9."
  ]
},
{
  "name": "Spellwrought Tattoo (Cantrip)",
  "source": "TCE",
  "rarity": "common",
  "wondrous": true,
  "tattoo": true,
  "entries": [
    "Produced by a special needle, this magic tattoo contains a single {@filter cantrip|spells|level=0}, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
    "The Ability modifier for this spell is +3; the Save DC is 13 and the attack bonus is +5."
  ]
},
{
  "name": "Spider Staff",
  "source": "LMoP",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 6,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dusk",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "The top of this black, adamantine staff is shaped like a spider. The staff weighs 6 pounds. You must be attuned to the staff to gain its benefits and cast its spells. The staff can be wielded as a quarterstaff. It deals {@dice 1d6} extra poison damage on a hit when used to make a weapon attack.",
    "The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: {@spell spider climb} (1 charge) or {@spell web} (2 charges, spell save DC 15). No components are required.",
    "The staff regains {@dice 1d6 + 4} expended charges each day at dusk. If you expend the staff's last charge, roll a {@dice d20}. On a 1, the staff crumbles to dust and is destroyed."
  ],
  "attachedSpells": [
    "spider climb",
    "web"
  ]
},
{
  "name": "Spies' Murmur",
  "source": "GGR",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "This headpiece, crafted from dark metal, is worn curved around the ear. If you know a creature wearing another Spies' Murmur and that creature is within 1 mile of you, you can communicate telepathically with each other. As a bonus action, you can allow that creature to hear everything you hear for 1 hour. You can end this effect as a bonus action, and it ends if you're {@condition incapacitated}."
  ]
},
{
  "name": "Spinel",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A transparent red, red-brown, or deep green gemstone."
  ]
},
{
  "name": "Sprig of Mistletoe",
  "source": "PHB",
  "type": "SCF",
  "scfType": "druid",
  "rarity": "none",
  "value": 100
},
{
  "name": "Spyglass",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 100000,
  "entries": [
    "Objects viewed through a spyglass are magnified to twice their size."
  ]
},
{
  "name": "Spyglass of Clairvoyance",
  "source": "AI",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "At rank 2, your Head Office-supplied spyglass becomes a common magic item. As an action, you can look through the spyglass of clairvoyance at a location within 1 mile of you that is obstructing your view, such as a mountain, castle, or forest. You must then succeed on a DC 15 Wisdom check using {@item cartographer's tools} to map the natural terrain found within three miles of that chosen point. You do not gain any knowledge of creatures, structures, or anything other than natural terrain. This property of the spyglass cannot be used again until the next dawn."
  ]
},
{
  "name": "Squid Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2500000,
  "crew": 13,
  "vehAc": 15,
  "vehHp": 300,
  "vehDmgThresh": 15,
  "vehSpeed": 3.5,
  "capCargo": 20,
  "entries": [
    "Among the oldest types of spelljamming vessels, squid ships are popular with privateers and are often used as patrol ships. Standard weapons on a squid ship include a forward-mounted mangonel, two aft-mounted ballistae, and a reinforced bow for ramming. The tentacles that extend from the bow account for nearly half the ship's keel length.",
    "Squid ships can float and sail on water, and they can land on the ground."
  ],
  "seeAlsoVehicle": [
    "Squid Ship|AAG"
  ]
},
{
  "name": "Stabling (per day)",
  "source": "PHB",
  "type": "TAH",
  "rarity": "none",
  "value": 50
},
{
  "name": "Staff of Adornment",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "staff": true,
  "entries": [
    "If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place."
  ]
},
{
  "name": "Staff of Birdcalls",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.",
    "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever."
  ]
},
{
  "name": "Staff of Charming",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a bard, cleric, druid, sorcerer, warlock, or wizard",
  "reqAttuneTags": [
    {
      "class": "bard"
    },
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    },
    {
      "class": "sorcerer"
    },
    {
      "class": "warlock"
    },
    {
      "class": "wizard"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "staff": true,
  "entries": [
    "While holding this staff, you can use an action to expend 1 of its 10 charges to cast {@spell charm person}, {@spell command}, or {@spell comprehend languages} from it using your spell save DC. The staff can also be used as a magic quarterstaff.",
    "If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.",
    "The staff regains {@dice 1d8 + 2} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff becomes a nonmagical quarterstaff."
  ],
  "attachedSpells": [
    "charm person",
    "command",
    "comprehend languages"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Staff of Defense",
  "source": "LMoP",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusAc": "+1",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. You must be attuned to the staff to gain its benefits and cast its spells.",
    "While holding the staff, you have a +1 bonus to your Armor Class.",
    "The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: {@spell mage armor} (1 charge) or {@spell shield} (2 charges). No components are required.",
    "The staff regains {@dice 1d6 + 4} expended charges each day at dawn. If you expend the staff's last charge, roll a {@dice d20}. On a 1, the staff shatters and is destroyed."
  ],
  "attachedSpells": [
    "mage armor",
    "shield"
  ]
},
{
  "name": "Staff of Dunamancy",
  "source": "EGW",
  "rarity": "very rare",
  "reqAttune": "by a wizard",
  "reqAttuneTags": [
    {
      "class": "wizard"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This staff of polished gray wood bears numerous runes carved along its length. The staff has 10 charges and regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff turns into dust and is destroyed.",
    "While holding the staff, you can use an action to expend 2 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: {@spell fortune's favor|egw} (2 charges), {@spell pulse wave|egw} (3 charges), or {@spell gravity sinkhole|egw} (4 charges).",
    {
      "type": "entries",
      "name": "New Possibility",
      "entries": [
        "If you are holding the staff and fail a saving throw against a spell that targets only you, you can turn your failed save into a successful one. This property can't be used again until the next dawn."
      ]
    }
  ],
  "attachedSpells": [
    "fortune's favor|egw",
    "pulse wave|egw",
    "gravity sinkhole|egw"
  ]
},
{
  "name": "Staff of Fate",
  "source": "CM",
  "baseItem": "quarterstaff",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+3",
  "recharge": "special",
  "charges": 6,
  "staff": true,
  "weapon": true,
  "entries": [
    "This transparent crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.",
    {
      "type": "entries",
      "name": "Altered Outcome",
      "entries": [
        "The staff has 6 charges. As a bonus action, you can expend 1 of the staff's charges to give yourself or one other creature that you can see a {@dice d4}. The recipient can roll this {@dice d4} and add the number rolled to one ability check, attack roll, damage roll, or saving throw it makes before the start of your next turn. If this extra die is not used before then, it is lost.",
        "If you expend the staff's last charge, roll a {@dice d20}. On a roll of 9 or lower, the staff becomes a nonmagical quarterstaff that breaks the first time it scores a hit and deals damage. On a roll of 10 or higher, the staff regains {@dice 1d6} of its expended charges."
      ]
    }
  ]
},
{
  "name": "Staff of Fire",
  "source": "DMG",
  "resist": [
    "fire"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a druid, sorcerer, warlock, or wizard",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "sorcerer"
    },
    {
      "class": "warlock"
    },
    {
      "class": "wizard"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "You have resistance to fire damage while you hold this staff.",
    "The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: {@spell burning hands} (1 charge), {@spell fireball} (3 charges), or {@spell wall of fire} (4 charges).",
    "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff blackens, crumbles into cinders, and is destroyed."
  ],
  "attachedSpells": [
    "burning hands",
    "fireball",
    "wall of fire"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Staff of Flowers",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mildscented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff turns into flower petals and is lost forever."
  ]
},
{
  "name": "Staff of Frost",
  "source": "DMG",
  "resist": [
    "cold"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a druid, sorcerer, warlock, or wizard",
  "reqAttuneTags": [
    {
      "class": "druid"
    },
    {
      "class": "sorcerer"
    },
    {
      "class": "warlock"
    },
    {
      "class": "wizard"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "You have resistance to cold damage while you hold this staff.",
    "The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: {@spell cone of cold} (5 charges), {@spell fog cloud} (1 charge), {@spell ice storm} (4 charges), or {@spell wall of ice} (4 charges).",
    "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1. the staff turns to water and is destroyed."
  ],
  "attachedSpells": [
    "cone of cold",
    "fog cloud",
    "ice storm",
    "wall of ice"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Staff of Healing",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a bard, cleric, or druid",
  "reqAttuneTags": [
    {
      "class": "bard"
    },
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: {@spell cure wounds} (1 charge per spell level, up to 4th), {@spell lesser restoration} (2 charges). or {@spell mass cure wounds} (5 charges).",
    "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1. the staff vanishes in a flash of light, lost forever."
  ],
  "attachedSpells": [
    "lesser restoration",
    "mass cure wounds",
    "cure wounds"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Staff of Power",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a sorcerer, warlock, or wizard",
  "reqAttuneTags": [
    {
      "class": "sorcerer"
    },
    {
      "class": "warlock"
    },
    {
      "class": "wizard"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+2",
  "bonusSpellAttack": "+2",
  "bonusAc": "+2",
  "bonusSavingThrow": "+2",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 2d8 + 4}",
  "charges": 20,
  "staff": true,
  "entries": [
    "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.",
    "The staff has 20 charges for the following properties. The staff regains {@dice 2d8 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain {@dice 1d8 + 2} charges.",
    {
      "name": "Power Strike",
      "type": "entries",
      "entries": [
        "When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra {@damage 1d6} force damage to the target."
      ]
    },
    {
      "type": "entries",
      "name": "Spells",
      "entries": [
        "While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: {@spell cone of cold} (5 charges), {@spell fireball} (5th-level version, 5 charges), {@spell globe of invulnerability} (6 charges), {@spell hold monster} (5 charges), {@spell levitate} (2 charges). {@spell lightning bolt} (5th-level version, 5 charges), {@spell magic missile} (1 charge), {@spell ray of enfeeblement} (1 charge), or {@spell wall of force} (5 charges)."
      ]
    },
    {
      "name": "Retributive Strike",
      "type": "entries",
      "entries": [
        "You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.",
        "You have a {@chance 50} chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 &times; the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.",
        {
          "type": "table",
          "colLabels": [
            "Distance from Origin",
            "Effect"
          ],
          "colStyles": [
            "col-3",
            "col-9"
          ],
          "rows": [
            [
              "10 ft. away or closer",
              "8 &times; the number of charges in the staff"
            ],
            [
              "11 to 20 ft. away",
              "6 &times; the number of charges in the staff"
            ],
            [
              "21 to 30 ft. away",
              "4 &times; the number of charges in the staff"
            ]
          ]
        }
      ]
    }
  ],
  "attachedSpells": [
    "cone of cold",
    "fireball",
    "globe of invulnerability",
    "hold monster",
    "levitate",
    "lightning bolt",
    "magic missile",
    "ray of enfeeblement",
    "wall of force"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Staff of Striking",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+3",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.",
    "The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra {@damage 1d6} force damage. The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff becomes a nonmagical quarterstaff."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Staff of Swarming Insects",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a bard, cleric, druid, sorcerer, warlock, or wizard",
  "reqAttuneTags": [
    {
      "class": "bard"
    },
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    },
    {
      "class": "sorcerer"
    },
    {
      "class": "warlock"
    },
    {
      "class": "wizard"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This staff has 10 charges and regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, a {@creature swarm of insects} consumes and destroys the staff, then disperses.",
    {
      "name": "Spells",
      "type": "entries",
      "entries": [
        "While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: {@spell giant insect} (4 charges) or {@spell insect plague} (5 charges)."
      ]
    },
    {
      "name": "Insect Cloud",
      "type": "entries",
      "entries": [
        "While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect."
      ]
    }
  ],
  "attachedSpells": [
    "giant insect",
    "insect plague"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Staff of Thunder and Lightning",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+2",
  "staff": true,
  "entries": [
    "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.",
    {
      "type": "entries",
      "name": "Lightning",
      "entries": [
        "When you hit with a melee attack using the staff, you can cause the target to take an extra {@damage 2d6} lightning damage."
      ]
    },
    {
      "type": "entries",
      "name": "Thunder",
      "entries": [
        "When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become {@condition stunned} until the end of your next turn."
      ]
    },
    {
      "type": "entries",
      "name": "Lightning Strike",
      "entries": [
        "You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking {@damage 9d6} lightning damage on a failed save, or half as much damage on a successful one."
      ]
    },
    {
      "type": "entries",
      "name": "Thunderclap",
      "entries": [
        "You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes {@damage 2d6} thunder damage and becomes {@condition deafened} for 1 minute. On a successful save, a creature takes half damage and isn't {@condition deafened}."
      ]
    },
    {
      "type": "entries",
      "name": "Thunder and Lightning",
      "entries": [
        "You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one."
      ]
    }
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Staff of Withering",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a cleric, druid, or warlock",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    },
    {
      "class": "warlock"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "staff": true,
  "entries": [
    "This staff has 3 charges and regains {@dice 1d3} expended charges daily at dawn.",
    "The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra {@damage 2d10} necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Staff of the Adder",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a cleric, druid, or warlock",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    },
    {
      "class": "warlock"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "staff": true,
  "entries": [
    "You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.",
    "You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes {@damage 1d6} piercing damage and must succeed on a DC 15 Constitution saving throw or take {@damage 3d6} poison damage.",
    "The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Staff of the Ivory Claw",
  "source": "EGW",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusSpellAttack": "+1",
  "staff": true,
  "entries": [
    "This gray-and-cerulean staff is topped with a small dragon claw carved from ivory. While holding the staff, you gain a +1 bonus to spell attack rolls. Whenever you score a critical hit with a spell attack, the target takes an extra {@damage 3d6} radiant damage."
  ]
},
{
  "name": "Staff of the Python",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a cleric, druid, or warlock",
  "reqAttuneTags": [
    {
      "class": "cleric"
    },
    {
      "class": "druid"
    },
    {
      "class": "warlock"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "staff": true,
  "entries": [
    "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a {@creature giant constrictor snake} under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.",
    "On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't {@condition incapacitated}. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
    "If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Staff of the Woodlands",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a druid",
  "reqAttuneTags": [
    {
      "class": "druid"
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+2",
  "bonusSpellAttack": "+2",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.",
    "The staff has 10 charges for the following properties. It regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.",
    {
      "type": "entries",
      "name": "Spells",
      "entries": [
        "You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: {@spell animal friendship} (1 charge), {@spell awaken} (5 charges), {@spell barkskin} (2 charges), {@spell locate animals or plants} (2 charges), {@spell speak with animals} (1 charge), {@spell speak with plants} (3 charges), or {@spell wall of thorns} (6 charges).",
        "You can also use an action to cast the {@spell pass without trace} spell from the staff without using any charges."
      ]
    },
    {
      "type": "entries",
      "name": "Tree Form",
      "entries": [
        "You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by {@spell detect magic}. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff."
      ]
    }
  ],
  "attachedSpells": [
    "pass without trace",
    "animal friendship",
    "awaken",
    "barkskin",
    "locate animals or plants",
    "speak with animals",
    "speak with plants",
    "wall of thorns"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Star Moth",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 4000000,
  "crew": 13,
  "vehAc": 13,
  "vehHp": 400,
  "vehDmgThresh": 15,
  "vehSpeed": 5.5,
  "capCargo": 30,
  "entries": [
    "Star moths are ships constructed and flown by astral elves, who don't like it when these ships end up in the hands of others.",
    "A star moth's hull is fashioned from a grown and sculpted organic substance, and its enormous, decorative wings are made of shimmering crystal. The vessel is built for space travel, but its design does enable it to float on water or land safely on the ground. Standard weaponry includes two ballistae nestled in the star moth's eye holes and a mangonel mounted above the bridge."
  ],
  "seeAlsoVehicle": [
    "Star Moth|AAG"
  ]
},
{
  "name": "Star Ruby",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A translucent ruby with white star-shaped center gemstone."
  ]
},
{
  "name": "Star Sapphire",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A translucent blue sapphire with white star-shaped center gemstone."
  ]
},
{
  "name": "Star rose quartz",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A translucent rosy stone with white star-shaped center gemstone."
  ]
},
{
  "name": "Steel",
  "source": "WBtW",
  "baseItem": "longsword",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": "by a good-aligned creature",
  "reqAttuneTags": [
    {
      "alignment": [
        "G"
      ]
    }
  ],
  "sentient": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "S",
  "dmg2": "1d10",
  "bonusWeapon": "+2",
  "sword": true,
  "weapon": true,
  "entries": [
    "You have a +2 bonus to attack and damage rolls made with this magic weapon.",
    {
      "type": "entries",
      "name": "Revivify",
      "entries": [
        "You can use an action to cast the {@spell revivify} spell from the sword. You must touch the target with the sword to cast the spell. Once this property of the weapon is used, it can't be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Sentience",
      "entries": [
        "Steel is a sentient, lawful good longsword with an Intelligence of 8, a Wisdom of 11, and a Charisma of 15. It can see and hear out to a range of 60 feet. The sword can speak, read, and understand Common and Draconic. It frets over your well-being while you are attuned to it, and it doesn't like to back down from a fight."
      ]
    }
  ],
  "attachedSpells": [
    "revivify"
  ]
},
{
  "name": "Steel Mirror",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 0.5,
  "value": 500
},
{
  "name": "Stone of Controlling Earth Elementals",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "wondrous": true,
  "weight": 5,
  "entries": [
    "If the stone is touching the ground, you can use an action to speak its command word and summon an {@creature earth elemental}, as if you had cast the {@spell conjure elemental} spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds."
  ],
  "attachedSpells": [
    "conjure elemental"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Stone of Good Luck",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "bonusAbilityCheck": "+1",
  "entries": [
    "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws."
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Stone of Ill Luck",
  "source": "TftYP",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "curse": true,
  "weight": 1,
  "bonusSavingThrow": "-2",
  "bonusAbilityCheck": "-2",
  "entries": [
    "This polished agate appears to be a {@item stone of good luck} to anyone who tries to identify it, and it confers that item's property while on your person.",
    {
      "type": "entries",
      "name": "Curse",
      "entries": [
        "This item is cursed. While it is on your person, you take a -2 penalty to ability checks and saving throws. Until the curse is discovered, the DM secretly applies this penalty, assuming you are adding the item's bonus. You are unwilling to part with the stone until the curse is broken with {@spell remove curse} or similar magic."
      ]
    }
  ]
},
{
  "name": "Stonespeaker Crystal",
  "source": "OotA",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "entries": [
    "Created by the stone giant librarians of Gravenhollow, this nineteen-inch-long shard of quartz grants you advantage on Intelligence ({@skill Investigation}) checks while it is on your person.",
    "The crystal has 10 charges. While holding it, you can use an action to expend some of its charges to cast one of the following spells from it: {@spell speak with animals} (2 charges), {@spell speak with dead} (4 charges), or {@spell speak with plants} (3 charges).",
    "When you cast a {@filter divination|spells|school=D} spell, you can use the crystal in place of one material component that would normally be consumed by the spell, at a cost of 1 charge per level of the spell. The crystal is not consumed when used in this way.",
    "The crystal regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the crystal's last charge, roll a {@dice d20}. On a 1, the crystal vanishes, lost forever."
  ],
  "attachedSpells": [
    "speak with animals",
    "speak with dead",
    "speak with plants"
  ]
},
{
  "name": "Storm Boomerang",
  "source": "PotA",
  "type": "R",
  "rarity": "uncommon",
  "weaponCategory": "simple",
  "range": "60/120",
  "dmg1": "1d4",
  "dmgType": "B",
  "entries": [
    "This boomerang is a ranged weapon carved from {@creature griffon} bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals {@damage 1d4} bludgeoning damage and {@damage 3d4} thunder damage, and the target must succeed on a DC 10 Constitution saving throw or be {@condition stunned} until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.",
    "Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node."
  ]
},
{
  "name": "Strixhaven Pennant",
  "source": "SCC",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This magic pennant bears the symbol of Strixhaven or one of its colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. While you wave the pennant, the symbol on it glitters, and the pennant sheds bright light in a 10-foot-radius and dim light for an additional 10 feet."
  ]
},
{
  "name": "Sun",
  "source": "WDH",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "Platinum coin, twice as large as a {@item nib|wdh} (1 sun = 1,000 {@item nib|wdh|nibs})"
  ]
},
{
  "name": "Sun Blade",
  "source": "DMG",
  "baseItem": "longsword",
  "type": "M",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "F",
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "R",
  "dmg2": "1d10",
  "bonusWeapon": "+2",
  "entries": [
    "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with {@item shortsword|shortswords} or {@item longsword|longswords}, you are proficient with the sun blade.",
    "You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra {@damage 1d8} radiant damage.",
    "The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Sun amulet on a beaded chain (Sun Empire)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Sunforger",
  "source": "GGR",
  "baseItem": "warhammer",
  "type": "M",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 2,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "B",
  "dmg2": "1d10",
  "bonusWeapon": "+2",
  "entries": [
    "You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
    "As an action, you can hurl the weapon up to 120 feet to a point you can see. When it reaches that point, the weapon vanishes in an explosion, and each creature in a 20-foot-radius sphere centered on that point must make a DC 15 Dexterity saving throw, taking {@damage 6d6} fire damage on a failed save, or half as much damage on a successful one. Afterward, you can use an action to cause the weapon to reappear in your empty hand. You can't cause it to explode again until you finish a short or long rest.",
    "If you don't call the weapon back to your hand, it reappears at the point where it exploded when you are no longer attuned to it or when 24 hours have passed."
  ]
},
{
  "name": "Sword of the Paruns",
  "source": "GGR",
  "baseItem": "longsword",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "S",
  "dmg2": "1d10",
  "bonusWeapon": "+1",
  "entries": [
    "You gain a +1 bonus to attack and damage rolls made with this magic weapon. Additionally, once on each of your turns, you can use one of the following properties if you're holding the sword:",
    {
      "type": "list",
      "items": [
        "Immediately after you use the {@action Attack} action to attack with the sword, you can enable one creature within 60 feet of you to use its reaction to make one weapon attack.",
        "Immediately after you take the {@action Dash} action, you can enable one creature within 60 feet of you to use its reaction to move up to its speed.",
        "Immediately after you take the {@action Dodge} action, you can enable one creature within 60 feet of you to use its reaction to gain the benefits of the {@action Dodge} action."
      ]
    }
  ]
},
{
  "name": "Talking Doll",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set an observable condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends."
  ]
},
{
  "name": "Tangler Grenade",
  "source": "WDMM",
  "type": "OTH",
  "rarity": "none",
  "entries": [
    "A tangler grenade is an alchemical, nonmagical item with an ovoid resin shell that shatters on impact. An as action, a creature can throw a tangler grenade at a point up to 60 feet away. Each creature within 10 feet of a shattered tangler grenade must succeed on a DC 15 Dexterity saving throw or be {@condition restrained} by sticky white webs. As an action, a creature can try to free itself or another creature within its reach from the webs, doing so with a successful DC 20 Strength ({@skill Athletics}) check. A gallon of alcohol dissolves the webs produced by a single tangler grenade. Otherwise, the webs dissolve on their own after 1 hour, freeing any creatures {@condition restrained} by them."
  ]
},
{
  "name": "Tankard",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 2,
  "entries": [
    "A tankard holds 1 pint of liquid."
  ]
},
{
  "name": "Tankard of Sobriety",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison."
  ]
},
{
  "name": "Tantan",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A tambourine, a popular instrument with halflings and humans south of the Dalelands."
  ]
},
{
  "name": "Taol",
  "source": "WDH",
  "type": "$",
  "rarity": "none",
  "value": 200,
  "entries": [
    "Brass coin, about two inches square with a hold large enough for a {@item nib|wdh} to fit in (1 taol = 200 {@item nib|wdh|nibs})"
  ]
},
{
  "name": "Tearulai",
  "source": "WDMM",
  "baseItem": "longsword",
  "type": "M",
  "rarity": "very rare",
  "reqAttune": true,
  "sentient": true,
  "weight": 3,
  "weaponCategory": "martial",
  "property": [
    "V"
  ],
  "dmg1": "1d8",
  "dmgType": "S",
  "dmg2": "1d10",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d4 + 2}",
  "charges": 6,
  "entries": [
    "The longsword, Tearulai, is a sentient, neutral good {@item sword of sharpness} with an emerald-colored blade and precious gemstones embedded in its hilt and pommel. The sword's magical properties are suppressed until it is removed from Valdemar's skull.",
    "Evil creatures can't attune to Tearulai; any evil creature that tries to do so takes 20 psychic damage. The weapon's emerald blade can't be damaged or dulled, and the sword can't be teleported anywhere without its wielder while the two are attuned to one another.",
    {
      "type": "entries",
      "name": "Spells",
      "entries": [
        "The sword has 6 charges and regains {@dice 1d4 + 2} expended charges daily at dawn. A creature attuned to the sword can use an action and expend 1 or more charges to cast one of the following spells from it without material components: {@spell fly} (2 charges), {@spell polymorph} (3 charges), or {@spell transport via plants} (4 charges)."
      ]
    },
    {
      "type": "entries",
      "name": "Sentience",
      "entries": [
        "The sword has an Intelligence of 17, a Wisdom of 12, and a Charisma of 20. It has hearing and {@sense truesight} out to a range of 120 feet. It communicates telepathically with its attuned wielder and can speak, read, and understand Common, Draconic, Elvish, and Sylvan. In addition, the sword can ascertain the true value of any gemstone brought within 5 feet of it."
      ]
    },
    {
      "type": "entries",
      "name": "Personality",
      "entries": [
        "Tearulai admires great beauty, music, fine art, and poetry. Vain, the weapon strives to improve its appearance. It craves gemstones and seeks out better ones with which to adorn itself. Most of all, it longs to return to the forests around Myth Drannor, where it was created. If its wielder's goals run counter to its own, Tearulai attempts to take control of its wielder and escape Undermountain, whereupon it can use its {@spell transport via plants} spell to return whence it came."
      ]
    },
    "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.",
    "When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another {@dice d20}. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.",
    "{@note Note: According to the SRD, it is an extra {@damage 4d6} slashing damage, although {@link this is incorrect|https://rpg.stackexchange.com/a/174522/53884}}.",
    "In addition, you can speak the sword's command to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light."
  ],
  "attachedSpells": [
    "fly",
    "polymorph",
    "transport via plants"
  ]
},
{
  "name": "Tej",
  "source": "ToA",
  "type": "FD",
  "rarity": "none",
  "weight": 5,
  "entries": [
    "Tej is an amber-colored, fermented drink made from honey. It's more common and popular in Chult than beer or ale. A mug of tej costs 4 cp in Port Nyanzaru or 6 cp in Fort Beluarian. A 1-gallon cask costs 2 sp in the city or 3 sp at the fort."
  ]
},
{
  "name": "Teleportation Tablet",
  "source": "CRCotN",
  "rarity": "rare",
  "wondrous": true,
  "entries": [
    "This clay tablet is eight inches long, four inches wide, and half an inch thick. Inscribed on it is the sigil sequence for a permanent teleportation circle. A creature that studies the sequence for 10 minutes can make a DC 21 Intelligence ({@skill Arcana}) check, learning the circle's destination on a success.",
    "You can use an action to break the tablet in half, turning it to dust. If the tablet is broken while it is on the same plane of existence as the teleportation circle whose sigil sequence was engraved on it, a 10-foot-diameter teleportation circle of glowing blue light appears on the ground in an unoccupied space you choose within 30 feet of you. This teleportation circle has the characteristics of one created using the {@spell teleportation circle} spell, except that it connects to the teleportation circle whose sigil sequence appears on the tablet.",
    "The teleportation circle created by the tablet disappears at the end of your next turn."
  ]
},
{
  "name": "Tentacle Rod",
  "source": "DMG",
  "type": "RD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 2,
  "entries": [
    "Made by the {@creature drow}, this rod is a magic weapon that ends in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentacle makes a melee attack roll with a +9 bonus. On a hit, the tentacle deals {@damage 1d6} bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Theki Root",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "value": 300,
  "entries": [
    "This thick marsh root tastes bitter but is thought to aid digestive health. When you use an action to consume a dose, you gain advantage on saving throws against the effects of poisonous or toxic substances for 8 hours."
  ]
},
{
  "name": "Thelarr",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "Also known as a whistlecane, a simple and easy-to-make wind instrument cut from a reed. They are so simple, in fact, that skilled bards frequently make and give them away to children-to the parents' delight or regret."
  ]
},
{
  "name": "Thermal Cube",
  "source": "IDRotF",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius)."
  ]
},
{
  "name": "Thessaltoxin",
  "source": "IMR",
  "rarity": "none",
  "poison": true,
  "entries": [
    "This poison was first created using blood harvested from the artificer Thessalar. A creature subjected to the poison must succeed on a DC 15 Constitution saving throw or take on a new form as if affected by the {@spell polymorph} spell. The creature's new form is a random beast or a creature it has seen within the last 24 hours (as chosen by the DM). This transformation lasts until the end of the target's next long rest. This effect is not subject to {@spell dispel magic} or {@spell remove curse}, but a {@spell greater restoration} spell restores the creature to its original form."
  ],
  "poisonTypes": [
    "ingested",
    "injury"
  ],
  "attachedSpells": [
    "polymorph"
  ]
},
{
  "name": "Thessaltoxin Antidote",
  "source": "IMR",
  "type": "P",
  "rarity": "uncommon",
  "entries": [
    "This potion appears to change color and texture each time you look at it. When you drink the potion, it ends the {@spell polymorph} effect imposed by thessaltoxin."
  ]
},
{
  "name": "Thieves' Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 84
    }
  ],
  "type": "T",
  "rarity": "none",
  "weight": 1,
  "value": 2500,
  "entries": [
    "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."
  ],
  "additionalEntries": [
    "Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "Your knowledge of traps grants you insight when answering questions about locations that are renowned for their traps."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation and Perception",
      "entries": [
        "You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence."
      ]
    },
    {
      "type": "entries",
      "name": "Set a Trap",
      "entries": [
        "Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone else's attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate."
      ]
    },
    {
      "type": "table",
      "caption": "Thieves' Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Pick a lock",
          "Varies"
        ],
        [
          "Disable a trap",
          "Varies"
        ]
      ]
    }
  ]
},
{
  "name": "Three-Dragon Ante Set",
  "source": "PHB",
  "type": "GS",
  "rarity": "none",
  "value": 100
},
{
  "name": "Thunder Absorbing Tattoo",
  "source": "TCE",
  "resist": [
    "thunder"
  ],
  "detail1": "orange",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "tattoo": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Absorbing Tattoo|TCE}"
  ]
},
{
  "name": "Tiger Eye",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "A translucent brown with golden center gemstone."
  ]
},
{
  "name": "Timepiece of Travel",
  "source": "AI",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "While attuned to this device, you have a +1 bonus to Dexterity saving throws and you always know which way is north. Additionally, you can cast the {@spell longstrider} spell on yourself at will.",
    {
      "type": "entries",
      "name": "Turn-by-Turn Directions",
      "entries": [
        "You can name any location within 10 miles of your current location that is known to at least one creature also within 10 miles of that location (including you). Once you name the location, a disembodied voice heard only by you provides directions to the location by the safest, most direct route. The voice knows to avoid natural hazards, so that it does not send you through trackless wilderness or into a lake. But it has no knowledge of or ability to help you avoid monsters, enemies, traps, locked doors, and the like.",
        "The timepiece is of no use for reaching locations that are wholly secret or not known to any creatures within range. Once you use this feature of the timepiece of travel, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Get Away From It All",
      "entries": [
        "As an action, you can cast the {@spell teleport} spell. Once you use this feature of the timepiece of travel, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Part of a Whole",
      "entries": [
        "While this component is not installed in the {@item Orrery of the Wanderer|AI}, its magic might function sporadically or with unpredictable side effects, as determined by the DM."
      ]
    }
  ],
  "attachedSpells": [
    "longstrider",
    "teleport"
  ]
},
{
  "name": "Tinderbox",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 50,
  "entries": [
    "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch-or anything else with abundant, exposed fuel-takes an action. Lighting any other fire takes 1 minute."
  ]
},
{
  "name": "Tinker's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 84
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 10,
  "value": 5000,
  "additionalEntries": [
    "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue."
      ]
    },
    {
      "type": "entries",
      "name": "History",
      "entries": [
        "You can determine the age and origin of objects, even if you have only a few pieces remaining from the original."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "When you inspect a damaged object, you gain knowledge of how it was damaged and how long ago."
      ]
    },
    {
      "type": "entries",
      "name": "Repair",
      "entries": [
        "You can restore 10 hit points to a damaged object for each hour of work. For any object, you need access to the raw materials required to repair it. For metal objects, you need access to an open flame hot enough to make the metal pliable."
      ]
    },
    {
      "type": "table",
      "caption": "Tinker's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Temporarily repair a disabled device",
          "10"
        ],
        [
          "Repair an item in half the time",
          "15"
        ],
        [
          "Improvise a temporary item using scraps",
          "20"
        ]
      ]
    }
  ]
},
{
  "name": "Tiny jade figurine (River Heralds)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Tocken",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A hanging set of carved oval bells, usually played with a pair of light wooden hammers (or open handed). They are most common in underground cultures, where the resonant tones can carry."
  ]
},
{
  "name": "Tome of Clear Thought",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "ability": {
    "int": 2
  },
  "entries": [
    "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Tome of Leadership and Influence",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "ability": {
    "cha": 2
  },
  "entries": [
    "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Tome of Strahd",
  "source": "CoS",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "entries": [
    "The Tome of Strahd is an ancient work penned by Strahd, a tragic tale of how he came to his fallen state. The book is bound in a thick leather cover with steel hinges and fastenings. The pages are of parchment and very brittle. Most of the book is written in the curious shorthand that only Strahd employs. Stains and age have made most of the work illegible, but several paragraphs remain intact."
  ]
},
{
  "name": "Tome of Understanding",
  "source": "DMG",
  "tier": "major",
  "rarity": "very rare",
  "wondrous": true,
  "weight": 5,
  "ability": {
    "wis": 2
  },
  "entries": [
    "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century."
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Topaz",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 50000,
  "entries": [
    "A transparent golden yellow gemstone."
  ]
},
{
  "name": "Torch",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 1,
  "entries": [
    "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
  ]
},
{
  "name": "Torpor",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 60000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become {@condition poisoned} for {@dice 4d6} hours. The {@condition poisoned} creature is {@condition incapacitated}."
  ],
  "poisonTypes": [
    "ingested"
  ]
},
{
  "name": "Totem",
  "source": "PHB",
  "type": "SCF",
  "scfType": "druid",
  "rarity": "none",
  "value": 100
},
{
  "name": "Tourmaline",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 10000,
  "entries": [
    "A transparent pale green, blue, brown, or red gemstone."
  ]
},
{
  "name": "Travel Alchemical Kit",
  "source": "AI",
  "rarity": "uncommon",
  "wondrous": true,
  "grantsProficiency": true,
  "entries": [
    "Also at rank 3, Head Office provides you with a travel alchemical kit-an uncommon magic item containing miniaturized versions of both {@item alchemist's supplies} and a {@item poisoner's kit} (glass vials, a mortar and pestle, chemicals, and a glass stirring rod). You gain proficiency with a {@item poisoner's kit} as part of this upgrade.",
    "You can use this magical kit as long as it is on your person, with no need to draw or stow it. If you are ever searched, finding your travel alchemical kit requires a successful DC 20 Intelligence ({@skill Investigation}) or Wisdom ({@skill Insight}) check."
  ]
},
{
  "name": "Traveler's Clothes",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 4,
  "value": 200
},
{
  "name": "Treasure chest crafted of exotic wood with gold fittings and opals (Brazen Coalition)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 750000
},
{
  "name": "Trident of Fish Command",
  "source": "DMG",
  "baseItem": "trident",
  "type": "M",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "weight": 4,
  "weaponCategory": "martial",
  "property": [
    "T",
    "V"
  ],
  "range": "20/60",
  "dmg1": "1d6",
  "dmgType": "P",
  "dmg2": "1d8",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast {@spell dominate beast} (save DC 15) from it on a beast that has an innate swimming speed. The trident regains {@dice 1d3} expended charges daily at dawn."
  ],
  "attachedSpells": [
    "dominate beast"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Trinket",
  "source": "AI",
  "type": "G",
  "rarity": "none",
  "entries": [
    "Worried that you're going to pull out your dead sprite inside a clear glass bottle at a company function only to discover that three other people in the franchise have one as well? Then consider rolling on the Acquisitions Incorporated Trinkets table instead of the {@item Trinket|table in chapter 5 of the Player's Handbook}, to gain a unique trinket at character creation with a bit of Acq Inc flair.",
    {
      "type": "table",
      "caption": "Acquisitions Incorporated Trinkets",
      "colLabels": [
        "d100",
        "Trinket"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "1",
          "A perfect skipping stone"
        ],
        [
          "2",
          "Three weighted dice that always roll low"
        ],
        [
          "3",
          "A locket with a picture of Jim Darkmagic"
        ],
        [
          "4",
          "A tiny anvil and smith's hammer"
        ],
        [
          "5",
          "A nonfunctional immovable rod"
        ],
        [
          "6",
          "A DIY acupuncture kit"
        ],
        [
          "7",
          "A stuffed owlbear toy"
        ],
        [
          "8",
          "A diagram for a new war lute"
        ],
        [
          "9",
          "A declaration of war against a nation no one has ever heard of"
        ],
        [
          "10",
          "A pipe that emits green smoke"
        ],
        [
          "11",
          "A glass eye"
        ],
        [
          "12",
          "The centerpiece of a priceless chandelier"
        ],
        [
          "13",
          "A fine cane with a secret compartment"
        ],
        [
          "14",
          "A letter written by Rosie Beestinger"
        ],
        [
          "15",
          "A coin that always lands on its edge"
        ],
        [
          "16",
          "The deed and title to an abandoned windmill and three acres of tillable land that you've never been able to find"
        ],
        [
          "17",
          "A menu from Big Daddy Donaar's Yum Yum Hut"
        ],
        [
          "18",
          "A small purse that screams loudly when opened"
        ],
        [
          "19",
          "A deep-crow-feather quill"
        ],
        [
          "20",
          "A pair of breeches that always smells faintly of honey"
        ],
        [
          "21",
          "A one-armed Viari doll (Apocalypse Dagger accessory missing)"
        ],
        [
          "22",
          "A leather pouch filled with various finger bones of unknown provenance"
        ],
        [
          "23",
          "The collar of your childhood pet, Nutmeg"
        ],
        [
          "24",
          "A seashell that, when pressed to the ear, speaks in flowing rhymes"
        ],
        [
          "25",
          "A recipe book for cooking with mushrooms"
        ],
        [
          "26",
          "One expired coupon for \"A Free Cornerstone\""
        ],
        [
          "27",
          "A portable beehive"
        ],
        [
          "28",
          "Goggles that literally tint everything rose colored"
        ],
        [
          "29",
          "A wand of wonder that allows you to cast only mending"
        ],
        [
          "30",
          "A bracelet woven from mistletoe"
        ],
        [
          "31",
          "A curved claw from an unknown beast that small children are always frightened of"
        ],
        [
          "32",
          "A longsword that can be folded down in 1 minute and hidden in your pocket"
        ],
        [
          "33",
          "A living graft of what you believe to be the World Tree"
        ],
        [
          "34",
          "A tattered scarf with the Acquisitions Incorporated logo"
        ],
        [
          "35",
          "A box containing a torn-up letter"
        ],
        [
          "36",
          "An old contract marked \"Void\""
        ],
        [
          "37",
          "A small pigeon in a cage"
        ],
        [
          "38",
          "An Acquisitions Incorporated \"Green Flame\" foam finger"
        ],
        [
          "39",
          "A \"C\" Team lunchbox"
        ],
        [
          "40",
          "A potted plant that grows different fruit on every branch"
        ],
        [
          "41",
          "A book of adventures for children"
        ],
        [
          "42",
          "An Omin action figure with detachable maul and holy symbol"
        ],
        [
          "43",
          "A pint glass engraved with a picture of a keg robot"
        ],
        [
          "44",
          "A giant hockey puck"
        ],
        [
          "45",
          "A miniature cannon that actually fires"
        ],
        [
          "46",
          "A very fancy red scarf and matching handkerchief"
        ],
        [
          "47",
          "An arrow once shot by M&ocirc;rg&aelig;n"
        ],
        [
          "48",
          "A purple worm toy"
        ],
        [
          "49",
          "A burned doll whose eyes follow you around the room"
        ],
        [
          "50",
          "An infinite inkwell"
        ],
        [
          "51",
          "A band embroidered with the symbol of the Six"
        ],
        [
          "52",
          "A squishy cactus"
        ],
        [
          "53",
          "A velvet blindfold"
        ],
        [
          "54",
          "A dirty figurine of a triceratops that can't be cleaned"
        ],
        [
          "55",
          "A used (and thus nonmagical) noble knife from the Noble Knife"
        ],
        [
          "56",
          "A quill that rotates through all the colors of the rainbow"
        ],
        [
          "57",
          "A twenty-sided die that only rolls the number 4"
        ],
        [
          "58",
          "A pointed hat that glows in the dark"
        ],
        [
          "59",
          "A cup that hums when filled with water"
        ],
        [
          "60",
          "A mug fashioned from the skull of someone else's enemy"
        ],
        [
          "61",
          "A small glass jar containing an immortal firefly"
        ],
        [
          "62",
          "A fake mustache made from gnome facial hair"
        ],
        [
          "63",
          "A petrified troll finger"
        ],
        [
          "64",
          "Half of a map"
        ],
        [
          "65",
          "The other half of a map"
        ],
        [
          "66",
          "An unreasonable amount of pocket lint"
        ],
        [
          "67",
          "A dozen flyers for a local gnome food place"
        ],
        [
          "68",
          "Omin Dran's business card"
        ],
        [
          "69",
          "A lock of hair from a changeling"
        ],
        [
          "70",
          "A marble that rolls uphill"
        ],
        [
          "71",
          "A piece of parchment listing a command word for a powerful magic item"
        ],
        [
          "72",
          "A book titled Conversational Giant"
        ],
        [
          "73",
          "A user's manual for an apparatus of Kwalish"
        ],
        [
          "74",
          "A signed headshot of famous bard Spice Caraway"
        ],
        [
          "75",
          "The eye of a basilisk in a crystal box"
        ],
        [
          "76",
          "A postcard from Ravnica"
        ],
        [
          "77",
          "A stamp collection"
        ],
        [
          "78",
          "A small piece of solidified smoke"
        ],
        [
          "79",
          "A six-sided die that sometimes rolls a seven"
        ],
        [
          "80",
          "A left-hand gauntlet"
        ],
        [
          "81",
          "A music box that plays nursery rhymes"
        ],
        [
          "82",
          "A locket that's bigger on the outside than the inside"
        ],
        [
          "83",
          "A potted plant that grows hair instead of leaves"
        ],
        [
          "84",
          "A collection of teeth"
        ],
        [
          "85",
          "A coin whose minting date always shows three years in the future"
        ],
        [
          "86",
          "A green drinking horn taken from a very large bull"
        ],
        [
          "87",
          "A small book containing pressed and dried botanical samples"
        ],
        [
          "88",
          "A hatched chimera egg"
        ],
        [
          "89",
          "A slightly used red bandit mask"
        ],
        [
          "90",
          "A tiny stirge encased in amber"
        ],
        [
          "91",
          "A large bottle of Red Larch Ale that can't be opened"
        ],
        [
          "92",
          "A cane topped with a stylized golden bulldog"
        ],
        [
          "93",
          "A note in your own hand that you don't remember writing"
        ],
        [
          "94",
          "A sprig of herbs from your family's garden"
        ],
        [
          "95",
          "A tankard stolen from the Dran & Courtier"
        ],
        [
          "96",
          "A small, severed tentacle preserved in alcohol"
        ],
        [
          "97",
          "A walnut with a face drawn on it"
        ],
        [
          "98",
          "A small flask of liquid from the Lake of Radiant Mists"
        ],
        [
          "99",
          "An ice cube that never melts"
        ],
        [
          "00",
          "An expertly carved sword hilt with the blade snapped cleanly off"
        ]
      ]
    }
  ]
},
{
  "name": "Trinket",
  "source": "CoS",
  "type": "G",
  "rarity": "none",
  "entries": [
    "When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creatures pockets.",
    {
      "type": "table",
      "caption": "Curse of Strahd. Character Options, Gothic Trinket Table",
      "colLabels": [
        "{@dice d100}",
        "Trinket"
      ],
      "colStyles": [
        "col-2 text-center",
        "col-10"
      ],
      "rows": [
        [
          "01-02",
          "A picture you drew as a child of your imaginary friend"
        ],
        [
          "03-04",
          "A lock that opens when blood is dripped in its keyhole"
        ],
        [
          "05-06",
          "Clothes stolen from a {@creature scarecrow}"
        ],
        [
          "07-08",
          "A spinning top carved with four faces: happy, sad, wrathful, and dead"
        ],
        [
          "09-10",
          "The necklace of a sibling who died on the day you were born"
        ],
        [
          "11-12",
          "A wig from someone executed by beheading"
        ],
        [
          "13-14",
          "The unopened letter to you from your dying father"
        ],
        [
          "15-16",
          "A pocket watch that runs backward for an hour every midnight"
        ],
        [
          "17-18",
          "A winter coat stolen from a dying soldier"
        ],
        [
          "19-20",
          "A bottle of invisible ink that can only be read at sunset"
        ],
        [
          "21-22",
          "A wineskin that refills when interred with a dead person for a night"
        ],
        [
          "23-24",
          "A set of silverware used by a king for his last meal"
        ],
        [
          "25-26",
          "A spyglass that always shows the world suffering a terrible storm"
        ],
        [
          "27-28",
          "A cameo with the profile's face scratched away"
        ],
        [
          "29-30",
          "A lantern with a black candle that never runs out and that burns with green flame"
        ],
        [
          "31-32",
          "A teacup from a child's tea set, stained with blood"
        ],
        [
          "33-34",
          "A little black book that records your dreams, and yours alone, when you sleep"
        ],
        [
          "35-36",
          "A necklace formed of the interlinked holy symbols of a dozen deities"
        ],
        [
          "37-38",
          "A hangman's noose that feels heavier than it should"
        ],
        [
          "39-40",
          "A birdcage into which small birds fly but once inside never eat or leave"
        ],
        [
          "41-42",
          "A lepidopterist's box filled dead moths with skulllike patterns on their wings"
        ],
        [
          "43-44",
          "A jar of pickled ghouls' tongues"
        ],
        [
          "45-46",
          "The wooden hand of a notorious pirate"
        ],
        [
          "47-48",
          "An urn with the ashes of a dead relative"
        ],
        [
          "49-50",
          "A hand mirror backed with a bronze depiction of a {@creature medusa}"
        ],
        [
          "51-52",
          "Pallid leather gloves crafted with ivory fingernails"
        ],
        [
          "53-54",
          "Dice made from the knuckles of a notorious charlatan"
        ],
        [
          "55-56",
          "A ring of keys for forgotten locks"
        ],
        [
          "57-58",
          "Nails from the coffin of a murderer"
        ],
        [
          "59-60",
          "A key to the family crypt"
        ],
        [
          "61-62",
          "A bouquet of funerary flowers that always looks and smells fresh"
        ],
        [
          "63-64",
          "A switch used to discipline you as a child"
        ],
        [
          "65-66",
          "A music box that plays by itself whenever someone holding it dances"
        ],
        [
          "67-68",
          "A walking cane with an iron ferrule that strikes sparks on stone"
        ],
        [
          "69-70",
          "A flag from a ship lost at sea"
        ],
        [
          "71-72",
          "Porcelain doll's head that always seems to be looking at you"
        ],
        [
          "73-74",
          "A wolf's head wrought in silver that is also a whistle"
        ],
        [
          "75-76",
          "A small mirror that shows a much older version of the viewer"
        ],
        [
          "77-78",
          "Small, worn book of children's nursery rhymes"
        ],
        [
          "79-80",
          "A mummified raven claw"
        ],
        [
          "81-82",
          "A broken pendent of a silver dragon that's always cold to the touch"
        ],
        [
          "83-84",
          "A small locked box that quietly hums a lovely melody at night but you always forget it in the morning"
        ],
        [
          "85-86",
          "An inkwell that makes one a little nauseous when staring at it"
        ],
        [
          "87-88",
          "An old little doll made from a dark, dense wood and missing a hand and a foot"
        ],
        [
          "89-90",
          "A black executioner's hood"
        ],
        [
          "91-92",
          "A pouch made of flesh, with a sinew drawstring"
        ],
        [
          "93-94",
          "A tiny spool of black thread that never runs out"
        ],
        [
          "95-96",
          "A tiny clockwork figurine of a dancer that's missing a gear and doesn't work"
        ],
        [
          "97-98",
          "A black wooden pipe that creates puffs of smoke that look like skulls"
        ],
        [
          "99-00",
          "A vial of perfume, the scent of which only certain creatures can detect"
        ]
      ]
    }
  ]
},
{
  "name": "Trinket",
  "source": "EET",
  "type": "G",
  "rarity": "none",
  "entries": [
    "When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creatures pockets.",
    {
      "type": "table",
      "caption": "Elemental Evil Trinket Table",
      "colLabels": [
        "{@dice d100}",
        "Trinket"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01",
          "A compass that always points to Mulmaster"
        ],
        [
          "02",
          "A paper fan that won't produce a breeze no matter how hard it's waved"
        ],
        [
          "03",
          "A petrified potato that resembles someone important to you"
        ],
        [
          "04",
          "A glass cup that can only be filled half way no matter how much liquid is poured into it"
        ],
        [
          "05",
          "A mirror that only shows the back of your head"
        ],
        [
          "06",
          "A small glass bird that when set down near water dips its head in as if to get a drink"
        ],
        [
          "07",
          "A lady's coin purse containing two sharp fangs"
        ],
        [
          "08",
          "A small sea conch with the words \"From the beginning\" painted on the lip"
        ],
        [
          "09",
          "A frost-covered silver locket that's frozen shut"
        ],
        [
          "10",
          "A seal which imprints a mysterious, unknown coat of arms into hard rock"
        ],
        [
          "11",
          "A small wooden doll that when held brings back fond memories"
        ],
        [
          "12",
          "A small handmirror which only reflects inanimate objects"
        ],
        [
          "13",
          "A glass eyeball that looks about of its own accordance, and can roll around"
        ],
        [
          "14",
          "A glass orb that replicates yesterday's weather inside itself"
        ],
        [
          "15",
          "A drinking cup, that randomly fills with fresh or salt water. Refilling once emptied"
        ],
        [
          "16",
          "A deep blue piece of flint, that when struck with steel produces not a spark but a drop of water"
        ],
        [
          "17",
          "A conch shell which is always damp and constantly drips saltwater"
        ],
        [
          "18",
          "A charred, half-melted pewter clasp that glows as if smoldering but releases no heat"
        ],
        [
          "19",
          "A clockwork finch that flaps its wings in the presence of a breeze"
        ],
        [
          "20",
          "An unbreakable sealed jar of glowing water that hums when shaken"
        ],
        [
          "21",
          "A small, finely polished geode whose crystals slowly fade between every color of the spectrum"
        ],
        [
          "22",
          "A rough stone eye pulled from a petrified creature"
        ],
        [
          "23",
          "A stone smoking pipe that never needs lighting"
        ],
        [
          "24",
          "A small whistle, that when blown, whispers a name of a person or place unknown to you, instead of the whistle sound"
        ],
        [
          "25",
          "A fist sized rock that \"beats\" like a heart"
        ],
        [
          "26",
          "A pair of bronze scissors in the shape of a pair of leaping dolphins"
        ],
        [
          "27",
          "A bronze oil lamp which is rumored to have once held a genie"
        ],
        [
          "28",
          "A single gauntlet inscribed with a fire motif and an unfamiliar name in Primordial"
        ],
        [
          "29",
          "A one-eyed little fish inside a spherical vial, much bigger than the vial's neck, He has a cunning look"
        ],
        [
          "30",
          "The tiny skull of a rabbit that whispers scathing insults when nobody is looking"
        ],
        [
          "31",
          "A rag doll in the likeness of an {@creature owlbear}"
        ],
        [
          "32",
          "The desiccated body of a small eight-legged black lizard"
        ],
        [
          "33",
          "A small toy boat made with a walnut shell, toothpick, and piece of cloth"
        ],
        [
          "34",
          "A small pocket mirror that slowly fogs over while held"
        ],
        [
          "35",
          "Wind chimes that glow when the wind blows"
        ],
        [
          "36",
          "A small, clay square with an unknown rune etched into one side"
        ],
        [
          "37",
          "A tea kettle that heats itself when filled with water"
        ],
        [
          "38",
          "An old scratched monocle which shows an underwater landscape whenever someone looks through it"
        ],
        [
          "39",
          "A rose carved from coral"
        ],
        [
          "40",
          "A set of dice with elemental symbols and primordial runes instead of pips or numbers"
        ],
        [
          "41",
          "An amulet filled with liquid that churns, freezes, or boils to match it's wearer's mood"
        ],
        [
          "42",
          "A small silver bell that makes a sound like quiet, distant thunder when it's struck"
        ],
        [
          "43",
          "A small vial of black sand that glows slightly in the moonlight"
        ],
        [
          "44",
          "A small whale tooth with etched with an image of waves crashing upon a beach"
        ],
        [
          "45",
          "An hourglass in which the sands pour upward instead of downward"
        ],
        [
          "46",
          "A glass pendant with a hole in the center that a mild breeze always blows out of"
        ],
        [
          "47",
          "A soft feather that falls like a stone when dropped"
        ],
        [
          "48",
          "A large transparent gem that, when gripped tightly, whispers in Terran"
        ],
        [
          "49",
          "A small crystal snowglobe that, when shaken, seems to form silhouettes of dancing forms"
        ],
        [
          "50",
          "Half of a palm-sized geode that pulses dimly with purple light"
        ],
        [
          "51",
          "A book filled with writing that only appears when the book is held underwater"
        ],
        [
          "52",
          "A sealed envelope made of red leather that you haven't been able to open. It smells of campfire"
        ],
        [
          "53",
          "A locket of hair that is rumored to have come from a famed fire genasi"
        ],
        [
          "54",
          "Flint and steel that, when used to start a fire, creates a random colored flame"
        ],
        [
          "55",
          "A blank piece of wet parchment that never seems to dry"
        ],
        [
          "56",
          "A small puzzle box made of brass, that is slightly warm to the touch"
        ],
        [
          "57",
          "A cloudy chunk of glass that is said to hold a spark of breath from a blue dragon"
        ],
        [
          "58",
          "A crude chalice made of coal"
        ],
        [
          "59",
          "A miniature brass horn, silent when played, but fills the air with the scent of warm and exotic spices"
        ],
        [
          "60",
          "An eye-sized blue pearl that floats in salt water"
        ],
        [
          "61",
          "A tuning fork made from a dark metal which glows with a pale, white light during thunderstorms"
        ],
        [
          "62",
          "A small vial that is always filled with the smell of autumn wind"
        ],
        [
          "63",
          "A clear marble that slowly rolls toward the nearest source of running water"
        ],
        [
          "64",
          "A small collapsible silver cup that perspires constantly when opened"
        ],
        [
          "65",
          "An hourglass that tells time with falling mist instead of sand"
        ],
        [
          "66",
          "An ornate razor, which only cuts in freezing cold temperature"
        ],
        [
          "67",
          "A shark tooth covered in tiny etched words from a lost language"
        ],
        [
          "68",
          "A large brass coin with no markings or images on it"
        ],
        [
          "69",
          "A small wooden box filled with a strange red clay"
        ],
        [
          "70",
          "A necklace with a small, rusted iron anchor"
        ],
        [
          "71",
          "A small brass flute adorned with silver wire that is always faintly sounding"
        ],
        [
          "72",
          "A red and black Aarakocra feather"
        ],
        [
          "73",
          "A palm-sized stone with a hole in it, through which can be heard a constantly whispering wind"
        ],
        [
          "74",
          "A small conch shell covered in black crystal"
        ],
        [
          "75",
          "A small music box made of brass. It features a pair of tiny automatons that resemble {@creature Azer} working at a forge"
        ],
        [
          "76",
          "A glass jar containing the preserved corpse of an unfamiliar aquatic creature"
        ],
        [
          "77",
          "A piece of petrified wood carved into the shape of a seashell"
        ],
        [
          "78",
          "A wooden puzzle cube covered in elemental symbols"
        ],
        [
          "79",
          "A small stone cube that acts as a magnet when placed against another stone"
        ],
        [
          "80",
          "A ring made of a white metal. On the inside is a name etched in Auran"
        ],
        [
          "81",
          "A bracelet made of silvered fish hooks"
        ],
        [
          "82",
          "A journal filled with poetry hand-written in Primordial"
        ],
        [
          "83",
          "A yellow gemstone that glows dimly when a storm is nearby"
        ],
        [
          "84",
          "A charred chisel with an unfamiliar symbol stamped into its base"
        ],
        [
          "85",
          "A canteen filled with a foul smelling orange mud"
        ],
        [
          "86",
          "A faceless doll made of driftwood"
        ],
        [
          "87",
          "A heavy iron key bearing the name of a ship long lost to the sea"
        ],
        [
          "88",
          "A small jewelry box made from the shell of a turtle"
        ],
        [
          "89",
          "A chess piece fashioned to look like fire myrmidon"
        ],
        [
          "90",
          "A spinning top with an image of one of the four elements on each side"
        ],
        [
          "91",
          "A single hoop earring made of a porous red stone"
        ],
        [
          "92",
          "An arrowhead carved from seasalt"
        ],
        [
          "93",
          "A small comb made of blue coral"
        ],
        [
          "94",
          "Seven small beads of sandstone on a string, all different colors"
        ],
        [
          "95",
          "A romance chapbook written in Undercommon titled \"Just one Layer of Grey\""
        ],
        [
          "96",
          "A tiny, broken clockwork Harpy"
        ],
        [
          "97",
          "An ivory whale statuette"
        ],
        [
          "98",
          "A fist-sized cog, covered in barnacles"
        ],
        [
          "99",
          "An eyepatch made of obsidian and a black leather cord"
        ],
        [
          "100",
          "A glass bottle with a tiny ship of unfamiliar design inside"
        ]
      ]
    }
  ]
},
{
  "name": "Trinket",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "entries": [
    "When you make your character, you can roll once on the Trinkets table to gain a trinket, a simple item lightly touched by mystery. The DM might also use this table. It can help stock a room in a dungeon or fill a creatures pockets.",
    {
      "type": "table",
      "caption": "Player's Handbook Trinket Table",
      "colLabels": [
        "{@dice d100}",
        "Trinket"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01",
          "A mummified goblin hand"
        ],
        [
          "02",
          "A piece of crystal that faintly glows in the moonlight"
        ],
        [
          "03",
          "A gold coin minted in an unknown land"
        ],
        [
          "04",
          "A diary written in a language you don't know"
        ],
        [
          "05",
          "A brass ring that never tarnishes"
        ],
        [
          "06",
          "An old chess piece made from glass"
        ],
        [
          "07",
          "A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips"
        ],
        [
          "08",
          "A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it"
        ],
        [
          "09",
          "A rope necklace from which dangles four mummified elf fingers"
        ],
        [
          "10",
          "The deed for a parcel of land in a realm unknown to you"
        ],
        [
          "11",
          "A 1-ounce block made from an unknown material"
        ],
        [
          "12",
          "A small cloth doll skewered with needles"
        ],
        [
          "13",
          "A tooth from an unknown beast"
        ],
        [
          "14",
          "An enormous scale, perhaps from a dragon"
        ],
        [
          "15",
          "A bright green feather"
        ],
        [
          "16",
          "An old divination card bearing your likeness"
        ],
        [
          "17",
          "A glass orb filled with moving smoke"
        ],
        [
          "18",
          "A 1-pound egg with a bright red shell"
        ],
        [
          "19",
          "A pipe that blows bubbles"
        ],
        [
          "20",
          "A glass jar containing a weird bit of flesh floating in pickling fluid"
        ],
        [
          "21",
          "A tiny gnome-crafted music box that plays a song you dimly remember from your childhood"
        ],
        [
          "22",
          "A small wooden statuette of a smug halfling"
        ],
        [
          "23",
          "A brass orb etched with strange runes"
        ],
        [
          "24",
          "A multicolored stone disk"
        ],
        [
          "25",
          "A tiny silver icon of a raven"
        ],
        [
          "26",
          "A bag containing forty-seven humanoid teeth, one of which is rotten"
        ],
        [
          "27",
          "A shard of obsidian that always feels warm to the touch"
        ],
        [
          "28",
          "A dragon's bony talon hanging from a plain leather necklace"
        ],
        [
          "29",
          "A pair of old socks"
        ],
        [
          "30",
          "A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking"
        ],
        [
          "31",
          "A silver badge in the shape of a five-pointed star"
        ],
        [
          "32",
          "A knife that belonged to a relative"
        ],
        [
          "33",
          "A glass vial filled with nail clippings"
        ],
        [
          "34",
          "A rectangular metal device with two tiny metal cups on one end that throws sparks when wet"
        ],
        [
          "35",
          "A white, sequined glove sized for a human"
        ],
        [
          "36",
          "A vest with one hundred tiny pockets"
        ],
        [
          "37",
          "A small, weightless stone block"
        ],
        [
          "38",
          "A tiny sketch portrait of a goblin"
        ],
        [
          "39",
          "An empty glass vial that smells of perfume when opened"
        ],
        [
          "40",
          "A gemstone that looks like a lump of coal when examined by anyone but you"
        ],
        [
          "41",
          "A scrap of cloth from an old banner"
        ],
        [
          "42",
          "A rank insignia from a lost legionnaire"
        ],
        [
          "43",
          "A tiny silver bell without a clapper"
        ],
        [
          "44",
          "A mechanical canary inside a gnomish lamp"
        ],
        [
          "45",
          "A tiny chest carved to look like it has numerous feet on the bottom"
        ],
        [
          "46",
          "A dead {@creature sprite} inside a clear glass bottle"
        ],
        [
          "47",
          "A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)"
        ],
        [
          "48",
          "A glass orb filled with water, in which swims a clockwork goldfish"
        ],
        [
          "49",
          "A silver spoon with an 'M' engraved on the handle"
        ],
        [
          "50",
          "A whistle made from gold-colored wood"
        ],
        [
          "51",
          "A dead scarab beetle the size of your hand"
        ],
        [
          "52",
          "Two toy soldiers, one with a missing head "
        ],
        [
          "53",
          "A small box filled with different-sized buttons"
        ],
        [
          "54",
          "A candle that can't be lit"
        ],
        [
          "55",
          "A tiny cage with no door"
        ],
        [
          "56",
          "An old key"
        ],
        [
          "57",
          "An indecipherable treasure map"
        ],
        [
          "58",
          "A hilt from a broken sword"
        ],
        [
          "59",
          "A rabbit's foot"
        ],
        [
          "60",
          "A glass eye"
        ],
        [
          "61",
          "A cameo carved in the likeness of a hideous person"
        ],
        [
          "62",
          "A silver skull the size of a coin"
        ],
        [
          "63",
          "An alabaster mask"
        ],
        [
          "64",
          "A pyramid of sticky black incense that smells very bad"
        ],
        [
          "65",
          "A nightcap that, when worn, gives you pleasant dreams"
        ],
        [
          "66",
          "A single caltrop made from bone"
        ],
        [
          "67",
          "A gold monocle frame without the lens"
        ],
        [
          "68",
          "A 1-inch cube, each side painted a different color"
        ],
        [
          "69",
          "A crystal knob from a door"
        ],
        [
          "70",
          "A small packet filled with pink dust"
        ],
        [
          "71",
          "A fragment of a beautiful song, written as musical notes on two pieces of parchment"
        ],
        [
          "72",
          "A silver teardrop earring made from a real teardrop"
        ],
        [
          "73",
          "The shell of an egg painted with scenes of human misery in disturbing detail"
        ],
        [
          "74",
          "A fan that, when unfolded, shows a sleeping cat"
        ],
        [
          "75",
          "A set of bone pipes"
        ],
        [
          "76",
          "A four-leaf clover pressed inside a book discussing manners and etiquette"
        ],
        [
          "77",
          "A sheet of parchment upon which is drawn a complex mechanical contraption"
        ],
        [
          "78",
          "An ornate scabbard that fits no blade you have found so far"
        ],
        [
          "79",
          "An invitation to a party where a murder happened"
        ],
        [
          "80",
          "A bronze pentacle with an etching of a rat's head in its center"
        ],
        [
          "81",
          "A purple handkerchief embroidered with the name of a powerful {@creature archmage}"
        ],
        [
          "82",
          "Half of a floorplan for a temple, castle, or some other structure"
        ],
        [
          "83",
          "A bit of folded cloth that, when unfolded, turns into a stylish cap"
        ],
        [
          "84",
          "A receipt of deposit at a bank in a far-flung city"
        ],
        [
          "85",
          "A diary with seven missing pages"
        ],
        [
          "86",
          "An empty silver snuffbox bearing an inscription on the surface that says \"dreams\""
        ],
        [
          "87",
          "An iron holy symbol devoted to an unknown god"
        ],
        [
          "88",
          "A book that tells the story of a legendary hero's rise and fall, with the last chapter missing"
        ],
        [
          "89",
          "A vial of dragon blood"
        ],
        [
          "90",
          "An ancient arrow of elven design"
        ],
        [
          "91",
          "A needle that never bends"
        ],
        [
          "92",
          "An ornate brooch of dwarven design"
        ],
        [
          "93",
          "An empty wine bottle bearing a pretty label that says, \"The Wizard of Wines Winery, Red Dragon Crush, 331422-W\""
        ],
        [
          "94",
          "A mosaic tile with a multicolored, glazed surface"
        ],
        [
          "95",
          "A {@condition petrified} mouse"
        ],
        [
          "96",
          "A black pirate flag adorned with a dragon's skull and crossbones"
        ],
        [
          "97",
          "A tiny mechanical crab or spider that moves about when it's not being observed"
        ],
        [
          "98",
          "A glass jar containing lard with a label that reads, \"Griffon Grease\""
        ],
        [
          "99",
          "A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body"
        ],
        [
          "100",
          "A metal urn containing the ashes of a hero"
        ]
      ]
    }
  ]
},
{
  "name": "Truth Serum",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 15000,
  "poison": true,
  "entries": [
    "A creature subjected to this poison must succeed on a DC 11 Constitution saving throw or become {@condition poisoned} for 1 hour. The {@condition poisoned} creature can't knowingly speak a lie, as if under the effect of a {@spell zone of truth} spell."
  ],
  "poisonTypes": [
    "ingested"
  ],
  "attachedSpells": [
    "zone of truth"
  ]
},
{
  "name": "Turquoise",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "An opaque light blue-green gemstone."
  ]
},
{
  "name": "Turtle Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 4000000,
  "crew": 16,
  "vehAc": 19,
  "vehHp": 300,
  "vehDmgThresh": 15,
  "vehSpeed": 3,
  "capCargo": 30,
  "entries": [
    "A turtle ship is encased in a protective metal shell, as befits its name, and bristles with weapons. In addition to its roomy quarters, it can carry a decent- sized payload, making it popular among traders and others who need a lot of cargo space. The ship can land on the ground, and it floats on water. Sliding panels can be closed to make the hull airtight, enabling the ship to travel underwater safely, even to great depths. If the ship takes damage while on or under the water, interior hatches can be sealed to prevent the ship from flooding completely.",
    "Standard weaponry on a turtle ship includes three forward-mounted ballistae and a rear-facing mangonel. These weapons can't be used while the ship is underwater."
  ],
  "seeAlsoVehicle": [
    "Turtle Ship|AAG"
  ]
},
{
  "name": "Two-Birds Sling",
  "source": "MOT",
  "baseItem": "sling",
  "type": "R",
  "rarity": "rare",
  "weaponCategory": "simple",
  "property": [
    "A"
  ],
  "range": "30/120",
  "dmg1": "1d4",
  "dmgType": "B",
  "bonusWeapon": "+1",
  "weapon": true,
  "entries": [
    "You have a +1 bonus to attack and damage rolls made with this weapon.",
    "When you make a ranged attack with this sling and hit a target, you can cause the ammunition to ricochet toward a second target within 10 feet of the first, and then make a ranged attack against the second target."
  ],
  "ammoType": "sling bullet"
},
{
  "name": "Two-Person Tent",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 20,
  "value": 200,
  "entries": [
    "A simple and portable canvas shelter, a tent sleeps two."
  ]
},
{
  "name": "Tyrant Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "crew": 10,
  "vehAc": 17,
  "vehHp": 300,
  "vehDmgThresh": 20,
  "vehSpeed": 4.5,
  "capCargo": 20,
  "entries": [
    "Beholders carve tyrant ships out of stone using their disintegration rays and use these ships to wander the Astral Plane, looking for worlds to conquer and rival beholders to destroy. No two tyrant ships look alike, but they all have one or more features reminiscent of their creators, such as a bulbous shape and eyestalks.",
    "A spherical chamber on the ship's command deck functions as a spelljamming helm that only beholders can attune to. Any beholder that occupies this chamber can attune to it. Reducing a tyrant ship to 0 hit points not only destroys it but also destroys the ship's spelljamming helm and eyestalk cannons.",
    "A tyrant ship can't float on water, but it can safely land on the ground."
  ],
  "seeAlsoVehicle": [
    "Tyrant Ship|AAG"
  ]
},
{
  "name": "Unbreakable Arrow",
  "source": "XGE",
  "type": "A",
  "tier": "minor",
  "rarity": "common",
  "entries": [
    "This arrow can't be broken, except when it is within an {@spell antimagic field}."
  ]
},
{
  "name": "Uncommon Glamerweave",
  "source": "ERLW",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Glamerweave is clothing imbued with harmless illusory magic. While wearing these clothes, you can use a bonus action to create a moving illusory pattern within the cloth. Alternatively, you can have the pattern rise from the cloth. For example, a glamerweave gown might be wreathed in harmless, illusory flames, while a glamerweave hat might have illusory butterflies fluttering around it.",
    "When you make a Charisma ({@skill Performance}) or Charisma ({@skill Persuasion}) check while wearing the glamerweave, you can roll a {@dice d4} and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn."
  ]
},
{
  "name": "Vanrak's Mithral Shirt",
  "source": "WDMM",
  "baseItem": "chain shirt",
  "type": "MA",
  "rarity": "uncommon",
  "weight": 20,
  "ac": 13,
  "strength": null,
  "stealth": false,
  "entries": [
    "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity ({@skill Stealth}) checks or has a Strength requirement, the mithral version of the armor doesn't.",
    "While you wear this armor, you gain {@sense darkvision} out to a range of 60 feet."
  ]
},
{
  "name": "Velvet doublet with gold buttons (Legion of Dusk)",
  "source": "PSX",
  "type": "$",
  "rarity": "none",
  "value": 2500
},
{
  "name": "Ventilating Lungs",
  "source": "ERLW",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "recharge": "dawn",
  "entries": [
    "These metallic nodules were created in response to the poisonous gases used on the battlefields of the Last War. When you attune to these lungs, they replace the lungs in your chest, which disappear. The lungs allow you to breathe normally, even in an antimagic field, and their breathing function can't be suppressed by magic.",
    "Outside an antimagic field or any other effect that suppresses magic, these lungs allow you to breathe normally in any environment (including a vacuum), and you have advantage on saving throws against harmful gases such as those created by a {@spell cloudkill} spell, a {@spell stinking cloud} spell, inhaled poisons, and gaseous breath weapons.",
    "As an action, you can use these lungs to exhale a gust of wind, as if you had cast the {@spell gust of wind} spell (spell save DC 15) with no components. This property of the lungs can't be used again until the next dawn.",
    "If your attunement to the lungs ends, your original lungs reappear."
  ],
  "optionalfeatures": [
    "replicate magic item"
  ],
  "attachedSpells": [
    "gust of wind"
  ]
},
{
  "name": "Veteran's Cane",
  "source": "XGE",
  "tier": "minor",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "When you grasp this walking cane and use a bonus action to speak the command word, it transforms into an ordinary longsword and ceases to be magical."
  ]
},
{
  "name": "Vial",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "value": 100,
  "entries": [
    "A vial can hold up to 4 ounces of liquid."
  ]
},
{
  "name": "Viol",
  "source": "PHB",
  "type": "INS",
  "rarity": "none",
  "weight": 1,
  "value": 3000
},
{
  "name": "Voting Kit",
  "source": "AI",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "At rank 4, your voting kit becomes a common magic item that conceals an extradimensional space. As a bonus action, you can place one tool kit that you are proficient with into the voting kit, or can remove it. No other type of object can be placed into the extradimensional space. A creature searching the voting kit finds and extracts the tool kit with a successful DC 20 Intelligence ({@skill Investigation}) or Wisdom ({@skill Perception}) check.",
    "Additionally, you can use the voting kit to cast {@spell charm person} (save DC 15). This property of the kit can't be used again until the next dawn."
  ],
  "attachedSpells": [
    "charm person"
  ]
},
{
  "name": "Vox Seeker",
  "source": "EGW",
  "rarity": "common",
  "wondrous": true,
  "entries": [
    "This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up the device allows it to operate for 1 minute, to a maximum of 10 minutes. While operational, the item uses the accompanying {@creature Vox Seeker|EGW} stat block. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed."
  ]
},
{
  "name": "Voyager Staff",
  "source": "GGR",
  "rarity": "very rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 4,
  "weaponCategory": "simple",
  "property": [
    "V"
  ],
  "dmg1": "1d6",
  "dmgType": "B",
  "dmg2": "1d8",
  "bonusWeapon": "+1",
  "bonusSpellAttack": "+1",
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 4}",
  "charges": 10,
  "staff": true,
  "entries": [
    "You gain a +1 bonus to attack and damage rolls made with this magic quarterstaff. While you hold it, you gain a +1 bonus to spell attack rolls.",
    "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: {@spell banishment} (4 charges), {@spell blink} (3 charges), {@spell misty step} (2 charges), {@spell passwall} (5 charges), or {@spell teleport} (7 charges).",
    "The staff regains {@dice 1d6 + 4} expended charges daily at dawn. If you expend the last charge, roll a {@dice d20}. On a 1, the staff vanishes forever."
  ],
  "attachedSpells": [
    "banishment",
    "blink",
    "misty step",
    "passwall",
    "teleport"
  ]
},
{
  "name": "Wagon",
  "source": "PHB",
  "type": "VEH",
  "rarity": "none",
  "weight": 400,
  "value": 3500
},
{
  "name": "Wand Sheath",
  "source": "ERLW",
  "rarity": "common",
  "reqAttune": "by a warforged",
  "reqAttuneTags": [
    {
      "race": "warforged|erlw"
    }
  ],
  "wondrous": true,
  "entries": [
    "A wand sheath clamps onto your arm and imparts the following benefits:",
    {
      "type": "list",
      "items": [
        "The wand sheath can't be removed from you while you're attuned to it.",
        "You can insert a wand into the sheath as an action. The sheath can hold only one wand at a time.",
        "You can retract or extend a wand from the sheath as a bonus action. While the wand is extended, you can use it as if you were holding it, but your hand remains free."
      ]
    },
    "If a sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand count as a single magic item with regard to the number of magic items you can attune to. If you remove the wand from the sheath, your attunement to the wand ends."
  ]
},
{
  "name": "Wand of Binding",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges for the following properties. It regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed.",
    {
      "name": "Spells",
      "type": "entries",
      "entries": [
        "While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): {@spell hold monster} (5 charges) or {@spell hold person} (2 charges)."
      ]
    },
    {
      "name": "Assisted Escape",
      "type": "entries",
      "entries": [
        "While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being {@condition paralyzed} or {@condition restrained}, or you can expend 1 charge and gain advantage on any check you make to escape a grapple."
      ]
    }
  ],
  "attachedSpells": [
    "hold monster",
    "hold person"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wand of Conducting",
  "source": "XGE",
  "type": "WD",
  "tier": "minor",
  "rarity": "common",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 60 feet and ends when you stop waving the wand.",
    "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed."
  ]
},
{
  "name": "Wand of Enemy Detection",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, {@condition invisible}, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wand of Entangle",
  "source": "TftYP",
  "type": "WD",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the {@spell entangle} spell (save DC 13) from it.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "entangle"
  ]
},
{
  "name": "Wand of Fear",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges for the following properties. It regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed.",
    {
      "name": "Command",
      "type": "entries",
      "entries": [
        "While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the {@spell command} spell (save DC 15)."
      ]
    },
    {
      "name": "Cone of Fear",
      "type": "entries",
      "entries": [
        "While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become {@condition frightened} of you for 1 minute. While it is {@condition frightened} in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevent it from moving. If it has nowhere it can move, the creature can use the {@action Dodge} action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success."
      ]
    }
  ],
  "attachedSpells": [
    "command"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wand of Fireballs",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the {@spell fireball} spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "fireball"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wand of Lightning Bolts",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the {@spell lightning bolt} spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "lightning bolt"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wand of Magic Detection",
  "source": "DMG",
  "type": "WD",
  "tier": "minor",
  "rarity": "uncommon",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the {@spell detect magic} spell from it. The wand regains {@dice 1d3} expended charges daily at dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "attachedSpells": [
    "detect magic"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Wand of Magic Missiles",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "uncommon",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the {@spell magic missile} spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "magic missile"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Wand of Paralysis",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be {@condition paralyzed} for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wand of Polymorph",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the {@spell polymorph} spell (save DC 15) from it.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "polymorph"
  ],
  "lootTables": [
    "Magic Item Table H"
  ]
},
{
  "name": "Wand of Pyrotechnics",
  "source": "XGE",
  "type": "WD",
  "tier": "minor",
  "rarity": "common",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed."
  ]
},
{
  "name": "Wand of Scowls",
  "source": "XGE",
  "type": "WD",
  "tier": "minor",
  "rarity": "common",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to scowl for 1 minute.",
    "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand transforms into a {@item wand of smiles|xge}."
  ]
},
{
  "name": "Wand of Secrets",
  "source": "DMG",
  "type": "WD",
  "tier": "minor",
  "rarity": "uncommon",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains {@dice 1d3} expended charges daily at dawn."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table B"
  ]
},
{
  "name": "Wand of Smiles",
  "source": "XGE",
  "type": "WD",
  "tier": "minor",
  "rarity": "common",
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": 3,
  "charges": 3,
  "entries": [
    "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.",
    "The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand transforms into a {@item wand of scowls|xge}."
  ]
},
{
  "name": "Wand of Viscid Globs",
  "source": "OotA",
  "type": "WD",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 1,
  "recharge": "midnight",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "Crafted by the {@creature drow}, this slim black wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a small glob of viscous material to launch from the tip at one creature within 60 feet of you. Make a ranged attack roll against the target, with a bonus equal to your spellcasting modifier (or your Intelligence modifier, if you don't have a spellcasting modifier) plus your proficiency bonus. On a hit, the glob expands and dries on the target, which is {@condition restrained} for 1 hour. After that time, the viscous material cracks and falls away.",
    "Applying a pint or more of alcohol to the {@condition restrained} creature dissolves the glob instantly, as does the application of {@item oil of etherealness} or {@item universal solvent}. The glob also dissolves instantly if exposed to sunlight. No other nonmagical process can remove the viscous material until it deteriorates on its own.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at midnight. If you expend the wands last charge, roll a {@dice d20}. On a 1, the wand melts into harmless slime and is destroyed.",
    "A wand of viscous globs is destroyed if exposed to sunlight for 1 hour without interruption."
  ]
},
{
  "name": "Wand of Web",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the {@spell web} spell (save DC 15) from it.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into ashes and is destroyed."
  ],
  "attachedSpells": [
    "web"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Wand of Winter",
  "source": "HotDQ",
  "type": "WD",
  "rarity": "rare",
  "reqAttune": true,
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand looks and feels like an icicle. You must be attuned to the wand to use it.",
    "The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand, even if you are incapable of casting spells: {@spell ray of frost} (no charges, or 1 charge to cast at 5th level; +5 to hit with ranged spell attack), {@spell sleet storm} (3 charges; spell save DC 15), or {@spell ice storm} (4 charges; spell save DC 15). No components are required. The wand regains {@dice 1d6 + 1} expended charges each day at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 20, the wand melts away, forever destroyed."
  ],
  "attachedSpells": [
    "ray of frost",
    "sleet storm",
    "ice storm"
  ]
},
{
  "name": "Wand of Wonder",
  "source": "DMG",
  "type": "WD",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "weight": 1,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d6 + 1}",
  "charges": 7,
  "entries": [
    "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll {@dice d100} and consult the following table to discover what happens.",
    "If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.",
    "If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
    "The wand regains {@dice 1d6 + 1} expended charges daily at dawn. If you expend the wand's last charge, roll a {@dice d20}. On a 1, the wand crumbles into dust and is destroyed.",
    {
      "type": "table",
      "colLabels": [
        "{@dice d100}",
        "Effect"
      ],
      "colStyles": [
        "col-1 text-center",
        "col-11"
      ],
      "rows": [
        [
          "01-05",
          "You cast {@spell slow}."
        ],
        [
          "06-10",
          "You cast {@spell faerie fire}."
        ],
        [
          "11-15",
          "You are {@condition stunned} until the start of your next turn, believing something awesome just happened."
        ],
        [
          "16-20",
          "You cast {@spell gust of wind}."
        ],
        [
          "21-25",
          "You cast {@spell detect thoughts} on the target you chose. If you didn't target a creature, you instead take {@damage 1d6} psychic damage."
        ],
        [
          "26-30",
          "You cast {@spell stinking cloud}."
        ],
        [
          "31-33",
          "Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn."
        ],
        [
          "34-36",
          "An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a {@dice d100} to determine which animal appears. On a 01-25, a {@creature rhinoceros} appears; on a 26-50, an {@creature elephant} appears; and on a 51-100, a {@creature rat} appears."
        ],
        [
          "37-46",
          "You cast {@spell lightning bolt}."
        ],
        [
          "47-49",
          "A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes."
        ],
        [
          "50-53",
          "You enlarge the target as if you had cast {@spell enlarge/reduce}. If the target can't be affected by that spell or if you didn't target a creature, you become the target."
        ],
        [
          "54-58",
          "You cast {@spell darkness}."
        ],
        [
          "59-62",
          "Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute."
        ],
        [
          "63-65",
          "An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension."
        ],
        [
          "66-69",
          "You shrink yourself as if you had cast {@spell enlarge/reduce} on yourself."
        ],
        [
          "70-79",
          "You cast {@spell fireball}."
        ],
        [
          "80-84",
          "You cast {@spell invisibility} on yourself."
        ],
        [
          "85-87",
          "Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours."
        ],
        [
          "88-90",
          "A stream of {@dice 1d4 &times; 10} gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line."
        ],
        [
          "91-95",
          "A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become {@condition blinded} for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        ],
        [
          "96-97",
          "The target's skin turns bright blue for {@dice 1d10} days. If you chose a point in space, the creature nearest to that point is affected."
        ],
        [
          "98-00",
          "If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly {@condition petrified}. On any other failed save, the target is {@condition restrained} and begins to turn to stone. While {@condition restrained} in this way, the target must repeat the saving throw at the end of its next turn, becoming {@condition petrified} on a failure or ending the effect on a success. The petrification lasts until the target is freed by the {@spell greater restoration} spell or similar magic."
        ]
      ]
    }
  ],
  "attachedSpells": [
    "slow",
    "faerie fire",
    "gust of wind",
    "detect thoughts",
    "stinking cloud",
    "lightning bolt",
    "enlarge/reduce",
    "darkness",
    "fireball",
    "invisibility"
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wargong",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A metal gong, traditionally made from a shield, particularly the shield of an enemy. Both goblins and dwarves make and play wargongs, their sound echoing through tunnels in the Underdark."
  ]
},
{
  "name": "Warhorse",
  "source": "PHB",
  "type": "MNT",
  "rarity": "none",
  "value": 40000,
  "carryingCapacity": 540,
  "speed": 60
},
{
  "name": "Warship",
  "source": "DMG",
  "type": "SHP",
  "rarity": "none",
  "value": 2500000,
  "crew": 60,
  "vehAc": 15,
  "vehHp": 500,
  "vehDmgThresh": 20,
  "vehSpeed": 2.5,
  "capPassenger": 60,
  "capCargo": 200,
  "seeAlsoVehicle": [
    "Warship"
  ]
},
{
  "name": "Wasp Ship",
  "source": "AAG",
  "type": "SPC",
  "rarity": "none",
  "value": 2000000,
  "crew": 5,
  "vehAc": 15,
  "vehHp": 250,
  "vehDmgThresh": 15,
  "vehSpeed": 5.5,
  "capCargo": 10,
  "entries": [
    "Wasp ships are lightweight wooden vessels capable of landing safely on the ground, but not on water. They appeal to adventurers because they're affordable and don't require a large crew. Pirates like them because they're swift. Aristocrats are fond of using them as flying yachts because the ship's cargo hold can be easily converted into posh living quarters.",
    "The ship's raised back provides high ground for a weapon emplacement, which is typically equipped with a ballista."
  ],
  "seeAlsoVehicle": [
    "Wasp Ship|AAG"
  ]
},
{
  "name": "Watchful Helm",
  "source": "CM",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusAc": "+1",
  "entries": [
    "While you wear this helm, you gain a +1 bonus to AC and remain aware of your surroundings even while you're asleep, and you have advantage on Wisdom ({@skill Perception}) checks that rely on sight.",
    "As a bonus action, you can cast the {@spell see invisibility} spell from the helm. Once this property of the helm is used, it can't be used again until the next dawn."
  ],
  "attachedSpells": [
    "see invisibility"
  ]
},
{
  "name": "Waterskin",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 5,
  "weightNote": "(full)",
  "value": 20,
  "entries": [
    "A waterskin can hold up to 4 pints of liquid."
  ]
},
{
  "name": "Weaver's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 85
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 100,
  "additionalEntries": [
    "Weaver's tools allow you to create cloth and tailor it into articles of clothing.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana, History",
      "entries": [
        "Your expertise lends you additional insight when examining cloth objects, including cloaks and robes."
      ]
    },
    {
      "type": "entries",
      "name": "Investigation",
      "entries": [
        "Using your knowledge of the process of creating cloth objects, you can spot clues and make deductions that others would overlook when you examine tapestries, upholstery, clothing, and other woven items."
      ]
    },
    {
      "type": "entries",
      "name": "Repair",
      "entries": [
        "As part of a short rest, you can repair a single damaged cloth object."
      ]
    },
    {
      "type": "entries",
      "name": "Craft Clothing",
      "entries": [
        "Assuming you have access to sufficient cloth and thread, you can create an outfit for a creature as part of a long rest."
      ]
    },
    {
      "type": "table",
      "caption": "Weaver's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Repurpose cloth",
          "10"
        ],
        [
          "Mend a hole in a piece of cloth",
          "10"
        ],
        [
          "Tailor an outfit",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Weird Tank",
  "source": "PotA",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "entries": [
    "A weird tank is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A {@creature water weird} is contained within the tank. While wearing the tank, you can use an action to open it, allowing the {@creature water weird} to emerge. The {@creature water weird} acts immediately after you in the initiative order, and it is bound to the tank.",
    "You can command the {@creature water weird} telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the {@creature water weird} to retract into it or if the {@creature water weird} is dead.",
    "If the {@creature water weird} is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new {@creature water weird} forms inside it.",
    "The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the {@creature water weird} contained within it."
  ]
},
{
  "name": "Wheat",
  "source": "PHB",
  "type": "TG",
  "rarity": "none",
  "weight": 1,
  "value": 1
},
{
  "name": "Wheel of Stars",
  "source": "AI",
  "rarity": "very rare",
  "reqAttune": true,
  "wondrous": true,
  "bonusSavingThrow": "+1",
  "entries": [
    "While attuned to this device, you have a +1 bonus to Wisdom saving throws, and you can use an action to cast the {@spell dancing lights}, {@spell guidance}, or {@spell message} cantrips.",
    {
      "type": "entries",
      "name": "Portent of the Stars",
      "entries": [
        "As a reaction when a creature you can see within 60 feet of you makes an attack roll, saving throw, or ability check, you make that creature roll a {@dice d10} and add or subtract the number rolled (your choice) from the roll. Once you use this feature of the wheel of stars, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Alter Gravity",
      "entries": [
        "As an action, you can cast {@spell fly} on yourself or you can cast {@spell levitate} (save DC 15). Once you use this feature of the wheel of stars, it cannot be used again until the next dawn."
      ]
    },
    {
      "type": "entries",
      "name": "Part of a Whole",
      "entries": [
        "While this component is not installed in the {@item Orrery of the Wanderer|AI}, its magic might function sporadically or with unpredictable side effects, as determined by the DM."
      ]
    }
  ],
  "attachedSpells": [
    "dancing lights",
    "guidance",
    "message",
    "fly",
    "levitate"
  ]
},
{
  "name": "Wheel of Wind and Water",
  "source": "ERLW",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "When mounted at the helm of an elemental galleon or airship, this wheel allows a creature that possesses the Mark of Storm to telepathically control the elemental bound inside the vessel.",
    "If a wheel of wind and water is mounted on a mundane sailing ship, a creature with the Mark of Storm who is using the wheel can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour."
  ]
},
{
  "name": "Whetstone",
  "source": "PHB",
  "type": "G",
  "rarity": "none",
  "weight": 1,
  "value": 1
},
{
  "name": "White Chromatic Rose",
  "source": "WBtW",
  "resist": [
    "cold"
  ],
  "detail1": "covered in frost",
  "rarity": "rare",
  "wondrous": true,
  "hasRefs": true,
  "entries": [
    "{#itemEntry Chromatic Rose}"
  ]
},
{
  "name": "White Dragon Scale Mail",
  "source": "DMG",
  "type": "MA",
  "resist": [
    "cold"
  ],
  "tier": "major",
  "rarity": "very rare",
  "reqAttune": true,
  "weight": 45,
  "ac": 14,
  "bonusAc": "+1",
  "bonusSavingThrow": "+1",
  "stealth": true,
  "entries": [
    "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued. While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to cold damage.",
    "Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest white dragon within 30 miles of you. This special action can't be used again until the next dawn."
  ]
},
{
  "name": "White Ghost Orchid Seed",
  "source": "JttRC",
  "type": "G",
  "rarity": "none",
  "entries": [
    "More rarely, the orchids produce a smaller pod holding a single white seed. Among its various magical properties, if a white seed is ground and scattered over a dead body, the body is affected by the {@spell resurrection} spell. A white ghost orchid seed has no effect if consumed."
  ]
},
{
  "name": "Wildspace Orrery",
  "source": "AAG",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "Inside a Wildspace system, this portable arcane device automatically tracks the positions and movements of all suns, planets, moons, and comets within that system, projecting a display of all these bodies in the space above its current location. In that display, a white, pulsating pinprick of light marks the orrery's location."
  ]
},
{
  "name": "Willowshade Oil",
  "source": "EGW",
  "type": "G",
  "rarity": "none",
  "value": 3000,
  "entries": [
    "A dark blue oil can be extracted from the rare fruit of the willowshade plant. A creature can use its action to apply the oil to another creature that has been {@condition petrified} for less than 1 minute, causing the {@condition petrified} condition on that creature to end at the start of what would be that creature's next turn."
  ]
},
{
  "name": "Wind Fan",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "wondrous": true,
  "entries": [
    "While holding this fan, you can use an action to cast the {@spell gust of wind} spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative {@chance 20} chance of not working and tearing into useless, nonmagical tatters."
  ],
  "attachedSpells": [
    "gust of wind"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Winged Boots",
  "source": "DMG",
  "tier": "major",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "equal": {
      "fly": "walk"
    }
  },
  "entries": [
    "While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.",
    "The boots regain 2 hours of flying capability for every 12 hours they aren't in use."
  ],
  "optionalfeatures": [
    "replicate magic item",
    "replicate magic item|uaartificerrevisited"
  ],
  "lootTables": [
    "Magic Item Table F"
  ]
},
{
  "name": "Wings of Flying",
  "source": "DMG",
  "tier": "major",
  "rarity": "rare",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "static": {
      "fly": 60
    }
  },
  "entries": [
    "While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for {@dice 1d12} hours."
  ],
  "lootTables": [
    "Magic Item Table G"
  ]
},
{
  "name": "Wingwear",
  "source": "PotA",
  "rarity": "uncommon",
  "reqAttune": true,
  "wondrous": true,
  "modifySpeed": {
    "static": {
      "fly": 30
    }
  },
  "charges": 3,
  "entries": [
    "This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of wingwear has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.",
    "The suit regains all of its expended charges after spending at least 1 hour in an elemental air node."
  ]
},
{
  "name": "Winter's Dark Bite",
  "source": "HftT",
  "baseItem": "greatsword",
  "type": "M",
  "rarity": "uncommon",
  "weight": 6,
  "weaponCategory": "martial",
  "property": [
    "H",
    "2H"
  ],
  "dmg1": "2d6",
  "dmgType": "S",
  "bonusWeapon": "+1",
  "entries": [
    "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
    "This greatsword is made of an unknown black metal. In most cases, it works as a {@item +1 greatsword}. But when used against a {@creature thessalhydra|hftt}, it works as a {@item +3 greatsword}. While in the Upside Down, it works as a +4 greatsword."
  ]
},
{
  "name": "Witherbloom Primer",
  "source": "SCC",
  "rarity": "uncommon",
  "reqAttune": "by a spellcaster",
  "reqAttuneTags": [
    {
      "spellcasting": true
    }
  ],
  "wondrous": true,
  "recharge": "dawn",
  "rechargeAmount": "{@dice 1d3}",
  "charges": 3,
  "entries": [
    "The Witherbloom Primer is a magic textbook created at Strixhaven's Witherbloom College. The primer has 3 charges, and it regains {@dice 1d3} expended charges daily at dawn. If you make an Intelligence ({@skill Nature}) or Wisdom ({@skill Survival}) check while holding the primer, you can expend 1 charge to give yourself a {@dice 1d4} bonus to the check, immediately after you roll the {@dice d20}.",
    "In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the druid or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma."
  ]
},
{
  "name": "Woodcarver's Tools",
  "source": "PHB",
  "additionalSources": [
    {
      "source": "XGE",
      "page": 85
    }
  ],
  "type": "AT",
  "rarity": "none",
  "weight": 5,
  "value": 100,
  "additionalEntries": [
    "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows.",
    {
      "type": "entries",
      "name": "Components",
      "entries": [
        "Woodcarver's tools consist of a knife, a gouge, and a small saw."
      ]
    },
    {
      "type": "entries",
      "name": "Arcana, History",
      "entries": [
        "Your expertise lends you additional insight when you examine wooden objects, such as figurines or arrows."
      ]
    },
    {
      "type": "entries",
      "name": "Nature",
      "entries": [
        "Your knowledge of wooden objects gives you some added insight when you examine trees."
      ]
    },
    {
      "type": "entries",
      "name": "Repair",
      "entries": [
        "As part of a short rest, you can repair a single damaged wooden object."
      ]
    },
    {
      "type": "entries",
      "name": "Craft Arrows",
      "entries": [
        "As part of a short rest, you can craft up to five arrows. As part of a long rest, you can craft up to twenty. You must have enough wood on hand to produce them."
      ]
    },
    {
      "type": "table",
      "caption": "Woodcarver's Tools",
      "colLabels": [
        "Activity",
        "DC"
      ],
      "colStyles": [
        "col-10",
        "col-2 text-center"
      ],
      "rows": [
        [
          "Craft a small wooden figurine",
          "10"
        ],
        [
          "Carve an intricate pattern in wood",
          "15"
        ]
      ]
    }
  ]
},
{
  "name": "Woodcutter's Axe",
  "source": "WBtW",
  "baseItem": "greataxe",
  "type": "M",
  "rarity": "rare",
  "weight": 7,
  "weaponCategory": "martial",
  "property": [
    "H",
    "2H"
  ],
  "dmg1": "1d12",
  "dmgType": "S",
  "bonusWeapon": "+1",
  "axe": true,
  "weapon": true,
  "entries": [
    "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
    "When you use this axe to make an attack against a plant (an ordinary plant or a creature with the Plant type) or a wooden object that isn't being worn or carried, the attack deals an extra {@damage 2d6} slashing damage on a hit."
  ]
},
{
  "name": "Wyvern Poison",
  "source": "DMG",
  "type": "G",
  "rarity": "none",
  "value": 120000,
  "poison": true,
  "entries": [
    "This poison must be harvested from a dead or {@condition incapacitated} {@creature wyvern}. A creature subjected to this poison must make a DC 15 Constitution saving throw, taking 24 ({@damage 7d6}) poison damage on a failed save, or half as much damage on a successful one."
  ],
  "poisonTypes": [
    "injury"
  ]
},
{
  "name": "Yahcha",
  "source": "ToA",
  "type": "G",
  "rarity": "none",
  "value": 100,
  "entries": [
    "A yahcha (pronounced YAH-chah) is a harmless, meaty beetle about the size of a human hand, which feeds on worms and maggots. It moves slowly (walking speed 10 feet) and is easy to catch. A creature with blue mist fever that eats a raw or cooked yahcha can immediately make a saving throw with advantage against that disease (see \"Diseases,\" page 40),"
  ]
},
{
  "name": "Yarting",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A southern instrument from Amn and Calimshan that is a Faer&ucirc;nian analog to the guitar. Numerous variations have spread across the continent."
  ]
},
{
  "name": "Yellow Sapphire",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 100000,
  "entries": [
    "A transparent fiery yellow or yellow-green gemstone."
  ]
},
{
  "name": "Yew Wand",
  "source": "PHB",
  "type": "SCF",
  "scfType": "druid",
  "rarity": "none",
  "weight": 1,
  "value": 1000
},
{
  "name": "Zabou",
  "source": "ToA",
  "type": "G",
  "rarity": "none",
  "value": 1000,
  "entries": [
    "Zabou mushrooms feed on offal and the rotting wood of dead trees. If handled carefully, a zabou can be picked or uprooted without causing it to release its spores. If crushed or struck, a zabou releases its spores in a 10-foot-radius sphere. A zabou can also be hurled up to 30 feet away or dropped like a grenade, releasing its cloud of spores on impact. Any creature in that area must succeed on a DC 10 Constitution saving throw or be {@condition poisoned} for 1 minute. The {@condition poisoned} creature's skin itches for the duration. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  ]
},
{
  "name": "Zircon",
  "source": "DMG",
  "type": "$",
  "rarity": "none",
  "value": 5000,
  "entries": [
    "A transparent pale blue-green gemstone."
  ]
},
{
  "name": "Zulkoon",
  "source": "SCAG",
  "type": "INS",
  "rarity": "none",
  "entries": [
    "A complex pump organ that originated with the zulkirs of Thay, who use it in the casting of their spells. It is considered to have a dramatic, but sinister, sound."
  ]
}
];