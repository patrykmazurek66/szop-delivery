import "./orderhistoryitem.css";

import { ButtonBase } from "@mui/material";

import { useState } from "react";

import OrderHistoryInfo from "./order-history-info/OrderHistoryInfo";
import OrderHistoryProduct from "./order-history-product/OrderHistoryProduct";
import OrderHistoryClient from "./order-history-client/OrderHistoryClient";

export default function OrderHistoryItem({ item }) {
  const [moreDetails, setMoreDetails] = useState(false);

  const showMoreDetails = () => {
    setMoreDetails(!moreDetails);
  };

  console.log(JSON.stringify(item));
  return (
    <div className="order-history-container">
      <ButtonBase className="more-info-btn" onClick={showMoreDetails} data-testid="button">
        <OrderHistoryInfo
          moreDetails={moreDetails}
          id={item.id}
          itemsCount={item.cart.reduce((acc, el) => acc + el.quantity, 0)}
          price={item.cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}
        />
      </ButtonBase>
      {moreDetails && (
        <>
          {item.cart.map(el => {
            return (
              <OrderHistoryProduct
                key={el.name}
                name={el.name}
                qty={el.quantity}
                cost={el.price * el.quantity}
              />
            );
          })}
          <OrderHistoryClient
            name={item.details.name}
            company={item.details.company}
            city={item.details.city + ", " + item.details.postalCode}
            address={item.details.address1 + ", " + item.details.address2}
            payment={item.details.paymentMethod}
            items={item.cart.reduce((acc, el) => acc + el.quantity, 0)}
            itemsCost={item.cart.reduce((acc, el) => acc + el.quantity * el.price, 0)}
            delivery={5}
          />
        </>
      )}
    </div>
  );
}
