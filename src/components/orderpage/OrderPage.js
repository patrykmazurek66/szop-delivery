import "./orderpage.css";

import ContactDataContainer from "../contactdatacontainer/ContactDataContainer";
import Footer from "../footer/Footer";
import OrderItemsContainer from "../orderitemscontainer/OrderItemsContainer";
import OrderPaymentContainer from "../orderpaymentcontainer/OrderPaymentContainer";
import Div from "../div/Div";
import { Button } from "@mui/material";

export default function OrderPage() {
  return (
    <>
      <Div row>
        <Div column>
          <OrderItemsContainer />
        </Div>
        <Div column medium>
          <ContactDataContainer />
          <OrderPaymentContainer />
          <Button variant="contained">Order</Button>
        </Div>
      </Div>
      <Footer />
    </>
  );
}
