// show / hide / if
// :TODO
if (attr_name == 'if' && !value) {
    dom.parentNode.removeChild(dom)
} else {
    if (attr_name == 'hide') value = !value
    dom.style.display = value ? '' : 'none'
}
