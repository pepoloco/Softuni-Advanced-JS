function solve() {
  //capture elements
  let textArea = document.getElementById('input');
  let textAreaValue = textArea.value;
  let output = document.getElementById('output');
  const sentancesArr = textAreaValue.split('.').filter((s) => s !== "").map((s) => s + '.');
  const paragraphRoof = Math.ceil(sentancesArr.length / 3)
  for (let i = 0; i < paragraphRoof; i++) {
    const joinedSentances = sentancesArr.splice(0, 3).join("");
    output.innerHTML += `<p>${joinedSentances}</p>`;
  }
}
