function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let ulListOfItems = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = inputText;
    ulListOfItems.appendChild(li);
}
