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
      case 'SELECT':
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

  /* auto-populate form fields based on object props */
  FillForm(prefix, obj, offset = 100, fixed_length = 2)
  {
    for(var i = 0; i != obj.props.length; i++)
    {
      if(isNaN(obj[obj.props[i]]))
        this.setValue("#"+prefix+obj.props[i], String(obj[obj.props[i]]).toTitleCase());
      else
        this.setValue("#"+prefix+obj.props[i], (obj[obj.props[i]] * offset).toFixed(fixed_length));
    }
  }
};