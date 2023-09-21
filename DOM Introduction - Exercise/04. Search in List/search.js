function search() {
  let townsRow = document.querySelectorAll('#towns li');
  let search = document.querySelector('input').value;
  let result = document.getElementById('result');

  let counter = 0;
  for (const el of townsRow) {
    const inputToLower = search.toLowerCase();
    const liTextToLower = el.textContent.toLowerCase();
    if (liTextToLower.includes(inputToLower)){
      el.style.fontWeight = "bold"
      el.style.textDecoration = 'underline'
      counter++;
    }else{
      el.style.fontWeight = "";
      el.style.textDecoration = "";
    }
  }
  result.textContent = `${counter} matches found.`
}
