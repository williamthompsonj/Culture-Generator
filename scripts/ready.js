"use strict";
// wait for the document to finish loading
document.addEventListener("DOMContentLoaded", () =>
{
  // do something after finish loading
  util.populateTable(government);
  util.populateTable(population);
  util.populateTable(religion);
});
