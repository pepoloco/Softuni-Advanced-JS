function solve() {

  let textInput = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  const PASCAL_CASE = 'Pascal Case';
  const CAMEL_CASE = "Camel Case";

  let arrayToString = textInput.split(' ');
  let output = "";
  if (namingConvention !== PASCAL_CASE && namingConvention !== CAMEL_CASE){
    result.textContent = 'Error';
    return;
  }
  else if (namingConvention === PASCAL_CASE){
    for (let i = 0; i < arrayToString.length; i++) {
      output += arrayToString[i][0].toUpperCase() + arrayToString[i].slice(1);
    }
  }
  else {
    for (let i = 0; i < arrayToString.length; i++) {
      if (i === 0){
        output += arrayToString[i];
      }else {
        output += arrayToString[i][0].toUpperCase() + arrayToString[i].slice(1)
      }
    }
  }
  result.textContent = output;
}