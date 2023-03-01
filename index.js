let price1 = document.querySelectorAll('.price')[0].innerHTML;
let price2 = document.querySelectorAll('.price')[1].innerHTML;
let price3 = document.querySelectorAll('.price')[2].innerHTML;
let price4 = document.querySelectorAll('.price')[3].innerHTML;

let sum = [Number(price1) + Number(price2) + Number(price3) + Number(price4)];

document.getElementById('finalPrice').textContent = sum;

let finalPrice = document.querySelector('.final-price')

function discountPrice() {
    let result = Number(sum) * 0.8;
    finalPrice.textContent = result;
}

