import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../cartpage/CartPage";
import MainPage from "../mainpage/MainPage";
import Navbar from "../navbar/Navbar";
import OrderHisoryPage from "../order-history-page/OrderHistoryPage";
import OrderPage from "../orderpage/OrderPage";

import OrderSuccessPage from "../order-success-page/OrderSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="cart/order" element={<OrderPage />} />
          <Route path="order-history" element={<OrderHisoryPage />} />
          <Route path="order-success" element={<OrderSuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
