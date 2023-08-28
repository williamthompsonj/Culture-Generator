"use strict";
// timeline object namespace
let timeline = {};

/**
  Generations based roughly on the Strauss-Howe generational theory
  https://en.wikipedia.org/wiki/Strauss%E2%80%93Howe_generational_theory

  Consideration given to social cycle theory
  https://en.wikipedia.org/wiki/Social_cycle_theory

  Consideration given to the dynastic cycle
  https://en.wikipedia.org/wiki/Dynastic_cycle

  Consideration of Alexander Fraser Tytler
  https://en.wikipedia.org/wiki/Alexander_Fraser_Tytler,_Lord_Woodhouselee

  Consideration of state collapse for transition between government styles
  https://en.wikipedia.org/wiki/State_collapse

  Edward R. Dewey's cycle work reviewed for number theory
  https://en.wikipedia.org/wiki/Edward_R._Dewey#Dewey's_cycles_work
**/

timeline.generations = [
  {
    /** nation high
      * institution strong, individualism weak, spoiled babies
    **/
    "archetypes": "prophet",
    "turning": "high",
    "mood": "dominant",
    "individualism": -1,
    "duration": 0,
    "liberal": false,
  },
  {
    /**
      * consciousness revolution, awakening
      * new value, new coming of age, lack education?
    **/
    "archetypes": "nomad",
    "turning": "awakening",
    "mood": "recessive",
    "individualism": 0,
    "duration": 0,
    "liberal": true,
  },
  {
    /**
      * civil unraveling
      * individualism strong, institution weak
    **/
    "archetypes": "hero",
    "turning": "unraveling",
    "mood": "dominant",
    "individualism": 1,
    "duration": 0,
    "liberal": false,
  },
  {
    /**
      * crisis, war, major negative event
    **/
    "archetypes": "artist",
    "turning": "crisis",
    "mood": "recessive",
    "individualism": 0,
    "duration": 0,
    "liberal": true,
  },
];