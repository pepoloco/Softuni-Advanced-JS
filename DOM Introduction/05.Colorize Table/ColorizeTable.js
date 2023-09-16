function colorize() {
  let rows = document.querySelectorAll("table tr");
  let counter = 0
  for (const row of rows) {
    counter++;
    if (counter % 2 === 0){
      row.style.background = 'Teal'
    } 
  }
}
