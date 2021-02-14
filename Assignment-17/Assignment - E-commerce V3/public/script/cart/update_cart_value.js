const btn_cart = $("#btn-cart");
function update_cart_value(value) {
  btn_cart.html(` <i class="fas fa-shopping-cart fa-2x"></i>&nbsp(+${value})`);
}

export { update_cart_value };
