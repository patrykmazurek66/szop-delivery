import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import CartItem from "../cartitem/CartItem";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

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
  }, [cart]);

  return (
    <>
      {items}
      <Footer />
    </>
  );
}
