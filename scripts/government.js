"use strict";
// define government parameters
let government = {
/*
  power_concentration: 0, // how much power does a small group/individual have
  magic_availability: 0, // how accessible is magic
  wealth_concentration: 0, // how rich are the rich
  corruption: 0, // how much do officials abuse their access for personal gain
  taxes: 0, // how much does this government collect in taxes
  law_enforcement: 0, // how strict is internal law enforcement
  bureaucracy: 0, // how complicated is government process
  military: 0, // how powerful is external defense
  diplomacy: 0, // used only for external relations
  style: ''
*/
};

// properties of object to iterate
government.props = {
  power_concentration: {
    value: 0,
    title: 'Power Concentration',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  magic_availability: {
    value: 0,
    title: 'Magic Availability',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  wealth_concentration: {
    value: 0,
    title: 'Wealth Concentration',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  corruption: {
    value: 0,
    title: 'Corruption',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  taxes: {
    value: 0,
    title: 'Taxation',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  law_enforcement: {
    value: 0,
    title: 'Law Enforcement',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  bureaucracy: {
    value: 0,
    title: 'Bureaucracy',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  military: {
    value: 0,
    title: 'Military Forces',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  diplomacy: {
    value: 0,
    title: 'External Diplomacy',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  style: {
    value: '',
    title: '',
    description: '',
    tag: 'select',
    colspan: 2,
    options: {
      anarchy: 'Anarchy / No Government',
      autocracy: 'Autocracy',
      bureaucracy: 'Bureaucracy',
      confederacy: 'Confederacy',
      democracy: 'Democracy',
      dictatorship: 'Dictatorship',
      feudalism: 'Feudalism',
      gerontocracy: 'Gerontocracy',
      hierarchy: 'Hierarchy',
      kleptocracy: 'Kleptocracy',
      magocracy: 'Magocracy',
      matriarchy: 'Matriarchy',
      meritocracy: 'Meritocracy',
      militocracy: 'Militocracy',
      monarchy: 'Monarchy',
      oligarchy: 'Oligarchy',
      patriarchy: 'Patriarchy',
      plutocracy: 'Plutocracy',
      republic: 'Republic',
      satrapy: 'Satrapy',
      theocracy: 'Theocracy'
    }
  }
};

// select random government style
government.ChooseStyle = function()
{
  // get data to choose from
  let opts = Object.keys(this.props.style.options);

  // pick at random!
  return opts[
    Math.floor(
      Math.random() * opts.length
    )
  ];
};

/* generate starting conditions */
government.Init = function()
{
  this.props.style.value = this.ChooseStyle();
  this.rollStats()
};

government.rollStats = function()
{
  // local reference so it can change if needed.
  let p = this.props;
  if (p.style.value == '') p.style.value = util.getValue('#gov_style');

  // determine base parameters around type of government
  switch(p.style.value)
  {
    case 'autocracy': // dictator but inherited
    case 'dictatorship': // single authority rules by force
      p.power_concentration.value = Math.range(70, 95, 2);
      p.wealth_concentration.value = Math.range(60, 80, 2);
      p.magic_availability.value = Math.range(20, 50, 2);
      p.corruption.value = Math.range(30, 60, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(50, 80, 2);
      p.military.value = Math.range(50, 80, 2);
      p.bureaucracy.value = Math.range(30, 50, 2);
      p.diplomacy.value = Math.range(50, 90, 2);
      break;

    case 'monarchy': // dictator moderated by law / council
      p.power_concentration.value = Math.range(70, 90, 2);
      p.wealth_concentration.value = Math.range(50, 70, 2);
      p.magic_availability.value = Math.range(20, 60, 2);
      p.corruption.value = Math.range(20, 40, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(50, 80, 2);
      p.military.value = Math.range(50, 80, 2);
      p.bureaucracy.value = Math.range(40, 70, 2);
      p.diplomacy.value = Math.range(60, 80, 2);
      break;

    case 'bureaucracy.value': // government group works for council
    case 'confederacy': // independent states cooperate
    case 'feudalism': // lords support vassal kings
      p.power_concentration.value = Math.range(50, 70, 2);
      p.wealth_concentration.value = Math.range(40, 80, 2);
      p.magic_availability.value = Math.range(40, 80, 2);
      p.corruption.value = Math.range(40, 80, 2);
      p.taxes.value = Math.range(15, 25, 2);
      p.law_enforcement.value = Math.range(30, 60, 2);
      p.military.value = Math.range(30, 60, 2);
      p.bureaucracy.value = Math.range(50, 70, 2);
      p.diplomacy.value = Math.range(50, 70, 2);
      break;

    case 'gerontocracy': // group of elders govern
    case 'matriarchy': // elder or most important females govern
    case 'patriarchy': // elder or most important males govern
      p.power_concentration.value = Math.range(50, 90, 2);
      p.wealth_concentration.value = Math.range(50, 90, 2);
      p.magic_availability.value = Math.range(20, 80, 2);
      p.corruption.value = Math.range(40, 80, 2);
      p.taxes.value = Math.range(10, 20, 2);
      p.law_enforcement.value = Math.range(50, 80, 2);
      p.military.value = Math.range(50, 80, 2);
      p.bureaucracy.value = Math.range(40, 70, 2);
      p.diplomacy.value = Math.range(60, 80, 2);
      break;

    case 'hierarchy': // structured like military.value order
    case 'militocracy': // military.value order
      p.power_concentration.value = Math.range(50, 90, 2);
      p.wealth_concentration.value = Math.range(30, 60, 2);
      p.magic_availability.value = Math.range(30, 70, 2);
      p.corruption.value = Math.range(20, 40, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(70, 90, 2);
      p.military.value = Math.range(70, 90, 2);
      p.bureaucracy.value = Math.range(70, 90, 2);
      p.diplomacy.value = Math.range(60, 90, 2);
      break;

    case 'meritocracy': // aristocracy
    case 'oligarchy': // society of wealthy rulers
    case 'plutocracy': // society of wealthy rulers
      p.power_concentration.value = Math.range(50, 90, 2);
      p.wealth_concentration.value = Math.range(70, 90, 2);
      p.magic_availability.value = Math.range(30, 70, 2);
      p.corruption.value = Math.range(50, 70, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(50, 90, 2);
      p.military.value = Math.range(25, 45, 2);
      p.bureaucracy.value = Math.range(50, 70, 2);
      p.diplomacy.value = Math.range(60, 90, 2);
      break;

    case 'democracy': // elected leaders represent people
    case 'republic': // elected leaders represent people
      p.power_concentration.value = Math.range(30, 50, 2);
      p.wealth_concentration.value = Math.range(30, 50, 2);
      p.magic_availability.value = Math.range(40, 80, 2);
      p.corruption.value = Math.range(30, 50, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(30, 50, 2);
      p.military.value = Math.range(30, 50, 2);
      p.bureaucracy.value = Math.range(50, 70, 2);
      p.diplomacy.value = Math.range(50, 70, 2);
      break;

    case 'magocracy': // high magic council
      p.power_concentration.value = Math.range(50, 70, 2);
      p.wealth_concentration.value = Math.range(50, 70, 2);
      p.magic_availability.value = Math.range(70, 100, 2);
      p.corruption.value = Math.range(40, 50, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(30, 50, 2);
      p.military.value = Math.range(50, 70, 2);
      p.bureaucracy.value = Math.range(30, 50, 2);
      p.diplomacy.value = Math.range(50, 70, 2);
      break;

    case 'satrapy': // conqueror government
      p.power_concentration.value = Math.range(70, 90, 2);
      p.wealth_concentration.value = Math.range(50, 90, 2);
      p.magic_availability.value = Math.range(40, 70, 2);
      p.corruption.value = Math.range(30, 50, 2);
      p.taxes.value = Math.range(15, 25, 2);
      p.law_enforcement.value = Math.range(50, 70, 2);
      p.military.value = Math.range(50, 70, 2);
      p.bureaucracy.value = Math.range(30, 50, 2);
      p.diplomacy.value = Math.range(30, 50, 2);
      break;

    case 'kleptocracy': // thief government
      p.power_concentration.value = Math.range(40, 60, 2);
      p.wealth_concentration.value = Math.range(70, 90, 2);
      p.magic_availability.value = Math.range(50, 90, 2);
      p.corruption.value = Math.range(60, 80, 2);
      p.taxes.value = Math.range(20, 30, 2);
      p.law_enforcement.value = Math.range(15, 45, 2);
      p.military.value = Math.range(15, 45, 2);
      p.bureaucracy.value = Math.range(30, 60, 2);
      p.diplomacy.value = Math.range(30, 50, 2);
      break;

    case 'theocracy': // run by religion
      p.power_concentration.value = Math.range(50, 90, 2);
      p.wealth_concentration.value = Math.range(60, 80, 2);
      p.magic_availability.value = Math.range(40, 70, 2);
      p.corruption.value = Math.range(50, 70, 2);
      p.taxes.value = Math.range(15, 25, 2);
      p.law_enforcement.value = Math.range(60, 80, 2);
      p.military.value = Math.range(40, 70, 2);
      p.bureaucracy.value = Math.range(40, 70, 2);
      p.diplomacy.value = Math.range(60, 90, 2);
      break;

    default: // anarchy or no central government
      p.power_concentration.value = Math.range(5, 25, 2);
      p.wealth_concentration.value = Math.range(10, 50, 2);
      p.magic_availability.value = Math.range(20, 50, 2);
      p.corruption.value = Math.range(30, 70, 2);
      p.taxes.value = Math.range(5, 10, 2);
      p.law_enforcement.value = Math.range(5, 25, 2);
      p.military.value = Math.range(0, 15, 2);
      p.bureaucracy.value = Math.range(0, 25, 2);
      p.diplomacy.value = Math.range(10, 50, 2);
      break;
  }
};