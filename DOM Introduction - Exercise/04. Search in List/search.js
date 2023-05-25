function search() {
  //capture elements
  let towns = document.querySelectorAll("#towns li");
  const input = document.querySelector("input").value;
  const result = document.getElementById("result");

  //logic
  let sum = 0;
  for (const li of towns) {
    const inputToLower = input.toLowerCase();
    const liTextToLower = li.textContent.toLowerCase();

    if (liTextToLower.includes(inputToLower)) {
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
      sum++;
    } else {
      li.style.fontWeight = "";
      li.style.textDecoration = "";
    }
  }
  result.textContent = `${sum} matches found`;
}
