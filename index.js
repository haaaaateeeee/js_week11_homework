let price = document.querySelector('.disc-price').textContent;
let totalPrice = document.querySelector('.disc-price');
let button = document.querySelector('.button');
let discount = price / 100 * 20

function discountPrice() {
    let result = Number(price) - discount;
    totalPrice.textContent = result;
}

button.addEventListener('click', changePrice);