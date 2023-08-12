"use strict";
// wait for the document to finish loading
document.addEventListener("DOMContentLoaded", () =>
{
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

  // generate headlines
  util.setValue('#moderate_results', eventFactory.GetActivity('moderate', 10));
  util.setValue('#minor_results', eventFactory.GetActivity('minor', 10));
  util.setValue('#mundane_results', eventFactory.GetActivity('mundane', 10));
});