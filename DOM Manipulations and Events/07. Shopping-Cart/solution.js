function solve() {
  let addButtons = document.querySelectorAll(".add-product");
  let addButtonsArr = Array.from(addButtons);
  let textArea = document.querySelector("textarea");
  let totalSum = 0;
  let products = {};
  let btnCheckout = document.querySelector(".checkout");
  addButtonsArr.forEach((x) => x.addEventListener("click", addHandler));
  btnCheckout.addEventListener("click", checkOut);

  function checkOut(event) {
    addButtonsArr.forEach((x) => (x.disabled = true));
    let productNames = Object.keys(products).join(", ");
    let summary = `You bought ${productNames} for ${totalSum.toFixed(2)}`;
    textArea.textContent += summary + "\n";
  }

  function addHandler(e) {
    let element = e.target;
    let product = element.parentElement.parentElement;
    let title = product.querySelector(".product-title");
    let priceDiv = product.querySelector(".product-line-price");
    let name = title.textContent;
    let price = parseFloat(priceDiv.textContent);
    totalSum += price;
    products[name] = true;
    let message = `Added ${name} for ${price.toFixed(2)} to the cart.`;
    textArea.textContent += message + "\n";
  }
}
