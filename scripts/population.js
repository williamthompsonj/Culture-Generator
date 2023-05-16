"use strict";
// define conditions of the population
let population = {
  poverty: 0, // how much of the population is poor vs. average
  corruption: 0, // how much people take advantage of
  inequality: 0, // how different is poor vs. rich
  religion: 0, // how involved in religion are the people
  free_choice: 0, // how much free choice do people get
  prejudice: 0, // how likely are people to show bias towards others
  free_time: 0, // how much free time do average people have
  dissent: 0, // how likely are people to protest/oppose things

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
      + "Poverty: " + this.poverty + "\r\n"
      + "Inequality: " + this.inequality + "\r\n"
      + "Corruption: " + this.corruption + "\r\n"
      + "religion: " + this.religion + "\r\n"
      + "Free Choice: " + this.free_choice + "\r\n"
      + "Prejudice: " + this.prejudice + "\r\n"
      + "Free Time: " + this.free_time + "\r\n"
      + "Dissent: " + this.dissent + "\r\n"
    );
  },

  Init()
  {
    this.poverty = Math.range(15, 45);
    this.inequality = Math.range(this.poverty, this.poverty + 25);
    this.corruption = Math.range(10, 50);
    this.religion = Math.range(10, 80);
    this.free_choice = Math.range(20, 60);
    this.prejudice = Math.range(20, 60);
    this.free_time = Math.range(5, 40);
    this.dissent = Math.range(10, 40);
  }
};