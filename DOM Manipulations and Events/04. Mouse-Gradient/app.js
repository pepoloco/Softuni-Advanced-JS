function attachGradientEvents() {
  let result = document.getElementById('result');
  let gradient = document.getElementById('gradient');
  gradient.addEventListener('mousemove', onHover);
  gradient.addEventListener('mouseout', onExit);

  function onHover(event) {
    let offSet = event.offsetX;
    let width = event.target.clientWidth;
    let percentX = Math.trunc((offSet / width) * 100) + "%";
    result.textContent = percentX
  }
  function onExit() {
    result.textContent = ""
  }
}
