function toggle() {

  let MORE = 'More';
  let LESS = "Less";
  let btn = document.querySelector('.button');
  let text = document.getElementById('extra'); 

  btn.textContent = btn.textContent ===  MORE ? LESS : MORE
  text.style.display = text.style.display === 'none' || text.style.display === "" ? (text.style.display = "block") : (text.style.display = 'none');
}
