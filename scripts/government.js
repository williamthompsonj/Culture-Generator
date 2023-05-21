"use strict";
// define government parameters
let government = {prefix: 'gov'};

// properties of object to iterate
government.props = {
  power_concentration: {
    value: 0,
    title: 'Power Concentration',
    description: 'How much power does an individual ruler or council have',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  wealth_concentration: {
    value: 0,
    title: 'Wealth Concentration',
    description: 'How much wealth the rich control of the total available resources',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  magic_availability: {
    value: 0,
    title: 'Magic Availability',
    description: 'How accessible is magic',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  bureaucracy: {
    value: 0,
    title: 'Bureaucracy',
    description: 'How complicated or complex are government processes; how efficient is decision making and action',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  corruption: {
    value: 0,
    title: 'Corruption',
    description: 'How much do officials abuse their authority for personal gain',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  taxes: {
    value: 0,
    title: 'Taxation',
    description: 'How much does this government collect in taxes',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  law_enforcement: {
    value: 0,
    title: 'Law Enforcement',
    description: 'How strict or effective is internal law enforcement within society',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  military: {
    value: 0,
    title: 'Military Forces',
    description: 'How powerful or effective is foreign defense',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  diplomacy: {
    value: 0,
    title: 'External Diplomacy',
    description: 'How effective is government at interacting with foreign governments or in maintaining foreign relations',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  style: {
    value: '',
    title: 'Government Style',
    description: 'Closest short description of government style',
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
    },
    html_tag: {
      elem: 'select',
    }
  },
};

// select random government style
government.ChooseStyle = function()
{
  // pick at random!
  return Object.keys(this.props.style.options).randomValue();
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
  switch (p.style.value)
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