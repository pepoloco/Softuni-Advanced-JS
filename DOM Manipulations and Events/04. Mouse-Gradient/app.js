function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", hoverHandler);
  gradient.addEventListener("mouseout", clearHandler);
  let result = document.getElementById("result");

  function hoverHandler(event) {
    console.dir(event);
    let offsetX = event.offsetX;
    let element = event.target;
    let elementX = element.clientWidth;
    let percentX = Math.trunc((offsetX / elementX) * 100) + "%";
    result.textContent = percentX;
  }
  function clearHandler() {
    result.textContent = "";
  }
}
