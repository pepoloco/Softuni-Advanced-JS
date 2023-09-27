function deleteByEmail() {
  let tableInfo = document.querySelectorAll('tbody tr');
  let emailInput = document.querySelector('input[name = "email"]').value;
  let resultInfo = document.getElementById('result');
  for (const row of tableInfo) {
    let cells = row.cells;
    let email = cells[1]
    if (email.textContent !== emailInput || emailInput == "") {
      resultInfo.textContent = 'Not found.'
    }else{
      row.remove(cells)
      resultInfo.textContent = "Deleted"
    }
  }

}
