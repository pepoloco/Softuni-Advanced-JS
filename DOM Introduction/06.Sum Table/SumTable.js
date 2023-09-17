function sumTable() {
  let total = 0;
  let tableRows = document.querySelectorAll('table tr');

  for (let i = 1; i < tableRows.length - 1; i += 1) {
    let row = tableRows[i];
    let cellValue = row.children[1].textContent;
    total += Number(cellValue);
  }

  document.getElementById('sum').textContent = total
}
