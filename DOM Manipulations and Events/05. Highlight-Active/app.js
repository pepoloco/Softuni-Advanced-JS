function focused() {
  let sections = document.querySelectorAll('input')
  let sectionsToArr = Array.from(sections);
  sectionsToArr.forEach(section => {
    section.addEventListener('focus', focus);
    section.addEventListener('blur', blur)
  });
  function focus(event){
    console.dir(event);
    let element = event.target;
    let div = element.parentElement;
    div.classList.add('focused')
  }
  function blur(event){
    let element = event.target;
    let div = element.parentElement;
    div.classList.remove("focused");
  }
}
