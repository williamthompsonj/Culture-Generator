"use strict";
// utility object namespace
var util = {
  /* Get element object using query syntax. Returns null if nothing found.
    - "foo" gets the first element named <foo>
    - "#foo" gets the first element with id="foo"
    - ".foo" gets the first element with class="foo"
    - [attr="foo"] gets the first element with attr="foo"
    - tag[attr="foo"] gets the first element with <tag attr="foo">
  */
  getElem(id)
  {
    return document.querySelector(id);
  },

  /* Get element value */
  getValue(id)
  {
    let z = this.getElem(id);
    if(z == null)
      return '';

    switch(z.tagName.toUpperCase())
    {
      // form element value
      case 'TEXTAREA':
      case 'INPUT':
        return z.value;
        break;

      case 'SELECT':
        if(z.selectedIndex == -1)
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
  },

  /* Get element inner HTML */
  getHtml(id)
  {
    let z = this.getElem(id);
    if(z == null)
      return '';

    return z.innerHTML;
  },

  /* Set element object */
  setElem(id, val)
  {
    let z = this.getElem(id);
    if(z == null)
      return;
    this.getElem(id) = val;
  },

  /* Set element value */
  setValue(id, val)
  {
    let z = this.getElem(id);
    if(z == null)
      return;

    switch(z.tagName.toUpperCase())
    {
      case 'TEXTAREA':
      case 'INPUT':
        z.value = val;
        break;

      case 'SELECT':
        for(var i = 0; i != z.options.length; i++)
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
  },

  /* Set element inner HTML */
  setHtml(id, val)
  {
    let z = this.getElem(id);
    if(z == null)
      return;

    z.innerHTML = val;
  },

  /* update value in objects when onChange occurs */
  updateElem(elem)
  {
    var val = elem.value.trim();

    if(val.toLowerCase() == 'true') // boolean true
      val = true;
    else if(val.toLowerCase() == 'false') // boolean false
      val = false;
    else if(isNaN(val)) // original string value
      val = elem.value;
    else
      val = Number(val); // number

    let arr = elem.id.split('_');
    var index = elem.id.substring(arr[0].length+1);

    switch(arr[0])
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
  },

  /* auto-populate form fields based on object props */
  fillForm(prefix, obj, precision = 2)
  {
    let keys = Object.keys(obj.props);
    for(var i = 0; i != keys.length; i++)
    {
      let str = "#" + prefix + keys[i];
      let val = obj.props[keys[i]].value;

      if(isNaN(val))
        this.setValue(str, String(val).toTitleCase());
      else
        this.setValue(str, Number(val).toFixed(precision));
    }
  },

};