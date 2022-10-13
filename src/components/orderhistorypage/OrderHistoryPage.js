import "./orderhistorypage.css";

import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { axiosGetOrderHistory } from "../communicate/Comm";
import OrderHistoryItem from "../orderhistoryitem/OrderHistoryItem";

export default function OrderHisoryPage() {
  const [orderHistory, setOrderHistory] = useState([]);

  async function getOrderHistory() {
    const tempHistory = await axiosGetOrderHistory("http://localhost:3000/orders");
    setOrderHistory(tempHistory);
  }

  useEffect(() => {
    getOrderHistory();
  }, []);

  return (
    <div className="order-history-page">
      <div className="order-history-page-top">
        {orderHistory.length !== 0 ? (
          <div className="orders-container">
            {orderHistory.map((item, index) => {
              return <OrderHistoryItem key={index} item={item} />;
            })}
          </div>
        ) : (
          <div className="empty-history-container">
            <p>THERE IS NO HISTORY!</p>
            <p>Consider buying something :)</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
