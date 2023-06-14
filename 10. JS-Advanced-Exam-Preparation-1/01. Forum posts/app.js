function solve() {
  //all elements DOM
  let titleContent = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");
  let publishBtn = document.getElementById("publish-btn");
  let reviewList = document.getElementById("review-list");

  function publishHandler() {
    let title = titleContent.value;
    let category = postCategory.value;
    let content = postContent.value;

    if (title === "" || category === "" || content === "") {
      return;
    }

    //LI ELEMENT
    let createLI = document.createElement("li");
    createLI.classList.add("rpost");
    //CATEGORY PARAGRAPH
    let categoryP = document.createElement("p");
    categoryP.textContent = `Category: ${category}`;
    //CONTENT PARAGRAPH
    let contentP = document.createElement("p");
    contentP.textContent = `Content: ${content}`;
    //HEADING4 P
    let heading4 = document.createElement("h4");
    heading4.textContent = title;
    //ARTICLE ELEMENT
    let article = document.createElement("article");
    article.appendChild(heading4);
    article.appendChild(categoryP);
    article.appendChild(contentP);
    //BUTTON EDIT
    let buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonEdit.classList.add("action-btn", "edit");
    //BUTTON APPROVE
    let buttonApprove = document.createElement("button");
    buttonApprove.textContent = "Approve";
    buttonApprove.classList.add("action-btn", "approve");
    //LI APPENDING
    createLI.appendChild(article);
    createLI.appendChild(buttonApprove);
    createLI.appendChild(buttonEdit);

    //Append the new post
    reviewList.appendChild(createLI);
    titleContent.value = "";
    postCategory.value = "";
    postContent.value = "";
  }

  //event listener to the publish btn
  publishBtn.addEventListener("click", publishHandler);
}
///////////////
// function editHandler(publishHandler) {}
// //event listener to the edit btn
// buttonEdit.addEventListener("click", editHandler);

solve();
