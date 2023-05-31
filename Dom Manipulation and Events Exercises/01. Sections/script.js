function create(words) {
  let contentDiv = document.getElementById("content");
  //   let sections= document.querySelectorAll('')

  words.forEach((word) => {
    //create element
    const div = document.createElement("div");
    const paragraph = document.createElement("p");

    //setup paragraph
    paragraph.textContent = word;
    paragraph.style.display = "none";

    //setup div
    div.appendChild(paragraph);
    div.addEventListener("click", revealOnClick);

    //add to content
    contentDiv.appendChild(div);
  });
  function revealOnClick(event) {
    event.currentTarget.children[0].style.display = "block";
  }
}
