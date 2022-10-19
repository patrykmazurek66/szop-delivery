import deleteFromCart from "./DeleteFromCart";

export default function addToCart(item) {
  if (item.quantity == 0) {
    deleteFromCart(item.name);
    return;
  }
  let cart = [];
  let elements = 0;
  cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
  cart.map(el => {
    el.name === item.name ? (el.quantity = item.quantity * 1) : elements++;
  });
  elements === cart.length ? cart.push(item) : () => {};
  localStorage.setItem("cart", JSON.stringify(cart));
}
