"use strict";
// define conditions of the population
let population = {prefix: 'pop'};

// properties of object to iterate
population.props = {
  poverty: {
    value: 0,
    title: 'Poverty',
    description: 'How much of the population is below the poverty line',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  inequality: {
    value: 0,
    title: 'Inequality',
    description: 'How big is the difference between poverty and average',
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
    description: 'How tolerant people are to things that are not lawful or that do not follow convention',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  prejudice: {
    value: 0,
    title: 'Prejudice',
    description: 'How likely are people to show bias or racism',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  dissent: {
    value: 0,
    title: 'Dissent',
    description: 'How likely are people to protest or oppose things',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  religion: {
    value: 0,
    title: 'Religion',
    description: 'How involved or relevant religion is to daily life',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  free_choice: {
    value: 0,
    title: 'Free Choice',
    description: 'How much control people have over life choices such as their occupation, love interests, where they live, or what they can become',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  free_time: {
    value: 0,
    title: 'Free Time',
    description: 'How much time do average people have to do things they want outside of work and sleep',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
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