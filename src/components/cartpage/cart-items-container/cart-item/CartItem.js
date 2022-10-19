import { Button } from "@mui/material";
import deleteFromCart from "./DeleteFromCart";
import addToCart from "./AddToCart";
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

  return (
    <div className="item-container">
      <p className="item-name">{name}</p>
      <div className="item-container--righ-col">
        <div className="qty-container">
          <Button
            data-testid="btn-min"
            variant="text"
            size="small"
            onClick={() => {
              setItemQuantity(itemQuantity - 1);
            }}
          >
            <RemoveIcon />
          </Button>

          <input
            data-testid="qty"
            min={0}
            required
            className="qty-container--qty"
            value={itemQuantity}
            readOnly
          />
          <Button
            data-testid="btn-pls"
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
          data-testid="btn-del"
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
