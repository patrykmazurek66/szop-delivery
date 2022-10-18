import OrderItem from "./order-item/OrderItem";
import { useState, useEffect } from "react";
import "./orderitemscontainer.css";

export default function OrderItemsContainer() {
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
          <OrderItem
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

  return (
    <div className="order-items-container">
      <p className="order-items-container--header">Your Order</p>

      <div className="order-items-container--items">
        {items}
        <div className="order-items-container--items--delivery">
          <p>Delivery </p>5$
        </div>
      </div>
      <div className="order-items-container--total-cost">
        <p>Total</p>
        <p>{(cost + 5).toFixed(2)}$</p>
      </div>
    </div>
  );
}
