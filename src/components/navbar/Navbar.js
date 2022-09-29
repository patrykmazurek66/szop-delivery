import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img src={"logo.png"} alt="logo" className="nav--logo" />
      <h1 className="nav--app-name">SZOP-DELIVERY</h1>
      <div className="nav--icons-container">
        <img src={require("../../content/AccountCircleFilled.svg").default} alt="account" />
        <img src={require("../../content/ShoppingCartFilled.svg").default} alt="cart" />
        <img src={require("../../content/DateRangeFilled.svg").default} alt="history" />
      </div>
    </nav>
  );
}
