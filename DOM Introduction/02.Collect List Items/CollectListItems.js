function extractText() {
  let lis = document.getElementById('items').textContent;
  let textArea = document.getElementById('result');
  let liValue = Array.from(lis).join('');
  textArea.textContent = liValue
}
