import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "../cartpage/CartPage";
import MainPage from "../mainpage/MainPage";
import Navbar from "../navbar/Navbar";
import OrderHisoryPage from "../orderhistorypage/OrderHistoryPage";
import OrderPage from "../orderpage/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="order-history" element={<OrderHisoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
