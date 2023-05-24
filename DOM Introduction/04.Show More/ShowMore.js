function showText() {
  // Get the hidden text element
  let hiddenTextElement = document.getElementById("text");

  // Display the hidden text
  hiddenTextElement.style.display = "inline";

  // Hide the link
  let linkElement = document.getElementById("more");
  linkElement.style.display = "none";
}
