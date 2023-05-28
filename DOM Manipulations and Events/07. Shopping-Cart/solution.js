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
    addButtonsArr.forEach((x) => (x.disable = "disable"));
    let productNames = Object.keys(products).join(", ");
    textArea.textContent += `You bought ${productNames} for ${totalSum.toFixed(
      2
    )}`;
  }
  function addHandler(e) {
    let element = e.target;
    let product = element.parentElement.parentElement;

    let title = product.querySelector(".product-title");
    let priceDiv = product.querySelector(".product-line-price");
    let name = title.textContent;
    let price = +priceDiv.textContent;
    totalSum += price;
    products[name] = true;
    textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
  }
}
