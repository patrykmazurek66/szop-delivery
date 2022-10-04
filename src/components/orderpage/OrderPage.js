import "./orderpage.css";

import ContactDataContainer from "../contactdatacontainer/ContactDataContainer";
import Footer from "../footer/Footer";
import OrderItemsContainer from "../orderitemscontainer/OrderItemsContainer";
import OrderPaymentContainer from "../orderpaymentcontainer/OrderPaymentContainer";
import Div from "../div/Div";
import Button from "../button/Button";

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
          <Button load primary>
            ORDER
          </Button>
        </Div>
      </Div>
      <Footer />
    </>
  );
}
