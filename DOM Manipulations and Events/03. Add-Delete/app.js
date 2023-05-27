function addItem() {
  let inputText = document.getElementById("newItemText").value;
  if (inputText.length === 0) return;

  let li = document.createElement("li");
  li.textContent = inputText;

  let remove = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");
  remove.appendChild(linkText);
  remove.href = "#";
  remove.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(remove);
  document.getElementById("items").appendChild(li);
  document.getElementById("newItemText").value = "";
}
