import "./product.css";
import Button from "../button/Button";

export default function Product({ name, imagePath, description, price }) {
  const addToCart = item => {
    let cart = [];
    let elements = 0;
    cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
    cart.map(el => {
      el.name === item.name ? el.quantity++ : elements++;
    });
    elements === cart.length ? cart.push(item) : () => {};
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="product-container">
      <img src={imagePath} alt={name} className="product--img" />
      <div className="product--right-col">
        <div className="product--name-desc">
          <p className="product-name">{name}</p>
          <p className="product-desc">{description}</p>
        </div>
        <div className="product--price-btn">
          <p className="product-price">{price}$</p>
          <Button
            small
            primary
            onClick={() => {
              addToCart({ name, price, quantity: 1 });
              alert(name + " has been added to your cart");
            }}
          >
            ADD +
          </Button>
        </div>
      </div>
    </div>
  );
}
