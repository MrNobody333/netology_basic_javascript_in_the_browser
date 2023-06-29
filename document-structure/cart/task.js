const productControls = document.querySelectorAll('.product__quantity-controls');
const productAdd = document.querySelectorAll('.product__add');

productControls.forEach(control => {
  control.addEventListener('click', e => {
    if (e.target.classList.contains('product__quantity-control_inc')) {
      e.target.previousElementSibling.textContent++;
    } else {
      if (e.target.nextElementSibling.textContent > 1) {
        e.target.nextElementSibling.textContent--;
      }
    }
  });
});

productAdd.forEach(add => {
  add.addEventListener('click', () => {
    const cartProducts = document.querySelector('.cart__products');
    const cartProduct = [...cartProducts.children];
    const id = add.closest('.product').dataset.id;
    const img = add.closest('.product').children[1].src;
    const quantity = +add.closest('.product').querySelector('.product__quantity-value').textContent;
    const currentProduct = cartProduct.find(el => el.dataset.id === id);

    if (currentProduct) {
      const currentQuantity = +currentProduct.children[1].textContent;
      currentProduct.children[1].textContent = quantity + currentQuantity;
    } else {
      cartProducts.innerHTML +=
      `<div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${quantity}</div>
      </div>`;
    }
  });
});