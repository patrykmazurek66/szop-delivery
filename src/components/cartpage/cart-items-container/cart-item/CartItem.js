import { Button } from "@mui/material";

import { useState, useEffect } from "react";
import "./cartitem.css";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem({ name, price, qty, refresh }) {
  const [itemQuantity, setItemQuantity] = useState(qty);

  useEffect(() => {
    addToCart({ name, price, quantity: itemQuantity });
    refresh();
  }, [itemQuantity]);

  const addToCart = item => {
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
          <Button
            variant="text"
            size="small"
            onClick={() => {
              setItemQuantity(itemQuantity - 1);
            }}
          >
            <RemoveIcon />
          </Button>

          <input min={0} required className="qty-container--qty" value={itemQuantity} readOnly />
          <Button
            variant="text"
            size="small"
            onClick={() => {
              setItemQuantity(itemQuantity + 1);
            }}
          >
            <AddIcon />
          </Button>
        </div>
        <p className="price">{(price * qty).toFixed(2)}$</p>
        <Button
          className="delete-item"
          onClick={() => {
            deleteFromCart(name);
            refresh();
          }}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
