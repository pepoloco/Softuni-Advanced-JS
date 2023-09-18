function solve() {
  let firstParam = document.getElementById('text').value.toLowerCase();
  let secondParam = document.getElementById('naming-convention').value;
  let result = document.getElementById('result')

  if (secondParam !== 'Camel Case' && secondParam !== 'Pascal Case') {
    result.textContent = 'Error!';
    return;
  }

  const arrOfStr = firstParam.split(' ');
  let output = '';
  let startingPoint = 0

  if (secondParam === 'Camel Case') {
    output += arrOfStr[0];
    startingPoint = 1;
  }
  for (let i = startingPoint; i < arrOfStr.length; i++) {
    const curWord = arrOfStr[i];
    output += curWord[0].toUpperCase() + curWord.slice(1, curWord.length);

    result.textContent = output;
  }

}