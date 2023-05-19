"use strict";
// define conditions of religious environment
let religion = {};

religion.props = {
  diversity: {
    value: 0,
    title: 'Diversity',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  hostility: {
    value: 0,
    title: 'Hostility',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  order: {
    value: 0,
    title: 'Order',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  cultural_significance: {
    value: 0,
    title: 'Cultural Significance',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  prevalence: {
    value: 0,
    title: 'Prevalence',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  signs_symbols: {
    value: 0,
    title: 'Signs Symbols',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  relevance: {
    value: 0,
    title: 'Relevance',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  },
  sacred_texts: {
    value: 0,
    title: 'Sacred Texts',
    description: '',
    tag: 'input',
    type: 'number',
    min: 0,
    max: 100,
    step: 0.01,
    afterElem: '%'
  }
};

religion.Init = function()
{
  // local reference so it can change if needed.
  let p = this.props;

  p.diversity.value = Math.range(0, 50, 2);
  p.hostility.value = Math.range(0, 50, 2);
  p.order.value = Math.range(20, 80, 2);
  p.cultural_significance.value = Math.range(20, 80, 2);
  p.prevalence.value = Math.range(20, 80, 2);
  p.signs_symbols.value = Math.range(20, 80, 2);
  p.relevance.value = Math.range(20, 80, 2);
  p.sacred_texts.value = Math.range(20, 80, 2);
};