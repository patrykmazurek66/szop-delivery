export default function addToCart(item) {
  let cart = [];
  let elements = 0;
  cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
  cart.map(el => {
    el.name === item.name ? el.quantity++ : elements++;
  });
  elements === cart.length ? cart.push(item) : () => {};
  localStorage.setItem("cart", JSON.stringify(cart));
}
