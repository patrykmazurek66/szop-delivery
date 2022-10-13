import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../cartpage/CartPage";
import MainPage from "../mainpage/MainPage";
import Navbar from "../navbar/Navbar";
import OrderHisoryPage from "../orderhistorypage/OrderHistoryPage";
import OrderPage from "../orderpage/OrderPage";

import CartItemsContext from "../cartitemscontext/CartItemsContext";

function App() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    localStorage.cart
      ? setCartItems(JSON.parse(localStorage.cart).reduce((acc, item) => acc + item.quantity, 0))
      : null;
  }, []);

  return (
    <CartItemsContext.Provider value={cartItems}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<MainPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="cart/order" element={<OrderPage />} />
            <Route path="order-history" element={<OrderHisoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartItemsContext.Provider>
  );
}

export default App;
