import Footer from "../footer/Footer";
import CartItemsContainer from "../cartitemscontainer/CartItemsContainer";
import "./cartpage.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";

export default function CartPage() {
  const [empty, setEmpty] = useState(0);

  const handler = e => {
    setEmpty(e);
  };

  return (
    <div className="cart-page--hero">
      <div className="cart-page--cart-items-container">
        <CartItemsContainer handler={handler} />
        {empty > 0 && (
          <Link to="order">
            <Button variant="contained" fullWidth>
              Go to summary
            </Button>
          </Link>
        )}
      </div>
      <Footer />
    </div>
  );
}
