function toggle() {
  const MORE = "More";
  const LESS = "Less";
  let btn = document.querySelector('.button');
  let textExtra = document.getElementById('extra');


  btn.textContent = btn.textContent === MORE ? LESS : MORE;

  textExtra.style.display = textExtra.style.display === 'none' || textExtra.style.display === "" ? "block" : "none";

}
