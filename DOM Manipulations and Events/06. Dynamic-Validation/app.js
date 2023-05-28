function validate() {
  let emailInput = document.getElementById("email");

  emailInput.addEventListener("change", function () {
    let email = emailInput.value.trim();
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (regex.test(email)) {
      emailInput.classList.remove("error");
    } else {
      emailInput.classList.add("error");
    }
  });
}
