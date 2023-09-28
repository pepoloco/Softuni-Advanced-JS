function validate() {
  let emailInput = document.getElementById("email");
  let regex = (/^[a-z]+@[a-z]+\.[a-z]+$/)
  emailInput.addEventListener('input', checkEmail)

  function checkEmail() {
    let email = emailInput.value.trim();
    if (regex.test(email)) {
      emailInput.classList.remove('error');
    } else {
      emailInput.classList.add("error")
    }
  }
}
