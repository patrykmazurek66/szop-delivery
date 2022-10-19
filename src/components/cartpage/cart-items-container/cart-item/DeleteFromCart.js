export default function deleteFromCart(itemName) {
  let cart = [];
  cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
  cart = cart.filter(el => el.name !== itemName);
  localStorage.setItem("cart", JSON.stringify(cart));
}
