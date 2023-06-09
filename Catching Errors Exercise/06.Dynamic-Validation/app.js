function validate() {
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("change", onChange);
  function onChange(event) {
    const { target } = event;
    const pattern = /^[a-z]+@([a-z]+\.)+[a-z]+$/;
    const operation = pattern.test(target.value) ? "remove" : "add" 
    target.classList[operation]('error');
    target.classList.remove()
  }
}
