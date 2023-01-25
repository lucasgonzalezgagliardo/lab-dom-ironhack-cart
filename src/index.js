// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').value
  //... your code goes here
  let priceXquantity = price * quantity;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = priceXquantity;

return priceXquantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
let selectAll = document.getElementsByClassName('product')
let finalPrice = 0
for (let i = 0; i < selectAll.length; i++) {
  finalPrice += updateSubtotal(selectAll[i])
}
  // ITERATION 3
  //... your code goes here

let totalTotal = document.querySelector("#total-value span")
totalTotal.innerHTML = finalPrice

}

//BONUS ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

//BONUS ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
