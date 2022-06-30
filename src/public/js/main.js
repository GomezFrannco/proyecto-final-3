const $checkout = document.getElementById('checkout');

function buyCart() {
  return $checkout.classList.remove('visibility');
}

function goBack() {
  return $checkout.classList.add('visibility');
}