"use strict";
// wait for the document to finish loading
document.addEventListener("DOMContentLoaded", () =>
{
  // do something after finish loading
  util.populateTable('gov', government);
  util.populateTable('pop', population);
  util.populateTable('rel', religion);
});
