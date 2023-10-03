function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;
    if (!isNaN(itemText)) {
        document.getElementById('newItemText').value = "";
        document.getElementById('newItemValue').value = "";
        return;
    }
    let menuSelect = document.getElementById('menu');
    let newOption = document.createElement('option');
    newOption.textContent = itemText;
    newOption.value = itemValue
    menuSelect.appendChild(newOption)



    itemText = document.getElementById('newItemText').value = ""
    itemValue = document.getElementById('newItemValue').value = ""

}