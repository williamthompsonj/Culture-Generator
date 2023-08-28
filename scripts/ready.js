"use strict";
// wait for the document to finish loading
document.addEventListener("DOMContentLoaded", () =>
{
  window.dataset = {};

  // do something after finish loading
  util.populateTable(government);
  util.populateTable(population);
  util.populateTable(religion);

  // initialize forms
  government.Init();
  population.Init();
  religion.Init();
  util.fillForm(government);
  util.fillForm(population);
  util.fillForm(religion);

  // load JSON here
  util.loadJson("./json/markov_names.json", "markov_names", util.initNames);
  util.loadJson("./json/events.json", "events", util.initEvents);

/*
  util.loadJson("./json/backgrounds.json", "backgrounds");
  util.loadJson("./json/feats.json", "feats");
  util.loadJson("./json/item_groups.json", "item_groups");
  util.loadJson("./json/items.json", "items");
  util.loadJson("./json/languages.json", "languages");
  util.loadJson("./json/races.json", "races");
  util.loadJson("./json/skills.json", "skills");
  util.loadJson("./json/spells.json", "spells");
*/
});