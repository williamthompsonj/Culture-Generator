// define conditions of the population
let population = {
  poverty: 0, // how much of the population is poor vs. average
  corruption: 0, // how much people take advantage of
  inequality: 0, // how different is poor vs. rich
  religion: 0, // how involved in religion are the people
  free_choice: 0, // how much free choice do people get
  prejudice: 0, // how likely are people to show bias towards others
  free_time: 0, // how much free time do average people have
  dissent: 0, // how likely are people to protest/actively oppose things

  // properties of object to iterate
  props: [
    'poverty',
    'corruption',
    'inequality',
    'religion',
    'free_choice',
    'prejudice',
    'free_time',
    'dissent'
  ],

  get conditions()
  {
    return (
        "*****************************\r\n"
      + "*** Population Conditions ***\r\n"
      + "*****************************\r\n"
      + "Poverty: " + this.poverty.toFixed(2) + "\r\n"
      + "Inequality: " + this.inequality.toFixed(2) + "\r\n"
      + "Corruption: " + this.corruption.toFixed(2) + "\r\n"
      + "religion: " + this.religion.toFixed(2) + "\r\n"
      + "Free Choice: " + this.free_choice.toFixed(2) + "\r\n"
      + "Prejudice: " + this.prejudice.toFixed(2) + "\r\n"
      + "Free Time: " + this.free_time.toFixed(2) + "\r\n"
      + "Dissent: " + this.dissent.toFixed(2) + "\r\n"
    );
  },

  Init()
  {
    this.poverty = Math.range(0.15, 0.45);
    this.inequality = Math.range(this.poverty, this.poverty + 0.25);
    this.corruption = Math.range(0.1, 0.5);
    this.religion = Math.range(0.1, 0.8);
    this.free_choice = Math.range(0.2, 0.6);
    this.prejudice = Math.range(0.2, 0.6);
    this.free_time = Math.range(0.05, 0.4);
    this.dissent = Math.range(0.1, 0.4);
  }
};