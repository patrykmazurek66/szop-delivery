import "./orderpage.css";

import ContactDataContainer from "./contact-data-container/ContactDataContainer";
import Footer from "../footer/Footer";
import OrderItemsContainer from "./order-items-container/OrderItemsContainer";
import { Button } from "@mui/material";

export default function OrderPage() {
  return (
    <div className="order-page">
      <div className="order-page--hero">
        <div className="order-page--hero--order-items-container">
          <OrderItemsContainer />
        </div>
        <div className="order-page--hero--contact-container">
          <ContactDataContainer />
          <Button variant="contained" type="submit" form="data-form">
            Order
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
