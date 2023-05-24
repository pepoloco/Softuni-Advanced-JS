function editElement(reference, match, replacer) {
  const content = reference.textContent;
  let regex = new RegExp(match, "g");
  let res = content.replace(regex, replacer);
  reference.textContent = res;
}
