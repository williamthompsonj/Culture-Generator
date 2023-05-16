"use strict";
// define conditions of religious environment
let religion = {
  diversity: 0,
  hostility: 0,
  order: 0,
  cultural_significance: 0,
  prevalence: 0,
  signs_symbols: 0,
  relevance: 0,
  sacred_texts: 0,

  props: [
    'diversity',
    'hostility',
    'order',
    'cultural_significance',
    'prevalence',
    'signs_symbols',
    'relevance',
    'sacred_texts'
  ],

  Init()
  {
    this.diversity = Math.range(0, 50);
    this.hostility = Math.range(0, 50);
    this.order = Math.range(20, 80);
    this.cultural_significance = Math.range(20, 80);
    this.prevalence = Math.range(20, 80);
    this.signs_symbols = Math.range(20, 80);
    this.relevance = Math.range(20, 80);
    this.sacred_texts = Math.range(20, 80);
  },

};