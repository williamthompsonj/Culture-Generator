"use strict";
// utility object namespace
var util = {};

/* Get element object using query syntax. Returns null if nothing found.
  - "foo" gets the first element named <foo>
  - "#foo" gets the first element with id="foo"
  - ".foo" gets the first element with class="foo"
  - [attr="foo"] gets the first element with attr="foo"
  - tag[attr="foo"] gets the first element with <tag attr="foo">
*/
util.getElem = function(id)
{
  return document.querySelector(id);
};

/* Get element value */
util.getValue = function(id)
{
  let z = this.getElem(id);
  if (z == null)
    return '';

  switch (z.tagName.toUpperCase())
  {
    // form element value
    case 'TEXTAREA':
    case 'INPUT':
      return z.value;
      break;

    case 'SELECT':
      if (z.selectedIndex == -1)
      {
        // if nothing selected, default to first option
        z.selectedIndex = 0;
        z.value = z.options[0].value;
      }
      return z.value;
      break;

    // html tag contents
    default:
      return z.innerHTML;
      break;
  }
};

/* Get element inner HTML */
util.getHtml = function(id)
{
  let z = this.getElem(id);
  if (z == null)
    return '';

  return z.innerHTML;
};

/* Set element object */
util.setElem = function(id, val)
{
  let z = this.getElem(id);
  if (z == null)
    return;
  this.getElem(id) = val;
};

/* Set element value */
util.setValue = function(id, val)
{
  let z = this.getElem(id);
  if (z == null)
    return;

  switch (z.tagName.toUpperCase())
  {
    case 'TEXTAREA':
    case 'INPUT':
      z.value = val;
      break;

    case 'SELECT':
      for (var i = 0; i != z.options.length; i++)
      {
        if (val == z.options[i].text)
        {
          z.selectedIndex = i;
          z.options[i].selected = true;
        }
        else
        {
          z.options[i].selected = false;
        }
      }
      break;

    default:
      z.innerHTML = val;
      break;
  }
};

/* Set element inner HTML */
util.setHtml = function(id, val)
{
  let z = this.getElem(id);
  if (z == null)
    return;

  z.innerHTML = val;
};

/* update value in objects when onChange occurs */
util.updateElem = function(elem)
{
  var val = elem.value.trim();

  if (val.toLowerCase() == 'true') // boolean true
    val = true;
  else if (val.toLowerCase() == 'false') // boolean false
    val = false;
  else if (isNaN(val)) // original string value
    val = elem.value;
  else
    val = Number(val); // number

  let arr = elem.id.split('_');
  var index = elem.id.substring(arr[0].length+1);

  switch (arr[0])
  {
    case "gov":
      government.props[index].value = val;
      break;

    case "pop":
      population.props[index].value = val;
      break;

    case "rel":
      religion.props[index].value = val;
      break;
  }
};

util.populateTable = function(prefix, obj)
{
  // ensure table exists before we do anything else
  let my_table = this.getElem('#' + prefix + '_' + 'table');
  if (my_table == null) return;

  // iterate over object props keys
  Object.keys(obj.props).forEach(elem => {
    // shorthand for html tag properties
    let h = obj.props[elem].html_tag;
    let p = obj.props[elem];

    // variables to hold tags
    var tr_tag = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2, span_tag, label_tag, val_tag, opt_tag, text_node;

    // check if there's a column span
    if (h.hasOwnProperty('colspan') && h.colSpan != 1)
    {
      td1.colSpan = h.colSpan;
      td2 = td1;
    }
    else
    {
      td2 = document.createElement('td');
    }

    // build from left side to right side
    if (p.description != '' && p.title != '')
    {
      // build title
      label_tag = document.createElement('label');
      label_tag.innerText = p.title;
      label_tag.htmlFor = prefix + '_' + elem;
      label_tag.className = 'tooltip';

      // build tooltip description
      span_tag = document.createElement('span');
      span_tag.className = 'tooltiptext';
      span_tag.innerText  = p.description;

      // add to the td tag
      label_tag.appendChild(span_tag);
      td1.appendChild(label_tag);
    }
    else if (p.title != '')
    {
      // build title
      label_tag = document.createElement('label');
      label_tag.innerText = p.title;
      label_tag.htmlFor = prefix + '_' + elem;

      // add to the td tag
      td1.appendChild(label_tag);
    }

    // create an element of some type for storing a value
    val_tag = document.createElement(h.elem);

    // set onchange to utility updater
    val_tag.onchange = (event) => {util.updateElem(event.srcElement)};

    // set id and name attributes
    val_tag.id = prefix + '_' + elem;
    val_tag.name = prefix + '_' + elem;

    if (h.elem == 'input')
    {
      // input tag
      val_tag.type = h.type;
      val_tag.min = h.min;
      val_tag.max = h.max;
      val_tag.step = h.step;
    }
    else if (h.elem == 'select')
    {
      // select tag
      Object.keys(p.options).forEach(index => {
        // create the option
        opt_tag = document.createElement('option');
        opt_tag.text = p.options[index];
        opt_tag.value = index;

        // append the option
        val_tag.appendChild(opt_tag);
      });
    }

    // check for text before container
    if (h.hasOwnProperty('text_before'))
    {
      text_node = document.createTextNode(h.text_before);
      td2.appendChild(text_node);
    }

    // append value container to table cell
    td2.appendChild(val_tag);

    // check for text after container
    if (h.hasOwnProperty('text_after'))
    {
      text_node = document.createTextNode(h.text_after);
      td2.appendChild(text_node);
    }

    // put it all together
    tr_tag.appendChild(td1);
    if (td1 != td2) tr_tag.appendChild(td2);

    // add row to table
    my_table.appendChild(tr_tag);

  });
};

/* auto-populate form fields based on object props */
util.fillForm = function(prefix, obj, precision = 2)
{
  // iterate over object props keys
  Object.keys(obj.props).forEach(elem =>
  {
    let str = "#" + prefix + '_'  + elem;
    let val = obj.props[elem].value;

    if (isNaN(val))
      this.setValue(str, String(val).toTitleCase());
    else
      this.setValue(str, Number(val).toFixed(precision));
  });

};