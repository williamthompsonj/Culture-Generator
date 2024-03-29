"use strict";
// define conditions of religious environment
let religion = {prefix: "rel"};

religion.props = {
  diversity: {
    value: 0,
    title: "Diversity",
    description: "How many major religions are represented",
    options: [2, 3, 4, 5, 6],
    html_tag: {
      elem: "select",
    }
  },
  hostility: {
    value: 0,
    title: "Hostility",
    description: "How tolerant major religions are toward one another",
    html_tag: {
      elem: "input",
      type: "number",
      min: 0,
      max: 100,
      step: 0.01,
      text_after: "%"
    }
  },
  order: {
    value: 0,
    title: "Order",
    description: "How organized are the major religions",
    html_tag: {
      elem: "input",
      type: "number",
      min: 0,
      max: 100,
      step: 0.01,
      text_after: "%"
    }
  },
  cultural_significance: {
    value: 0,
    title: "Cultural Significance",
    description: "How relevant this culture finds religious terms, events, sites, or related things",
    html_tag: {
      elem: "input",
      type: "number",
      min: 0,
      max: 100,
      step: 0.01,
      text_after: "%"
    }
  },
  prevalence: {
    value: 0,
    title: "Prevalence",
    description: "How influential religions are in daily life: marriage, government, holidays, etc.",
    html_tag: {
      elem: "input",
      type: "number",
      min: 0,
      max: 100,
      step: 0.01,
      text_after: "%"
    }
  },
  sacred_sites: {
    value: 0,
    title: "Sacred Sites",
    description: "Major holy sites present including major shrines, head temples, locations of sacred events or battles, etc.",
    options: Array.from({ length: 10 }, (value, index) => index+3),
    html_tag: {
      elem: "select",
    }
  },
};

religion.Init = function()
{
  // local reference so it can change if needed.
  let p = religion.props;

  p.diversity.value = p.diversity.options.randomValue();
  p.hostility.value = Math.range(0, 50, 2);
  p.order.value = Math.range(20, 80, 2);
  p.cultural_significance.value = Math.range(20, 80, 2);
  p.prevalence.value = Math.range(20, 80, 2);
  p.sacred_sites.value = p.sacred_sites.options.randomValue();
};