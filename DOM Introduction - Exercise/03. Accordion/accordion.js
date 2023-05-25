function toggle() {
  const MORE = "More";
  const LESS = "Less";
  let btn = document.querySelector(".button");
  let changeDisplay = document.querySelector("#extra");

  btn.textContent = btn.textContent === MORE ? LESS : MORE;
  changeDisplay.style.display =
    changeDisplay.style.display === "none" || changeDisplay.style.display === ""
      ? (changeDisplay.style.display = "block")
      : (changeDisplay.style.display = "none");
}
