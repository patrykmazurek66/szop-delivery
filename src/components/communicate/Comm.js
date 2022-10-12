import axios from "axios";

export function axiosGetItems(url) {
  return axios.get(url).then(res => {
    return res.data;
  });
}

export function axiosGetCategories(url) {
  return axios.get(url).then(res => {
    return res.data;
  });
}

export function axiosGetOrderHistory(url) {
  return axios.get(url).then(res => {
    return res.data;
  });
}

export function axiosPostOrder(data) {
  const date = new Date();
  const dateString = date.getTime().toString();
  const orderCart = { cart: JSON.parse(localStorage.cart) };
  const orderDetails = { details: data };
  const newId = { id: dateString };
  const dataToPost = Object.assign(Object.assign(orderCart, orderDetails), newId);
  console.log(dateString, dataToPost);
  axios.post("http://localhost:3000/orders", dataToPost).then(res => console.log(res.data.id));
}
