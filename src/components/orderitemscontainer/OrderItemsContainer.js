import OrderItem from "../orderitem/OrderItem";
import { useState, useEffect } from "react";
import "./orderitemscontainer.css";
import Div from "../div/Div";
import P from "../p/P";

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
    <Div outline column nomp>
      <Div full nomp>
        <P header>Your Order</P>
      </Div>

      <Div column nomp full>
        {items}
      </Div>
      <Div full nomp>
        <P>Total</P>
        <P>{cost.toFixed(2)}$</P>
      </Div>
    </Div>
  );
}
