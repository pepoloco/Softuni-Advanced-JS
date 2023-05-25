function solve() {
  let textToModify = document.getElementById("text").value.toLowerCase();
  let currentText = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (currentText !== "Camel Case" && currentText !== "Pascal Case") {
    result.textContent = "Error!";
    return;
  }
  const arrayOfStrings = textToModify.split(" ");
  let output = "";
  let startingPoint = 0;

  if (currentText === "Camel Case") {
    output += arrayOfStrings[0];
    startingPoint = 1; //
  }
  for (let i = 0; i < arrayOfStrings.length; i++) {
    const curWord = arrayOfStrings[i];
    output += curWord[0].toUpperCase() + curWord.slice(1, curWord.length);
    result.textContent = output;
  }
}
