function addItem() {
  let inputText = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(inputText));
  document.getElementById("items").appendChild(li);
  document.getElementById("newItemText").value = "";
}
