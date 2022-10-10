import { Badge } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src="/logo.png" alt="logo" className="nav--logo" />
        </Link>
        <h1 className="nav--app-name">SZOP-DELIVERY</h1>
        <div className="nav--icons-container">
          <img src={require("../../content/AccountCircleFilled.svg").default} alt="account" />
          <Badge
            overlap="circular"
            badgeContent={69}
            max={99}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Link to="/cart">
              <img src={require("../../content/ShoppingCartFilled.svg").default} alt="cart" />
            </Link>
          </Badge>
          <Link to="/order-history">
            <img src={require("../../content/DateRangeFilled.svg").default} alt="history" />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
