function solve() {

  let textArea = document.querySelector('textarea');
  let btn = document.querySelectorAll('.add-product');
  let checkOutBtn = document.querySelector('.checkout')
  let products = {};
  let totalSum = 0

  let btnToArr = Array.from(btn)

  checkOutBtn.addEventListener('click', checkOut)

  btnToArr.forEach(element => {
    element.addEventListener('click', clickBtn);
  })
  function clickBtn(e) {
    let element = e.target;
    let productDiv = element.parentElement.parentElement;
    let title = productDiv.querySelector('.product-title');
    let price = productDiv.querySelector('.product-line-price');
    let name = title.textContent;
    let prices = Number(price.textContent);
    totalSum += prices
    products[name] = true;
    textArea.textContent += `Added ${name} for ${prices.toFixed(2)} to the cart.\n`
  }
  function checkOut(e) {
    btnToArr.forEach(x => x.disabled = 'disabled');
    let productsNames = Object.keys(products).join(', ')
    textArea.textContent += `You bought ${productsNames} for ${totalSum.toFixed(2)}.\n`
  }
}
