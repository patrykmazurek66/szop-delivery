import { Badge } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import CartItemsContext from "../cartitemscontext/CartItemsContext";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const items = useContext(CartItemsContext);

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
          <Badge
            overlap="circular"
            badgeContent={items}
            max={99}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Link to="/cart">
              <ShoppingCartIcon sx={{ fontSize: "40px" }} />
            </Link>
          </Badge>
          <Link to="/order-history">
            <HistoryIcon sx={{ fontSize: "40px" }} />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
