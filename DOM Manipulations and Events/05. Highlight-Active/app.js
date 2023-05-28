function focused() {
  let inputs = document.querySelectorAll("input");
  let inputArr = Array.from(inputs);

  inputArr.forEach((x) => {
    x.addEventListener("focus", focus);
    x.addEventListener("blur", blurHandle);
  });

  function focus(event) {
    let element = event.target;
    let div = element.parentElement;
    div.classList.add("focused");
  }
  function blurHandle(event) {
    let element = event.target;
    let div = element.parentElement;
    div.classList.remove("focused");
  }
}
