function getElem(id)
{
    return document.getElementById(id);
}

function getValue(id)
{
    return getElem(id).value;
}

function setElem(id, val)
{
    document.getElementById(id) = val;
}

function setValue(id, val)
{
    getElem(id).value = val;
}