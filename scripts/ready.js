"use strict";
// wait for the document to finish loading
document.addEventListener("DOMContentLoaded", () =>
{
  // do something after finish loading
  util.populateTable(government);
  util.populateTable(population);
  util.populateTable(religion);
  
  // generate 100 mundane headlines
  util.setValue('#results', eventFactory.GetActivity('mundane', 100));
});
