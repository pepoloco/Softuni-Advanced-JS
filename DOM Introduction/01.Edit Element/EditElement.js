
function editElement(reference, match, replacer) {
  let text = reference.textContent;
  let regEx = new RegExp(match, 'g')
  let res = text.replace(regEx, replacer);
  reference.textContent = res
}

