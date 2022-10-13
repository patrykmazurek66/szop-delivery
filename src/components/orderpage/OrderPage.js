import "./orderpage.css";

import ContactDataContainer from "../contactdatacontainer/ContactDataContainer";
import Footer from "../footer/Footer";
import OrderItemsContainer from "../orderitemscontainer/OrderItemsContainer";
import Div from "../div/Div";
import { Button } from "@mui/material";

export default function OrderPage() {
  return (
    <div className="order-page">
      <div className="order-page-hero">
        <Div column>
          <OrderItemsContainer />
        </Div>
        <Div column medium>
          <ContactDataContainer />
          <Button variant="contained" type="submit" form="data-form">
            Order
          </Button>
        </Div>
      </div>
      <Footer />
    </div>
  );
}
