import { Button } from "@mui/material";
import "./cartitem.css";

export default function CartItem({ name, price, qty, refresh }) {
  const addToCart = item => {
    item.quantity > 99 ? (item.quantity = 99) : {};
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
  };

  const deleteFromCart = itemName => {
    let cart = [];
    cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
    cart = cart.filter(el => el.name !== itemName);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="item-container">
      <p className="item-name">{name}</p>
      <div className="item-container--righ-col">
        <div className="qty-container">
          <Button variant="outlined" size="small">
            -
          </Button>

          <input
            min={0}
            max={99}
            required
            type="number"
            className="qty-container--qty"
            data-itemname={name}
            data-itemprice={price}
            value={qty}
            onChange={e => {
              const name = e.target.getAttribute("data-itemname");
              const price = e.target.getAttribute("data-itemprice");
              const quantity = e.target.value;
              addToCart({ name, price, quantity });
              refresh();
            }}
          />
          <Button variant="outlined" size="small">
            +
          </Button>
        </div>
        <p className="price">{(price * qty).toFixed(2)}$</p>
        <button
          className="delete-item"
          data-itemname={name}
          onClick={e => {
            const name = e.target.getAttribute("data-itemname");
            deleteFromCart(name);
            refresh();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
