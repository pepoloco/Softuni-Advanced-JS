function extractText() {
  let lis = document.querySelectorAll("ul#items li");
  let textArea = document.querySelector("#result");
  for (let node of lis) {
    textArea.value += node.textContent + "\n";
  }
}
