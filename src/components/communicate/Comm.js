import axios from "axios";

export function localStorageSet(key, value) {
  localStorage.setItem(key, value);
}

export function axiosGetItems() {
  return axios.get("http://localhost:3000/items").then(res => {
    return res.data;
  });
}

export function axiosGetCategories() {
  return axios.get("http://localhost:3000/categories").then(res => {
    return res.data;
  });
}

export function axiosGetOrderHistory() {
  return axios.get("http://localhost:3000/orders").then(res => {
    return res.data;
  });
}

export async function axiosPostOrder(data) {
  const cartData = JSON.parse(localStorage.cart);
  const date = new Date();
  const dateString = date.getTime().toString();
  const orderCart = { cart: cartData };
  const orderDetails = { details: data };
  const newId = { id: dateString };
  const dataToPost = Object.assign(Object.assign(orderCart, orderDetails), newId);
  axios.post("http://localhost:3000/orders", dataToPost).then(() => {
    localStorageSet("cart", "[]");
  });
}
