import Footer from "../footer/Footer";
import CartItemsContainer from "../cartitemscontainer/CartItemsContainer";
import "./cartpage.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <div className="cart-page--hero">
      <div className="cart-page--cart-items-container">
        <CartItemsContainer />
        <Link to="order">
          <Button load primary>
            GO TO SUMMARY
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
