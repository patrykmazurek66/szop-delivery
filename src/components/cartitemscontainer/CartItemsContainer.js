import CartItem from "../cartitem/CartItem";
import { useState, useEffect } from "react";
import "./cartitemscontainer.css";

export default function CartItemsContainer({ handler }) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [cost, setCost] = useState(0);

  function refresh() {
    setCart(JSON.parse(localStorage.cart));
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.cart));
  }, []);

  useEffect(() => {
    setItems(
      cart.map(item => {
        return (
          <CartItem
            name={item.name}
            price={item.price}
            qty={item.quantity}
            key={item.name}
            refresh={refresh}
          />
        );
      })
    );
    setCost(
      cart.reduce((acc, el) => {
        return (acc = acc + el.price * el.quantity);
      }, 0)
    );
  }, [cart]);

  useEffect(() => {
    handler(cost);
  }, [cost]);

  return (
    <div className="cart-items-container">
      <p className="cart-items-container--header">Your Cart</p>

      <div className="cart-items-container--items-list">
        {items}
        {cost === 0 && <h2>Your cart is empty! Buy something!</h2>}
      </div>
      <div className="cart-items-container--total-cost">
        <p>Total</p>
        <p>{cost.toFixed(2)}$</p>
      </div>
    </div>
  );
}
