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

  // generate 100 mundane headlines
  util.setValue('#results', eventFactory.GetActivity('mundane', 100));

  // generate 100 random namespaces
  //markovNames.more_names(100);

});