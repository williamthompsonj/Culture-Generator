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
  form: '',

  // treat _forms as a private property
  _forms: [
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
    'form'
  ],

  ChooseForm()
  {
    // pick at random!
    return this._forms[Math.floor(Math.random()*this._forms.length)];
  },

  /* show current conditions */
  get conditions()
  {
    return (
        "*****************************\r\n"
      + "*** Government Conditions ***\r\n"
      + "*****************************\r\n"
      + "Form: " + this.form.toTitleCase() + "\r\n"
      + "Power Concentration: " + this.power_concentration.toFixed(2) + "\r\n"
      + "Wealth Concentration: " + this.wealth_concentration.toFixed(2) + "\r\n"
      + "Magic Availability: " + this.magic_availability.toFixed(2) + "\r\n"
      + "Corruption: " + this.corruption.toFixed(2) + "\r\n"
      + "Military: " + this.military.toFixed(2) + "\r\n"
      + "Taxes: " + this.taxes.toFixed(2) + "\r\n"
      + "Law Enforcement: " + this.law_enforcement.toFixed(2) + "\r\n"
      + "Bureaucracy: " + this.bureaucracy.toFixed(2) + "\r\n"
      + "Diplomacy: " + this.diplomacy.toFixed(2) + "\r\n"
    );
  },

  /* generate starting conditions */
  Init()
  {
    this.form = this.ChooseForm();

    // determine base parameters around type of government
    switch(this.form)
    {
      case 'autocracy': // dictator but inherited
      case 'dictatorship': // single authority rules by force
        this.power_concentration = Math.range(0.7, 0.95);
        this.wealth_concentration = Math.range(0.5, 0.9);
        this.magic_availability = Math.range(0.2, 0.5);
        this.corruption = Math.range(0.3, 0.6);
        this.taxes = Math.range(0.30, 0.45);
        this.law_enforcement = Math.range(0.5, 0.8);
        this.military = Math.range(0.5, 0.8);
        this.bureaucracy = Math.range(0.3, 0.5);
        this.diplomacy = Math.range(0.5, 0.9);
        break;

      case 'monarchy': // dictator moderated by law / council
        this.power_concentration = Math.range(0.7, 0.9);
        this.wealth_concentration = Math.range(0.5, 0.9);
        this.magic_availability = Math.range(0.2, 0.6);
        this.corruption = Math.range(0.3, 0.6);
        this.taxes = Math.range(0.30, 0.45);
        this.law_enforcement = Math.range(0.5, 0.8);
        this.military = Math.range(0.5, 0.8);
        this.bureaucracy = Math.range(0.4, 0.7);
        this.diplomacy = Math.range(0.6, 0.8);
        break;

      case 'bureaucracy': // government group works for council
      case 'confederacy': // independent states cooperate
      case 'feudalism': // lords support vassal kings
        this.power_concentration = Math.range(0.5, 0.7);
        this.wealth_concentration = Math.range(0.4, 0.8);
        this.magic_availability = Math.range(0.4, 0.8);
        this.corruption = Math.range(0.4, 0.8);
        this.taxes = Math.range(0.20, 0.45);
        this.law_enforcement = Math.range(0.3, 0.6);
        this.military = Math.range(0.3, 0.6);
        this.bureaucracy = Math.range(0.5, 0.7);
        this.diplomacy = Math.range(0.5, 0.7);
        break;

      case 'gerontocracy': // group of elders govern
      case 'matriarchy': // elder or most important females govern
      case 'patriarchy': // elder or most important males govern
        this.power_concentration = Math.range(0.5, 0.9);
        this.wealth_concentration = Math.range(0.5, 0.9);
        this.magic_availability = Math.range(0.2, 0.8);
        this.corruption = Math.range(0.4, 0.8);
        this.taxes = Math.range(0.15, 0.30);
        this.law_enforcement = Math.range(0.5, 0.8);
        this.military = Math.range(0.5, 0.8);
        this.bureaucracy = Math.range(0.4, 0.7);
        this.diplomacy = Math.range(0.6, 0.8);
        break;

      case 'hierarchy': // structured like military order
      case 'militocracy': // military order
        this.power_concentration = Math.range(0.5, 0.9);
        this.wealth_concentration = Math.range(0.3, 0.6);
        this.magic_availability = Math.range(0.3, 0.7);
        this.corruption = Math.range(0.2, 0.5);
        this.taxes = Math.range(0.25, 0.45);
        this.law_enforcement = Math.range(0.7, 0.9);
        this.military = Math.range(0.7, 0.9);
        this.bureaucracy = Math.range(0.7, 0.9);
        this.diplomacy = Math.range(0.6, 0.9);
        break;

      case 'meritocracy': // aristocracy
      case 'oligarchy': // society of wealthy rulers
      case 'plutocracy': // society of wealthy rulers
        this.power_concentration = Math.range(0.5, 0.9);
        this.wealth_concentration = Math.range(0.7, 0.9);
        this.magic_availability = Math.range(0.3, 0.7);
        this.corruption = Math.range(0.45, 0.75);
        this.taxes = Math.range(0.25, 0.45);
        this.law_enforcement = Math.range(0.5, 0.9);
        this.military = Math.range(0.25, 0.45);
        this.bureaucracy = Math.range(0.5, 0.7);
        this.diplomacy = Math.range(0.6, 0.9);
        break;

      case 'democracy': // elected leaders represent people
      case 'republic': // elected leaders represent people
        this.power_concentration = Math.range(0.3, 0.5);
        this.wealth_concentration = Math.range(0.3, 0.5);
        this.magic_availability = Math.range(0.4, 0.8);
        this.corruption = Math.range(0.3, 0.5);
        this.taxes = Math.range(0.15, 0.45);
        this.law_enforcement = Math.range(0.3, 0.5);
        this.military = Math.range(0.3, 0.5);
        this.bureaucracy = Math.range(0.5, 0.7);
        this.diplomacy = Math.range(0.5, 0.7);
        break;

      case 'magocracy': // run by high magic council
        this.power_concentration = Math.range(0.5, 0.9);
        this.wealth_concentration = Math.range(0.5, 0.9);
        this.magic_availability = Math.range(0.7, 1.0);
        this.corruption = Math.range(0.4, 0.8);
        this.taxes = Math.range(0.15, 0.45);
        this.law_enforcement = Math.range(0.3, 0.5);
        this.military = Math.range(0.5, 0.7);
        this.bureaucracy = Math.range(0.3, 0.5);
        this.diplomacy = Math.range(0.5, 0.7);
        break;

      case 'satrapy': // conqueror government
        this.power_concentration = Math.range(0.7, 0.9);
        this.wealth_concentration = Math.range(0.5, 0.9);
        this.magic_availability = Math.range(0.4, 0.7);
        this.corruption = Math.range(0.4, 0.6);
        this.taxes = Math.range(0.35, 0.45);
        this.law_enforcement = Math.range(0.5, 0.7);
        this.military = Math.range(0.5, 0.7);
        this.bureaucracy = Math.range(0.3, 0.5);
        this.diplomacy = Math.range(0.3, 0.5);
        break;

      case 'kleptocracy': // thief government
        this.power_concentration = Math.range(0.5, 0.9);
        this.wealth_concentration = Math.range(0.5, 0.9);
        this.magic_availability = Math.range(0.5, 0.9);
        this.corruption = Math.range(0.7, 0.9);
        this.taxes = Math.range(0.15, 0.45);
        this.law_enforcement = Math.range(0.15, 0.45);
        this.military = Math.range(0.15, 0.45);
        this.bureaucracy = Math.range(0.3, 0.6);
        this.diplomacy = Math.range(0.3, 0.5);
        break;

      case 'theocracy': // run by religion
        this.power_concentration = Math.range(0.5, 0.9);
        this.wealth_concentration = Math.range(0.7, 0.9);
        this.magic_availability = Math.range(0.4, 0.7);
        this.corruption = Math.range(0.6, 0.8);
        this.taxes = Math.range(0.35, 0.45);
        this.law_enforcement = Math.range(0.6, 0.8);
        this.military = Math.range(0.4, 0.7);
        this.bureaucracy = Math.range(0.4, 0.7);
        this.diplomacy = Math.range(0.6, 0.9);
        break;

      default: // anarchy or no centralized government
        this.power_concentration = Math.range(0.05, 0.25);
        this.wealth_concentration = Math.range(0.1, 0.5);
        this.magic_availability = Math.range(0.2, 0.5);
        this.corruption = Math.range(0.2, 0.8);
        this.taxes = Math.range(0.05, 0.25);
        this.law_enforcement = Math.range(0.1, 0.3);
        this.military = Math.range(0.0, 0.25);
        this.bureaucracy = Math.range(0.0, 0.25);
        this.diplomacy = Math.range(0.1, 0.5);
        break;

    }
  },

};