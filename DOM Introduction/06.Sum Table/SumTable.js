function sumTable() {
  let values = document.querySelectorAll("table tr");
  let total = 0;
  for (let i = 1; i < values.length; i++) {
    let cols = values[i].children;
    let cost = cols[cols.length - 1].textContent;
    total += Number(cost);
  }
  document.getElementById("sum").textContent = total;
}
