"use strict";
// define conditions of the population
let population = {
/*
  poverty: 0, // how much of the population is poor vs. average
  corruption: 0, // how much people take advantage of
  inequality: 0, // how different is poor vs. rich
  religion: 0, // how involved in religion are the people
  free_choice: 0, // how much free choice do people get
  prejudice: 0, // how likely are people to show bias towards others
  free_time: 0, // how much free time do average people have
  dissent: 0, // how likely are people to protest/oppose things
*/
};

// properties of object to iterate
population.props = {
  poverty: {
    value: 0,
    title: 'Poverty',
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
  inequality: {
    value: 0,
    title: 'Inequality',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  religion: {
    value: 0,
    title: 'Religion',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  free_choice: {
    value: 0,
    title: 'Free Choice',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  prejudice: {
    value: 0,
    title: 'Prejudice',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  free_time: {
    value: 0,
    title: 'Free Time',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  dissent: {
    value: 0,
    title: 'Dissent',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  }
};

// initialize the religion form
population.Init = function()
{
  // local reference so it can change if needed.
  let p = this.props;

  p.poverty.value = Math.range(15, 45, 2);
  p.inequality.value = Math.range(p.poverty.value, p.poverty.value + 25, 2);
  p.corruption.value = Math.range(10, 50, 2);
  p.religion.value = Math.range(10, 80, 2);
  p.free_choice.value = Math.range(20, 60, 2);
  p.prejudice.value = Math.range(20, 60, 2);
  p.free_time.value = Math.range(5, 40, 2);
  p.dissent.value = Math.range(10, 40, 2);
};