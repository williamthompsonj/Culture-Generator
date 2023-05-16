"use strict";
// define government parameters
let government = {
  power_concentration: 0, // how much power does a small group/individual have
  magic_availability: 0, // how accessible is magic
  wealth_concentration: 0, // how rich are the rich
  corruption: 0, // how much do officials abuse their access for personal gain
  taxes: 0, // how much does this government collect in taxes
  law_enforcement: 0, // how strict is internal law enforcement
  bureaucracy: 0, // how complicated is government process
  military: 0, // how powerful is external defense
  diplomacy: 0, // used only for external relations
  style: '',

  // treat _styles as a private property
  _styles: [
    'anarchy',
    'autocracy',
    'bureaucracy',
    'confederacy',
    'democracy',
    'dictatorship',
    'feudalism',
    'gerontocracy',
    'hierarchy',
    'magocracy',
    'matriarchy',
    'militocracy',
    'monarchy',
    'oligarchy',
    'patriarchy',
    'meritocracy',
    'plutocracy',
    'republic',
    'satrapy',
    'kleptocracy',
    'theocracy'
  ],

// properties of object to iterate
  props: [
    'power_concentration',
    'magic_availability',
    'wealth_concentration',
    'corruption',
    'taxes',
    'law_enforcement',
    'bureaucracy',
    'military',
    'diplomacy',
    'style'
  ],

  Choosestyle()
  {
    // pick at random!
    return this._styles[Math.floor(Math.random()*this._styles.length)];
  },

  /* show current conditions */
  get conditions()
  {
    return (
        "*****************************\r\n"
      + "*** Government Conditions ***\r\n"
      + "*****************************\r\n"
      + "Style: " + this.style.toTitleCase() + "\r\n"
      + "Power Concentration: " + this.power_concentration + "\r\n"
      + "Wealth Concentration: " + this.wealth_concentration + "\r\n"
      + "Magic Availability: " + this.magic_availability + "\r\n"
      + "Corruption: " + this.corruption + "\r\n"
      + "Military: " + this.military + "\r\n"
      + "Taxes: " + this.taxes + "\r\n"
      + "Law Enforcement: " + this.law_enforcement + "\r\n"
      + "Bureaucracy: " + this.bureaucracy + "\r\n"
      + "Diplomacy: " + this.diplomacy + "\r\n"
    );
  },

  /* generate starting conditions */
  Init()
  {
    this.style = this.Choosestyle();
    this.rollStats()
  },

  rollStats()
  {
    if (this.style == '') this.style = util.getValue('gov_style');
  
    // determine base parameters around type of government
    switch(this.style)
    {
      case 'autocracy': // dictator but inherited
      case 'dictatorship': // single authority rules by force
        this.power_concentration = Math.range(70, 95, 2);
        this.wealth_concentration = Math.range(60, 80, 2);
        this.magic_availability = Math.range(20, 50, 2);
        this.corruption = Math.range(30, 60, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(50, 80, 2);
        this.military = Math.range(50, 80, 2);
        this.bureaucracy = Math.range(30, 50, 2);
        this.diplomacy = Math.range(50, 90, 2);
        break;

      case 'monarchy': // dictator moderated by law / council
        this.power_concentration = Math.range(70, 90, 2);
        this.wealth_concentration = Math.range(50, 70, 2);
        this.magic_availability = Math.range(20, 60, 2);
        this.corruption = Math.range(20, 40, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(50, 80, 2);
        this.military = Math.range(50, 80, 2);
        this.bureaucracy = Math.range(40, 70, 2);
        this.diplomacy = Math.range(60, 80, 2);
        break;

      case 'bureaucracy': // government group works for council
      case 'confederacy': // independent states cooperate
      case 'feudalism': // lords support vassal kings
        this.power_concentration = Math.range(50, 70, 2);
        this.wealth_concentration = Math.range(40, 80, 2);
        this.magic_availability = Math.range(40, 80, 2);
        this.corruption = Math.range(40, 80, 2);
        this.taxes = Math.range(15, 25, 2);
        this.law_enforcement = Math.range(30, 60, 2);
        this.military = Math.range(30, 60, 2);
        this.bureaucracy = Math.range(50, 70, 2);
        this.diplomacy = Math.range(50, 70, 2);
        break;

      case 'gerontocracy': // group of elders govern
      case 'matriarchy': // elder or most important females govern
      case 'patriarchy': // elder or most important males govern
        this.power_concentration = Math.range(50, 90, 2);
        this.wealth_concentration = Math.range(50, 90, 2);
        this.magic_availability = Math.range(20, 80, 2);
        this.corruption = Math.range(40, 80, 2);
        this.taxes = Math.range(10, 20, 2);
        this.law_enforcement = Math.range(50, 80, 2);
        this.military = Math.range(50, 80, 2);
        this.bureaucracy = Math.range(40, 70, 2);
        this.diplomacy = Math.range(60, 80, 2);
        break;

      case 'hierarchy': // structured like military order
      case 'militocracy': // military order
        this.power_concentration = Math.range(50, 90, 2);
        this.wealth_concentration = Math.range(30, 60, 2);
        this.magic_availability = Math.range(30, 70, 2);
        this.corruption = Math.range(20, 40, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(70, 90, 2);
        this.military = Math.range(70, 90, 2);
        this.bureaucracy = Math.range(70, 90, 2);
        this.diplomacy = Math.range(60, 90, 2);
        break;

      case 'meritocracy': // aristocracy
      case 'oligarchy': // society of wealthy rulers
      case 'plutocracy': // society of wealthy rulers
        this.power_concentration = Math.range(50, 90, 2);
        this.wealth_concentration = Math.range(70, 90, 2);
        this.magic_availability = Math.range(30, 70, 2);
        this.corruption = Math.range(50, 70, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(50, 90, 2);
        this.military = Math.range(25, 45, 2);
        this.bureaucracy = Math.range(50, 70, 2);
        this.diplomacy = Math.range(60, 90, 2);
        break;

      case 'democracy': // elected leaders represent people
      case 'republic': // elected leaders represent people
        this.power_concentration = Math.range(30, 50, 2);
        this.wealth_concentration = Math.range(30, 50, 2);
        this.magic_availability = Math.range(40, 80, 2);
        this.corruption = Math.range(30, 50, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(30, 50, 2);
        this.military = Math.range(30, 50, 2);
        this.bureaucracy = Math.range(50, 70, 2);
        this.diplomacy = Math.range(50, 70, 2);
        break;

      case 'magocracy': // high magic council
        this.power_concentration = Math.range(50, 70, 2);
        this.wealth_concentration = Math.range(50, 70, 2);
        this.magic_availability = Math.range(70, 100, 2);
        this.corruption = Math.range(40, 50, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(30, 50, 2);
        this.military = Math.range(50, 70, 2);
        this.bureaucracy = Math.range(30, 50, 2);
        this.diplomacy = Math.range(50, 70, 2);
        break;

      case 'satrapy': // conqueror government
        this.power_concentration = Math.range(70, 90, 2);
        this.wealth_concentration = Math.range(50, 90, 2);
        this.magic_availability = Math.range(40, 70, 2);
        this.corruption = Math.range(30, 50, 2);
        this.taxes = Math.range(15, 25, 2);
        this.law_enforcement = Math.range(50, 70, 2);
        this.military = Math.range(50, 70, 2);
        this.bureaucracy = Math.range(30, 50, 2);
        this.diplomacy = Math.range(30, 50, 2);
        break;

      case 'kleptocracy': // thief government
        this.power_concentration = Math.range(40, 60, 2);
        this.wealth_concentration = Math.range(70, 90, 2);
        this.magic_availability = Math.range(50, 90, 2);
        this.corruption = Math.range(60, 80, 2);
        this.taxes = Math.range(20, 30, 2);
        this.law_enforcement = Math.range(15, 45, 2);
        this.military = Math.range(15, 45, 2);
        this.bureaucracy = Math.range(30, 60, 2);
        this.diplomacy = Math.range(30, 50, 2);
        break;

      case 'theocracy': // run by religion
        this.power_concentration = Math.range(50, 90, 2);
        this.wealth_concentration = Math.range(60, 80, 2);
        this.magic_availability = Math.range(40, 70, 2);
        this.corruption = Math.range(50, 70, 2);
        this.taxes = Math.range(15, 25, 2);
        this.law_enforcement = Math.range(60, 80, 2);
        this.military = Math.range(40, 70, 2);
        this.bureaucracy = Math.range(40, 70, 2);
        this.diplomacy = Math.range(60, 90, 2);
        break;

      default: // anarchy or no central government
        this.power_concentration = Math.range(5, 25, 2);
        this.wealth_concentration = Math.range(10, 50, 2);
        this.magic_availability = Math.range(20, 50, 2);
        this.corruption = Math.range(20, 80, 2);
        this.taxes = Math.range(5, 10, 2);
        this.law_enforcement = Math.range(10, 30, 2);
        this.military = Math.range(0, 25, 2);
        this.bureaucracy = Math.range(0, 25, 2);
        this.diplomacy = Math.range(10, 50, 2);
        break;
    }
  },

};