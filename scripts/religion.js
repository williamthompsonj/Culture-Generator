"use strict";
// define conditions of religious environment
let religion = {};

religion.props = {
  diversity: {
    value: 0,
    title: 'Diversity',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  hostility: {
    value: 0,
    title: 'Hostility',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  order: {
    value: 0,
    title: 'Order',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  cultural_significance: {
    value: 0,
    title: 'Cultural Significance',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  prevalence: {
    value: 0,
    title: 'Prevalence',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  signs_symbols: {
    value: 0,
    title: 'Signs & Symbols',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  relevance: {
    value: 0,
    title: 'Relevance',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
  },
  sacred_texts: {
    value: 0,
    title: 'Sacred Texts',
    description: 'description',
    html_tag: {
      elem: 'input',
      type: 'number',
      min: 0,
      max: 100,
      step: 0.01,
      text_after: '%'
    }
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