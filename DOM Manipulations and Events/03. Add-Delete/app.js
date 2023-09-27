function addItem() {
  let ulListOfItems = document.getElementById('items');
  let inputText = document.getElementById('newItemText').value;
  let newLi = document.createElement('li');
  newLi.textContent = inputText;
  if (newLi.textContent === ""){
    return
  }else{
    ulListOfItems.appendChild(newLi);
  }
  let anchor = document.createElement('a');
  anchor.textContent = "[Delete]";
  anchor.href = '#';

  anchor.addEventListener('click', anchorClick);
  function anchorClick() {
    ulListOfItems.removeChild(newLi)
  }
  newLi.appendChild(anchor)
  document.getElementById('newItemText').value = "";

}
