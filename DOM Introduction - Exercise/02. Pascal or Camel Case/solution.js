function solve() {
  let inputText = document.getElementById('text').value.toLowerCase();
  let inputConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case"

  if (inputConvention !== CAMEL_CASE && inputConvention !== PASCAL_CASE){
    result.textContent = "Error!";
    return;
  }

  const arrayOfStr = inputText.split(' ');
  let output = ""
  let startingPoint = 0;

  if (inputConvention === CAMEL_CASE){
    output += arrayOfStr[0];
    startingPoint = 1;
  }
    for (let i = startingPoint; i < arrayOfStr.length; i++) {
      const curWord = arrayOfStr[i];
      output += curWord[0].toUpperCase() + curWord.slice(1, curWord.length);
      result.textContent = output;
  
  }
}