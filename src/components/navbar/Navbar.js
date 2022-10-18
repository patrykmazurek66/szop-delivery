import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const refreshPage = () => {
    location.pathname === "/" ? window.location.reload(true) : null;
  };
  return (
    <>
      <nav>
        <Link to="/" onClick={refreshPage}>
          <img src="/logo.png" alt="logo" className="nav--logo" />
        </Link>
        <h1 className="nav--app-name">SZOP-DELIVERY</h1>
        <div className="nav--icons-container">
          <Link to="/cart">
            <ShoppingCartIcon sx={{ fontSize: "40px" }} />
          </Link>
          <Link to="/order-history">
            <HistoryIcon sx={{ fontSize: "40px" }} />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
