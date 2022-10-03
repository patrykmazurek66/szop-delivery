import Footer from "../footer/Footer";
import CartItemsContainer from "../cartitemscontainer/CartItemsContainer";
import "./cartpage.css";
import Button from "../button/Button";

export default function CartPage() {
  return (
    <div className="cart-page--hero">
      <div className="cart-page--cart-items-container">
        <CartItemsContainer />
        <Button load primary>
          GO TO SUMMARY
        </Button>
      </div>
      <Footer />
    </div>
  );
}
